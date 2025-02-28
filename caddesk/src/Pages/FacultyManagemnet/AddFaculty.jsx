// import React, { useState } from "react";
// import axios from "axios";
// import "./AddFaculty.css"; // Import updated CSS

// const AddFaculty = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "faculty",
//     department: "",
//     qualification: "",
//     experience: "",
//     dob: "",
//     joinDate: "",
//     address: "",
//     gender: "",
//     employmentType: "full-time",
//     status: "active",
//     salary: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8080/api/faculty", formData);
//       setMessage(res.data.msg);
//       setFormData({
//         name: "", email: "", phone: "", role: "faculty", department: "", qualification: "",
//         experience: "", dob: "", joinDate: "", address: "", gender: "", employmentType: "full-time",
//         status: "active", salary: "",
//       });
//     } catch (err) {
//       setMessage(err.response?.data?.msg || "An error occurred");
//     }
//   };

//   return (
//     <div className="faculty-container">
//     <div className="form-box">
//       <h2>Add Faculty</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-grid">
//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          
//           <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//           <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          
//           <input type="text" name="qualification" placeholder="Qualification (e.g., PhD, M.Tech)" value={formData.qualification} onChange={handleChange} required />
//           <input type="number" name="experience" placeholder="Experience (Years)" value={formData.experience} onChange={handleChange} required />
          
//           <div>
//     <label htmlFor="dob">Date of Birth:</label>
//     <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
//   </div>
  
//   <div>
//     <label htmlFor="joiningDate">Joining Date:</label>
//     <input type="date" id="joiningDate" name="joiningDate" value={formData.joiningDate} onChange={handleChange} required />
//   </div>
//           <select name="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
          
//           <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
//             <option value="Full-time">Full-time</option>
//             <option value="Part-time">Part-time</option>
//             <option value="Contract">Contract</option>
//           </select>
          
//           <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
//           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <button type="submit">Add Faculty</button>
//       </form>
//     </div>
//   </div>
  
//   );
// };

// export default AddFaculty;

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
    <div className="faculty-container">
      <div className="form-box">
        <h2>Add Faculty</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />

            {/* Department Dropdown for CADDESK */}
            <select name="department" value={formData.department} onChange={handleChange} required>
              <option value="">Select Department</option>
              <option value="AutoCAD">AutoCAD</option>
              <option value="Mechanical CAD">Mechanical CAD</option>
              <option value="Civil CAD">Civil CAD</option>
              <option value="Electrical CAD">Electrical CAD</option>
              <option value="Architecture & Interior Design">Architecture & Interior Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="IT & Software">IT & Software</option>
              <option value="Accounting & Finance">Accounting & Finance</option>
            </select>

            <input type="text" name="qualification" placeholder="Qualification (e.g., B.Tech, M.Tech)" value={formData.qualification} onChange={handleChange} required />
            <input type="number" name="experience" placeholder="Experience (Years)" value={formData.experience} onChange={handleChange} required />

            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="joinDate">Joining Date:</label>
              <input type="date" id="joinDate" name="joinDate" value={formData.joinDate} onChange={handleChange} required />
            </div>

            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>

            <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

            {/* New Staff/Faculty ID field */}
            <input type="text" name="staffOrFacultyId" placeholder="Staff/Faculty ID" value={formData.staffOrFacultyId} onChange={handleChange} required />
          </div>
          <button type="submit">Add Faculty</button>
        </form>
      </div>
    </div>
  );
};

export default AddFaculty;
