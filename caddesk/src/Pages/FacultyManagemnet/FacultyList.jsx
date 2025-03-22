import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './FacultyList.css'; // Import the separate CSS file

const FacultyList = () => {
  const [faculties, setFaculties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFaculty, setCurrentFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'faculty',
    department: '',
    qualification: '',
    experience: 0,
    dob: '',
    joinDate: '',
    address: '',
    gender: 'male',
    employmentType: 'full-time',
    status: 'active',
    salary: 0
  });

  // Fetch faculty data on component mount
  useEffect(() => {
    fetchFaculties();
  }, []);

  // Fetch faculties from API
  const fetchFaculties = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/faculties');
      setFaculties(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to fetch faculty data');
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Open modal and set current faculty for editing
  const handleEdit = (faculty) => {
    setCurrentFaculty(faculty);
    setFormData({
    
firstName: faculty.firstName,
lastName: faculty.lastName,
      email: faculty.email,
      phone: faculty.phone,
      role: faculty.role,
      department: faculty.department,
      qualification: faculty.qualification,
      experience: faculty.experience,
      dob: faculty.dob ? faculty.dob.substring(0, 10) : '',
      joinDate: faculty.joinDate ? faculty.joinDate.substring(0, 10) : '',
      address: faculty.address,
      gender: faculty.gender,
      employmentType: faculty.employmentType,
      status: faculty.status,
      salary: faculty.salary
    });
    setIsModalOpen(true);
    // Prevent scrolling of the background when modal is open
    document.body.classList.add('modal-open');
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentFaculty(null);
    setFormData({
     
firstName: '',
lastName: '',

      email: '',
      phone: '',
      role: 'faculty',
      department: '',
      qualification: '',
      experience: 0,
      dob: '',
      joinDate: '',
      address: '',
      gender: 'male',
      employmentType: 'full-time',
      status: 'active',
      salary: 0
    });
    // Re-enable scrolling of the background
    document.body.classList.remove('modal-open');
  };

  // Update faculty data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/faculty/${currentFaculty._id}`, formData);
      fetchFaculties();
      handleCloseModal();
      alert('Faculty information updated successfully!');
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to update faculty');
    }
  };

  // Delete faculty data
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
      try {
        await axios.delete(`http://localhost:8080/api/faculty/${id}`);
        fetchFaculties();
        alert('Faculty removed successfully!');
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to delete faculty');
      }
    }
  };

  if (loading) return <div className="loading-indicator">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <>
    {/* <div className="faculty-management-container">
      <div className="faculty-header">
        <h2 style={{textAlign:'center'}}>Faculty/Staff Management</h2>
      <button  style={{width:'100px',marginLeft:'300px',color:'white'}}>  <Link to='/AddFaculty' style={{color:'white'}}>AddFaculty</Link></button>
      </div>
      
    
      <div className="faculty-table-container">
        <table className="faculty-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Qualification</th>
         
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((faculty) => (
              <tr key={faculty._id}>
                <td>{faculty.name}</td>
                <td>{faculty.email}</td>
                <td>{faculty.department}</td>
                <td className="capitalize">{faculty.role}</td>
                <td>{faculty.qualification}</td>
               
                <td className="action-buttons">
                  <button
                    onClick={() => handleEdit(faculty)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(faculty._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Faculty/Staff</h2>
              <button onClick={handleCloseModal} className="close-btn">✕</button>
            </div>
            
            <div className="modal-body">
              <form onSubmit={handleUpdate} className="faculty-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Department</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Qualification</label>
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Experience (years)</label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Join Date</label>
                    <input
                      type="date"
                      name="joinDate"
                      value={formData.joinDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Employment Type</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                    >
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  
                  <div className="form-group full-width">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="save-btn"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div> */}


    <div class="page-wrapper">
			<div class="content">
				<div class="page-header">
					<div class="page-header menu">
						<div >
							<h4>Faculty & Staff Management</h4>
							<h6>Manage Faculty & Staff</h6>
						</div>
					</div>
				</div>

				{/* <!-- /product list --> */}
				<div class="card">
					<div class="card-body">
						{/* <!-- /Filter --> */}
						<div class="table-responsive  custom-table">
							<table class="table  datatable">
								<thead class="thead-light">
									<tr>
										<th class="no-sort">
											<label class="checkboxs">
												<input type="checkbox" id="select-all"/>
												<span class="checkmarks"></span>
											</label>
										</th>
										<th>Name</th>
										<th>Email</th>
										<th>Department</th>
										<th>Role</th>
										<th>Qualification</th>
										<th class="no-sort">Action</th>
									</tr>
								</thead>
								<tbody>
                  
                {faculties.map((faculty) => (<tr key={faculty._id}>
										<td>
											<label class="checkboxs">
												<input type="checkbox"/>
												<span class="checkmarks"></span>
											</label>
										</td>
										<td>
											<div class="userimgname">
												
                      <a href="javascript:void(0);">{faculty.firstName} {faculty.lastName}</a>

											</div>
										</td>
										<td>{faculty.email}</td>
										<td class="phone-call-icon"><i data-feather="phone"
												class="income-calls me-1"></i><i data-feather="arrow-down-left"
												class="income-success me-1"></i>{faculty.department}</td>
										<td>{faculty.role}</td>
										<td>{faculty.qualification}</td>
										<td class="action-table-data">
											<div class="edit-delete-action">
												<a class="me-3 p-2" href="javascript:void(0);" data-bs-toggle="modal"
													data-bs-target="#user-profile-new">
													<i class="ti ti-edit text-blue"></i>
												</a>
												<a class="confirm-text p-2" href="javascript:void(0);" onClick={() => handleDelete(faculty._id)}>
													<i class="ti ti-trash text-danger"></i>
												</a>
											</div>
										</td>
									</tr>))}
								
								</tbody>
							</table>
						</div>
						<div class="row align-items-center">
							<div class="col-md-6">
								<div class="datatable-length"></div>
							</div>
							<div class="col-md-6">
								<div class="datatable-paginate"></div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /product list --> */}
			</div>
		</div>

	{/* <!-- /Main Wrapper --> */}

	{/* <!-- details popup --> */}
	<div class="modal fade" id="user-profile-new">
		<div class="modal-dialog history-modal-profile">
			<div class="modal-content">
				<div class="page-wrapper details-blk">
					<div class="content">
					<div class="card-body">
								<form  onSubmit={handleUpdate}>
									<div class="row">
										<div class="col-md-6 col-lg-12">
											<h5 class="card-title">Edit Faculty/Staff</h5>
											<div class="mb-3">
												<label class="form-label">Department:</label>
												<input type="text" class="form-control"  name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required/>
											</div>
											

                      <div class="mb-3">
												<label class="form-label">Qualification:</label>
												<input type="date"  name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required/>
											</div>

                      <div class="mb-3">
												<label class="form-label">Experience (years)</label>
												<input type="date" name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required/>
											</div>

                      <div class="mb-3">
												<label class="form-label">Date of Birth</label>
												<input type="date" 
                       name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required/>
											</div>

                      <div class="mb-3">
												<label class="form-label">Join Date</label>
												<input type="date" name="joinDate"
                      value={formData.joinDate}
                      onChange={handleChange}
                      required/>
											</div>

                      <div class="mb-3">
												<label class="form-label">Gender:</label>
												<select class="select" name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required>
											 <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
												</select>
											</div>

                      <div class="mb-3">
												<label class="form-label">Employment Type:</label>
												<select class="select" name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required>
											 <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
												</select>
											</div>

                      <div class="mb-3">
												<label class="form-label">Status :</label>
												<select class="select" name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required>
											 <option value="active">Active</option>
                       <option value="inactive">Inactive</option>
												</select>
											</div>

											<div class="mb-3">
												<label class="form-label">Address:</label>
												<textarea rows="5" cols="5" class="form-control"
													placeholder="Enter message" name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required></textarea>
											</div>
										</div>
									
									</div>
									<div class="text-end">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
								</form>
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

export default FacultyList;