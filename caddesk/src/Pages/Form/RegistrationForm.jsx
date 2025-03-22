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


import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        regid: "",
        name: "",
        fatherName: "",
        contactAddress: "",
        email: "",
        qualification: "",
        collegeName: "",
        phone: "",
        courseName: "",
        courseFee: "",
        joiningDate: "",
        aadhar: null,
        resume: null,
    });

    // Fetch a new regid when the form loads
    useEffect(() => {
        const fetchRegId = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/getNewRegId");
                setFormData((prev) => ({ ...prev, regid: response.data.regid }));
            } catch (error) {
                console.error("Error fetching regid:", error);
            }
        };

        fetchRegId();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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

            // Reset form except for regid
            setFormData({
                regid: response.data.regid, // Keep the new regid
                name: "",
                fatherName: "",
                contactAddress: "",
                email: "",
                qualification: "",
                collegeName: "",
                phone: "",
                courseName: "",
                courseFee: "",
                joiningDate: "",
                aadhar: null,
                resume: null,
            });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Error registering student!");
        }
    };

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
                                    {/* Registration ID (Auto-generated) */}
                                    <div className="col-md-6">
                                        <label>Registration ID</label>
                                        <input type="text" name="regid" className="form-control" value={formData.regid} disabled />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Father's Name</label>
                                            <input type="text" name="fatherName" className="form-control" value={formData.fatherName} onChange={handleChange} required />
                                        </div>
                                    </div>

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
                                            <label>Qualification</label>
                                            <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>College Name</label>
                                            <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                            <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Name Of Course</label>
                                            <input type="text" name="courseName" className="form-control" value={formData.courseName} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Course Fee</label>
                                            <input type="number" name="courseFee" className="form-control" value={formData.courseFee} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Joining Date</label>
                                            <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} required />
                                        </div>
                                    </div>

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


