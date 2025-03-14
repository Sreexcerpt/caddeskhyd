import React, { useState } from "react";

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
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
        setFormData({ leaveType: "", fromDate: "", toDate: "", reason: "", employeeId: "" });
      } else {
        alert("Failed to submit leave request");
      }
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
  };

  return (
    <>
      {/* <div style={{marginLeft:'300px'}}>
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
    </div> */}


      <div class="page-wrapper cardhead">
        <div class="content container-fluid">
          {/* <!-- Page Header --> */}
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="">Employee Leave Request</h3>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Leave Request Form</h5>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row">

                      <div class="col-md-6">
                        <label class="form-label">EmployeeId:</label>
                        <input type="text" class="form-control" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
                      </div>

                      <div class="col-md-6">
                        <label class="form-label">Leave Type:</label>
                        <select class="select" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                          <option>Select Leave</option>
                          <option value="Sick Leave">Sick Leave</option>
                          <option value="Casual Leave">Casual Leave</option>
                          <option value="Annual Leave">Annual Leave</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label class="form-label">From Date:</label>
                        <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} required />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">To Date:</label>
                        <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} required />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Reason:</label>
                      <textarea rows="5" cols="5" class="form-control"
                        placeholder="Enter message" name="reason" value={formData.reason} w onChange={handleChange} required></textarea>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Leave Request</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>SL.No</th>
                          <th>Leave Type</th>
                          <th>From Date</th>
                          <th>To Date</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Sick Leave</td>
                          <td>01/01/2021</td>
                          <td>01/06/2021</td>
                          <td>Health Issue</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Casual Leave</td>
                          <td>01/01/2021</td>
                          <td>01/06/2021</td>
                          <td>Personal Issue</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Annual Leave</td>
                          <td>01/01/2021</td>
                          <td>01/06/2021</td>
                          <td>Family Issue</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default LeaveRequestForm;
