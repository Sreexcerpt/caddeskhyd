// import { useState, useEffect } from "react";
// import axios from "axios";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Assuming you get the logged-in user's ID from localStorage or context

// const user = JSON.parse(localStorage.getItem("user"));
// const loggedInUserId = user ? user._id : null; 
// console.log("Logged-in User ID:", loggedInUserId);

//   // Fetch assigned enquiries
//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     axios
//       .get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`)
//       .then((res) => {
//         setAssignedEnquiries(res.data);
//       })
//       .catch((err) => console.error("Error fetching assigned enquiries:", err))
//       .finally(() => setLoading(false));
//   }, [loggedInUserId]);

//   return (
//     <div>
//       <h2>Telecaller Dashboard</h2>

//       {loading ? (
//         <p>Loading assigned enquiries...</p>
//       ) : assignedEnquiries.length === 0 ? (
//         <p>No enquiries assigned to you.</p>
//       ) : (
//         <table border="1" style={{ width: "160%", textAlign: "left",marginLeft:'400px',marginTop:'100px' }}>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Mobile</th>
//               <th>Interested Course</th>
//               <th>Branch</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignedEnquiries.map((enquiry) => (
//               <tr key={enquiry._id}>
//                 <td>{enquiry.firstname}</td>
//                 <td>{enquiry.lastname}</td>
//                 <td>{enquiry.mobileNumber}</td>
//                 <td>{enquiry.interestedCourses}</td>
//                 <td>{enquiry.branchId}</td>
//                 <td>{enquiry.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TelecallerDashboard;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [followUps, setFollowUps] = useState({}); // Stores follow-ups per enquiry

//   const user = JSON.parse(localStorage.getItem("user"));
//   const loggedInUserId = user ? user._id : null; 
//   console.log("Logged-in User ID:", loggedInUserId);

//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     axios
//       .get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`)
//       .then((res) => {
//         setAssignedEnquiries(res.data);
//       })
//       .catch((err) => console.error("Error fetching assigned enquiries:", err))
//       .finally(() => setLoading(false));
//   }, [loggedInUserId]);

//   // Handle follow-up status change
//   const handleFollowUpChange = (enquiryId, field, value) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         [field]: value,
//       },
//     }));
//   };

//   // Add new follow-up field dynamically
//   const addFollowUp = (enquiryId) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         followUpDates: [...(prev[enquiryId]?.followUpDates || []), ""],
//       },
//     }));
//   };

//   // Handle follow-up date input
//   const handleFollowUpDateChange = (enquiryId, index, value) => {
//     const updatedDates = [...followUps[enquiryId].followUpDates];
//     updatedDates[index] = value;

//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         followUpDates: updatedDates,
//       },
//     }));
//   };

//   // Save follow-up to backend
//   const saveFollowUp = async (enquiryId) => {
//     try {
//       const { status, followUpDates } = followUps[enquiryId];
//       await axios.post("http://localhost:8080/api/save-followup", {
//         enquiryId,
//         userId: loggedInUserId,
//         status,
//         followUpDates,
//       });

//       alert("Follow-up saved successfully!");
//     } catch (error) {
//       console.error("Error saving follow-up:", error);
//       alert("Failed to save follow-up.");
//     }
//   };

//   return (
//     <div>
//       <h2>Telecaller Dashboard</h2>

//       {loading ? (
//         <p>Loading assigned enquiries...</p>
//       ) : assignedEnquiries.length === 0 ? (
//         <p>No enquiries assigned to you.</p>
//       ) : (
//         <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "50px" }}>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Mobile</th>
//               <th>Interested Course</th>
//               <th>Branch</th>
//               <th>Status</th>
//               <th>Follow-up</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignedEnquiries.map((enquiry) => (
//               <tr key={enquiry._id}>
//                 <td>{enquiry.firstname}</td>
//                 <td>{enquiry.lastname}</td>
//                 <td>{enquiry.mobileNumber}</td>
//                 <td>{enquiry.interestedCourses}</td>
//                 <td>{enquiry.branchId}</td>
//                 <td>{enquiry.status}</td>
//                 <td>
//                   {/* Follow-up dropdown */}
//                   <select
//                     value={followUps[enquiry._id]?.status || ""}
//                     onChange={(e) => handleFollowUpChange(enquiry._id, "status", e.target.value)}
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Interested">Interested</option>
//                     <option value="Not Interested">Not Interested</option>
//                     <option value="No Response">No Response</option>
//                     <option value="Not Reachable">Not Reachable</option>
//                     <option value="Switched Off">Switched Off</option>
//                     <option value="Call Later">Call Later</option>
//                     <option value="Ready to Join">Ready to Join</option>
//                   </select>

//                   {/* Follow-up date fields */}
//                   {followUps[enquiry._id]?.followUpDates?.map((date, index) => (
//                     <input
//                       key={index}
//                       type="date"
//                       value={date}
//                       onChange={(e) => handleFollowUpDateChange(enquiry._id, index, e.target.value)}
//                     />
//                   ))}

//                   <button onClick={() => addFollowUp(enquiry._id)}>+ Add Follow-up</button>
//                   <button onClick={() => saveFollowUp(enquiry._id)}>Save</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TelecallerDashboard;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [followUps, setFollowUps] = useState({}); // Stores follow-ups per enquiry

//   const user = JSON.parse(localStorage.getItem("user"));
//   const loggedInUserId = user ? user._id : null;
//   console.log("Logged-in User ID:", loggedInUserId);

//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     // Fetch assigned enquiries
//     axios
//       .get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`)
//       .then(async (res) => {
//         setAssignedEnquiries(res.data);

//         // Fetch follow-ups for each enquiry
//         const followUpData = {};
//         for (const enquiry of res.data) {
//           try {
//             const followUpRes = await axios.get(
//               `http://localhost:8080/api/followups/${enquiry._id}`
//             );
//             followUpData[enquiry._id] = followUpRes.data || [];
//           } catch (error) {
//             console.error("Error fetching follow-ups:", error);
//           }
//         }

//         setFollowUps(followUpData);
//       })
//       .catch((err) => console.error("Error fetching assigned enquiries:", err))
//       .finally(() => setLoading(false));
//   }, [loggedInUserId]);

//   // Handle follow-up status change
//   const handleFollowUpChange = (enquiryId, field, value) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         [field]: value,
//       },
//     }));
//   };

//   // Add new follow-up field dynamically
//   const addFollowUp = (enquiryId) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: [...(prev[enquiryId]?.newFollowUpDates || []), ""],
//       },
//     }));
//   };

//   // Handle follow-up date input
//   const handleFollowUpDateChange = (enquiryId, index, value) => {
//     const updatedDates = [...followUps[enquiryId].newFollowUpDates];
//     updatedDates[index] = value;

//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: updatedDates,
//       },
//     }));
//   };

//   // Save follow-up to backend
//   const saveFollowUp = async (enquiryId) => {
//     try {
//       const { status, newFollowUpDates } = followUps[enquiryId];

//       await axios.post("http://localhost:8080/api/save-followup", {
//         enquiryId,
//         userId: loggedInUserId,
//         status,
//         followUpDates: newFollowUpDates,
//       });

//       alert("Follow-up saved successfully!");

//       // Fetch updated follow-ups after saving
//       const followUpRes = await axios.get(
//         `http://localhost:8080/api/followups/${enquiryId}`
//       );
//       setFollowUps((prev) => ({
//         ...prev,
//         [enquiryId]: {
//           ...prev[enquiryId],
//           existingFollowUpDates: followUpRes.data || [],
//           newFollowUpDates: [],
//         },
//       }));
//     } catch (error) {
//       console.error("Error saving follow-up:", error);
//       alert("Failed to save follow-up.");
//     }
//   };

//   return (
//     <div>
//       <h2>Telecaller Dashboard</h2>

//       {loading ? (
//         <p>Loading assigned enquiries...</p>
//       ) : assignedEnquiries.length === 0 ? (
//         <p>No enquiries assigned to you.</p>
//       ) : (
//         <table
//           border="1"
//           style={{ width: "100%", textAlign: "left", marginTop: "50px" }}
//         >
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Mobile</th>
//               <th>Interested Course</th>
//               <th>Branch</th>
//               <th>Status</th>
//               <th>Follow-up</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignedEnquiries.map((enquiry) => (
//               <tr key={enquiry._id}>
//                 <td>{enquiry.firstname}</td>
//                 <td>{enquiry.lastname}</td>
//                 <td>{enquiry.mobileNumber}</td>
//                 <td>{enquiry.interestedCourses}</td>
//                 <td>{enquiry.branchId}</td>
//                 <td>{enquiry.status}</td>
//                 <td>
//                   {/* Follow-up status dropdown */}
//                   <select
//                     value={followUps[enquiry._id]?.status || ""}
//                     onChange={(e) =>
//                       handleFollowUpChange(enquiry._id, "status", e.target.value)
//                     }
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Interested">Interested</option>
//                     <option value="Not Interested">Not Interested</option>
//                     <option value="No Response">No Response</option>
//                     <option value="Not Reachable">Not Reachable</option>
//                     <option value="Switched Off">Switched Off</option>
//                     <option value="Call Later">Call Later</option>
//                     <option value="Ready to Join">Ready to Join</option>
//                   </select>

//                   {/* Display existing follow-up dates (disabled) */}
//                   {followUps[enquiry._id]?.existingFollowUpDates?.map(
//                     (followUp, index) => (
//                       <input
//                         key={index}
//                         type="date"
//                         value={followUp.followUpDate}
//                         disabled
//                         style={{ margin: "5px", cursor: "not-allowed" }}
//                       />
//                     )
//                   )}

//                   {/* New follow-up date fields */}
//                   {followUps[enquiry._id]?.newFollowUpDates?.map(
//                     (date, index) => (
//                       <input
//                         key={index}
//                         type="date"
//                         value={date}
//                         onChange={(e) =>
//                           handleFollowUpDateChange(
//                             enquiry._id,
//                             index,
//                             e.target.value
//                           )
//                         }
//                       />
//                     )
//                   )}

//                   <button onClick={() => addFollowUp(enquiry._id)}>
//                     + Add Follow-up
//                   </button>
//                   <button onClick={() => saveFollowUp(enquiry._id)}>Save</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TelecallerDashboard;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [followUps, setFollowUps] = useState({});

//   const user = JSON.parse(localStorage.getItem("user"));
//   const loggedInUserId = user ? user._id : null;

//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     axios
//       .get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`)
//       .then(async (res) => {
//         setAssignedEnquiries(res.data);

//         const followUpData = {};
//         for (const enquiry of res.data) {
//           try {
//             const followUpRes = await axios.get(
//               `http://localhost:8080/api/followups/${enquiry._id}`
//             );

//             console.log("Follow-up Data:", followUpRes.data); // Debugging

//             followUpData[enquiry._id] = {
//               existingFollowUpDates: followUpRes.data.followUps || [],
//               newFollowUpDates: [],
//               status: followUpRes.data.followUps.length
//                 ? followUpRes.data.followUps.slice(-1)[0].status
//                 : "",
//             };
//           } catch (error) {
//             console.error("Error fetching follow-ups:", error);
//           }
//         }

//         setFollowUps(followUpData);
//       })
//       .catch((err) => console.error("Error fetching assigned enquiries:", err))
//       .finally(() => setLoading(false));
//   }, [loggedInUserId]);

//   const handleFollowUpChange = (enquiryId, field, value) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         [field]: value,
//       },
//     }));
//   };

//   const addFollowUp = (enquiryId) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: [...(prev[enquiryId]?.newFollowUpDates || []), ""],
//       },
//     }));
//   };

//   const handleFollowUpDateChange = (enquiryId, index, value) => {
//     const updatedDates = [...followUps[enquiryId].newFollowUpDates];
//     updatedDates[index] = value;

//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: updatedDates,
//       },
//     }));
//   };

//   const saveFollowUp = async (enquiryId) => {
//     try {
//       const { status, newFollowUpDates } = followUps[enquiryId];

//       await axios.post("http://localhost:8080/api/save-followup", {
//         enquiryId,
//         userId: loggedInUserId,
//         status,
//         followUpDates: newFollowUpDates,
//       });

//       alert("Follow-up saved successfully!");

//       const followUpRes = await axios.get(
//         `http://localhost:8080/api/followups/${enquiryId}`
//       );
//       setFollowUps((prev) => ({
//         ...prev,
//         [enquiryId]: {
//           ...prev[enquiryId],
//           existingFollowUpDates: followUpRes.data.followUps || [],
//           newFollowUpDates: [],
//         },
//       }));
//     } catch (error) {
//       console.error("Error saving follow-up:", error);
//       alert("Failed to save follow-up.");
//     }
//   };

//   return (
//     <div>
//       <h2>Telecaller Dashboard</h2>

//       {loading ? (
//         <p>Loading assigned enquiries...</p>
//       ) : assignedEnquiries.length === 0 ? (
//         <p>No enquiries assigned to you.</p>
//       ) : (
//         <table
//           border="1"
//           style={{ width: "60%", textAlign: "left", marginTop: "50px", marginLeft:'300px' }}
//         >
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Mobile</th>
//               <th>Interested Course</th>
//               <th>Branch</th>
//               <th>Status</th>
//               <th>Follow-ups</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignedEnquiries.map((enquiry) => (
//               <tr key={enquiry._id}>
//                 <td>{enquiry.firstname}</td>
//                 <td>{enquiry.lastname}</td>
//                 <td>{enquiry.mobileNumber}</td>
//                 <td>{enquiry.interestedCourses}</td>
//                 <td>{enquiry.branchId}</td>
//                 <td>{enquiry.status}</td>
//                 <td>
//                   {/* Follow-up status dropdown */}
//                   <select
//                     value={followUps[enquiry._id]?.status || ""}
//                     onChange={(e) =>
//                       handleFollowUpChange(enquiry._id, "status", e.target.value)
//                     }
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Interested">Interested</option>
//                     <option value="Not Interested">Not Interested</option>
//                     <option value="No Response">No Response</option>
//                     <option value="Not Reachable">Not Reachable</option>
//                     <option value="Switched Off">Switched Off</option>
//                     <option value="Call Later">Call Later</option>
//                     <option value="Ready to Join">Ready to Join</option>
//                   </select>

//                   <div>
//                     <strong>Existing Follow-ups:</strong>
//                     {followUps[enquiry._id]?.existingFollowUpDates?.length > 0 ? (
//                       followUps[enquiry._id].existingFollowUpDates.map(
//                         (followUp, index) => (
//                           <input
//                             key={index}
//                             type="date"
//                             value={followUp.followUpDate}
//                             disabled
//                             style={{
//                               margin: "5px",
//                               cursor: "not-allowed",
//                               backgroundColor: "#f0f0f0",
//                             }}
//                           />
//                         )
//                       )
//                     ) : (
//                       <p>No previous follow-ups.</p>
//                     )}
//                   </div>

//                   {/* New follow-up date fields */}
//                   {followUps[enquiry._id]?.newFollowUpDates?.map(
//                     (date, index) => (
//                       <input
//                         key={index}
//                         type="date"
//                         value={date}
//                         onChange={(e) =>
//                           handleFollowUpDateChange(
//                             enquiry._id,
//                             index,
//                             e.target.value
//                           )
//                         }
//                       />
//                     )
//                   )}

//                   <button onClick={() => addFollowUp(enquiry._id)}>
//                     + Add Follow-up
//                   </button>
//                   <button onClick={() => saveFollowUp(enquiry._id)}>Save</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TelecallerDashboard;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [followUps, setFollowUps] = useState({});

//   const user = JSON.parse(localStorage.getItem("user"));
//   const loggedInUserId = user ? user._id : null;

//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     const fetchEnquiriesAndFollowUps = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`);
//         setAssignedEnquiries(res.data);

//         const followUpData = {};
//         await Promise.all(
//           res.data.map(async (enquiry) => {
//             try {
//               const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiry._id}`);
//               followUpData[enquiry._id] = {
//                 existingFollowUpDates: followUpRes.data.followUps || [],
//                 newFollowUpDates: [],
//                 status: followUpRes.data.followUps.length ? followUpRes.data.followUps.slice(-1)[0].status : "",
//               };
//             } catch (error) {
//               console.error("Error fetching follow-ups:", error);
//               followUpData[enquiry._id] = { existingFollowUpDates: [], newFollowUpDates: [], status: "" };
//             }
//           })
//         );

//         setFollowUps(followUpData);
//       } catch (err) {
//         console.error("Error fetching assigned enquiries:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiriesAndFollowUps();
//   }, [loggedInUserId]);

//   const handleFollowUpChange = (enquiryId, field, value) => {
//     setFollowUps((prev) => ({ ...prev, [enquiryId]: { ...prev[enquiryId], [field]: value } }));
//   };

//   const addFollowUp = (enquiryId) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: { ...prev[enquiryId], newFollowUpDates: [...prev[enquiryId]?.newFollowUpDates, ""] },
//     }));
//   };

//   const handleFollowUpDateChange = (enquiryId, index, value) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: prev[enquiryId].newFollowUpDates.map((date, i) => (i === index ? value : date)),
//       },
//     }));
//   };

//   const saveFollowUp = async (enquiryId) => {
//     try {
//       const { status, newFollowUpDates } = followUps[enquiryId];
//       await axios.post("http://localhost:8080/api/save-followup", {
//         enquiryId,
//         userId: loggedInUserId,
//         status,
//         followUpDates: newFollowUpDates,
//       });

//       alert("Follow-up saved successfully!");
//       const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiryId}`);

//       setFollowUps((prev) => ({
//         ...prev,
//         [enquiryId]: {
//           existingFollowUpDates: followUpRes.data.followUps || [],
//           newFollowUpDates: [],
//           status: prev[enquiryId].status,
//         },
//       }));
//     } catch (error) {
//       console.error("Error saving follow-up:", error);
//       alert("Failed to save follow-up.");
//     }
//   };

//   // Helper function to filter follow-ups specific to an enquiry
//   const getFollowUpsForEnquiry = (enquiryId) => {
//     if (!followUps[enquiryId] || !followUps[enquiryId].existingFollowUpDates) {
//       return [];
//     }
    
//     return followUps[enquiryId].existingFollowUpDates.filter(followUp => 
//       followUp.enquiryId === enquiryId || 
//       (followUp.enquiryId && followUp.enquiryId.$oid === enquiryId)
//     );
//   };

//   return (
//     <div>
//       <h2>Telecaller Dashboard</h2>
//       {loading ? (
//         <p>Loading assigned enquiries...</p>
//       ) : assignedEnquiries.length === 0 ? (
//         <p>No enquiries assigned to you.</p>
//       ) : (
//         <table border="1" style={{ width: "80%", textAlign: "left", margin: "20px auto" }}>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Mobile</th>
//               <th>Interested Course</th>
//               <th>Branch</th>
//               <th>Status</th>
//               <th>Follow-ups</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignedEnquiries.map((enquiry) => (
//               <tr key={enquiry._id}>
//                 <td>{enquiry.firstname}</td>
//                 <td>{enquiry.lastname}</td>
//                 <td>{enquiry.mobileNumber}</td>
//                 <td>{enquiry.interestedCourses}</td>
//                 <td>{enquiry.branchId}</td>
//                 <td>
//                   <select
//                     value={followUps[enquiry._id]?.status || ""}
//                     onChange={(e) => handleFollowUpChange(enquiry._id, "status", e.target.value)}
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Interested">Interested</option>
//                     <option value="Not Interested">Not Interested</option>
//                     <option value="No Response">No Response</option>
//                     <option value="Not Reachable">Not Reachable</option>
//                     <option value="Switched Off">Switched Off</option>
//                     <option value="Call Later">Call Later</option>
//                     <option value="Ready to Join">Ready to Join</option>
//                   </select>
//                 </td>
//                 <td>
//                   <div>
//                     <strong>Existing Follow-ups:</strong>
//                     {followUps[enquiry._id]?.existingFollowUpDates?.length > 0 ? (
//                       // Only show follow-ups that belong to this specific enquiry
//                       followUps[enquiry._id].existingFollowUpDates
//                         .filter(followUp => {
//                           const enquiryIdMatch = 
//                             // Check if enquiryId is a string
//                             followUp.enquiryId === enquiry._id ||
//                             // Check if enquiryId is an object with $oid
//                             (followUp.enquiryId && followUp.enquiryId.$oid === enquiry._id);
//                           return enquiryIdMatch;
//                         })
//                         .map((followUp, index) => (
//                           <input
//                             key={index}
//                             type="date"
//                             value={followUp.followUpDate}
//                             disabled
//                             style={{ margin: "5px", cursor: "not-allowed", backgroundColor: "#f0f0f0" }}
//                           />
//                         ))
//                     ) : (
//                       <p>No previous follow-ups.</p>
//                     )}
//                   </div>
//                   {followUps[enquiry._id]?.newFollowUpDates?.map((date, index) => (
//                     <input
//                       key={index}
//                       type="date"
//                       value={date}
//                       onChange={(e) => handleFollowUpDateChange(enquiry._id, index, e.target.value)}
//                       style={{ marginRight: "5px" }}
//                     />
//                   ))}
//                   <button onClick={() => addFollowUp(enquiry._id)}>+ Add</button>
//                   <button onClick={() => saveFollowUp(enquiry._id)}>Save</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TelecallerDashboard;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Telecaller.css";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [followUps, setFollowUps] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   const user = JSON.parse(localStorage.getItem("user"));
//   const loggedInUserId = user ? user._id : null;

//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     const fetchEnquiriesAndFollowUps = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`);
//         setAssignedEnquiries(res.data);

//         const followUpData = {};
//         await Promise.all(
//           res.data.map(async (enquiry) => {
//             try {
//               const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiry._id}`);
//               followUpData[enquiry._id] = {
//                 existingFollowUpDates: followUpRes.data.followUps || [],
//                 newFollowUpDates: [],
//                 status: followUpRes.data.followUps.length ? followUpRes.data.followUps.slice(-1)[0].status : "",
//               };
//             } catch (error) {
//               console.error("Error fetching follow-ups:", error);
//               followUpData[enquiry._id] = { existingFollowUpDates: [], newFollowUpDates: [], status: "" };
//             }
//           })
//         );

//         setFollowUps(followUpData);
//       } catch (err) {
//         console.error("Error fetching assigned enquiries:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiriesAndFollowUps();
//   }, [loggedInUserId]);

//   const handleFollowUpChange = (enquiryId, field, value) => {
//     setFollowUps((prev) => ({ ...prev, [enquiryId]: { ...prev[enquiryId], [field]: value } }));
//   };

//   const addFollowUp = (enquiryId) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: { ...prev[enquiryId], newFollowUpDates: [...prev[enquiryId]?.newFollowUpDates, ""] },
//     }));
//   };

//   const handleFollowUpDateChange = (enquiryId, index, value) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: prev[enquiryId].newFollowUpDates.map((date, i) => (i === index ? value : date)),
//       },
//     }));
//   };

//   const saveFollowUp = async (enquiryId) => {
//     try {
//       const { status, newFollowUpDates } = followUps[enquiryId];
      
//       if (!newFollowUpDates.length && !status) {
//         alert("Please add at least one follow-up date or select a status before saving.");
//         return;
//       }
      
//       await axios.post("http://localhost:8080/api/save-followup", {
//         enquiryId,
//         userId: loggedInUserId,
//         status,
//         followUpDates: newFollowUpDates,
//       });

//       alert("Follow-up saved successfully!");
//       const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiryId}`);

//       setFollowUps((prev) => ({
//         ...prev,
//         [enquiryId]: {
//           existingFollowUpDates: followUpRes.data.followUps || [],
//           newFollowUpDates: [],
//           status: prev[enquiryId].status,
//         },
//       }));
//     } catch (error) {
//       console.error("Error saving follow-up:", error);
//       alert("Failed to save follow-up.");
//     }
//   };

//   const getFollowUpsForEnquiry = (enquiryId) => {
//     if (!followUps[enquiryId] || !followUps[enquiryId].existingFollowUpDates) {
//       return [];
//     }
    
//     return followUps[enquiryId].existingFollowUpDates.filter(followUp => 
//       followUp.enquiryId === enquiryId || 
//       (followUp.enquiryId && followUp.enquiryId.$oid === enquiryId)
//     );
//   };

//   const filteredEnquiries = assignedEnquiries.filter(enquiry => 
//     enquiry.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     enquiry.lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     enquiry.mobileNumber?.includes(searchTerm)
//   );

//   // Pagination
//   const indexOfLastEnquiry = currentPage * itemsPerPage;
//   const indexOfFirstEnquiry = indexOfLastEnquiry - itemsPerPage;
//   const currentEnquiries = filteredEnquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);
//   const totalPages = Math.ceil(filteredEnquiries.length / itemsPerPage);

//   const addToWalkin = (enquiryId) => {
//     // Implement your addToWalkin functionality here
//     alert(`Added enquiry ${enquiryId} to walkin!`);
//   };

//   return (
//     <div className="telecaller-dashboard">
//       <div className="sidebar">
//         <div className="logo-container">
//           <h2>Tri icons</h2>
//         </div>
//         <div className="nav-label">Telecallerdashboard</div>
//         <ul className="nav-links">
//           <li><a href="#"><i className="icon dashboard-icon"></i> Dashboard</a></li>
//           <li><a href="#"><i className="icon phone-icon"></i> Add To Calls</a></li>
//           <li className="active"><a href="#"><i className="icon logs-icon"></i> Call Logs</a></li>
//           <li><a href="#"><i className="icon student-icon"></i> StudentWalkin Details</a></li>
//           <li><a href="#"><i className="icon register-icon"></i> Register Details</a></li>
//         </ul>
//       </div>

//       <div className="main-content">
//         <div className="page-header">
//           <h1 className="page-title">Call Logs</h1>
//           <div className="header-actions">
//             <button className="btn primary-btn">Add Call</button>
//             <div className="search-container">
//               <input 
//                 type="text" 
//                 placeholder="Search by Name or Phone" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="search-input"
//               />
//             </div>
//             <button className="btn secondary-btn">Add to Walkin</button>
//             <button className="btn outline-btn">Export</button>
//           </div>
//         </div>

//         {loading ? (
//           <div className="loading-container">
//             <p>Loading assigned enquiries...</p>
//           </div>
//         ) : assignedEnquiries.length === 0 ? (
//           <div className="no-data-container">
//             <p>No enquiries assigned to you.</p>
//           </div>
//         ) : (
//           <>
//             <div className="table-container">
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>TIME STAMP</th>
//                     <th>NAME</th>
//                     <th>PHONE</th>
//                     <th>REMARK</th>
//                     <th>FOLLOWUPS</th>
//                     <th>PREVIEW</th>
//                     {/* <th>ACTIONS</th> */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentEnquiries.map((enquiry) => (
//                     <tr key={enquiry._id}>
//                       <td>
//                         {new Date(enquiry.createdAt || Date.now()).toLocaleString('en-US', {
//                           year: 'numeric',
//                           month: 'short',
//                           day: 'numeric',
//                           hour: '2-digit',
//                           minute: '2-digit'
//                         })}
//                       </td>
//                       <td>{enquiry.firstname} {enquiry.lastname}</td>
//                       <td>{enquiry.mobileNumber}</td>
//                       <td>
//                         <select
//                           className="status-select"
//                           value={followUps[enquiry._id]?.status || ""}
//                           onChange={(e) => handleFollowUpChange(enquiry._id, "status", e.target.value)}
//                         >
//                           <option value="">Select status</option>
//                           <option value="Ready to Join">Ready to Join</option>
//                           <option value="Interested">Interested</option>
//                           <option value="Not Interested">Not Interested</option>
//                           <option value="No Response">No Response</option>
//                           <option value="Not Reachable">Not Reachable</option>
//                           <option value="Switched Off">Switched Off</option>
//                           <option value="Call Later">Call Later</option>
//                         </select>
//                       </td>
//                       <td className="followups-cell">
//                         <div className="followup-dates">
//                           {getFollowUpsForEnquiry(enquiry._id).map((followUp, index) => (
//                             <div key={index} className="followup-date">
//                               {new Date(followUp.followUpDate).toLocaleDateString('en-US', {
//                                 month: 'short',
//                                 day: 'numeric',
//                                 year: 'numeric'
//                               })}
//                             </div>
//                           ))}
//                           {followUps[enquiry._id]?.newFollowUpDates?.map((date, index) => (
//                             <input
//                               key={`new-${index}`}
//                               type="date"
//                               value={date}
//                               onChange={(e) => handleFollowUpDateChange(enquiry._id, index, e.target.value)}
//                               className="date-input"
//                             />
//                           ))}
//                         </div>
//                         <div className="followup-actions">
//                           <button 
//                             className="followup-btn add-btn"
//                             onClick={() => addFollowUp(enquiry._id)}
//                           >
//                             + Add Followup
//                           </button>
//                           <button 
//                             className="followup-btn save-btn"
//                             onClick={() => saveFollowUp(enquiry._id)}
//                           >
//                             Save
//                           </button>
//                         </div>
//                       </td>
//                       <td>
//                         <button className="preview-btn">
//                           <i className="icon eye-icon"></i>
//                         </button>
//                       </td>
                      
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             <div className="pagination-container">
//               <div className="items-per-page">
//                 Items per page: 
//                 <select 
//                   value={itemsPerPage} 
//                   onChange={(e) => setItemsPerPage(Number(e.target.value))}
//                   className="page-select"
//                 >
//                   <option value={5}>5</option>
//                   <option value={10}>10</option>
//                   <option value={20}>20</option>
//                   <option value={50}>50</option>
//                 </select>
//               </div>
              
//               <div className="pagination-controls">
//                 <button 
//                   className="pagination-btn" 
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 >
//                   Previous
//                 </button>
//                 <span className="page-info">
//                   Page {currentPage} of {totalPages || 1}
//                 </span>
//                 <button 
//                   className="pagination-btn" 
//                   disabled={currentPage === totalPages || totalPages === 0}
//                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 >
//                   Next
//                 </button>
//               </div>

//               <div className="page-summary">
//                 Showing {indexOfFirstEnquiry + 1} to {Math.min(indexOfLastEnquiry, filteredEnquiries.length)} of {filteredEnquiries.length} entries
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TelecallerDashboard;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Telecaller.css";

// const TelecallerDashboard = () => {
//   const [assignedEnquiries, setAssignedEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [followUps, setFollowUps] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showPreviewModal, setShowPreviewModal] = useState(false);
//   const [selectedEnquiry, setSelectedEnquiry] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));
//   const loggedInUserId = user ? user._id : null;

//   useEffect(() => {
//     if (!loggedInUserId) {
//       console.error("No user ID found!");
//       return;
//     }

//     const fetchEnquiriesAndFollowUps = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`);
//         setAssignedEnquiries(res.data);

//         const followUpData = {};
//         await Promise.all(
//           res.data.map(async (enquiry) => {
//             try {
//               const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiry._id}`);
//               followUpData[enquiry._id] = {
//                 existingFollowUpDates: followUpRes.data.followUps || [],
//                 newFollowUpDates: [],
//                 status: followUpRes.data.followUps.length ? followUpRes.data.followUps.slice(-1)[0].status : "",
//               };
//             } catch (error) {
//               console.error("Error fetching follow-ups:", error);
//               followUpData[enquiry._id] = { existingFollowUpDates: [], newFollowUpDates: [], status: "" };
//             }
//           })
//         );

//         setFollowUps(followUpData);
//       } catch (err) {
//         console.error("Error fetching assigned enquiries:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiriesAndFollowUps();
//   }, [loggedInUserId]);

//   const handleFollowUpChange = (enquiryId, field, value) => {
//     setFollowUps((prev) => ({ ...prev, [enquiryId]: { ...prev[enquiryId], [field]: value } }));
//   };

//   const addFollowUp = (enquiryId) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: { ...prev[enquiryId], newFollowUpDates: [...prev[enquiryId]?.newFollowUpDates, ""] },
//     }));
//   };

//   const handleFollowUpDateChange = (enquiryId, index, value) => {
//     setFollowUps((prev) => ({
//       ...prev,
//       [enquiryId]: {
//         ...prev[enquiryId],
//         newFollowUpDates: prev[enquiryId].newFollowUpDates.map((date, i) => (i === index ? value : date)),
//       },
//     }));
//   };

//   const saveFollowUp = async (enquiryId) => {
//     try {
//       const { status, newFollowUpDates } = followUps[enquiryId];
      
//       if (!newFollowUpDates.length && !status) {
//         alert("Please add at least one follow-up date or select a status before saving.");
//         return;
//       }
      
//       await axios.post("http://localhost:8080/api/save-followup", {
//         enquiryId,
//         userId: loggedInUserId,
//         status,
//         followUpDates: newFollowUpDates,
//       });

//       alert("Follow-up saved successfully!");
//       const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiryId}`);

//       setFollowUps((prev) => ({
//         ...prev,
//         [enquiryId]: {
//           existingFollowUpDates: followUpRes.data.followUps || [],
//           newFollowUpDates: [],
//           status: prev[enquiryId].status,
//         },
//       }));
//     } catch (error) {
//       console.error("Error saving follow-up:", error);
//       alert("Failed to save follow-up.");
//     }
//   };

//   const getFollowUpsForEnquiry = (enquiryId) => {
//     if (!followUps[enquiryId] || !followUps[enquiryId].existingFollowUpDates) {
//       return [];
//     }
    
//     return followUps[enquiryId].existingFollowUpDates.filter(followUp => 
//       followUp.enquiryId === enquiryId || 
//       (followUp.enquiryId && followUp.enquiryId.$oid === enquiryId)
//     );
//   };

//   const filteredEnquiries = assignedEnquiries.filter(enquiry => 
//     enquiry.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     enquiry.lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     enquiry.mobileNumber?.includes(searchTerm)
//   );

//   // Pagination
//   const indexOfLastEnquiry = currentPage * itemsPerPage;
//   const indexOfFirstEnquiry = indexOfLastEnquiry - itemsPerPage;
//   const currentEnquiries = filteredEnquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);
//   const totalPages = Math.ceil(filteredEnquiries.length / itemsPerPage);

//   const addToWalkin = (enquiryId) => {
//     // Implement your addToWalkin functionality here
//     alert(`Added enquiry ${enquiryId} to walkin!`);
//   };

//   // Fixed: Using a simple function for click handler
//   const openPreviewModal = (enquiry) => {
//     console.log("Opening modal for enquiry:", enquiry._id);
//     setSelectedEnquiry(enquiry);
//     setShowPreviewModal(true);
//   };

//   const closePreviewModal = () => {
//     console.log("Closing modal");
//     setShowPreviewModal(false);
//     setSelectedEnquiry(null);
//   };

//   return (
//     <div className="telecaller-dashboard">


//       <div className="main-content">
//         <div className="page-header">
//           <h1 className="page-title">Call Logs</h1>
//           <div className="header-actions">
//             <button className="btn primary-btn">Add Call</button>
//             <div className="search-container">
//               <input 
//                 type="text" 
//                 placeholder="Search by Name or Phone" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="search-input"
//               />
//             </div>
//             <button className="btn secondary-btn">Add to Walkin</button>
//             <button className="btn outline-btn">Export</button>
//           </div>
//         </div>

//         {loading ? (
//           <div className="loading-container">
//             <p>Loading assigned enquiries...</p>
//           </div>
//         ) : assignedEnquiries.length === 0 ? (
//           <div className="no-data-container">
//             <p>No enquiries assigned to you.</p>
//           </div>
//         ) : (
//           <>
//             <div className="table-container">
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>TIME STAMP</th>
//                     <th>NAME</th>
//                     <th>PHONE</th>
//                     <th>REMARK</th>
//                     <th>FOLLOWUPS</th>
//                     <th>PREVIEW</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentEnquiries.map((enquiry) => (
//                     <tr key={enquiry._id}>
//                       <td>
//                         {new Date(enquiry.createdAt || Date.now()).toLocaleString('en-US', {
//                           year: 'numeric',
//                           month: 'short',
//                           day: 'numeric',
//                           hour: '2-digit',
//                           minute: '2-digit'
//                         })}
//                       </td>
//                       <td>{enquiry.firstname} {enquiry.lastname}</td>
//                       <td>{enquiry.mobileNumber}</td>
//                       <td>
//                         <select
//                           className="status-select"
//                           value={followUps[enquiry._id]?.status || ""}
//                           onChange={(e) => handleFollowUpChange(enquiry._id, "status", e.target.value)}
//                         >
//                           <option value="">Select status</option>
//                           <option value="Ready to Join">Ready to Join</option>
//                           <option value="Interested">Interested</option>
//                           <option value="Not Interested">Not Interested</option>
//                           <option value="No Response">No Response</option>
//                           <option value="Not Reachable">Not Reachable</option>
//                           <option value="Switched Off">Switched Off</option>
//                           <option value="Call Later">Call Later</option>
//                         </select>
//                       </td>
//                       <td className="followups-cell">
//                         <div className="followup-dates">
//                           {getFollowUpsForEnquiry(enquiry._id).map((followUp, index) => (
//                             <div key={index} className="followup-date">
//                               {new Date(followUp.followUpDate).toLocaleDateString('en-US', {
//                                 month: 'short',
//                                 day: 'numeric',
//                                 year: 'numeric'
//                               })}
//                             </div>
//                           ))}
//                           {followUps[enquiry._id]?.newFollowUpDates?.map((date, index) => (
//                             <input
//                               key={`new-${index}`}
//                               type="date"
//                               value={date}
//                               onChange={(e) => handleFollowUpDateChange(enquiry._id, index, e.target.value)}
//                               className="date-input"
//                             />
//                           ))}
//                         </div>
//                         <div className="followup-actions">
//                           <button 
//                             className="followup-btn add-btn"
//                             onClick={() => addFollowUp(enquiry._id)}
//                           >
//                             + Add Followup
//                           </button>
//                           <button 
//                             className="followup-btn save-btn"
//                             onClick={() => saveFollowUp(enquiry._id)}
//                           >
//                             Save
//                           </button>
//                         </div>
//                       </td>
//                       <td>
//                         {/* Fixed: Using direct button click handler with explicit function call */}
//                         <button 
//                           className="preview-btn"
//                           onClick={() => openPreviewModal(enquiry)}
//                         >
//                           👁️ 
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             <div className="pagination-container">
//               <div className="items-per-page">
//                 Items per page: 
//                 <select 
//                   value={itemsPerPage} 
//                   onChange={(e) => setItemsPerPage(Number(e.target.value))}
//                   className="page-select"
//                 >
//                   <option value={5}>5</option>
//                   <option value={10}>10</option>
//                   <option value={20}>20</option>
//                   <option value={50}>50</option>
//                 </select>
//               </div>
              
//               <div className="pagination-controls">
//                 <button 
//                   className="pagination-btn" 
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 >
//                   Previous
//                 </button>
//                 <span className="page-info">
//                   Page {currentPage} of {totalPages || 1}
//                 </span>
//                 <button 
//                   className="pagination-btn" 
//                   disabled={currentPage === totalPages || totalPages === 0}
//                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 >
//                   Next
//                 </button>
//               </div>

//               <div className="page-summary">
//                 Showing {indexOfFirstEnquiry + 1} to {Math.min(indexOfLastEnquiry, filteredEnquiries.length)} of {filteredEnquiries.length} entries
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Fixed: Modal component outside conditional rendering and as direct JSX */}
//       {showPreviewModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h2>Enquiry Details</h2>
//               <button className="close-btn" onClick={closePreviewModal}>×</button>
//             </div>
//             <div className="modal-body">
//               {selectedEnquiry && (
//                 <>
//                   <div className="enquiry-details">
//                     <h3>Personal Information</h3>
//                     <div className="detail-row">
//                       <div className="detail-group">
//                         <span className="detail-label">Name:</span>
//                         <span className="detail-value">{selectedEnquiry.firstname} {selectedEnquiry.lastname}</span>
//                       </div>
//                       <div className="detail-group">
//                         <span className="detail-label">Phone:</span>
//                         <span className="detail-value">{selectedEnquiry.mobileNumber}</span>
//                       </div>
//                     </div>
//                     <div className="detail-row">
//                       <div className="detail-group">
//                         <span className="detail-label">Email:</span>
//                         <span className="detail-value">{selectedEnquiry.email || "Not provided"}</span>
//                       </div>
//                       <div className="detail-group">
//                         <span className="detail-label">Created:</span>
//                         <span className="detail-value">
//                           {new Date(selectedEnquiry.createdAt || Date.now()).toLocaleString('en-US', {
//                             year: 'numeric',
//                             month: 'short',
//                             day: 'numeric',
//                             hour: '2-digit',
//                             minute: '2-digit'
//                           })}
//                         </span>
//                       </div>
//                     </div>
                    
//                     {selectedEnquiry.courseInterested && (
//                       <div className="detail-row">
//                         <div className="detail-group">
//                           <span className="detail-label">Course Interested:</span>
//                           <span className="detail-value">{selectedEnquiry.courseInterested}</span>
//                         </div>
//                       </div>
//                     )}
                    
//                     {selectedEnquiry.comments && (
//                       <div className="detail-row full-width">
//                         <div className="detail-group">
//                           <span className="detail-label">Comments:</span>
//                           <span className="detail-value">{selectedEnquiry.comments}</span>
//                         </div>
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="followup-history">
//                     <h3>Follow-up History</h3>
//                     {getFollowUpsForEnquiry(selectedEnquiry._id).length > 0 ? (
//                       <table className="followup-table">
//                         <thead>
//                           <tr>
//                             <th>Date</th>
//                             <th>Status</th>
//                             {/* <th>Added By</th> */}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {getFollowUpsForEnquiry(selectedEnquiry._id).map((followUp, index) => (
//                             <tr key={index}>
//                               <td>
//                                 {new Date(followUp.followUpDate).toLocaleDateString('en-US', {
//                                   month: 'short',
//                                   day: 'numeric',
//                                   year: 'numeric'
//                                 })}
//                               </td>
//                               <td>
//                                 <span className={`status-badge ${followUp.status?.toLowerCase().replace(/\s+/g, '-') || "not-set"}`}>
//                                   {followUp.status || "Not set"}
//                                 </span>
//                               </td>
//                               {/* <td>{followUp.userId?.name || "System"}</td> */}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     ) : (
//                       <p className="no-followups">No follow-ups recorded yet.</p>
//                     )}
//                   </div>
                  
//                   <div className="current-status">
//                     <h3>Current Status</h3>
//                     <span className={`status-badge large ${followUps[selectedEnquiry._id]?.status?.toLowerCase().replace(/\s+/g, '-') || "not-set"}`}>
//                       {followUps[selectedEnquiry._id]?.status || "Not set"}
//                     </span>
//                   </div>
//                 </>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button className="btn outline-btn" onClick={closePreviewModal}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TelecallerDashboard;


import { useState, useEffect } from "react";
import axios from "axios";
// import "./Telecaller.css";
import * as XLSX from 'xlsx';

const TelecallerDashboard = () => {
  const [assignedEnquiries, setAssignedEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followUps, setFollowUps] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    phone: "",
    status: "",
    dateFrom: "",
    dateTo: ""
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });

  const user = JSON.parse(localStorage.getItem("user"));
  const loggedInUserId = user ? user._id : null;

  useEffect(() => {
    if (!loggedInUserId) {
      console.error("No user ID found!");
      return;
    }

    const fetchEnquiriesAndFollowUps = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/assigned-enquiries/${loggedInUserId}`);
        setAssignedEnquiries(res.data);

        const followUpData = {};
        await Promise.all(
          res.data.map(async (enquiry) => {
            try {
              const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiry._id}`);
              followUpData[enquiry._id] = {
                existingFollowUpDates: followUpRes.data.followUps || [],
                newFollowUpDates: [],
                status: followUpRes.data.followUps.length ? followUpRes.data.followUps.slice(-1)[0].status : "",
              };
            } catch (error) {
              console.error("Error fetching follow-ups:", error);
              followUpData[enquiry._id] = { existingFollowUpDates: [], newFollowUpDates: [], status: "" };
            }
          })
        );

        setFollowUps(followUpData);
      } catch (err) {
        console.error("Error fetching assigned enquiries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiriesAndFollowUps();
  }, [loggedInUserId]);

  const handleFollowUpChange = (enquiryId, field, value) => {
    setFollowUps((prev) => ({ ...prev, [enquiryId]: { ...prev[enquiryId], [field]: value } }));
  };

  const addFollowUp = (enquiryId) => {
    setFollowUps((prev) => ({
      ...prev,
      [enquiryId]: { ...prev[enquiryId], newFollowUpDates: [...prev[enquiryId]?.newFollowUpDates, ""] },
    }));
  };

  const handleFollowUpDateChange = (enquiryId, index, value) => {
    setFollowUps((prev) => ({
      ...prev,
      [enquiryId]: {
        ...prev[enquiryId],
        newFollowUpDates: prev[enquiryId].newFollowUpDates.map((date, i) => (i === index ? value : date)),
      },
    }));
  };

  const saveFollowUp = async (enquiryId) => {
    try {
      const { status, newFollowUpDates } = followUps[enquiryId];
      
      if (!newFollowUpDates.length && !status) {
        alert("Please add at least one follow-up date or select a status before saving.");
        return;
      }
      
      await axios.post("http://localhost:8080/api/save-followup", {
        enquiryId,
        userId: loggedInUserId,
        status,
        followUpDates: newFollowUpDates,
      });

      alert("Follow-up saved successfully!");
      const followUpRes = await axios.get(`http://localhost:8080/api/followups/${enquiryId}`);

      setFollowUps((prev) => ({
        ...prev,
        [enquiryId]: {
          existingFollowUpDates: followUpRes.data.followUps || [],
          newFollowUpDates: [],
          status: prev[enquiryId].status,
        },
      }));
    } catch (error) {
      console.error("Error saving follow-up:", error);
      alert("Failed to save follow-up.");
    }
  };

  const getFollowUpsForEnquiry = (enquiryId) => {
    if (!followUps[enquiryId] || !followUps[enquiryId].existingFollowUpDates) {
      return [];
    }
    
    return followUps[enquiryId].existingFollowUpDates.filter(followUp => 
      followUp.enquiryId === enquiryId || 
      (followUp.enquiryId && followUp.enquiryId.$oid === enquiryId)
    );
  };
  const exportToExcel = () => {
    // Use the filtered and sorted data that's currently being displayed
    const dataToExport = sortedEnquiries.map(enquiry => {
      // Get the followup status for this enquiry
      const status = followUps[enquiry._id]?.status || "";
      
      // Format the date
      const formattedDate = new Date(enquiry.createdAt || Date.now()).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      // Get all followup dates as a comma-separated string
      const followUpDates = getFollowUpsForEnquiry(enquiry._id)
        .map(followUp => new Date(followUp.followUpDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }))
        .join(", ");
      
      // Return a formatted object for each row
      return {
        "Timestamp": formattedDate,
        "Name": `${enquiry.firstname || ""} ${enquiry.lastname || ""}`.trim(),
        "Phone": enquiry.mobileNumber || "",
        "Email": enquiry.email || "",
        "Course Interested": enquiry.courseInterested || "",
        "Status": status,
        "Follow-up Dates": followUpDates,
        "Comments": enquiry.comments || ""
      };
    });
    
    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    
    // Generate Excel file and trigger download
    const today = new Date().toISOString().slice(0, 10);
    const fileName = `Telecaller_Enquiries_${today}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };
  const handleAdvancedSearchToggle = () => {
    setAdvancedSearch(!advancedSearch);
    if (advancedSearch) {
      // Reset advanced filters when closing
      setSearchFilters({
        name: "",
        phone: "",
        status: "",
        dateFrom: "",
        dateTo: ""
      });
      // But keep the simple search term
    }
  };

  const handleSearchFilterChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const applyAdvancedSearch = () => {
    // This will trigger re-render with the new filters
    setCurrentPage(1); // Reset to first page when applying new filters
  };

  const resetAdvancedSearch = () => {
    setSearchFilters({
      name: "",
      phone: "",
      status: "",
      dateFrom: "",
      dateTo: ""
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  // Sort function
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Combined filtering function
  const filteredEnquiries = assignedEnquiries.filter(enquiry => {
    const matchesSimpleSearch = 
      !searchTerm || 
      enquiry.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.mobileNumber?.includes(searchTerm);
    
    if (!advancedSearch) return matchesSimpleSearch;
    
    // Advanced search logic
    const matchesName = !searchFilters.name || 
      `${enquiry.firstname} ${enquiry.lastname}`.toLowerCase().includes(searchFilters.name.toLowerCase());
    
    const matchesPhone = !searchFilters.phone || 
      enquiry.mobileNumber?.includes(searchFilters.phone);
    
    const enquiryStatus = followUps[enquiry._id]?.status || "";
    const matchesStatus = !searchFilters.status || 
      enquiryStatus.toLowerCase().includes(searchFilters.status.toLowerCase());
    
    const enquiryDate = new Date(enquiry.createdAt || Date.now());
    const fromDate = searchFilters.dateFrom ? new Date(searchFilters.dateFrom) : null;
    const toDate = searchFilters.dateTo ? new Date(searchFilters.dateTo) : null;
    
    const matchesDateRange = 
      (!fromDate || enquiryDate >= fromDate) && 
      (!toDate || enquiryDate <= toDate);
    
    return matchesName && matchesPhone && matchesStatus && matchesDateRange;
  });

  // Sorting
  const sortedEnquiries = [...filteredEnquiries].sort((a, b) => {
    if (sortConfig.key === 'name') {
      const nameA = `${a.firstname || ''} ${a.lastname || ''}`.toLowerCase();
      const nameB = `${b.firstname || ''} ${b.lastname || ''}`.toLowerCase();
      return sortConfig.direction === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    }
    
    if (sortConfig.key === 'createdAt') {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
    }
    
    // Default sort if key doesn't match
    return 0;
  });

  // Pagination
  const indexOfLastEnquiry = currentPage * itemsPerPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - itemsPerPage;
  const currentEnquiries = sortedEnquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);
  const totalPages = Math.ceil(sortedEnquiries.length / itemsPerPage);

  // Page number generator for pagination
  const getPageNumbers = () => {
    const MAX_VISIBLE_PAGES = 5;
    const pageNumbers = [];
    
    if (totalPages <= MAX_VISIBLE_PAGES) {
      // Show all pages if we have fewer than MAX_VISIBLE_PAGES
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Complex pagination with ellipsis
      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Middle
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const addToWalkin = (enquiryId) => {
    // Implement your addToWalkin functionality here
    alert(`Added enquiry ${enquiryId} to walkin!`);
  };

  const openPreviewModal = (enquiry) => {
    console.log("Opening modal for enquiry:", enquiry._id);
    setSelectedEnquiry(enquiry);
    setShowPreviewModal(true);
  };

  const closePreviewModal = () => {
    console.log("Closing modal");
    setShowPreviewModal(false);
    setSelectedEnquiry(null);
  };

  return (
    <div className="telecaller-dashboard">
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Enquiry Details</h1>
          <div className="header-actions">
      
            
            {/* Improved Search Section */}
            <div className="search-section">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Quick search by name or phone" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">
                  🔍
                </button>
              </div>
              <button 
                className={`advanced-search-toggle ${advancedSearch ? 'active' : ''}`}
                onClick={handleAdvancedSearchToggle}
              >
                {advancedSearch ? 'Hide Advanced Search' : 'Advanced Search'}
              </button>
            </div>
            
          
            <button className="btn outline-btn" onClick={exportToExcel}>Export</button>
          </div>
        </div>

        {/* Advanced Search Panel */}
        {advancedSearch && (
          <div className="advanced-search-panel">
            <div className="filter-row">
              <div className="filter-group">
                <label>Name</label>
                <input 
                  type="text" 
                  value={searchFilters.name}
                  onChange={(e) => handleSearchFilterChange('name', e.target.value)}
                  placeholder="Search by name"
                />
              </div>
              <div className="filter-group">
                <label>Phone</label>
                <input 
                  type="text" 
                  value={searchFilters.phone}
                  onChange={(e) => handleSearchFilterChange('phone', e.target.value)}
                  placeholder="Search by phone"
                />
              </div>
              <div className="filter-group">
                <label>Status</label>
                <select
                  value={searchFilters.status}
                  onChange={(e) => handleSearchFilterChange('status', e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="Ready to Join">Ready to Join</option>
                  <option value="Interested">Interested</option>
                  <option value="Not Interested">Not Interested</option>
                  <option value="No Response">No Response</option>
                  <option value="Not Reachable">Not Reachable</option>
                  <option value="Switched Off">Switched Off</option>
                  <option value="Call Later">Call Later</option>
                </select>
              </div>
            </div>
            <div className="filter-row">
              <div className="filter-group">
                <label>From Date</label>
                <input 
                  type="date" 
                  value={searchFilters.dateFrom}
                  onChange={(e) => handleSearchFilterChange('dateFrom', e.target.value)}
                />
              </div>
              <div className="filter-group">
                <label>To Date</label>
                <input 
                  type="date" 
                  value={searchFilters.dateTo}
                  onChange={(e) => handleSearchFilterChange('dateTo', e.target.value)}
                />
              </div>
              <div className="filter-actions">
                <button className="btn primary-btn" onClick={applyAdvancedSearch}>Apply Filters</button>
                <button className="btn outline-btn" onClick={resetAdvancedSearch}>Reset</button>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="loading-container">
            <p>Loading assigned enquiries...</p>
          </div>
        ) : assignedEnquiries.length === 0 ? (
          <div className="no-data-container">
            <p>No enquiries assigned to you.</p>
          </div>
        ) : (
          <>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th onClick={() => requestSort('createdAt')} className="sortable-header">
                      TIME STAMP 
                      {sortConfig.key === 'createdAt' && (
                        <span className="sort-indicator">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </th>
                    <th onClick={() => requestSort('name')} className="sortable-header">
                      NAME
                      {sortConfig.key === 'name' && (
                        <span className="sort-indicator">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </th>
                    <th>PHONE</th>
                    <th>REMARK</th>
                    <th>FOLLOWUPS</th>
                    <th>PREVIEW</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEnquiries.map((enquiry) => (
                    <tr key={enquiry._id}>
                      <td>
                        {new Date(enquiry.createdAt || Date.now()).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td>{enquiry.firstname} {enquiry.lastname}</td>
                      <td>{enquiry.mobileNumber}</td>
                      <td>
                        <select
                          className="status-select"
                          value={followUps[enquiry._id]?.status || ""}
                          onChange={(e) => handleFollowUpChange(enquiry._id, "status", e.target.value)}
                        >
                          <option value="">Select status</option>
                          <option value="Ready to Join">Ready to Join</option>
                          <option value="Interested">Interested</option>
                          <option value="Not Interested">Not Interested</option>
                          <option value="No Response">No Response</option>
                          <option value="Not Reachable">Not Reachable</option>
                          <option value="Switched Off">Switched Off</option>
                          <option value="Call Later">Call Later</option>
                        </select>
                      </td>
                      <td className="followups-cell">
                        <div className="followup-dates">
                          {getFollowUpsForEnquiry(enquiry._id).map((followUp, index) => (
                            <div key={index} className="followup-date">
                              {new Date(followUp.followUpDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          ))}
                          {followUps[enquiry._id]?.newFollowUpDates?.map((date, index) => (
                            <input
                              key={`new-${index}`}
                              type="date"
                              value={date}
                              onChange={(e) => handleFollowUpDateChange(enquiry._id, index, e.target.value)}
                              className="date-input"
                            />
                          ))}
                        </div>
                        <div className="followup-actions">
                          <button 
                            className="followup-btn add-btn"
                            onClick={() => addFollowUp(enquiry._id)}
                          >
                            + Add Followup
                          </button>
                          <button 
                            className="followup-btn save-btn"
                            onClick={() => saveFollowUp(enquiry._id)}
                          >
                            Save
                          </button>
                        </div>
                      </td>
                      <td>
                        <button 
                          className="preview-btn"
                          onClick={() => openPreviewModal(enquiry)}
                        >
                          👁️ 
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Improved Pagination Component */}
            <div className="pagination-container">
              <div className="items-per-page">
                <label>Show</label>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1); // Reset to page 1 when changing items per page
                  }}
                  className="page-select"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span>entries</span>
              </div>
              
              <div className="pagination-controls">
                <button 
                  className="pagination-btn first-page"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                  title="First Page"
                >
                  ⟪
                </button>
                <button 
                  className="pagination-btn prev-page" 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  title="Previous Page"
                >
                  ⟨
                </button>
                
                <div className="page-numbers">
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? 
                      <span key={`ellipsis-${index}`} className="ellipsis">...</span> :
                      <button 
                        key={page}
                        className={`page-number ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                  ))}
                </div>
                
                <button 
                  className="pagination-btn next-page" 
                  disabled={currentPage === totalPages || totalPages === 0}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  title="Next Page"
                >
                  ⟩
                </button>
                <button 
                  className="pagination-btn last-page"
                  disabled={currentPage === totalPages || totalPages === 0}
                  onClick={() => setCurrentPage(totalPages)}
                  title="Last Page"
                >
                  ⟫
                </button>
              </div>

              <div className="page-summary">
                Showing {sortedEnquiries.length === 0 ? 0 : indexOfFirstEnquiry + 1} to {Math.min(indexOfLastEnquiry, sortedEnquiries.length)} of {sortedEnquiries.length} entries
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal remains the same */}
      {showPreviewModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Enquiry Details</h2>
              <button className="close-btn" onClick={closePreviewModal}>×</button>
            </div>
            <div className="modal-body">
              {selectedEnquiry && (
                <>
                  <div className="enquiry-details">
                    <h3>Personal Information</h3>
                    <div className="detail-row">
                      <div className="detail-group">
                        <span className="detail-label">Name:</span>
                        <span className="detail-value">{selectedEnquiry.firstname} {selectedEnquiry.lastname}</span>
                      </div>
                      <div className="detail-group">
                        <span className="detail-label">Phone:</span>
                        <span className="detail-value">{selectedEnquiry.mobileNumber}</span>
                      </div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-group">
                        <span className="detail-label">Email:</span>
                        <span className="detail-value">{selectedEnquiry.email || "Not provided"}</span>
                      </div>
                      <div className="detail-group">
                        <span className="detail-label">Created:</span>
                        <span className="detail-value">
                          {new Date(selectedEnquiry.createdAt || Date.now()).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                    
                    {selectedEnquiry.courseInterested && (
                      <div className="detail-row">
                        <div className="detail-group">
                          <span className="detail-label">Course Interested:</span>
                          <span className="detail-value">{selectedEnquiry.courseInterested}</span>
                        </div>
                      </div>
                    )}
                    
                    {selectedEnquiry.comments && (
                      <div className="detail-row full-width">
                        <div className="detail-group">
                          <span className="detail-label">Comments:</span>
                          <span className="detail-value">{selectedEnquiry.comments}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="followup-history">
                    <h3>Follow-up History</h3>
                    {getFollowUpsForEnquiry(selectedEnquiry._id).length > 0 ? (
                      <table className="followup-table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Status</th>
                            {/* <th>Added By</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {getFollowUpsForEnquiry(selectedEnquiry._id).map((followUp, index) => (
                            <tr key={index}>
                              <td>
                                {new Date(followUp.followUpDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </td>
                              <td>
                                <span className={`status-badge ${followUp.status?.toLowerCase().replace(/\s+/g, '-') || "not-set"}`}>
                                  {followUp.status || "Not set"}
                                </span>
                              </td>
                              {/* <td>{followUp.userId?.name || "System"}</td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="no-followups">No follow-ups recorded yet.</p>
                    )}
                  </div>
                  
                  <div className="current-status">
                    <h3>Current Status</h3>
                    <span className={`status-badge large ${followUps[selectedEnquiry._id]?.status?.toLowerCase().replace(/\s+/g, '-') || "not-set"}`}>
                      {followUps[selectedEnquiry._id]?.status || "Not set"}
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn outline-btn" onClick={closePreviewModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )}

export default TelecallerDashboard;
                    

