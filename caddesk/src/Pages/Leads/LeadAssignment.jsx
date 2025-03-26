import { useState, useEffect } from "react";
import axios from "axios";

const EnquiryAssignment = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [assignedLeads, setAssignedLeads] = useState([]);
  const [filteredAssignedLeads, setFilteredAssignedLeads] = useState([]);
  const [telecallers, setTelecallers] = useState({});
  const [selectedTelecaller, setSelectedTelecaller] = useState({});
  const [loadingAssignments, setLoadingAssignments] = useState({});

  // Search and pagination states
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(5);

  // **1️⃣ Fetch All Enquiries**
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/enquiries");
        const allEnquiries = res.data;

        setEnquiries(allEnquiries.filter((enq) => enq.status === "unassigned"));
        const assigned = allEnquiries.filter((enq) => enq.status === "assigned");
        setAssignedLeads(assigned);
        setFilteredAssignedLeads(assigned);

        const uniqueBranches = [...new Set(allEnquiries.map((enq) => enq.branchId))];

        // **2️⃣ Fetch Telecallers for Each Branch**
        uniqueBranches.forEach(async (branchId) => {
          try {
            const response = await axios.get(`http://localhost:8080/api/telecallers/${branchId}`);
            setTelecallers((prev) => ({ ...prev, [branchId]: response.data }));
          } catch (err) {
            console.error(`Error fetching telecallers for ${branchId}:`, err);
          }
        });
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchEnquiries();
  }, []);

  // Filter leads when search term changes
  useEffect(() => {
    const results = assignedLeads.filter(lead => {
      const fullName = `${lead.firstname} ${lead.lastname}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase()) ||
        lead.mobileNumber.includes(searchTerm) ||
        lead.interestedCourses.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.assignedTo && lead.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    setFilteredAssignedLeads(results);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm, assignedLeads]);

  // **3️⃣ Handle Assignment**
  const handleAssign = async (enquiryId, branchId) => {
    if (!selectedTelecaller[enquiryId]) {
      alert("Please select a telecaller!");
      return;
    }

    setLoadingAssignments((prev) => ({ ...prev, [enquiryId]: true }));

    try {
      await axios.post("http://localhost:8080/api/assign-enquiry", {
        enquiryId,
        telecallerId: selectedTelecaller[enquiryId],
      });

      // **Update UI After Assignment**
      setEnquiries((prev) => prev.filter((enquiry) => enquiry._id !== enquiryId));

      const assignedEnquiry = enquiries.find((enquiry) => enquiry._id === enquiryId);
      assignedEnquiry.status = "assigned";
      assignedEnquiry.assignedTo = selectedTelecaller[enquiryId];

      setAssignedLeads((prev) => [...prev, assignedEnquiry]); // ✅ Move to assigned leads
      alert("Enquiry assigned successfully!");
    } catch (error) {
      console.error("Error assigning enquiry:", error);
    }

    setLoadingAssignments((prev) => ({ ...prev, [enquiryId]: false }));
  };

  // Get current leads for pagination
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredAssignedLeads.slice(indexOfFirstLead, indexOfLastLead);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4> Enquiry Management System</h4>
                  </div>
                  <div className="col-4 text-end">
                    <div className="head-icons">
                      <a href="/LeadAssignment" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                      <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Collapse" id="collapse-header"><i
                          className="ti ti-chevrons-up"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* Header */}


                {/* Unassigned Enquiries Section */}
                <div className="card">
                  <div className="card-header">
                    <h2 >
                      <span style={{
                        background: '#3a7bd5',
                        color: 'white',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px'
                      }}>
                        {enquiries.length}
                      </span>
                      Unassigned Enquiries
                    </h2>
                  </div>
                  <div className="card-body">
                    {enquiries.length === 0 ? (
                      <div style={{
                        textAlign: 'center',
                        padding: '30px',
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        color: '#6c757d'
                      }}>
                        <p>No unassigned enquiries found.</p>
                      </div>
                    ) : (
                      <div class="table-responsive">
                        <table class="table text-nowrap table-hover" >
                          <thead>
                            <tr >
                              <th>Name</th>
                              <th >Mobile</th>
                              <th >Course</th>
                              <th >Branch</th>
                              <th >Assign To</th>
                              <th >Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {enquiries.map((enquiry, index) => (
                              <tr key={enquiry._id}>
                                <td >
                                  <div >{enquiry.firstname} {enquiry.lastname}</div>
                                </td>
                                <td >{enquiry.mobileNumber}</td>
                                <td >
                                  <span >
                                    {enquiry.interestedCourses}
                                  </span>
                                </td>
                                <td >{enquiry.branchId}</td>
                                <td >
                                  <select
                                    className="form-select select2"
                                    value={selectedTelecaller[enquiry._id] || ""}
                                    onChange={(e) =>
                                      setSelectedTelecaller({
                                        ...selectedTelecaller,
                                        [enquiry._id]: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="">Select Telecaller</option>
                                    {telecallers[enquiry.branchId]?.map((telecaller) => (
                                      <option key={telecaller._id} value={telecaller._id}>
                                        {telecaller.firstName} {telecaller.lastName}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td >
                                  <button
                                    className="btn btn-outline-info"
                                    onClick={() => handleAssign(enquiry._id, enquiry.branchId)}
                                    disabled={loadingAssignments[enquiry._id]}>
                                    {loadingAssignments[enquiry._id] ? "Processing..." : "Assign"}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>

                {/* Assigned Leads Section */}
                <div className="card">
                  <div className="card-header d-flex">
                    <h2 style={{
                      fontSize: '22px',
                      color: '#26a69a',
                      display: 'flex',
                      alignItems: 'center',
                      margin: 0
                    }}>
                      <span style={{
                        background: '#26a69a',
                        color: 'white',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px'
                      }}>
                        {filteredAssignedLeads.length}
                      </span>
                      Assigned Leads
                    </h2>

                    {/* Search Box */}
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}

                      />

                    </div>
                  </div>

                  <div style={{ borderTop: '2px solid #26a69a', paddingTop: '20px' }}>
                    {filteredAssignedLeads.length === 0 ? (
                      <div style={{
                        textAlign: 'center',
                        padding: '30px',
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        color: '#6c757d'
                      }}>
                        <p>No assigned leads found.</p>
                      </div>
                    ) : (
                      <div style={{ overflowX: 'auto' }}>
                        <table className="table text-nowrap table-hover">
                          <thead>
                            <tr style={{ background: 'linear-gradient(45deg, #26a69a, #69f0ae)' }}>
                              <th >Name</th>
                              <th >Mobile</th>
                              <th >Course</th>
                              <th >Branch</th>
                              <th >Assigned To</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentLeads.map((lead, index) => (
                              <tr
                                key={lead._id}
                                style={{
                                  background: index % 2 === 0 ? '#f8f9fa' : 'white',
                                  transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = '#e0f2f1'}
                                onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#f8f9fa' : 'white'}
                              >
                                <td style={{ padding: '15px', borderBottom: '1px solid #e0e0e0' }}>
                                  <div style={{ fontWeight: '500' }}>{lead.firstname} {lead.lastname}</div>
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #e0e0e0' }}>{lead.mobileNumber}</td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #e0e0e0' }}>
                                  <span className="badge bg-warning">
                                    {lead.interestedCourses}
                                  </span>
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #e0e0e0' }}>{lead.branchId}</td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #e0e0e0' }}>{lead.assignedTo}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>



                  {filteredAssignedLeads.length > 0 && (
                  <ul class="pagination ">
                    <li class="page-item">
                      <a class="page-link"  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1} aria-label="Previous">
                        <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                      </a>
                    </li>

                    {Array.from({ length: Math.ceil(filteredAssignedLeads.length / leadsPerPage) }).map((_, index) => (
                      <li class="page-item" key={index}><a class="page-link" onClick={() => paginate(index + 1)}> {index + 1}</a></li>
                    ))}
                    <li class="page-item">
                      <a class="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredAssignedLeads.length / leadsPerPage)))}
                        disabled={currentPage === Math.ceil(filteredAssignedLeads.length / leadsPerPage)} aria-label="Next">
                        <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                      </a>
                    </li>
                  </ul>
                  )}
                  {/* Results summary */}
                  {filteredAssignedLeads.length > 0 && (
                    <div style={{
                      textAlign: 'center',
                      marginTop: '15px',
                      fontSize: '14px',
                      color: '#666'
                    }}>
                      Showing {indexOfFirstLead + 1}-{Math.min(indexOfLastLead, filteredAssignedLeads.length)} of {filteredAssignedLeads.length} leads
                      {searchTerm && ` (filtered from ${assignedLeads.length} total)`}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryAssignment;