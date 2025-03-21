
import React, { useEffect, useState } from "react";
import { RefreshCw, CheckCircle, XCircle, Clock } from "lucide-react";

import { IoEyeSharp } from "react-icons/io5";

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Fetch Leave Requests
  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/leave");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setLeaveRequests(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching leave requests:", error);
      setError("Failed to load leave requests. Please try again later.");
      setIsLoading(false);
    }
  };

  // Handle Approve or Reject
  const updateLeaveStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/leave/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      fetchLeaveRequests(); // Refresh the list after update
      setSelectedRequest(null); // Close action panel
    } catch (error) {
      console.error("Error updating leave status:", error);
      setError("Failed to update leave status. Please try again.");
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock size={18} className="text-yellow-500" />;
      case "Approved":
        return <CheckCircle size={18} className="text-green-500" />;
      case "Rejected":
        return <XCircle size={18} className="text-red-500" />;
      default:
        return null;
    }
  };

  const handleRowClick = (leave) => {
    setSelectedRequest(leave._id === selectedRequest ? null : leave._id);
  };

  return (
    <>
    {/* <div className="w-full bg-gray-50 min-h-screen" style={{marginLeft:'300px'}}>
      <div className="max-w-6xl mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Leave Requests</h1>
          <p className="text-gray-600">Manage employee leave applications</p>
        </div>
        
        <button 
          onClick={fetchLeaveRequests}
          className="flex items-center px-4 py-2 mb-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <RefreshCw size={16} className="mr-2" /> Refresh
        </button>
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-md">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white rounded-md shadow-md overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Employee ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Leave Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Reason</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">No leave requests found</td>
                  </tr>
                ) : (
                  leaveRequests.map((leave) => (
                    <React.Fragment key={leave._id}>
                      <tr 
                        className={`border-b hover:bg-gray-50 cursor-pointer ${selectedRequest === leave._id ? 'bg-blue-50' : ''}`}
                        onClick={() => handleRowClick(leave)}
                      >
                        <td className="py-3 px-4">{leave.employeeId}</td>
                        <td className="py-3 px-4">{leave.leaveType}</td>
                        <td className="py-3 px-4">
                          {new Date(leave.fromDate).toLocaleDateString()} 
                          {leave.fromDate !== leave.toDate && ` - ${new Date(leave.toDate).toLocaleDateString()}`}
                        </td>
                        <td className="py-3 px-4 max-w-xs truncate">{leave.reason}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {getStatusIcon(leave.status)}
                            <span className="ml-2">{leave.status}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {leave.status === "Pending" && (
                            <div className="flex space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateLeaveStatus(leave._id, "Approved");
                                }}
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                              >
                                Approve
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateLeaveStatus(leave._id, "Rejected");
                                }}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                      {selectedRequest === leave._id && (
                        <tr className="bg-blue-50">
                          <td colSpan="6" className="p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="font-medium text-gray-700">Leave Details</h3>
                                <div className="mt-2 space-y-2">
                                  <p><span className="font-medium">Employee ID:</span> {leave.employeeId}</p>
                                  <p><span className="font-medium">Leave Type:</span> {leave.leaveType}</p>
                                  <p><span className="font-medium">From Date:</span> {new Date(leave.fromDate).toLocaleDateString()}</p>
                                  <p><span className="font-medium">To Date:</span> {new Date(leave.toDate).toLocaleDateString()}</p>
                                  <p><span className="font-medium">Duration:</span> {
                                    Math.ceil((new Date(leave.toDate) - new Date(leave.fromDate)) / (1000 * 60 * 60 * 24) + 1)
                                  } day(s)</p>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-700">Reason for Leave</h3>
                                <p className="mt-2 text-gray-600 whitespace-pre-wrap">{leave.reason}</p>
                                {leave.status === "Pending" && (
                                  <div className="mt-4 flex space-x-3">
                                    <button
                                      onClick={() => updateLeaveStatus(leave._id, "Approved")}
                                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                      Approve
                                    </button>
                                    <button
                                      onClick={() => updateLeaveStatus(leave._id, "Rejected")}
                                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                    >
                                      Reject
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div> */}
    

    <div class="page-wrapper cardhead">
			<div class="content container-fluid">

				{/* <!-- Page Header --> */}
				<div class="page-header">
					<div class="row">
						<div class="col">
							<h3 >Leave Requests</h3>
              <p>Manage employee leave applications</p>
						</div>
					</div>
				</div>
        {/* <!-- /Page Header --> */}
        
        <div class="row">
        <div class="col-xl-12">
						<div class="card">
							<div class="card-header justify-content-between">
								<div class="card-title">
                Leave Requests Tables
								</div>

							</div>
							<div class="card-body">
								<div class="table-responsive">
                {isLoading ?  (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (

          <table class="table text-nowrap table-sm">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Leave Type</th>
              <th scope="col">Date</th>
              <th scope="col">Reason</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {leaveRequests.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">No leave requests found</td>
                  </tr>
                ):
          
                (
                  leaveRequests.map((leave) => (
                     
                    <tr key={leave._id} onClick={() => handleRowClick(leave)}>
                    <th scope="row">
                      <div class="form-check">
                        <label class="form-check-label" for="checkebox-sm">
                        {leave.employeeId}
                        </label>
                      </div>
                    </th>
                    <td>{leave.leaveType}</td>
                    <td>{new Date(leave.fromDate).toLocaleDateString()} 
                    {leave.fromDate !== leave.toDate && ` - ${new Date(leave.toDate).toLocaleDateString()}`}</td>
                    <td>{leave.reason}</td>
                    <td>{leave.status === "Approved" ? (<span class="badge bg-soft-success">{leave.status}</span>) :(<span class="badge bg-danger">{leave.status}</span>)}</td>
                    <td>
                      
                      <div class="hstack gap-2 fs-15">
                      <td class="action-table-data">
											<div class="edit-delete-action">
												<a class="me-3 p-2" href="javascript:void(0);" data-bs-toggle="modal"
													data-bs-target="#user-profile-new">
													<i class="ti ti-bounce-right text-info"></i>
												</a>
											</div>
                      </td>
                      </div>
                    </td>
                  </tr>

                  ))
                )
          }
           
            
          </tbody>
        </table>

        )}

									
								</div>
							</div>

						</div>
					</div>
          </div>
        </div>
        </div>

        {/* <!-- details popup --> */}
        <div class="modal fade" id="user-profile-new">
		<div class="modal-dialog history-modal-profile">
			<div class="modal-content">
				<div class="page-wrapper details-blk">
					<div class="content">
						<div class="text-center right-sidebar-profile mb-3">
							<figure class="avatar">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrDt1Z35KY2BvIMquoClHJ2R-2GX84GjQoQ&s" alt="image"/>
							</figure>
							
						</div>
						<div class="modal-profile-detail">
							<div class="row">
								<div class="col-lg-6">
									<div class="modal-userlist">
										<ul>
											<li>Employee ID:<span></span></li>
											<li>Leave Type:<span>Sick Leave</span></li>
                      <li>From Date:<span>2/4/2025</span></li>
										</ul>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="modal-userlist d-flex justify-content-center">
										<ul>
											<li>To Date:<span> 2/28/2025</span></li>
											<li>Duration:<span>25 day(s)</span></li>
											<li>Reason for Leave:<span>sick</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- /details popup --> */}

    </>
  );
};

export default LeaveRequests;