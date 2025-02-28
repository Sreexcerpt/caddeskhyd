// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const LeaveRequests = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);

//   // Fetch Leave Requests
//   useEffect(() => {
//     fetchLeaveRequests();
//   }, []);

//   const fetchLeaveRequests = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/leave");
//       setLeaveRequests(response.data);
//     } catch (error) {
//       console.error("Error fetching leave requests:", error);
//     }
//   };

//   // Handle Approve or Reject
//   const updateLeaveStatus = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:8080/api/leave/${id}`, { status });
//       fetchLeaveRequests(); // Refresh the list after update
//     } catch (error) {
//       console.error("Error updating leave status:", error);
//     }
//   };

//   return (
//     <div style={{marginLeft:'400px'}}>
//       <h2>Leave Requests</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Employee Id</th>
//             <th>Leave Type</th>
//             <th>From Date</th>
//             <th>To Date</th>
//             <th>Reason</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map((leave) => (
//             <tr key={leave._id}>
//               <td>{leave.employeeId}</td>
//               <td>{leave.leaveType}</td>
//               <td>{new Date(leave.fromDate).toLocaleDateString()}</td>
//               <td>{new Date(leave.toDate).toLocaleDateString()}</td>
//               <td>{leave.reason}</td>
//               <td>{leave.status}</td>
//               <td>
//                 {leave.status === "Pending" && (
//                   <>
//                     <button onClick={() => updateLeaveStatus(leave._id, "Approved")}>
//                       Approve
//                     </button>
//                     <button onClick={() => updateLeaveStatus(leave._id, "Rejected")}>
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LeaveRequests;
import React, { useEffect, useState } from "react";
import { RefreshCw, CheckCircle, XCircle, Clock } from "lucide-react";

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
      const response = await fetch("http://localhost:8080/api/leave");
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
      const response = await fetch(`http://localhost:8080/api/leave/${id}`, {
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
    <div className="w-full bg-gray-50 min-h-screen" style={{marginLeft:'300px'}}>
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
    </div>
  );
};

export default LeaveRequests;