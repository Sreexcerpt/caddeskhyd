import React, { useState } from "react";
import axios from "axios";
import "./AddFaculty.css"; // Import updated CSS

const AddFaculty = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "faculty",
    department: "",
    qualification: "",
    experience: "",
    dob: "",
    joinDate: "",
    address: "",
    gender: "",
    employmentType: "full-time",
    status: "active",
    salary: "",
    staffOrFacultyId: "", // New field added
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/faculty", formData);
      setMessage(res.data.msg);
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", role: "faculty", department: "",
        qualification: "", experience: "", dob: "", joinDate: "", address: "", gender: "",
        employmentType: "full-time", status: "active", salary: "", staffOrFacultyId: "",
      });
    } catch (err) {
      setMessage(err.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <>
      <div class="main-wrapper">
        <div class="page-wrapper cardhead">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                <div class="card-header">
								<h5 class="card-title">Add Faculty</h5>
							</div>
                  <div class="card-body">
                    <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-xl-6">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">First Name</label>
                            <div class="col-lg-9">
                              <input type="text" class="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                          </div>
                          
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Email Address</label>
                            <div class="col-lg-9">
                              <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                          </div>
                          
                        </div>
                        <div class="col-xl-6">
                        <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Last Name</label>
                            <div class="col-lg-9">
                              <input type="text" class="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Phone Number</label>
                            <div class="col-lg-9">
                              <input type="text" class="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-6">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Select Department</label>
                            <div class="col-lg-9">
                              <select name="department" value={formData.department} onChange={handleChange} required>
                                <option value="">--Select--</option>
                                <option value="AutoCAD">AutoCAD</option>
                                <option value="Mechanical CAD">Mechanical CAD</option>
                                <option value="Civil CAD">Civil CAD</option>
                                <option value="Electrical CAD">Electrical CAD</option>
                                <option value="Architecture & Interior Design">Architecture & Interior Design</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="IT & Software">IT & Software</option>
                                <option value="Accounting & Finance">Accounting & Finance</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Qualification</label>
                            <div class="col-lg-9">
                              <input type="text" name="qualification" placeholder="Qualification (e.g., B.Tech, M.Tech)" value={formData.qualification} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Experience</label>
                            <div class="col-lg-9">
                              <input type="number" name="experience" placeholder="Experience (Years)" value={formData.experience} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Date of Birth:</label>
                            <div class="col-lg-9">
                              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Joining Date:</label>
                            <div class="col-lg-9">
                              <input type="date" id="joinDate" name="joinDate" value={formData.joinDate} onChange={handleChange} required />
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Select Gender</label>
                            <div class="col-lg-9">
                              <select name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Employment Type</label>
                            <div class="col-lg-9">
                              <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Salary</label>
                            <div class="col-lg-9">
                              <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Postal Code</label>
                            <div class="col-lg-9">
                              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-form-label">Staff / Faculty ID</label>
                            <div class="col-lg-9">
                              <input type="text" name="staffOrFacultyId" placeholder="Staff/Faculty ID" value={formData.staffOrFacultyId} onChange={handleChange} required />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-end">
                        <button type="submit" class="btn btn-primary">Add Faculty</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFaculty;
