// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ApplicationProcessing = () => {
// 	const [registrations, setRegistrations] = useState([]);
// 	const [selectedCandidate, setSelectedCandidate] = useState({});
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	useEffect(() => {
// 		fetchRegistrations();

// 	}, []);

// 	const fetchRegistrations = async () => {
// 		try {
// 			const response = await axios.get("http://localhost:8080/api/registrations");
// 			setRegistrations(response.data);
// 		} catch (error) {
// 			console.error("Error fetching registrations:", error);
// 			alert("Failed to load registrations.");
// 		}
// 	};
// 	const fetchCandidateDetails = async (id) => {
// 		try {
// 			const response = await axios.get(`http://localhost:8080/api/registration/${id}`);
// 			const { __v, ...filteredData } = response.data; // Remove _id and __v
// 			setSelectedCandidate(filteredData);
// 			fetchCourseFee(filteredData.courseName);
// 			setIsModalOpen(true);
// 		} catch (error) {
// 			console.error("Error fetching candidate details:", error);
// 			alert("Failed to fetch candidate details.");
// 		}
// 	};
// 	const fetchCourseFee = async (courseName) => {
// 		try {
// 			const response = await axios.get(`http://localhost:8080/api/course-fee/${courseName}`);
// 			console.log(response.data.fee)
// 			if (response.data.fee > 0) {
// 				setSelectedCandidate((prevState) => ({
// 					...prevState,
// 					courseFee: prevState.feeType === "Installment" ? response.data.Ifee : response.data.fee,
// 				}));
// 			}
// 		} catch (error) {
// 			console.error("Error fetching course fee:", error);
// 			alert("Failed to fetch course fee.");
// 		}
// 	};
// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setSelectedCandidate({ ...selectedCandidate, [name]: value });
// 	};

// 	const handleSaveChanges = async () => {
// 		try {
// 			console.log(selectedCandidate)
// 			await axios.put(`http://localhost:8080/api/registration/${selectedCandidate._id}`, selectedCandidate);
// 			alert("Candidate details updated successfully!");
// 			fetchRegistrations();
// 			setIsModalOpen(false);
// 		} catch (error) {
// 			console.error("Error updating candidate details:", error);
// 			alert("Failed to update candidate details.");
// 		}
// 	};
// 	// Delete Registration
// 	const handleDelete = async (id) => {
// 		if (!window.confirm("Are you sure you want to delete this registration?")) return;

// 		try {
// 			await axios.delete(`http://localhost:8080/api/registration/${id}`);
// 			setRegistrations(registrations.filter((reg) => reg._id !== id));
// 			alert("Registration deleted successfully!");
// 		} catch (error) {
// 			console.error("Error deleting registration:", error);
// 			alert("Failed to delete registration.");
// 		}
// 	};

// 	// Preview Aadhar or Resume
// 	const handlePreview = (filePath) => {
// 		if (filePath) {
// 			window.open(`http://localhost:8080/${filePath}`, "_blank");
// 		} else {
// 			alert("No file uploaded for preview.");
// 		}
// 	};
// 	const generateInstallmentRows = () => {

// 		const installmentCount = selectedCandidate.feeType === "Installment" ? parseInt(selectedCandidate.installmentCount) : 0;
// 		return Array.from({ length: installmentCount }, (_, index) => (
// 			<div key={index} className="row">
// 				<div className="col-xl-6">
// 					<label>Due Date {index + 1}:</label>
// 					<input type="date" name={`dueDate${index + 1}`} onChange={handleInputChange} /></div>
// 				<div className="col-xl-6">
// 					<label>Amount {index + 1}:</label>
// 					<input type="number" name={`amount${index + 1}`} onChange={handleInputChange} /></div>
// 			</div>
// 		));
// 	};
// 	return (
// 		<div>
// 			<div className="page-wrapper">
// 				<div className="content">
// 					<div className="row">
// 						<div className="col-md-12">
// 							<div className="page-header">
// 								<div className="row align-items-center">
// 									<div className="col-8">
// 										<h4>Application Processing</h4>
// 									</div>
// 									<div className="col-4 text-end">
// 										<div className="head-icons">
// 											<a href="/ApplicationProcessing" data-bs-toggle="tooltip" data-bs-placement="top"
// 												data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
// 											<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
// 												data-bs-original-title="Collapse" id="collapse-header"><i
// 													className="ti ti-chevrons-up"></i></a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
						
// 							<div className="card">
// 								<div className="card-body">
// 									<table className="table table-striped">
// 										<thead>
// 											<tr>
// 												<th>ID</th>
// 												<th>Name</th>
// 												<th>Opted Course</th>
// 												<th>Qualification</th>
// 												<th>Mobile Number</th>
// 												<th>Email ID</th>
// 												<th>Status</th>
// 												<th>Actions</th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											{registrations.length > 0 ? (
// 												registrations.map((registration) => (
// 													<tr key={registration._id}>
// 														<td>{registration.regid}</td>
// 														<td>{registration.fName} {registration.lName}</td>
// 														<td>{registration.courseName}</td>
// 														<td>{registration.qualification}</td>
// 														<td>{registration.phone}</td>
// 														<td>{registration.email}</td>
// 														<td>{registration.status || "Pending"}</td>
// 														<td>
// 															<div className="hstack gap-2 fs-15">
// 																{/* Preview Aadhar */}
// 																<a href="#" className="btn btn-icon btn-sm btn-soft-warning rounded-pill"
// 																	data-bs-toggle="modal"
// 																	data-bs-target="#preview-modal"
// 																	onClick={() => fetchCandidateDetails(registration._id)}>
// 																	<i className="feather-eye"></i>
// 																</a>

// 																{/* Preview Resume */}
// 																<a href="#" className="btn btn-icon btn-sm btn-soft-success rounded-pill"
// 																	onClick={() => handlePreview(registration.resume)}>
// 																	<i className="feather-download"></i>
// 																</a>

// 																{/* Edit (Functionality Pending) */}
// 																<a href="#" className="btn btn-icon btn-sm btn-soft-info rounded-pill">
// 																	<i className="feather-edit"></i>
// 																</a>

// 																{/* Delete Registration */}
// 																<a href="#" className="btn btn-icon btn-sm btn-soft-danger rounded-pill"
// 																	onClick={() => handleDelete(registration._id)}>
// 																	<i className="feather-trash"></i>
// 																</a>
// 															</div>
// 														</td>
// 													</tr>
// 												))
// 											) : (
// 												<tr>
// 													<td colSpan="8" className="text-center">No registrations found.</td>
// 												</tr>
// 											)}
// 										</tbody>
// 									</table>
// 								</div>
// 							</div>

// 							<div id="preview-modal" className="modal fade" tabindex="-1" role="dialog"
// 								aria-labelledby="standard-modalLabel" aria-hidden="true">
// 								<div className="modal-dialog modal-xl">
// 									<div className="modal-content">
// 										<div className="modal-header">
// 											<h4 className="modal-title" id="standard-modalLabel">Candidate Details</h4>
// 											<button type="button" className="btn-close" data-bs-dismiss="modal"
// 												aria-label="Close"></button>
// 										</div>


// 										{selectedCandidate && (
// 											<div className="modal-body">
// 												<div className="row">
// 													{Object.keys(selectedCandidate).map((key) => (
// 														key !== "installmentCount" && key !== "feeType" && key !== '_id' && key !== "aadhar" && key !== "resume" && key !== "password" && key !== "regStatus" ? (
// 															<div className="col-xl-4" key={key}>
// 																<label>{key}:</label>
// 																<input type="text" name={key} value={selectedCandidate[key] || ''} onChange={handleInputChange} />
// 															</div>
// 														) : null
// 													))}
// 													<div className="col-xl-4">
// 														<label>Registration Status:</label>
// 														<select name="regStatus" value={selectedCandidate.regStatus || ""} onChange={handleInputChange}>
// 															<option value="Approved">Approved</option>
// 															<option value="Hold">Hold</option>
// 															<option value="Pending">Pending</option>
// 															<option value="Rejected">Rejected</option>
// 														</select>
// 													</div>
// 													<div className="col-xl-4">
// 														<label>Fee Type:</label>
// 														<select name="feeType" value={selectedCandidate.feeType || ""} onChange={handleInputChange}>
// 															<option value="Single">Full Payment</option>
// 															<option value="Installment">Installment</option>
// 														</select>
// 													</div>
// 													<div className="col-xl-4">
// 														{selectedCandidate.feeType === "Installment" && (
// 															<>
// 																<label>Installment Count:</label>
// 																<input type="text" name="installmentCount" value={selectedCandidate.installmentCount || ""} onChange={handleInputChange} />

// 															</>
// 														)}
// 													</div>{generateInstallmentRows()}
// 												</div>
// 												<button onClick={handleSaveChanges}>Save</button>
// 												<button type="button" className="btn btn-cancel"
// 													data-bs-dismiss="modal">Close</button>
// 											</div>

// 										)}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 	);
// };

// export default ApplicationProcessing;


import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicationProcessing = () => {
  const [registrations, setRegistrations] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [courses, setCourses] = useState([]);
  const [branches, setBranches] = useState([]);
  
  useEffect(() => {
    fetchRegistrations();
    fetchCourses();
    fetchBranches();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/registrations");
      setRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      alert("Failed to load registrations.");
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/courses");
      console.log("Fetched courses:", response.data);
      setCourses(response.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchBranches = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/branches");
      console.log("Fetched branches:", res.data);
      setBranches(res.data || []);
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };

  const fetchCandidateDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/registration/${id}`);
      const { __v, ...filteredData } = response.data;
      setSelectedCandidate(filteredData);
      fetchCourseFee(filteredData.courseName);
      setIsModalOpen(true);
      setIsEditMode(false); // Start in read-only mode
    } catch (error) {
      console.error("Error fetching candidate details:", error);
      alert("Failed to fetch candidate details.");
    }
  };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     // Create a copy of the current state
//     let updatedCandidate = { ...selectedCandidate };
    
//     // Handle special cases for course and walkin center
//     if (name === "courseName") {
//       fetchCourseFee(value);
//     }
    
//     // Update the specific field in the copy
//     updatedCandidate[name] = value;
    
//     // Update state with the modified copy
//     setSelectedCandidate(updatedCandidate);
//   };
//   const fetchCourseFee = async (courseName) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/course-fee/${courseName}`);
//       if (response.data.fee > 0) {
//         setSelectedCandidate((prevState) => ({
//           ...prevState,
//           courseFee: prevState.feeType === "Installment" ? response.data.Ifee : response.data.fee,
//         }));
//       }
//     } catch (error) {
//       console.error("Error fetching course fee:", error);
//       alert("Failed to fetch course fee.");
//     }
//   };
// const fetchCourseFee = async (courseName) => {
// 	try {
// 	  const response = await axios.get(`http://localhost:8080/api/course-fee/${courseName}`);
// 	  if (response.data && (response.data.fee > 0 || response.data.Ifee > 0)) {
// 		setSelectedCandidate((prevState) => ({
// 		  ...prevState,
// 		  courseFee: prevState.feeType === "Installment" ? response.data.Ifee : response.data.fee,
// 		}));
// 	  }
// 	} catch (error) {
// 	  console.error("Error fetching course fee:", error);
// 	  // Don't show alert to user, just log the error
// 	}
//   };

// const handleInputChange = (e) => {
// 	const { name, value } = e.target;
	
// 	// Create a copy of the current state
// 	let updatedCandidate = { ...selectedCandidate };
	
// 	// Update the specific field in the copy
// 	updatedCandidate[name] = value;
	
// 	// Handle special cases
// 	if (name === "courseName") {
// 	  // If course name changed, fetch new course fee
// 	  fetchCourseFee(value);
// 	} else if (name === "feeType") {
// 	  // If fee type changed, update the fee value based on current course info
// 	  // The course fee is already in the state, so we just need to switch between fee and Ifee
// 	  if (value === "Single") {
// 		// For full payment
// 		updatedCandidate.courseFee = selectedCandidate.originalFee || selectedCandidate.courseFee;
// 	  } else {
// 		// For installment
// 		updatedCandidate.courseFee = selectedCandidate.originalIfee || selectedCandidate.courseFee;
// 	  }
// 	}
	
// 	// Update state with the modified copy
// 	setSelectedCandidate(updatedCandidate);
//   };
const handleInputChange = (e) => {
	const { name, value } = e.target;
	
	// Create a copy of the current state
	let updatedCandidate = { ...selectedCandidate };
	
	// Update the specific field in the copy
	updatedCandidate[name] = value;
	
	// Handle special cases
	if (name === "courseName") {
	  // If course name changed, fetch new course fee
	  fetchCourseFee(value);
	} else if (name === "feeType") {
	  // If fee type changed to Single, clean up installment fields
	  if (value === "Single") {
		// Remove installment fields from state
		delete updatedCandidate.installmentCount;
		delete updatedCandidate.paymentsPlan;
		
		// Update fee
		updatedCandidate.courseFee = selectedCandidate.originalFee || selectedCandidate.courseFee;
	  } else {
		// For installment
		updatedCandidate.courseFee = selectedCandidate.originalIfee || selectedCandidate.courseFee;
		// Initialize installment count if needed
		updatedCandidate.installmentCount = updatedCandidate.installmentCount || 1;
	  }
	}
	
	// Update state with the modified copy
	setSelectedCandidate(updatedCandidate);
  };
  const fetchCourseFee = async (courseName) => {
	try {
	  const response = await axios.get(`http://localhost:8080/api/course-fee/${courseName}`);
	  if (response.data) {
		const singleFee = response.data.fee || 0;
		const installmentFee = response.data.Ifee || 0;
		
		setSelectedCandidate((prevState) => ({
		  ...prevState,
		  originalFee: singleFee,        // Store original single payment fee
		  originalIfee: installmentFee,  // Store original installment fee
		  courseFee: prevState.feeType === "Installment" ? installmentFee : singleFee,
		}));
	  }
	} catch (error) {
	  console.error("Error fetching course fee:", error);
	}
  };


  const handleInstallmentInputChange = (e, index) => {
    const { name, value } = e.target;
    const paymentsPlan = selectedCandidate.paymentsPlan || [];
    
    // Create a new payments array if needed
    if (!paymentsPlan[index]) {
      paymentsPlan[index] = {};
    }
    
    // Update the specific field in payment plan
    if (name === `dueDate${index + 1}`) {
      paymentsPlan[index].dueDate = value;
    } else if (name === `amount${index + 1}`) {
      paymentsPlan[index].amount = value;
    }
    
    setSelectedCandidate({
      ...selectedCandidate,
      paymentsPlan
    });
  };

  const handleSaveChanges = async () => {
    try {
      // Prepare data for saving
      const dataToSave = {
        ...selectedCandidate,
        // Include any additional formatted data here if needed
      };
      
      await axios.put(`http://localhost:8080/api/registration/${selectedCandidate._id}`, dataToSave);
      alert("Candidate details updated successfully!");
      fetchRegistrations();
      setIsModalOpen(false);
      setIsEditMode(false);
    } catch (error) {
      console.error("Error updating candidate details:", error);
      alert("Failed to update candidate details.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this registration?")) return;

    try {
      await axios.delete(`http://localhost:8080/api/registration/${id}`);
      setRegistrations(registrations.filter((reg) => reg._id !== id));
      alert("Registration deleted successfully!");
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("Failed to delete registration.");
    }
  };

  const handlePreview = (filePath) => {
    if (filePath) {
      window.open(`http://localhost:8080/${filePath}`, "_blank");
    } else {
      alert("No file uploaded for preview.");
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const generateInstallmentRows = () => {
    const installmentCount = selectedCandidate.feeType === "Installment" ? parseInt(selectedCandidate.installmentCount) : 0;
    return Array.from({ length: installmentCount }, (_, index) => {
      const paymentsPlan = selectedCandidate.paymentsPlan || [];
      const currentPayment = paymentsPlan[index] || {};
      
      return (
        <div key={index} className="row mb-3">
          <div className="col-xl-6">
            <label className="form-label">Due Date {index + 1}:</label>
            <input 
              type="date" 
              className="form-control"
              name={`dueDate${index + 1}`} 
              value={currentPayment.dueDate || ""}
              onChange={(e) => handleInstallmentInputChange(e, index)}
              readOnly={!isEditMode}
            />
          </div>
          <div className="col-xl-6">
            <label className="form-label">Amount {index + 1}:</label>
            <input 
              type="number" 
              className="form-control"
              name={`amount${index + 1}`} 
              value={currentPayment.amount || ""}
              onChange={(e) => handleInstallmentInputChange(e, index)}
              readOnly={!isEditMode}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4>Application Processing</h4>
                  </div>
                  <div className="col-4 text-end">
                    <div className="head-icons">
                      <a href="/ApplicationProcessing" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                      <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Collapse" id="collapse-header"><i
                          className="ti ti-chevrons-up"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Opted Course</th>
                        <th>Qualification</th>
                        <th>Mobile Number</th>
                        <th>Email ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrations.length > 0 ? (
                        registrations.map((registration) => (
                          <tr key={registration._id}>
                            <td>{registration.regid}</td>
                            <td>{registration.fName} {registration.lName}</td>
                            <td>{registration.courseName}</td>
                            <td>{registration.qualification}</td>
                            <td>{registration.phone}</td>
                            <td>{registration.email}</td>
                            <td>{registration.regStatus || "Pending"}</td>
                            <td>
                              <div className="hstack gap-2 fs-15">
                                {/* Preview/Edit Candidate */}
                                <a href="#" className="btn btn-icon btn-sm btn-soft-warning rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#preview-modal"
                                  onClick={() => fetchCandidateDetails(registration._id)}>
                                  <i className="feather-eye"></i>
                                </a>

                                {/* Preview Resume */}
                                <a href="#" className="btn btn-icon btn-sm btn-soft-success rounded-pill"
                                  onClick={() => handlePreview(registration.resume)}>
                                  <i className="feather-download"></i>
                                </a>

                                {/* Delete Registration */}
                                <a href="#" className="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                  onClick={() => handleDelete(registration._id)}>
                                  <i className="feather-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="text-center">No registrations found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Candidate Details Modal */}
              <div id="preview-modal" className="modal fade" tabIndex="-1" role="dialog"
                aria-labelledby="standard-modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="standard-modalLabel">
                        Candidate Details
                        <button 
                          type="button" 
                          className={`btn btn-sm ms-3 ${isEditMode ? 'btn-info' : 'btn-primary'}`}
                          onClick={toggleEditMode}
                        >
                          {isEditMode ? 'Cancel Edit' : 'Edit Details'}
                        </button>
                      </h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>

                    {selectedCandidate && (
                      <div className="modal-body">
                        <div className="row g-3">
                          {/* Personal Information Section */}
                          <div className="col-12">
                            <h5 className="form-section-title">Personal Information</h5>
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">First Name:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="fName" 
                              value={selectedCandidate.fName || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Last Name:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="lName" 
                              value={selectedCandidate.lName || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Father's Name:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="fatherName" 
                              value={selectedCandidate.fatherName || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Email:</label>
                            <input 
                              type="email" 
                              className="form-control"
                              name="email" 
                              value={selectedCandidate.email || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Phone:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="phone" 
                              value={selectedCandidate.phone || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">City:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="city" 
                              value={selectedCandidate.city || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">State:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="state" 
                              value={selectedCandidate.state || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-8">
                            <label className="form-label">Contact Address:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="contactAddress" 
                              value={selectedCandidate.contactAddress || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          {/* Educational Information Section */}
                          <div className="col-12 mt-4">
                            <h5 className="form-section-title">Educational Information</h5>
                          </div>
                          
                          <div className="col-xl-6">
                            <label className="form-label">Qualification:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="qualification" 
                              value={selectedCandidate.qualification || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          <div className="col-xl-6">
                            <label className="form-label">College Name:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="collegeName" 
                              value={selectedCandidate.collegeName || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          {/* Course & Center Information Section */}
                          <div className="col-12 mt-4">
                            <h5 className="form-section-title">Course & Center Information</h5>
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Walk-in Center:</label>
                            {isEditMode ? (
                              <select 
                                className="form-select"
                                name="branchId" 
                                value={selectedCandidate.branchId || ''} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select Center</option>
                                {branches.map((branch, idx) => (
                                  <option key={idx} value={branch.name || branch.branchName}>
                                    {branch.name || branch.location}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input 
                                type="text" 
                                className="form-control"
                                value={selectedCandidate.branchId || ''} 
                                readOnly
                              />
                            )}
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Course Name:</label>
                            {isEditMode ? (
                              <select 
                                className="form-select"
                                name="courseName" 
                                value={selectedCandidate.courseName || ''} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select Course</option>
								{courses.map((course, idx) => (
  <option key={idx} value={course.name || course.courseName}>
    {course.name || course.courseName}
  </option>
))}
                              </select>
                            ) : (
                              <input 
                                type="text" 
                                className="form-control"
                                value={selectedCandidate.courseName || ''} 
                                readOnly
                              />
                            )}
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Joining Date:</label>
                            <input 
                              type="date" 
                              className="form-control"
                              name="joiningDate" 
                              value={selectedCandidate.joiningDate || ''} 
                              onChange={handleInputChange}
                              readOnly={!isEditMode}
                            />
                          </div>
                          
                          {/* Payment Information Section */}
                          <div className="col-12 mt-4">
                            <h5 className="form-section-title">Payment Information</h5>
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Fee Type:</label>
                            {isEditMode ? (
                              <select 
                                className="form-select"
                                name="feeType" 
                                value={selectedCandidate.feeType || 'Single'} 
                                onChange={handleInputChange}
                              >
                                <option value="Single">Full Payment</option>
                                <option value="Installment">Installment</option>
                              </select>
                            ) : (
                              <input 
                                type="text" 
                                className="form-control"
                                value={selectedCandidate.feeType === 'Single' ? 'Full Payment' : 'Installment'} 
                                readOnly
                              />
                            )}
                          </div>
                          
                          <div className="col-xl-4">
                            <label className="form-label">Course Fee:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="courseFee" 
                              value={selectedCandidate.courseFee || ''} 
                              onChange={handleInputChange}
                              readOnly={true} // Always read-only as it's calculated
                            />
                          </div>
                          
                          {selectedCandidate.feeType === "Installment" && (
                            <div className="col-xl-4">
                              <label className="form-label">Installment Count:</label>
                              <input 
                                type="number" 
                                className="form-control"
                                name="installmentCount" 
                                value={selectedCandidate.installmentCount || ''} 
                                onChange={handleInputChange}
                                readOnly={!isEditMode}
                                min="1"
                                max="12"
                              />
                            </div>
                          )}
                          
                          {/* Installment Plan Section */}
                          {selectedCandidate.feeType === "Installment" && selectedCandidate.installmentCount > 0 && (
                            <div className="col-12 mt-3">
                              <h6>Payment Plan</h6>
                              <div className="installment-plan">
                                {generateInstallmentRows()}
                              </div>
                            </div>
                          )}
                          
                          {/* Status Information */}
                          <div className="col-12 mt-4">
                            <h5 className="form-section-title">Status Information</h5>
                          </div>
                          
                          <div className="col-xl-6">
                            <label className="form-label">Registration Status:</label>
                            {isEditMode ? (
                              <select 
                                className="form-select"
                                name="regStatus" 
                                value={selectedCandidate.regStatus || 'Pending'} 
                                onChange={handleInputChange}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Hold">Hold</option>
                                <option value="Rejected">Rejected</option>
                              </select>
                            ) : (
                              <input 
                                type="text" 
                                className="form-control"
                                value={selectedCandidate.regStatus || 'Pending'} 
                                readOnly
                              />
                            )}
                          </div>
                          
                          <div className="col-xl-6">
                            <label className="form-label">Form Status:</label>
                            <input 
                              type="text" 
                              className="form-control"
                              name="formStatus" 
                              value={selectedCandidate.formStatus || 'Pending'} 
                              readOnly={true} // This should be controlled by system
                            />
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="col-12 mt-4 text-end">
                            {isEditMode && (
                              <button 
                                type="button" 
                                className="btn btn-primary me-2"
                                onClick={handleSaveChanges}
                              >
                                Save Changes
                              </button>
                            )}
                            <button 
                              type="button" 
                              className="btn btn-secondary" 
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessing;
