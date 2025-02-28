import React, { useState } from "react";

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    employeeId:"",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Leave request submitted successfully");
        setFormData({ leaveType: "", fromDate: "", toDate: "", reason: "" , employeeId:""});
      } else {
        alert("Failed to submit leave request");
      }
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
  };

  return (
    <div style={{marginLeft:'300px'}}>
      <h2>Employee Leave Request</h2>
      <form onSubmit={handleSubmit}>
        <label> EmployeeId:</label>

        <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
        <label>Leave Type:</label>
        <select name="leaveType" value={formData.leaveType} onChange={handleChange} required>
    
          <option value="">Select</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Annual Leave">Annual Leave</option>
        </select>
        
        <label>From Date:</label>
        <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} required />
        
        <label>To Date:</label>
        <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} required />
        
        <label>Reason:</label>
        <textarea name="reason" value={formData.reason} w onChange={handleChange} required style={{width:'400px'}}></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;
