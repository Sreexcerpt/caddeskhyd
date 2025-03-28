// import React, { useState } from "react";
// import axios from "axios";
// import "./AddFaculty.css"; // Import updated CSS

// const AddFaculty = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
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
//     employeeId: "", // New field added
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/faculty", formData);
//       setMessage(res.data.msg);
//       setFormData({
//         firstName: "", lastName: "", email: "", phone: "", role: "faculty", department: "",
//         qualification: "", experience: "", dob: "", joinDate: "", address: "", gender: "",
//         employmentType: "full-time", status: "active", salary: "", employeeId: "",
//       });
//     } catch (err) {
//       setMessage(err.response?.data?.msg || "An error occurred");
//     }
//   };

//   return (
//     <>
//       <div class="main-wrapper">
//         <div class="page-wrapper cardhead">
//           <div class="content container-fluid">
//             <div class="row">
//               <div class="col-md-12">
//                 <div class="card">
//                   <div class="card-header">
//                     <h5 class="card-title">Add Faculty</h5>
//                   </div>
//                   <div class="card-body">
//                     <form onSubmit={handleSubmit}>
//                       <div class="row">
//                         <div class="col-xl-6">
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">First Name</label>
//                             <div class="col-lg-9">
//                               <input type="text" class="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                             </div>
//                           </div>

//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Email Address</label>
//                             <div class="col-lg-9">
//                               <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} required />
//                             </div>
//                           </div>

//                         </div>
//                         <div class="col-xl-6">
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Last Name</label>
//                             <div class="col-lg-9">
//                               <input type="text" class="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Phone Number</label>
//                             <div class="col-lg-9">
//                               <input type="text" class="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="row">
//                         <div class="col-xl-4">
//                           <div class="row mb-1">
//                             <label class="col-lg-3 col-form-label">Select Department</label>
//                             <div class="col-lg-9">
//                               <select name="department" value={formData.department} onChange={handleChange} required>
//                                 <option value="">--Select--</option>
//                                 <option value="AutoCAD">AutoCAD</option>
//                                 <option value="Mechanical CAD">Mechanical CAD</option>
//                                 <option value="Civil CAD">Civil CAD</option>
//                                 <option value="Electrical CAD">Electrical CAD</option>
//                                 <option value="Architecture & Interior Design">Architecture & Interior Design</option>
//                                 <option value="Graphic Design">Graphic Design</option>
//                                 <option value="IT & Software">IT & Software</option>
//                                 <option value="Accounting & Finance">Accounting & Finance</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Qualification</label>
//                             <div class="col-lg-9">
//                               <input type="text" name="qualification" placeholder="Qualification (e.g., B.Tech, M.Tech)" value={formData.qualification} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Experience</label>
//                             <div class="col-lg-9">
//                               <input type="number" name="experience" placeholder="Experience (Years)" value={formData.experience} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Date of Birth:</label>
//                             <div class="col-lg-9">
//                               <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Joining Date:</label>
//                             <div class="col-lg-9">
//                               <input type="date" id="joinDate" name="joinDate" value={formData.joinDate} onChange={handleChange} required />
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-xl-4">
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Select Gender</label>
//                             <div class="col-lg-9">
//                               <select name="gender" value={formData.gender} onChange={handleChange} required>
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Employment Type</label>
//                             <div class="col-lg-9">
//                               <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
//                                 <option value="Full-time">Full-time</option>
//                                 <option value="Part-time">Part-time</option>
//                                 <option value="Contract">Contract</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Salary</label>
//                             <div class="col-lg-9">
//                               <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Address</label>
//                             <div class="col-lg-9">
//                               <textarea name="address" className="form-control post-textarea" value={formData.address} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row mb-3">
//                             <label class="col-lg-3 col-form-label">Staff / Faculty ID</label>
//                             <div class="col-lg-9">
//                               <input type="text" name="employeeId" placeholder="Staff/Faculty ID" value={formData.employeeId} onChange={handleChange} required />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="text-end">
//                         <button type="submit" class="btn btn-primary">Add Faculty</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddFaculty;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import "../../assets/plugins/select2/css/select2.min.css";
// const FacultyForm = () => {
//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubjects, setSelectedSubjects] = useState([]);
//   const [facultyData, setFacultyData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     role: "Faculty",
//     department: "",
//     qualification: "",
//     experience: "",
//     dob: "",
//     joinDate: "",
//     address: "",
//     gender: "",
//     employmentType: "Full-Time",
//     status: "Active",
//     salary: "",
//     employeeId: "",
//     subjects: [],
//   });
//   const [faculties, setFaculties] = useState([]);
//   const [editId, setEditId] = useState(null);

//   useEffect(() => {
//     fetchFaculties();
//     fetchSubjects();
//   }, []);

//   const fetchSubjects = async () => {
//     try {
//       const response = await axios.get("/api/subjects");
//       setSubjects(response.data);
//     } catch (error) {
//       console.error("Error fetching subjects:", error);
//     }
//   };

//   const fetchFaculties = async () => {
//     try {
//       const response = await axios.get("/api/faculties");
//       setFaculties(response.data);
//     } catch (error) {
//       console.error("Error fetching faculties:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let updatedData = { ...facultyData, [name]: value };

//     // Reset subjects when switching to "Staff"
//     if (name === "role" && value === "Staff") {
//       setSelectedSubjects([]);
//       updatedData.subjects = [];
//     }

//     setFacultyData(updatedData);
//   };

//   const handleSubjectChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions).map((option) => {
//       const subject = subjects.find((sub) => sub.subjectCode === option.value);
//       return { subjectCode: subject.subjectCode, subjectName: subject.subjectName };
//     });

//     setSelectedSubjects(selectedOptions);
//     setFacultyData((prev) => ({ ...prev, subjects: selectedOptions }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const facultyPayload = { ...facultyData, subjects: selectedSubjects };

//     if (editId) {
//       await axios.put(`/api/faculties/${editId}`, facultyPayload);
//     } else {
//       await axios.post("/api/faculties", facultyPayload);
//     }

//     setFacultyData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       role: "Faculty",
//       department: "",
//       qualification: "",
//       experience: "",
//       dob: "",
//       joinDate: "",
//       address: "",
//       gender: "",
//       employmentType: "Full-Time",
//       status: "Active",
//       salary: "",
//       employeeId: "",
//       subjects: [],
//     });

//     setSelectedSubjects([]);
//     setEditId(null);
//     fetchFaculties();
//   };

//   const handleEdit = (faculty) => {
//     setFacultyData(faculty);
//     setSelectedSubjects(faculty.subjects || []);
//     setEditId(faculty._id);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/api/faculties/${id}`);
//     fetchFaculties();
//   };

//   return (
//     <>

//       <div class="main-wrapper">
//         <div class="page-wrapper cardhead">
//           <div class="content container-fluid">
//             <div class="row">
//               <div class="col-md-12">
//                 <div class="page-header">
//                   <div class="row">
//                     <div class="col-md-4">
//                       <h3 >Faculty Management</h3>
//                     </div>
//                     <div class="col-md-8 float-end ms-auto">
//                       <div class="d-flex title-head">
//                         <div class="daterange-picker d-flex align-items-center justify-content-center">

//                           <div class="head-icons mb-0">
//                             <a href="/AddFaculty" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
//                             <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-md-12">
//                 <div class="card">
//                   <div class="row" >
//                     <div class="col-md-6">
//                       <div class="card-header">
//                         <h5 class="card-title">Faculty List</h5>
//                       </div>
//                     </div>
//                     <div class="col-md-6">
//                       <div class="row">
//                         <div class="col-md-6">
//                           {/* <button type="button" class="btn btn-primary">Add Invoice</button> */}
//                         </div>
//                         <div class="col-md-6">
//                           {/* <button type="button" class="btn btn-primary">Add Payment</button> */}
//                           <button class="btn btn-primary mt-2" type="button" data-bs-toggle="offcanvas"
//                             data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Faculty</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card-body">
//                     <div class="table-responsive">
//                       <table class="table table-hover table-center mb-0">
//                         <thead>
//                           <tr>
//                             <th>Name</th>

//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Role</th>
//                             <th>Department</th>
//                             <th>Qualification</th>
//                             <th>Experience</th>
//                             <th>Join Date</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {faculties.map((faculty) => (
//                             <tr key={faculty._id}>
//                               <td>{faculty.firstName} {faculty.lastName}</td>

//                               <td>{faculty.email}</td>
//                               <td>{faculty.phone}</td>
//                               <td>{faculty.role}</td>
//                               <td>{faculty.department}</td>
//                               <td>{faculty.qualification}</td>
//                               <td>{faculty.experience}</td>
//                               <td>{faculty.joinDate}</td>
//                               <td>
//                                 {/* <button onClick={() => handleEdit(faculty)}>Edit</button>
//                                 <button onClick={() => handleDelete(faculty._id)}>Delete</button> */}
//                                 <div class="hstack gap-2 fs-15">
//                                   <a onClick={() => handleEdit(faculty)}
//                                     class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="offcanvas"
//                                     data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
//                                       class="feather-edit"></i></a>
//                                   <a onClick={() => handleDelete(faculty._id)}
//                                     class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
//                                       class="feather-trash"></i></a>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
//                     aria-labelledby="offcanvasRightLabel">
//                     <div class="offcanvas-header">
//                       <h5 id="offcanvasRightLabel">Add Expenses</h5>
//                       <button type="button" class="btn-close"
//                         data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                     </div>
//                     {/* <!-- end offcanvas-header--> */}

//                     <div class="offcanvas-body">
//                       <div>
//                         <form onSubmit={handleSubmit}>
//                           <div class="row">
//                             <div class="col-xl-4">
//                               <label>First Name</label>
//                               <input type="text" name="firstName" placeholder="First Name" value={facultyData.firstName} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Last Name</label>
//                               <input type="text" name="lastName" placeholder="Last Name" value={facultyData.lastName} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Email Address</label>
//                               <input type="email" name="email" placeholder="Email" value={facultyData.email} onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row">
//                             <div class="col-xl-4">
//                               <label>Phone Number</label>
//                               <input type="text" name="phone" placeholder="Phone" value={facultyData.phone} onChange={handleChange} required />
//                             </div><div class="col-xl-4">
//                               <label>Role</label>
//                               <select name="role" value={facultyData.role} onChange={handleChange} required>
//                                 <option value="Faculty">Faculty</option>
//                                 <option value="Staff">Staff</option>
//                               </select>
//                             </div><div class="col-xl-4">
//                               <label>Department</label>
//                               {/* <input type="text" name="department" placeholder="Department" value={facultyData.department} onChange={handleChange} required /> */}
//                               <select name="department" value={facultyData.department} onChange={handleChange} required>
//                                 <option value="">--Select--</option>
//                                 <option value="AutoCAD">AutoCAD</option>
//                                 <option value="Mechanical CAD">Mechanical CAD</option>
//                                 <option value="Civil CAD">Civil CAD</option>
//                                 <option value="Electrical CAD">Electrical CAD</option>
//                                 <option value="Architecture & Interior Design">Architecture & Interior Design</option>
//                                 <option value="Graphic Design">Graphic Design</option>
//                                 <option value="IT & Software">IT & Software</option>
//                                 <option value="Accounting & Finance">Accounting & Finance</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div class="row">
//                             <div class="col-xl-4">
//                               <label>Qualification</label>
//                               <input type="text" name="qualification" placeholder="Qualification" value={facultyData.qualification} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Experience</label>
//                               <input type="number" name="experience" placeholder="Experience (Years)" value={facultyData.experience} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Date of Birth</label>
//                               <input type="date" name="dob" value={facultyData.dob} placeholder="Date of Birth" onChange={handleChange} required />
//                             </div>
//                           </div>
//                           <div class="row">
//                             <div class="col-xl-4">
//                               <label>Joining Date</label>
//                               <input type="date" name="joinDate" value={facultyData.joinDate} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Address</label>
//                               <input type="text" name="address" placeholder="Address" value={facultyData.address} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Gender </label>
//                               <select name="gender" value={facultyData.gender} onChange={handleChange} required>
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div class="row">
//                             <div class="col-xl-4">
//                               <label>Employment Type</label>
//                               <select name="employmentType" value={facultyData.employmentType} onChange={handleChange} required>
//                                 <option value="Full-Time">Full-Time</option>
//                                 <option value="Part-Time">Part-Time</option>
//                               </select>
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Status</label>
//                               <select name="status" value={facultyData.status} onChange={handleChange} required>
//                                 <option value="Active">Active</option>
//                                 <option value="Inactive">Inactive</option>
//                               </select>
//                             </div>

//                             {/* Show subjects dropdown only if role is Faculty */}
//                             {facultyData.role === "Faculty" && (
//                               <div class="col-xl-4">
//                                 <label>Select Subjects</label>
//                                 <select className="select2" multiple="multiple" value={selectedSubjects.map((sub) => sub.subjectCode)} onChange={handleSubjectChange}>
//                                   {subjects.map((subject) => (
//                                     <option key={subject._id} value={subject.subjectCode}>
//                                       {subject.subjectCode} - {subject.subjectName}
//                                     </option>
//                                   ))}
//                                 </select>
//                               </div>
//                             )}

//                           </div>
//                           <div class="row">
//                             <div class="col-xl-4">
//                               <label>Salary</label>
//                               <input type="number" name="salary" placeholder="Salary" value={facultyData.salary} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <label>Staff / Faculty ID</label>
//                               <input type="text" name="employeeId" placeholder="Staff/Faculty ID" value={facultyData.employeeId} onChange={handleChange} required />
//                             </div>
//                             <div class="col-xl-4">
//                               <button type="submit">{editId ? "Update" : "Add"} Faculty</button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FacultyForm;

//recent one by kavana
import React, { useState, useEffect } from "react";
import axios from "axios";
//import "../../assets/plugins/select2/css/select2.min.css";
const FacultyForm = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(""); // Track selected branch
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]); // Store fetched roles
  const [facultyData, setFacultyData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: [],
    department: "",
    qualification: "",
    experience: "",
    dob: "",
    joinDate: "",
    address: "",
    gender: "",
    employmentType: "Full-Time",
    status: "Active",
    salary: "",
    employeeId: "",
    subjects: [],
    password:'',
    branches:''
  });
  const [salaryType, setSalaryType] = useState(""); // Dropdown selection
  const [salaryAmount, setSalaryAmount] = useState(""); // Input salary
  const [branches, setBranches] = useState([]);
  // Handle dropdown change
  const handleDropdownChange = (e) => {
      const selectedType = e.target.value;
      setSalaryType(selectedType);
      setSalaryAmount(""); // Reset input when changing type

      // Update facultyData immediately with an empty salary
      setFacultyData((prev) => ({
          ...prev,
          salary: selectedType ? `${selectedType} - ` : "",
      }));
  };

  // Handle salary input change
  const handleSalaryChange = (e) => {
      const amount = e.target.value;
      setSalaryAmount(amount);

      // Update facultyData with formatted salary
      setFacultyData((prev) => ({
          ...prev,
          salary: salaryType ? `${salaryType} - ${amount}` : amount,
      }));
  };
  const [faculties, setFaculties] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFaculties();
    fetchSubjects();
    fetchRoles();
  }, []);
  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/roles");
      console.log("Roles API Response:", response.data); // Debugging log
      if (Array.isArray(response.data)) {
        setRoles(response.data); // Ensure it's an array
      } else {
        console.error("Unexpected roles format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  
  useEffect(() => {
    const fetchBranches = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/api/branches'); // Adjust API if needed
            setBranches(response.data);
            setLoading(false);
        } catch (err) {
           
            setLoading(false);
        }
    };

    fetchBranches();
}, []);
  const fetchSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/subjects");
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchFaculties = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/faculties");
      setFaculties(response.data);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   let updatedData = { ...facultyData, [name]: value };

  //   // Reset subjects when switching to a non-Faculty role
  //   if (name === "role" && value !== "Faculty") {
  //     setSelectedSubjects([]);
  //     updatedData.subjects = [];
  //   }

  //   setFacultyData(updatedData);
  // };
 
  const handleChange = (e) => {
    const { name, type, value, options } = e.target;
  
    let updatedValue;
  
    if (type === "select-multiple") {
      updatedValue = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
    } else {
      updatedValue = value;
    }
  
    let updatedData = { ...facultyData, [name]: updatedValue };
  
    // If "Faculty" is not selected, reset subjects
    if (name === "role" && !updatedValue.includes("Faculty")) {
      setSelectedSubjects([]); 
      updatedData.subjects = [];
    }
  
    setFacultyData(updatedData);
  };
  
  
  const handleSubjectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => {
      const subject = subjects.find((sub) => sub.subjectCode === option.value);
      return { subjectCode: subject.subjectCode, subjectName: subject.subjectName };
    });

    setSelectedSubjects(selectedOptions);
    setFacultyData((prev) => ({ ...prev, subjects: selectedOptions }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const facultyPayload = { ...facultyData, subjects: selectedSubjects };

  //   if (editId) {
  //     await axios.put(`http://localhost:8080/api/faculties/${editId}`, facultyPayload);
  //   } else {
  //     await axios.post("http://localhost:8080/api/faculties", facultyPayload);
  //   }

  //   setFacultyData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     role:[],
  //     department: "",
  //     qualification: "",
  //     experience: "",
  //     dob: "",
  //     joinDate: "",
  //     address: "",
  //     gender: "",
  //     employmentType: "Full-Time",
  //     status: "Active",
  //     salary: "",
  //     employeeId: "",
  //     subjects: [],
  //     password:'',

  //   });
  //   setTimeout(() => {
  //     setSalaryType(""); // Reset dropdown after a small delay
  //     setSalaryAmount(""); // Reset input
  // }, 10);
  //   setSalaryType(""); // Reset dropdown
  //   setSalaryAmount(""); // Reset input
  //   setSelectedSubjects([]);
  //   setEditId(null);
  //   fetchFaculties();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const facultyPayload = { ...facultyData,  subjects: selectedSubjects, 
      branches: selectedBranch // Ensure selected branch is included
       };
  
    try {
      let response;
      if (editId) {
        response = await axios.put(`http://localhost:8080/api/faculties/${editId}`, facultyPayload);
      } else {
        response = await axios.post("http://localhost:8080/api/faculties", facultyPayload);
      }
  
      // ✅ Success alert
      alert(response.data.message || "Faculty saved successfully!");
  
      // ✅ Reset form after successful submission
      setFacultyData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: [],
        department: "",
        qualification: "",
        experience: "",
        dob: "",
        joinDate: "",
        address: "",
        gender: "",
        employmentType: "Full-Time",
        status: "Active",
        salary: "",
        employeeId: "",
        subjects: [],
        password: "",
      });
  
      setTimeout(() => {
        setSalaryType(""); // Reset dropdown after a small delay
        setSalaryAmount(""); // Reset input
      }, 10);
  
      setSalaryType(""); // Reset dropdown
      setSalaryAmount(""); // Reset input
      setSelectedSubjects([]);
      setEditId(null);
      fetchFaculties();
    } catch (error) {
      // ✅ Error alert
      alert(error.response?.data?.message || "An error occurred while saving faculty.");
    }
  };
  
  const handleEdit = (faculty) => {
    setFacultyData(faculty);
    setSelectedSubjects(faculty.subjects || []);
    setEditId(faculty._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/faculties/${id}`);
    fetchFaculties();
  };

  return (
    <>

      <div class="main-wrapper">
        <div class="page-wrapper cardhead">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="page-header">
                  <div class="row">
                    <div class="col-md-4">
                      <h3 >Faculty Management</h3>
                    </div>
                    <div class="col-md-8 float-end ms-auto">
                      <div class="d-flex title-head">
                        <div class="daterange-picker d-flex align-items-center justify-content-center">

                          <div class="head-icons mb-0">
                            <a href="/AddFaculty" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="row" >
                    <div class="col-md-6">
                      <div class="card-header">
                        <h5 class="card-title">Faculty List</h5>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-6">
                          {/* <button type="button" class="btn btn-primary">Add Invoice</button> */}
                        </div>
                        <div class="col-md-6">
                          {/* <button type="button" class="btn btn-primary">Add Payment</button> */}
                          <button class="btn btn-primary mt-2" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Faculty</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Name</th>

                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Qualification</th>
                            <th>Experience</th>
                            <th>Join Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {faculties.map((faculty) => (
                            <tr key={faculty._id}>
                              <td>{faculty.firstName} {faculty.lastName}</td>

                              <td>{faculty.email}</td>
                              <td>{faculty.phone}</td>
                              <td>{faculty.role}</td>
                              <td>{faculty.department}</td>
                              <td>{faculty.qualification}</td>
                              <td>{faculty.experience}</td>
                              <td>{faculty.joinDate}</td>
                              <td>
                                {/* <button onClick={() => handleEdit(faculty)}>Edit</button>
                                <button onClick={() => handleDelete(faculty._id)}>Delete</button> */}
                                <div class="hstack gap-2 fs-15">
                                  <a onClick={() => handleEdit(faculty)}
                                    class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
                                      class="feather-edit"></i></a>
                                  <a onClick={() => handleDelete(faculty._id)}
                                    class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                                      class="feather-trash"></i></a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                      <h5 id="offcanvasRightLabel">Add Expenses</h5>
                      <button type="button" class="btn-close"
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/* <!-- end offcanvas-header--> */}

                    <div class="offcanvas-body">
                      <div>
                        <form onSubmit={handleSubmit}>
                          <div class="row">
                            <div class="col-xl-4">
                              <label>First Name</label>
                              <input type="text" name="firstName" placeholder="First Name" value={facultyData.firstName} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <label>Last Name</label>
                              <input type="text" name="lastName" placeholder="Last Name" value={facultyData.lastName} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <label>Email Address</label>
                              <input type="email" name="email" placeholder="Email" value={facultyData.email} onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xl-4">
                              <label>Phone Number</label>
                              <input type="text" name="phone" placeholder="Phone" value={facultyData.phone} onChange={handleChange} required />
                            </div><div class="col-xl-4">
                              {/* <label>Role</label>
                              <select name="role" value={facultyData.role} onChange={handleChange} required>
                                <option value="Faculty">Faculty</option>
                                <option value="Staff">Staff</option>
                              </select> */}
                               <label>Branch:</label>
            <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
                <option value="">Select a Branch</option>
                {branches.map((branch) => (
                    <option key={branch._id} value={branch.branchId}>
                        {branch.branchName}
                    </option>
                ))}
            </select>
                              <label>Role</label>
<select name="role" multiple="multiple" value={facultyData.role}  onChange={handleChange} required>
  <option value="">Select Role</option>
  {roles.length > 0 ? (
    roles.map((role, index) => (
      <option key={role._id || index} value={role.name}>
        {role.roleName}
      </option>
    ))
  ) : (
    <option disabled>Loading roles...</option>
  )}
</select>


                            </div><div class="col-xl-4">
                              <label>Department</label>
                              {/* <input type="text" name="department" placeholder="Department" value={facultyData.department} onChange={handleChange} required /> */}
                              <select name="department" value={facultyData.department} onChange={handleChange} required>
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
                          <div class="row">
                            <div class="col-xl-4">
                              <label>Qualification</label>
                              <input type="text" name="qualification" placeholder="Qualification" value={facultyData.qualification} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <label>Experience</label>
                              <input type="number" name="experience" placeholder="Experience (Years)" value={facultyData.experience} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <label>Date of Birth</label>
                              <input type="date" name="dob" value={facultyData.dob} placeholder="Date of Birth" onChange={handleChange} required />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xl-4">
                              <label>Joining Date</label>
                              <input type="date" name="joinDate" value={facultyData.joinDate} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <label>Address</label>
                              <input type="text" name="address" placeholder="Address" value={facultyData.address} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <label>Gender </label>
                              <select name="gender" value={facultyData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xl-4">
                              <label>Employment Type</label>
                              <select name="employmentType" value={facultyData.employmentType} onChange={handleChange} required>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                              </select>
                            </div>
                            <div class="col-xl-4">
                              <label>Status</label>
                              <select name="status" value={facultyData.status} onChange={handleChange} required>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            </div>

                            {/* Show subjects dropdown only if role is Faculty */}
                            {facultyData.role.includes("Faculty") && (
                              <div class="col-xl-4">
                                <label>Select Subjects</label>
                                <select className="select2" multiple="multiple" value={selectedSubjects.map((sub) => sub.subjectCode)} onChange={handleSubjectChange}>
                                  {subjects.map((subject) => (
                                    <option key={subject._id} value={subject.subjectCode}>
                                      {subject.subjectCode} - {subject.subjectName}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            )}

                          </div>
                          <div class="row">
                            <div class="col-xl-4">
                              {/* <label>Salary</label>
                              <input type="number" name="salary" placeholder="Salary" value={facultyData.salary} onChange={handleChange} required /> */}

{/* <label>Salary Type</label>
                <select name="salaryType" onChange={handleDropdownChange} required>
                    <option value="">Select Salary Type</option>
                    <option value="CTC">Salary with Breakdown (CTC)</option>
                    <option value="Monthly">Salary without Breakdown (Monthly)</option>
                </select>

                
                {salaryType && (
                    <input
                        type="number"
                        name="salary"
                        placeholder="Enter Salary"
                        value={salaryAmount}
                        onChange={handleSalaryChange}
                        required
                    />
                )} */}

<label>Salary Type</label>
<select 
    name="salaryType" 
    value={salaryType} 
    onChange={handleDropdownChange} 
    required
>
    <option value="">Select Salary Type</option>
    <option value="CTC">Salary with Breakdown (CTC)</option>
    <option value="Monthly">Salary without Breakdown (Monthly)</option>
</select>

{/* Show input box only if a type is selected */}
{salaryType && (
    <input
        type="number"
        name="salary"
        placeholder="Enter Salary"
        value={salaryAmount}
        onChange={handleSalaryChange}
        required
    />
)}
                            </div>
                            <div class="col-xl-4">
                              <label>Staff / Faculty ID</label>
                              <input type="text" name="employeeId" placeholder="Staff/Faculty ID" value={facultyData.employeeId} onChange={handleChange} required />
                            </div>
                            <div class="col-xl-4">
                              <button type="submit">{editId ? "Update" : "Add"} Faculty</button>
                            </div>
                            <div class="col-xl-4">
                              <label>Password</label>
                              <input type="password" name="password" placeholder="password" value={facultyData.password} onChange={handleChange} required />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default FacultyForm;
