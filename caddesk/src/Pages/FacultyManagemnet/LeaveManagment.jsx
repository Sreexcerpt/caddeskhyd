import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Fetch all leave requests
  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = () => {
    axios
      .get("http://localhost:8080/api/leave/all") // Adjust the API endpoint
      .then((response) => {
        setLeaveRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave requests:", error);
      });
  };

  // Update leave status
  const updateLeaveStatus = (id, newStatus) => {
    axios
      .put(`http://localhost:8080/api/leave/${id}`, { status: newStatus })
      .then(() => {
        fetchLeaveRequests(); // Refresh after update
      })
      .catch((error) => {
        console.error("Error updating leave status:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Leave Requests</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Leave Type</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.length > 0 ? (
            leaveRequests.map((leave) => (
              <tr key={leave._id}>
                <td>{leave.employeeId}</td>
                <td>{leave.leaveType}</td>
                <td>{new Date(leave.fromDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(" ", "/")}</td>
                <td>{new Date(leave.toDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(" ", "/")}</td>
                <td>{leave.reason}</td>
                <td>
                  <span
                    className={`badge ${
                      leave.status === "Approved" ? "bg-success" :
                      leave.status === "Rejected" ? "bg-danger" :
                      "bg-warning"
                    }`}
                  >
                    {leave.status}
                  </span>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={leave.status}
                    onChange={(e) => updateLeaveStatus(leave._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Hold">Hold</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No leave requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;


