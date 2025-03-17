


// import React, { useState } from "react";

// const StudentRegistrationForm = () => {
//   const [activeTab, setActiveTab] = useState("personal");
//   const [formData, setFormData] = useState({
//    // Personal Details
//    studentId: '',
//    firstName: '',
//    lastName: '',
//    dob: '',
//    gender: '',
//    nationality: '',
//    aadharNumber: '',
   
//    // Contact Information
//    address: '',
//    phoneNumber: '',
//    email: '',
//    parentName: '',
//    parentPhone: '',
//    parentEmail: '',
   
//    // Academic Records
//    previousSchool: '',
//    previousQualification: '',
//    enrolledCourse: '',
//    batchAssigned: '',
//    grades: '',
//    testScores: '',
//    disciplinaryRecords: ''
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("http://localhost:8080/register1", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         alert("Student registered successfully!");
//         setFormData({
//           studentId: '',
//           firstName: '',
//           lastName: '',
//           dob: '',
//           gender: '',
//           nationality: '',
//           aadharNumber: '',
//           address: '',
//           phoneNumber: '',
//           email: '',
//           parentName: '',
//           parentPhone: '',
//           parentEmail: '',
//           previousSchool: '',
//           previousQualification: '',
//           enrolledCourse: '',
//           batchAssigned: '',
//           grades: '',
//           testScores: '',
//           disciplinaryRecords: ''
//         });
//       } else {
//         alert("Error: " + data.error);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to register student.");
//     }
//   };
  





  
//   return (
//     <>
//     <div style={{ maxWidth: "600px", marginLeft: "300px", padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
//       <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Student Registration Form</h1>
      
//       {/* Tabs */}
//       <div style={{ display: "flex", marginBottom: "20px" }}>
//         <button onClick={() => setActiveTab("personal")} style={{ marginRight: "10px", padding: "10px", border: activeTab === "personal" ? "2px solid blue" : "1px solid gray" }}>Personal</button>
//         <button onClick={() => setActiveTab("contact")} style={{ marginRight: "10px", padding: "10px", border: activeTab === "contact" ? "2px solid blue" : "1px solid gray" }}>Contact</button>
//         <button onClick={() => setActiveTab("academic")} style={{ padding: "10px", border: activeTab === "academic" ? "2px solid blue" : "1px solid gray" }}>Academic</button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {activeTab === "personal" && (
//           <div>
//             <h2>Personal Details</h2>
//             <label>StudentID</label>
//             <input type="text" id="studentId" value={formData.studentId} onChange={handleInputChange} />
//             <label>First Name</label>
//             <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} />
//             <label>Middle Name</label>
//             <input type="text" id="middleName" value={formData.middleName} onChange={handleInputChange} />
//             <label>Last Name</label>
//             <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} />
//             <label>Date of Birth</label>
//             <input type="date" id="dob" value={formData.dob} onChange={handleInputChange} />
//             <label>Blood Group</label>
//             <input type="text" id="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} />
//             <label>Emergency Contact</label>
//             <input type="text" id="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} />

//           </div>
//         )}
        
//         {activeTab === "contact" && (
//   <div>
//     <h2>Contact Information</h2>
    
    
//     <label>Address</label>
//     <input type="address" id="address" value={formData.address} onChange={handleInputChange} />
    
//     <label>Phone Number</label>
//     <input type="text" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />

//     <label>Email</label>
//     <input type="text" id="email" value={formData.email} onChange={handleInputChange} />

//     <label>Parent/Guardian Name</label>
//     <input type="text" id="guardianName" value={formData.guardianName} onChange={handleInputChange} />

//     <label>Parent/Guardian Phone</label>
//     <input type="text" id="guardianPhone" value={formData.guardianPhone} onChange={handleInputChange} />

//     <label>Parent/Guardian Email</label>
//     <input type="text" id="guardianEmail" value={formData.guardianEmail} onChange={handleInputChange} />
//   </div>
// )}

//         {activeTab === "academic" && (
//   <div>
//     <h2>Academic Records</h2>
    
//     <label>Previous School/Institution</label>
//     <input 
//       type="text" 
//       id="previousSchool" 
//       value={formData.previousSchool} 
//       onChange={handleInputChange} 
//     />

//     <label>Previous Qualification</label>
//     <select 
//       id="previousQualification" 
//       value={formData.previousQualification} 
//       onChange={handleInputChange}
//     >
//       <option value="">Select Qualification</option>
//       <option value="High School">High School</option>
//       <option value="Diploma">Diploma</option>
//       <option value="Bachelor's Degree">Bachelor's Degree</option>
//       <option value="Master's Degree">Master's Degree</option>
//     </select>

//     <label>Course Enrolled</label>
//     <select 
//       id="courseEnrolled" 
//       value={formData.courseEnrolled} 
//       onChange={handleInputChange}
//     >
//       <option value="">Select Course</option>
//       <option value="Computer Science">Computer Science</option>
//       <option value="Engineering">Engineering</option>
//       <option value="Business Administration">Business Administration</option>
//       <option value="Medicine">Medicine</option>
//     </select>

//     <label>Batch Assigned</label>
//     <input 
//       type="text" 
//       id="batchAssigned" 
//       value={formData.batchAssigned} 
//       onChange={handleInputChange} 
//     />

//     <label>Grades</label>
//     <input 
//       type="text" 
//       id="grades" 
//       placeholder="e.g., 3.8 GPA" 
//       value={formData.grades} 
//       onChange={handleInputChange} 
//     />

//     <label>Test Scores</label>
//     <input 
//       type="text" 
//       id="testScores" 
//       placeholder="e.g., SAT: 1400, ACT: 32" 
//       value={formData.testScores} 
//       onChange={handleInputChange} 
//     />

//     <label>Extracurricular Activities</label>
//     <input 
//       type="text" 
//       id="extracurricularActivities" 
//       value={formData.extracurricularActivities} 
//       onChange={handleInputChange} 
//     />

//     <label>Disciplinary Records</label>
//     <input 
//       type="text" 
//       id="disciplinaryRecords" 
//       value={formData.disciplinaryRecords} 
//       onChange={handleInputChange} 
//     />
//   </div>
// )}

        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
    
//     <div class="page-wrapper cardhead">

// 			<div class="content container-fluid">

			
// 				<div class="page-header">
// 					<div class="row">
// 						<div class="col-sm-12">
// 							<h3 class="page-title">Form Wizard</h3>
// 						</div>
// 					</div>
// 				</div>
		

// 				<div class="row">

			
// 					<div class="col-lg-12">
// 						<div class="card">
// 							<div class="card-header">
// 								<h4 class="card-title mb-0">Basic Wizard</h4>
// 							</div>
// 							<div class="card-body">
// 								<div id="basic-pills-wizard" class="twitter-bs-wizard">
// 									<ul class="nav nav-tabs twitter-bs-wizard-nav">
// 										<li class="nav-item">
// 											<a href="#" class="nav-link border-0" data-bs-toggle="tab"
// 												data-bs-target="#seller-details">
// 												<div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top"
// 													title="Seller Details">
// 													<i class="fas fa-user"></i>
// 												</div>
// 											</a>
// 										</li>
// 										<li class="nav-item">
// 											<a href="#" class="nav-link border-0" data-bs-toggle="tab"
// 												data-bs-target="#company-document">
// 												<div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top"
// 													title="Company Document">
// 													<i class="fas fa-map-pin"></i>
// 												</div>
// 											</a>
// 										</li>

// 										<li class="nav-item">
// 											<a href="#" class="nav-link border-0" data-bs-toggle="tab"
// 												data-bs-target="#bank-detail">
// 												<div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top"
// 													title="Bank Details">
// 													<i class="fas fa-credit-card"></i>
// 												</div>
// 											</a>
// 										</li>
// 									</ul>
							

// 									<div class="tab-content twitter-bs-wizard-tab-content">
// 										<div class="tab-pane show active" id="seller-details">
// 											<div class="mb-4">
// 												<h5>Enter Your Personal Details</h5>
// 											</div>
// 											<form>
// 												<div class="row">
// 													<div class="col-lg-6">
// 														<div class="mb-3">
// 															<label for="basicpill-firstname-input"
// 																class="form-label">First name</label>
// 															<input type="text" class="form-control"
// 																id="basicpill-firstname-input"/>
// 														</div>
// 													</div>
// 													<div class="col-lg-6">
// 														<div class="mb-3">
// 															<label for="basicpill-lastname-input"
// 																class="form-label">Last name</label>
// 															<input type="text" class="form-control"
// 																id="basicpill-lastname-input"/>
// 														</div>
// 													</div>
// 												</div>

// 												<div class="row">
// 													<div class="col-lg-6">
// 														<div class="mb-3">
// 															<label for="basicpill-phoneno-input"
// 																class="form-label">Phone</label>
// 															<input type="text" class="form-control"
// 																id="basicpill-phoneno-input"/>
// 														</div>
// 													</div>
// 													<div class="col-lg-6">
// 														<div class="mb-3">
// 															<label for="basicpill-email-input"
// 																class="form-label">Email</label>
// 															<input type="email" class="form-control"
// 																id="basicpill-email-input"/>
// 														</div>
// 													</div>
// 												</div>
// 											</form>
// 											<ul class="pager wizard twitter-bs-wizard-pager-link">
// 												<li class="next"><a href="javascript: void(0);"
// 														class="btn btn-primary">Next <i
// 															class="bx bx-chevron-right ms-1"></i></a></li>
// 											</ul>
// 										</div>
										
// 										<div class="tab-pane fade" id="company-document">
// 											<div>
// 												<div class="mb-4">
// 													<h5>Enter Your Address</h5>
// 												</div>
// 												<form>
// 													<div class="row">
// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-pancard-input"
// 																	class="form-label">Address 1</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-pancard-input"/>
// 															</div>
// 														</div>

// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-vatno-input"
// 																	class="form-label">Address 2</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-vatno-input"/>
// 															</div>
// 														</div>
// 													</div>
// 													<div class="row">
// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-cstno-input"
// 																	class="form-label">Landmark</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-cstno-input"/>
// 															</div>
// 														</div>

// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-servicetax-input"
// 																	class="form-label">Town</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-servicetax-input"/>
// 															</div>
// 														</div>
// 													</div>
// 												</form>
// 												<ul class="pager wizard twitter-bs-wizard-pager-link">
// 													<li class="previous"><a href="javascript: void(0);" class="btn btn-primary" onclick="if (!window.__cfRLUnblockHandlers) return false; nextTab()" data-cf-modified-3f50cf52b7c2e40a4b9d5891-=""><i
// 																class="bx bx-chevron-left me-1"></i> Previous</a></li>
// 													<li class="next"><a href="javascript: void(0);"
// 															class="btn btn-primary">Next <i
// 																class="bx bx-chevron-right ms-1"></i></a></li>
// 												</ul>
// 											</div>
// 										</div> 
// 										<div class="tab-pane fade" id="bank-detail">
// 											<div>
// 												<div class="mb-4">
// 													<h5>Payment Details</h5>
// 												</div>
// 												<form>
// 													<div class="row">
// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-namecard-input"
// 																	class="form-label">Name on Card</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-namecard-input"/>
// 															</div>
// 														</div>

// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label class="form-label">Credit Card Type</label>
// 																<select class="form-select">
// 																	<option selected>Select Card Type</option>
// 																	<option value="AE">American Express</option>
// 																	<option value="VI">Visa</option>
// 																	<option value="MC">MasterCard</option>
// 																	<option value="DI">Discover</option>
// 																</select>
// 															</div>
// 														</div>
// 													</div>
// 													<div class="row">
// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-cardno-input"
// 																	class="form-label">Credit Card Number</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-cardno-input"/>
// 															</div>
// 														</div>

// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-card-verification-input"
// 																	class="form-label">Card Verification Number</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-card-verification-input"/>
// 															</div>
// 														</div>
// 													</div>
// 													<div class="row">
// 														<div class="col-lg-6">
// 															<div class="mb-3">
// 																<label for="basicpill-expiration-input"
// 																	class="form-label">Expiration Date</label>
// 																<input type="text" class="form-control"
// 																	id="basicpill-expiration-input"/>
// 															</div>
// 														</div>
// 													</div>
// 												</form>
// 												<ul class="pager wizard twitter-bs-wizard-pager-link">
// 													<li class="previous"><a href="javascript: void(0);" class="btn btn-primary" onclick="if (!window.__cfRLUnblockHandlers) return false; nextTab()" data-cf-modified-3f50cf52b7c2e40a4b9d5891-=""><i
// 																class="bx bx-chevron-left me-1"></i> Previous</a></li>
// 													<li class="float-end"><a href="javascript: void(0);"
// 															class="btn btn-primary">Save
// 															Changes</a></li>
// 												</ul>
// 											</div>
// 										</div>
// 									</div>
									
// 								</div>
// 							</div>
							
// 						</div>
// 					</div>
					



// 				</div>

// 			</div>

// 	</div>
//     </>
//   );
// };

// export default StudentRegistrationForm;



import React from 'react'

const StudentRegistrationForm = () => {
  return (
	<div>
	   <div class="page-wrapper">
			<div class="content">
				<div class="page-header">
					<div class="page-title">
						<h4>Nav & Tabs</h4>
					</div>
				</div>

			
				<div class="row">
					<div class="col-md-12">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Solid tabs</h5>
							</div>
							<div class="card-body">
								<ul class="nav nav-tabs nav-tabs-solid mb-3">
									<li class="nav-item"><a class="nav-link active" href="#solid-tab1"
											data-bs-toggle="tab">Enter Your Personal Details</a></li>
									<li class="nav-item"><a class="nav-link" href="#solid-tab2"
											data-bs-toggle="tab">Enter Your Address</a></li>
									<li class="nav-item"><a class="nav-link" href="#solid-tab3"
											data-bs-toggle="tab">Payment Details</a></li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane show active" id="solid-tab1">
									
						<div class="card">
							<div class="card-body">
								<form action="#">
									<h5 class="card-title">Personal Information</h5>
									<div class="row">
										<div class="col-md-6">
											<div class="mb-3">
												<label class="form-label">First Name</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Last Name</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Blood Group</label>
												<select class="select">
													<option>Select</option>
													<option value="1">A+</option>
													<option value="2">O+</option>
													<option value="3">B+</option>
													<option value="4">AB+</option>
												</select>
											</div>
											<div class="mb-3">
												<label class="d-block">Gender:</label>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="gender"
														id="gender_male" value="option1"/>
													<label class="form-check-label" for="gender_male">Male</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="gender"
														id="gender_female" value="option2"/>
													<label class="form-check-label" for="gender_female">Female</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="mb-3">
												<label class="form-label">Username</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Email</label>
												<input type="text" class="form-control"/>
											</div>

											<div class="mb-3">
												<label class="form-label">Password</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Repeat Password</label>
												<input type="text" class="form-control"/>
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
									<div class="tab-pane" id="solid-tab2">
										<div className='card'>
                                             <div className='card-header'>
                                                  <div>
													  <h5 className='card-title'>Enter Your Address</h5>
													</div>
													<div className='card-body'>
                                                           <form action='#'>
														   <h5 class="card-title">Postal Address</h5>
									<div class="row">
										<div class="col-md-6">
											<div class="mb-3">
												<label class="form-label">Address Line 1</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Address Line 2</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">State</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="mb-3">
												<label class="form-label">City</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Country</label>
												<input type="text" class="form-control"/>
											</div>
											<div class="mb-3">
												<label class="form-label">Postal Code</label>
												<input type="text" class="form-control"/>
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
									<div class="tab-pane" id="solid-tab3">

									<div class="card">
							<div class="card-body">
								<div class="mb-3">
									<label for="colFormLabelSm" class="col-form-label col-form-label-sm">Email</label>
									<input type="email" class="form-control form-control-sm" id="colFormLabelSm"
										placeholder="col-form-label-sm"/>
								</div>
								<div class="mb-3">
									<label for="colFormLabel" class="col-form-label">Phone</label>
									<input type="text" class="form-control" id="colFormLabel"
										placeholder="Phone"/>
								</div>
								<div>
									<label for="colFormLabelLg" class="col-form-label col-form-label-lg">Payment Mode(UPI,CHECK,NETBANKING..ETC)</label>
									<input type="text" class="form-control form-control-lg" id="colFormLabelLg"
										placeholder="Payment Mode"/>
								</div>
							</div>
                            <div class="text-end">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
						</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				

	</div>
	</div>
	</div>
  )
}

export default StudentRegistrationForm
