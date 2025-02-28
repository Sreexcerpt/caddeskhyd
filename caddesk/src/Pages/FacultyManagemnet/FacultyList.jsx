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
    name: '',
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
      name: faculty.name,
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
      name: '',
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
    <div className="faculty-management-container">
      <div className="faculty-header">
        <h2 style={{textAlign:'center'}}>Faculty/Staff Management</h2>
      <button  style={{width:'100px',marginLeft:'300px',color:'white'}}>  <Link to='/AddFaculty' style={{color:'white'}}>AddFaculty</Link></button>
      </div>
      
      {/* Faculty Table */}
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

      {/* Edit Modal - Using advanced CSS for proper layering and positioning */}
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
    </div>
  );
};

export default FacultyList;