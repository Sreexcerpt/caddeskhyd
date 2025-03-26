import { useState, useEffect } from "react";
import axios from "axios";

const FacultyLeaveRequests = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const employeeId = JSON.parse(localStorage.getItem("user"))?.employeeId;
  
  // Fetch Employee ID from Local Storage on Component Mount
  useEffect(() => {
    const storedStaffId = JSON.parse(localStorage.getItem("user"))?.employeeId;
    if (storedStaffId) {
      setFormData((prev) => ({ ...prev, employeeId: storedStaffId }));
    } 
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/leave", formData);
      alert(response.data.message); // Success message
      setFormData({ ...formData, leaveType: "", fromDate: "", toDate: "", reason: "" }); // Reset form (except employeeId)
      setShowModal(false); // Close modal after submission
      // Refresh leave requests after submission
      fetchLeaveRequests();
    } catch (error) {
      alert("Failed to submit leave request");
    }
  };

  const fetchLeaveRequests = () => {
    if (employeeId) {
      axios
        .get(`http://localhost:8080/api/leave?employeeId=${employeeId}`)
        .then((response) => {
          setLeaveRequests(response.data);
        })
        .catch((error) => {
          console.error("Error fetching leave requests:", error);
        });
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, [employeeId]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Handle click outside modal to close
  const handleModalBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      setShowModal(false);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Sidebar */}
    
      
      {/* Main content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee Leave Request</h3>
            </div>
            <div className="col-auto text-end">
              <button 
                className="btn btn-danger" 
                onClick={() => setShowModal(true)}
              >
                <i className="fas fa-plus"></i> Apply for Leave
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">My Leave Requests</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Leave Type</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveRequests.length > 0 ? (
                        leaveRequests.map((leave, index) => (
                          <tr key={index}>
                            <td>{leave.leaveType}</td>
                          
							{/* <td>{new Date(leave.fromDate).toLocaleDateString("en-GB")}</td>
<td>{new Date(leave.toDate).toLocaleDateString("en-GB")}</td> */}
<td>{new Date(leave.fromDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(" ", "/")}</td>
<td>{new Date(leave.toDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(" ", "/")}</td>


                            <td>{leave.reason}</td>
                            <td>
                              <span
                                className={`badge ${
                                  leave.status === "Approved" ? "bg-success" : 
                                  leave.status === "Rejected" ? "bg-danger" : "bg-warning"
                                }`}
                              >
                                {leave.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>Casual Leave</td>
                          <td>03/15/2025</td>
                          <td>03/17/2025</td>
                          <td>Personal reasons</td>
                          <td>
                            <span className="badge bg-warning">Pending</span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Leave Request Modal - Fixed for responsiveness */}
      {showModal && (
        <>
          <div 
            className="modal fade show" 
            style={{ 
              display: 'block', 
              zIndex: 1050,
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              outline: 0,
              overflow: 'auto'
            }}
            onClick={(e) => {
              // Only close if clicking directly on the modal backdrop
              if (e.target === e.currentTarget) {
                setShowModal(false);
              }
            }}
          >
            <div 
              className="modal-dialog modal-dialog-centered" 
              onClick={(e) => e.stopPropagation()}
              style={{
                margin: '1.75rem auto',
                maxWidth: '500px',
                pointerEvents: 'all'
              }}
            >
              <div className="modal-content">
                <div className="modal-header" style={{ borderBottom: '1px solid #e9ecef', padding: '1rem' }}>
                  <h5 className="modal-title">Apply for Leave</h5>
                  <button 
                    type="button" 
                    className="close" 
                    onClick={() => setShowModal(false)}
                    style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.5rem' }}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body" style={{ padding: '1rem' }}>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label>Employee ID</label>
                      <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        className="form-control"
                        readOnly
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label>Leave Type</label>
                      <select
                        name="leaveType"
                        value={formData.leaveType}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="">Select Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Annual Leave">Annual Leave</option>
                      </select>
                    </div>

                    <div className="form-group mb-3">
                      <label>From Date</label>
                      <div className="cal-icon">
                        <input
                          type="date"
                          name="fromDate"
                          value={formData.fromDate}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label>To Date</label>
                      <div className="cal-icon">
                        <input
                          type="date"
                          name="toDate"
                          value={formData.toDate}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label>Reason</label>
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        required
                      ></textarea>
                    </div>

                    <div className="submit-section" style={{ marginTop: '20px' }}>
                      <button 
                        type="button" 
                        className="btn btn-warning" 
                        onClick={() => setShowModal(false)}
                        style={{
                          width: "100%", 
                          marginBottom: "10px",
                          backgroundColor: "#f39c12",
                          color: "#fff",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "none",
                          cursor: "pointer"
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        style={{
                          width: "100%",
                          backgroundColor: "#dc3545",
                          color: "#fff",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "none",
                          cursor: "pointer"
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="modal-backdrop fade show" 
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1040,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#000',
              opacity: 0.5
            }}
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </div>
  );
};

export default FacultyLeaveRequests;
