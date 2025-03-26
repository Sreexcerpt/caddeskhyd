// import React, { useState } from "react";
// import axios from "axios";

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         fatherName: "",
//         contactAddress: "",
//         email: "",
//         qualification: "",
//         collegeName: "",
//         phone: "",
//         courseName: "",
//         courseFee: "",
//         joiningDate: "",
//       });
    
//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post("http://localhost:8080/api/newrestration", formData);
//           alert(response.data.message);
//           setFormData({
//             name: "",
//             fatherName: "",
//             contactAddress: "",
//             email: "",
//             qualification: "",
//             collegeName: "",
//             phone: "",
//             courseName: "",
//             courseFee: "",
//             joiningDate: "",
//           });
//         } catch (error) {
//           alert("Error registering student!");
//         }
//       };

//   return (
//     <div>
//       <div>
//         <div class="page-wrapper">
//           <div class="content">
//             <div class="row">
//               <div class="col-md-12">
//                 <div class="page-header">
//                   <div class="row align-items-center ">
//                     <div class="col-md-4">
//                       <h3>Enquiry Form</h3>
//                     </div>
//                     <div class="col-md-8 float-end ms-auto">
//                       <div class="d-flex title-head">
//                         <div class="daterange-picker d-flex align-items-center justify-content-center">
//                           <div class="head-icons mb-0">
//                             <a
//                               href="project-dashboard.html"
//                               data-bs-toggle="tooltip"
//                               data-bs-placement="top"
//                               data-bs-original-title="Refresh"
//                             >
//                               <i class="ti ti-refresh-dot"></i>
//                             </a>
//                             <a
//                               href="javascript:void(0);"
//                               data-bs-toggle="tooltip"
//                               data-bs-placement="top"
//                               data-bs-original-title="Collapse"
//                               id="collapse-header"
//                             >
//                               <i class="ti ti-chevrons-up"></i>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="row">
//               <div class="col-md-12 d-flex">
//                 <div class="card w-100">
//                   <div class="card-header border-0 pb-0"></div>
//                   <div class="card-body">
                   

// <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6">
//             <label>Name</label>
//             <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div className="col-md-6">
//             <label>Father's Name</label>
//             <input type="text" name="fatherName" className="form-control" value={formData.fatherName} onChange={handleChange} required />
//           </div>
//         </div>

//         <div className="row mt-3">
//           <div className="col-md-6">
//             <label>Contact Address</label>
//             <input type="text" name="contactAddress" className="form-control" value={formData.contactAddress} onChange={handleChange} required />
//           </div>
//           <div className="col-md-6">
//             <label>Email</label>
//             <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//           </div>
//         </div>

//         <div className="row mt-3">
//           <div className="col-md-6">
//             <label>Qualification</label>
//             <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
//           </div>
//           <div className="col-md-6">
//             <label>College Name</label>
//             <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleChange} required />
//           </div>
//         </div>

//         <div className="row mt-3">
//           <div className="col-md-6">
//             <label>Phone</label>
//             <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
//           </div>
//           <div className="col-md-6">
//             <label>Name Of Course</label>
//             <input type="text" name="courseName" className="form-control" value={formData.courseName} onChange={handleChange} required />
//           </div>
//         </div>

//         <div className="row mt-3">
//           <div className="col-md-6">
//             <label>Course Fee</label>
//             <input type="number" name="courseFee" className="form-control" value={formData.courseFee} onChange={handleChange} required />
//           </div>
//           <div className="col-md-6">
//             <label>Joining Date</label>
//             <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} required />
//           </div>
//         </div>

//         <div className="mt-4 text-end">
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </div>
//       </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;


///crt working code without regid
// import React, { useState } from "react";
// import axios from "axios";

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         fatherName: "",
//         contactAddress: "",
//         email: "",
//         qualification: "",
//         collegeName: "",
//         phone: "",
//         courseName: "",
//         courseFee: "",
//         joiningDate: "",
//         aadhar: null,
//         resume: null,
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         Object.keys(formData).forEach(key => {
//             data.append(key, formData[key]);
//         });
        
//         try {
//             const response = await axios.post("http://localhost:8080/api/newregistration", data, {
//                 headers: { "Content-Type": "multipart/form-data" }
//             });
//             alert(response.data.message);
//             setFormData({
//                 name: "",
//                 fatherName: "",
//                 contactAddress: "",
//                 email: "",
//                 qualification: "",
//                 collegeName: "",
//                 phone: "",
//                 courseName: "",
//                 courseFee: "",
//                 joiningDate: "",
//                 aadhar: null,
//                 resume: null,
//             });
//         } catch (error) {
//             alert("Error registering student!");
//         }
//     };

//     return (
//         <div>
//             <div className="page-wrapper">
//                 <div className="content">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <h3>Enquiry Form</h3>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12 d-flex">
//                             <div className="card w-100">
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row">
//                                             <div className="col-md-6">
//                                                 <label>Name</label>
//                                                 <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>Father's Name</label>
//                                                 <input type="text" name="fatherName" className="form-control" value={formData.fatherName} onChange={handleChange} required />
//                                             </div>
//                                         </div>

//                                         <div className="row mt-3">
//                                             <div className="col-md-6">
//                                                 <label>Contact Address</label>
//                                                 <input type="text" name="contactAddress" className="form-control" value={formData.contactAddress} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>Email</label>
//                                                 <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//                                             </div>
//                                         </div>

//                                         <div className="row mt-3">
//                                             <div className="col-md-6">
//                                                 <label>Qualification</label>
//                                                 <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>College Name</label>
//                                                 <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleChange} required />
//                                             </div>
//                                         </div>

//                                         <div className="row mt-3">
//                                             <div className="col-md-6">
//                                                 <label>Phone</label>
//                                                 <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>Name Of Course</label>
//                                                 <input type="text" name="courseName" className="form-control" value={formData.courseName} onChange={handleChange} required />
//                                             </div>
//                                         </div>

//                                         <div className="row mt-3">
//                                             <div className="col-md-6">
//                                                 <label>Course Fee</label>
//                                                 <input type="number" name="courseFee" className="form-control" value={formData.courseFee} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>Joining Date</label>
//                                                 <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} required />
//                                             </div>
//                                         </div>

//                                         <div className="row mt-3">
//                                             <div className="col-md-6">
//                                                 <label>Upload Aadhar</label>
//                                                 <input type="file" name="aadhar" className="form-control" onChange={handleFileChange} required />
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label>Upload Resume</label>
//                                                 <input type="file" name="resume" className="form-control" onChange={handleFileChange} required />
//                                             </div>
//                                         </div>

//                                         <div className="mt-4 text-end">
//                                             <button type="submit" className="btn btn-primary">Submit</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationForm;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         regid: "",
//         name: "",
//         fatherName: "",
//         contactAddress: "",
//         email: "",
//         qualification: "",
//         collegeName: "",
//         phone: "",
//         courseName: "",
//         courseFee: "",
//         joiningDate: "",
//         aadhar: null,
//         resume: null,
//     });

//     // Fetch a new regid when the form loads
//     useEffect(() => {
//         const fetchRegId = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/api/getNewRegId");
//                 setFormData((prev) => ({ ...prev, regid: response.data.regid }));
//             } catch (error) {
//                 console.error("Error fetching regid:", error);
//             }
//         };

//         fetchRegId();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();

//         Object.keys(formData).forEach((key) => {
//             if (formData[key] !== null) {
//                 data.append(key, formData[key]);
//             }
//         });

//         try {
//             const response = await axios.post("http://localhost:8080/api/newregistration", data, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             alert(`Registration Successful! Your ID: ${response.data.regid}`);

//             // Reset form except for regid
//             setFormData({
//                 regid: response.data.regid, // Keep the new regid
//                 name: "",
//                 fatherName: "",
//                 contactAddress: "",
//                 email: "",
//                 qualification: "",
//                 collegeName: "",
//                 phone: "",
//                 courseName: "",
//                 courseFee: "",
//                 joiningDate: "",
//                 aadhar: null,
//                 resume: null,
//             });
//         } catch (error) {
//             console.error("Error:", error.response?.data || error.message);
//             alert("Error registering student!");
//         }
//     };

//     return (
//         <div className="page-wrapper">
//             <div className="content">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h3>Enquiry Form</h3>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12 d-flex">
//                         <div className="card w-100">
//                             <div className="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     {/* Registration ID (Auto-generated) */}
//                                     <div className="col-md-6">
//                                         <label>Registration ID</label>
//                                         <input type="text" name="regid" className="form-control" value={formData.regid} disabled />
//                                     </div>

//                                     <div className="row">
//                                         <div className="col-md-6">
//                                             <label>Name</label>
//                                             <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Father's Name</label>
//                                             <input type="text" name="fatherName" className="form-control" value={formData.fatherName} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Contact Address</label>
//                                             <input type="text" name="contactAddress" className="form-control" value={formData.contactAddress} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Email</label>
//                                             <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Qualification</label>
//                                             <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>College Name</label>
//                                             <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Phone</label>
//                                             <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Name Of Course</label>
//                                             <input type="text" name="courseName" className="form-control" value={formData.courseName} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Course Fee</label>
//                                             <input type="number" name="courseFee" className="form-control" value={formData.courseFee} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Joining Date</label>
//                                             <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Upload Aadhar</label>
//                                             <input type="file" name="aadhar" className="form-control" onChange={handleFileChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Upload Resume</label>
//                                             <input type="file" name="resume" className="form-control" onChange={handleFileChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="mt-4 text-end">
//                                         <button type="submit" className="btn btn-primary">Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationForm;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        regid: "",
        fName: "",
        lName:"",
        fatherName: "",
        contactAddress: "",
        email: "",
        city:"",
        state:"",
        qualification: "",
        collegeName: "",
        phone: "",
        courseName: "",
        courseFee: "",
        joiningDate: "",
        aadhar: null,
        resume: null,
        walkinCenter: "",
        feeType: "Single",
        installmentCount: "",
        password: "",
    });
    const [branches, setBranches] = useState([]);
    const [courses, setCourses] = useState([]);
    const aadharRef = useRef(null);
const resumeRef = useRef(null);

    useEffect(() => {
        const fetchRegId = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/getNewRegId");
                setFormData((prev) => ({ ...prev, regid: response.data.regid }));
            } catch (error) {
                console.error("Error fetching regid:", error);
            }
        };
    
        const fetchBranches = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/branches");
                setBranches(res.data || []);
            } catch (error) {
                console.error("Error fetching branches:", error);
            }
        };
    
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/courses");
                console.log("Fetched Courses:", response.data); // Debugging line
                setCourses(response.data || []);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
    
        // Call all API functions once
        fetchRegId();
        fetchBranches();
        fetchCourses();
    }, []); // ✅ Removed `courses` dependency to prevent infinite loop
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };
//crt working code
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = new FormData();

    //     Object.keys(formData).forEach((key) => {
    //         if (formData[key] !== null) {
    //             data.append(key, formData[key]);
    //         }
    //     });
     
    //     try {
    //         const response = await axios.post("http://localhost:8080/api/newregistration", data, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });

    //         alert(`Registration Successful! Your ID: ${response.data.regid}`);

    //         setFormData({
    //             regid: response.data.regid,
    //             fName: "",
    //             lName:"",
    //             fatherName: "",
    //             contactAddress: "",
    //             email: "",
    //             city:"",
    //             state:"",
    //             qualification: "",
    //             collegeName: "",
    //             phone: "",
    //             courseName: "",
    //             courseFee: "",
    //             joiningDate: "",
    //             aadhar: null,
    //             resume: null,
    //             walkinCenter: "",
    //             feeType: "Single",
    //             installmentCount: "",
    //             password: "",
    //         });
    //     } catch (error) {
    //         console.error("Error:", error.response?.data || error.message);
    //         alert("Error registering student!");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
       
        // Validation Errors Object
        let errors = {};
        if (!formData.aadhar || !formData.resume) {
            alert("Please upload both Aadhar and Resume.");
            return;
        }
    
        // Required Fields Validation
        const requiredFields = ["fName", "lName", "fatherName", "contactAddress", "email", "city", "state", "qualification", "collegeName", "phone", "courseName", "joiningDate", "walkinCenter", "password"];
        requiredFields.forEach(field => {
            if (!formData[field]?.trim()) {
                errors[field] = `${field} is required.`;
            }
        });
    
        // Email Validation
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }
    
        // Phone Number Validation (10-digit only)
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone number must be exactly 10 digits.";
        }
    
        // Password Validation (Minimum 6 characters)
        if (formData.password && formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
    
        // Validate File Uploads (Aadhar & Resume)
        if (!formData.aadhar) {
            errors.aadhar = "Aadhar file is required.";
        }
        if (!formData.resume) {
            errors.resume = "Resume file is required.";
        }
    
        // If errors exist, alert the user and stop submission
        if (Object.keys(errors).length > 0) {
            alert("Please correct the errors before submitting.");
            console.error("Validation Errors:", errors);
            return;
        }
    
        // FormData Preparation
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key] !== null) {
                data.append(key, formData[key]);
            }
        });
    
        try {
            const response = await axios.post("http://localhost:8080/api/newregistration", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
    
            alert(`Registration Successful! Your ID: ${response.data.regid}`);
    
            setFormData({
                regid: response.data.regid,
                fName: "",
                lName: "",
                fatherName: "",
                contactAddress: "",
                email: "",
                city: "",
                state: "",
                qualification: "",
                collegeName: "",
                phone: "",
                courseName: "",
                courseFee: "",
                joiningDate: "",
                aadhar: null,
                resume: null,
                walkinCenter: "",
                feeType: "Single",
                installmentCount: "",
                password: "",
            });
            if (aadharRef.current) aadharRef.current.value = "";
        if (resumeRef.current) resumeRef.current.value = "";
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Error registering student!");
        }
    };
    
    // const validateForm = () => {
    //     let errors = {};
    
    //     if (!formData.fName.trim()) errors.fName = "First Name is required.";
    //     if (!formData.lName.trim()) errors.lName = "Last Name is required.";
    //     if (!formData.fatherName.trim()) errors.fatherName = "Father's Name is required.";
    //     if (!formData.contactAddress.trim()) errors.contactAddress = "Address is required.";
    
    //     if (!formData.email.trim()) {
    //         errors.email = "Email is required.";
    //     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    //         errors.email = "Invalid email format.";
    //     }
    
    //     if (!formData.phone.trim()) {
    //         errors.phone = "Phone number is required.";
    //     } else if (!/^\d{10}$/.test(formData.phone)) {
    //         errors.phone = "Phone number must be exactly 10 digits.";
    //     }
    
    //     if (!formData.city.trim()) errors.city = "City is required.";
    //     if (!formData.state.trim()) errors.state = "State is required.";
    //     if (!formData.qualification.trim()) errors.qualification = "Qualification is required.";
    //     if (!formData.collegeName.trim()) errors.collegeName = "College Name is required.";
    
    //     if (!formData.courseName.trim()) errors.courseName = "Please select a course.";
    //     if (!formData.walkinCenter.trim()) errors.walkinCenter = "Please select a walk-in center.";
    
    //     if (!formData.password.trim()) {
    //         errors.password = "Password is required.";
    //     } else if (formData.password.length < 6) {
    //         errors.password = "Password must be at least 6 characters.";
    //     }
    
    //     if (!formData.courseFee.trim() || isNaN(formData.courseFee) || formData.courseFee <= 0) {
    //         errors.courseFee = "Valid course fee is required.";
    //     }
    
    //     if (!formData.joiningDate.trim()) {
    //         errors.joiningDate = "Joining Date is required.";
    //     } else {
    //         const today = new Date().toISOString().split("T")[0];
    //         if (formData.joiningDate < today) {
    //             errors.joiningDate = "Joining date cannot be in the past.";
    //         }
    //     }
    
    //     if (!formData.aadhar) errors.aadhar = "Aadhar upload is required.";
    //     if (!formData.resume) errors.resume = "Resume upload is required.";
    
    //     if (formData.feeType === "Installment" && (!formData.installmentCount || isNaN(formData.installmentCount))) {
    //         errors.installmentCount = "Select a valid installment count.";
    //     }
    
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };
    
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Enquiry Form</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <div className="card w-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                <div className="row">
    <div className="col-md-4">
        <label>First Name</label>
        <input 
            type="text" 
            name="fName" 
            className="form-control" 
            value={formData.fName} 
            onChange={handleChange} 
            required 
        />
    </div>
    <div className="col-md-4">
        <label>Last Name</label>
        <input 
            type="text" 
            name="lName" 
            className="form-control" 
            value={formData.lName} 
            onChange={handleChange} 
            required 
        />
    </div>
    <div className="col-md-4">
                                            <label>Father's Name</label>
                                            <input type="text" name="fatherName" className="form-control" value={formData.fatherName} onChange={handleChange} required />
                                        </div>
</div>

<div className="row">
                                        
      

                                       

                                        
                                        <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Contact Address</label>
                                            <input type="text" name="contactAddress" className="form-control" value={formData.contactAddress} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Email</label>
                                            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>City</label>
                                            <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>State</label>
                                            <input type="text" name="state" className="form-control" value={formData.state} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Qualification</label>
                                            <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>College Name</label>
                                            <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        {/* <div className="col-md-6">
                                            <label>Course Fee</label>
                                            <input type="number" name="courseFee" className="form-control" value={formData.courseFee} onChange={handleChange} required />
                                        </div> */}
                                                <div className="col-md-6">
                                            <label>Course</label>
                                            <select 
                                                name="courseName" 
                                                className="form-control" 
                                                value={formData.courseName} 
                                                onChange={handleChange} 
                                                required
                                            >
                                                <option value="">Select Course</option>
                                                {courses.length > 0 && courses.map((course, index) => (
                                                    <option key={index} value={course.courseName}>{course.courseName}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Expected Joining Date</label>
                                            <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Walk-in Center</label>
                                            <select name="walkinCenter" className="form-control" value={formData.walkinCenter} onChange={handleChange} required>
                                                <option value="">Select Walk-in Center</option>
                                                {branches.length > 0 && branches.map((branch, index) => (
                                                    <option key={index} value={branch.location}>{branch.location}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                        <label>Password</label>
                                            <input
        type="password"
        name="password"
        className="form-control"
        value={formData.password}
        onChange={handleChange}
        required
    />
</div>
                                    </div>

                                    {/* Fee Type */}
                                    <div className="col-md-6">
                                        <label>Fee Type</label>
                                        <select name="feeType" className="form-control" value={formData.feeType} onChange={handleChange} required>
                                            <option value="Single">Single Payment</option>
                                            <option value="Installment">Installment</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
    <label>Phone Number</label>
    <input 
        type="tel" 
        name="phone" 
        className="form-control" 
        value={formData.phone} 
        onChange={handleChange} 
        pattern="[0-9]{10}" // ✅ Ensures only 10-digit numbers
        title="Please enter a valid 10-digit phone number" 
        required 
    />
</div>

                                    {/* Show Installment Count only if Fee Type is Installment */}
                                    {formData.feeType === "Installment" && (
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Number of Installments</label>
                                                <select name="installmentCount" className="form-control" value={formData.installmentCount} onChange={handleChange} required>
                                                    <option value="">Select Installments</option>
                                                    {[...Array(8)].map((_, i) => (
                                                        <option key={i + 2} value={i + 2}>
                                                            {i + 2} Installments
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                      <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Upload Aadhar</label>
                                            <input type="file" name="aadhar" className="form-control" onChange={handleFileChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Upload Resume</label>
                                            <input type="file" name="resume" className="form-control" onChange={handleFileChange} required />
                                        </div>
                                    </div>
                                    </div>
                                    

                                    <div className="mt-4 text-end">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;











// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         regid: "",
//         name: "",
//         fatherName: "",
//         contactAddress: "",
//         email: "",
//         qualification: "",
//         collegeName: "",
//         phone: "",
//         courseName: "",
//         courseFee: "",
//         joiningDate: "",
//         aadhar: null,
//         resume: null,
//         walkinCenter: "",
//         feeType: "Single",
//         installmentCount: "",
//     });
//     const [branches, setBranches] = useState([]);
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         const fetchRegId = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/api/getNewRegId");
//                 setFormData((prev) => ({ ...prev, regid: response.data.regid }));
//             } catch (error) {
//                 console.error("Error fetching regid:", error);
//             }
//         };
    
//         const fetchBranches = async () => {
//             try {
//                 const res = await axios.get("http://localhost:8080/api/branches");
//                 setBranches(res.data || []);
//             } catch (error) {
//                 console.error("Error fetching branches:", error);
//             }
//         };
    
//         const fetchCourses = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/api/courses");
//                 console.log("Fetched Courses:", response.data); // Debugging line
//                 setCourses(response.data || []);
//             } catch (error) {
//                 console.error("Error fetching courses:", error);
//             }
//         };
    
//         // Call all API functions once
//         fetchRegId();
//         fetchBranches();
//         fetchCourses();
//     }, []); // ✅ Removed `courses` dependency to prevent infinite loop
    

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleFileChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();

//         Object.keys(formData).forEach((key) => {
//             if (formData[key] !== null) {
//                 data.append(key, formData[key]);
//             }
//         });

//         try {
//             const response = await axios.post("http://localhost:8080/api/newregistration", data, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             alert(`Registration Successful! Your ID: ${response.data.regid}`);

//             setFormData({
//                 regid: response.data.regid,
//                 name: "",
//                 fatherName: "",
//                 contactAddress: "",
//                 email: "",
//                 qualification: "",
//                 collegeName: "",
//                 phone: "",
//                 courseName: "",
//                 courseFee: "",
//                 joiningDate: "",
//                 aadhar: null,
//                 resume: null,
//                 walkinCenter: "",
//                 feeType: "Single",
//                 installmentCount: "",
//             });
//         } catch (error) {
//             console.error("Error:", error.response?.data || error.message);
//             alert("Error registering student!");
//         }
//     };

//     return (
//         <div className="page-wrapper">
//             <div className="content">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h3>Enquiry Form</h3>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12 d-flex">
//                         <div className="card w-100">
//                             <div className="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     {/* <div className="col-md-6">
//                                         <label>Registration ID</label>
//                                         <input type="text" name="regid" className="form-control" value={formData.regid} disabled />
//                                     </div> */}
// <div className="row">
//                                         <div className="col-md-6">
//                                             <label>Name</label>
//                                             <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Father's Name</label>
//                                             <input type="text" name="fatherName" className="form-control" value={formData.fatherName} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Contact Address</label>
//                                             <input type="text" name="contactAddress" className="form-control" value={formData.contactAddress} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Email</label>
//                                             <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//                                         </div>
//                                     </div>
//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Qualification</label>
//                                             <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>College Name</label>
//                                             <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleChange} required />
//                                         </div>
//                                     </div>
//                                     <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Course Fee</label>
//                                             <input type="number" name="courseFee" className="form-control" value={formData.courseFee} onChange={handleChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Expected Joining Date</label>
//                                             <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="row">
//                                         <div className="col-md-6">
//                                             <label>Walk-in Center</label>
//                                             <select name="walkinCenter" className="form-control" value={formData.walkinCenter} onChange={handleChange} required>
//                                                 <option value="">Select Walk-in Center</option>
//                                                 {branches.length > 0 && branches.map((branch, index) => (
//                                                     <option key={index} value={branch.location}>{branch.location}</option>
//                                                 ))}
//                                             </select>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Course</label>
//                                             <select 
//                                                 name="courseName" 
//                                                 className="form-control" 
//                                                 value={formData.courseName} 
//                                                 onChange={handleChange} 
//                                                 required
//                                             >
//                                                 <option value="">Select Course</option>
//                                                 {courses.length > 0 && courses.map((course, index) => (
//                                                     <option key={index} value={course.courseName}>{course.courseName}</option>
//                                                 ))}
//                                             </select>
//                                         </div>
//                                     </div>

//                                     {/* Fee Type */}
//                                     <div className="col-md-6">
//                                         <label>Fee Type</label>
//                                         <select name="feeType" className="form-control" value={formData.feeType} onChange={handleChange} required>
//                                             <option value="Single">Single Payment</option>
//                                             <option value="Installment">Installment</option>
//                                         </select>
//                                     </div>

//                                     {/* Show Installment Count only if Fee Type is Installment */}
//                                     {formData.feeType === "Installment" && (
//                                         <div className="row mt-3">
//                                             <div className="col-md-6">
//                                                 <label>Number of Installments</label>
//                                                 <select name="installmentCount" className="form-control" value={formData.installmentCount} onChange={handleChange} required>
//                                                     <option value="">Select Installments</option>
//                                                     {[...Array(8)].map((_, i) => (
//                                                         <option key={i + 2} value={i + 2}>
//                                                             {i + 2} Installments
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     )}
//                                       <div className="row mt-3">
//                                         <div className="col-md-6">
//                                             <label>Upload Aadhar</label>
//                                             <input type="file" name="aadhar" className="form-control" onChange={handleFileChange} required />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label>Upload Resume</label>
//                                             <input type="file" name="resume" className="form-control" onChange={handleFileChange} required />
//                                         </div>
//                                     </div>

//                                     <div className="mt-4 text-end">
//                                         <button type="submit" className="btn btn-primary">Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationForm;


