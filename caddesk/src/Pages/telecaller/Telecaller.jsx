// import { useState, useEffect } from "react";
// import axios from "axios";

// const SuperAdminDashboard = () => {
//   const [followUps, setFollowUps] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState(""); // Branch filter

//   useEffect(() => {
//     fetchFollowUps();
//     fetchBranches(); // Fetch all available branches
//   }, [selectedBranch]); // Re-fetch when branch changes

//   // Fetch follow-ups with optional branch filter
//   const fetchFollowUps = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/followups", {
//         params: selectedBranch ? { branchId: selectedBranch } : {},
//       });
//       setFollowUps(response.data.followUps);
//     } catch (error) {
//       console.error("Error fetching follow-ups:", error);
//     }
//   };

//   // Fetch all branches
//   const fetchBranches = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/branches"); // Add branch API
//       setBranches(response.data);
//     } catch (error) {
//       console.error("Error fetching branches:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Super Admin Dashboard</h2>

//       {/* Branch Filter Dropdown */}
//       <label>Filter by Branch:</label>
//       <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
//         <option value="">All Branches</option>
//         {branches.map((branch) => (
//           <option key={branch._id} value={branch._id}>
//             {branch.name}
//           </option>
//         ))}
//       </select>

//       {/* Follow-ups Table */}
//       <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>Telecaller</th>
//             <th>Enquiry Name</th>
//             <th>Mobile</th>
//             <th>Interested Course</th>
//             <th>Branch</th>
//             <th>Follow-up Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {followUps.length === 0 ? (
//             <tr>
//               <td colSpan="7">No follow-ups found.</td>
//             </tr>
//           ) : (
//             followUps.map((followUp) =>
//               followUp.followUps.map((f, index) => (
//                 <tr key={index}>
//                   <td>{followUp._id}</td>
//                   <td>{f.enquiryId?.firstname} {f.enquiryId?.lastname}</td>
//                   <td>{f.enquiryId?.mobileNumber}</td>
//                   <td>{f.enquiryId?.interestedCourses}</td>
//                   <td>{f.enquiryId?.branchId}</td>
//                   <td>{f.followUpDate}</td>
//                   <td>{f.status}</td>
//                 </tr>
//               ))
//             )
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SuperAdminDashboard;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const SuperAdminDashboard = () => {
//   const [followUps, setFollowUps] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [telecallers, setTelecallers] = useState({});
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFollowUp, setSelectedFollowUp] = useState(null);
//   const [selectedTelecaller, setSelectedTelecaller] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [allFollowUps, setAllFollowUps] = useState([]);

//   useEffect(() => {
//     fetchFollowUps();
//     fetchBranches();
//   }, [selectedBranch]);

//   // Fetch follow-ups with optional branch filter
//   const fetchFollowUps = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:8080/api/followups", {
//         params: selectedBranch ? { branchId: selectedBranch } : {},
//       });
      
//       // Process and organize the follow-ups
//       const processedFollowUps = [];
      
//       response.data.followUps.forEach(followUp => {
//         if (followUp.followUps && followUp.followUps.length > 0) {
//           // Sort follow-ups by date (newest first)
//           const sortedFollowUps = [...followUp.followUps].sort((a, b) => 
//             new Date(b.followUpDate) - new Date(a.followUpDate)
//           );
          
//           // Add the latest follow-up to the main display
//           processedFollowUps.push({
//             _id: followUp._id,
//             telecallerId: followUp.telecallerId,
//             telecallerName: followUp.telecallerName || "Unknown",
//             enquiryId: sortedFollowUps[0].enquiryId,
//             followUpDate: sortedFollowUps[0].followUpDate,
//             status: sortedFollowUps[0].status,
//             notes: sortedFollowUps[0].notes,
//             allFollowUps: sortedFollowUps,
//           });
//         }
//       });
      
//       setFollowUps(processedFollowUps);
//       setAllFollowUps(response.data.followUps);
//     } catch (error) {
//       console.error("Error fetching follow-ups:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch all branches
//   const fetchBranches = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/branches");
//       setBranches(response.data);
      
//       // Fetch telecallers for each branch
//       response.data.forEach(branch => {
//         fetchTelecallers(branch._id);
//       });
//     } catch (error) {
//       console.error("Error fetching branches:", error);
//     }
//   };
  
//   // Fetch telecallers for a specific branch
//   const fetchTelecallers = async (branchId) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/telecallers/${branchId}`);
//       setTelecallers(prev => ({ ...prev, [branchId]: response.data }));
//     } catch (error) {
//       console.error(`Error fetching telecallers for branch ${branchId}:`, error);
//     }
//   };
  
//   // Handle opening the modal for viewing all follow-ups
//   const handleViewAllFollowUps = (followUp) => {
//     setSelectedFollowUp(followUp);
//     setShowModal(true);
//   };
  
//   // Handle opening the modal for reassigning
//   const handleOpenReassign = (followUp) => {
//     setSelectedFollowUp(followUp);
//     setSelectedTelecaller("");
//     setShowModal(true);
//   };
  
//   // Handle reassigning a telecaller
//   const handleReassign = async () => {
//     if (!selectedTelecaller) {
//       alert("Please select a telecaller");
//       return;
//     }
    
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:8080/api/reassign-followup", {
//         followUpId: selectedFollowUp._id,
//         enquiryId: selectedFollowUp.enquiryId._id,
//         telecallerId: selectedTelecaller
//       });
      
//       // Refresh data after reassignment
//       fetchFollowUps();
//       setShowModal(false);
//       alert("Follow-up reassigned successfully!");
//     } catch (error) {
//       console.error("Error reassigning follow-up:", error);
//       alert("Failed to reassign follow-up. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   // Handle deleting a follow-up
//   const handleDelete = async (followUpId) => {
//     if (!window.confirm("Are you sure you want to delete this follow-up?")) {
//       return;
//     }
    
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:8080/api/followups/${followUpId}`);
//       fetchFollowUps();
//       alert("Follow-up deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting follow-up:", error);
//       alert("Failed to delete follow-up. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   // Format date for better display
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedFollowUp(null);
//   };

//   return (
//     <div>
//       <h2>Super Admin Dashboard</h2>
      
//       {/* Branch Filter Dropdown */}
//       <div style={{ marginBottom: "20px" }}>
//         <label style={{ marginRight: "10px" }}>Filter by Branch:</label>
//         <select
//           value={selectedBranch}
//           onChange={(e) => setSelectedBranch(e.target.value)}
//           style={{ padding: "5px 10px", borderRadius: "4px" }}
//         >
//           <option value="">All Branches</option>
//           {branches.map((branch) => (
//             <option key={branch._id} value={branch._id}>
//               {branch.name}
//             </option>
//           ))}
//         </select>
//       </div>
      
//       {/* Follow-ups Table */}
//       {loading ? (
//         <p>Loading follow-ups...</p>
//       ) : (
//         <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ backgroundColor: "#f2f2f2" }}>
//               <th style={{ padding: "10px" }}>Telecaller</th>
//               <th style={{ padding: "10px" }}>Enquiry Name</th>
//               <th style={{ padding: "10px" }}>Mobile</th>
//               <th style={{ padding: "10px" }}>Interested Course</th>
//               <th style={{ padding: "10px" }}>Branch</th>
//               <th style={{ padding: "10px" }}>Latest Follow-up Date</th>
//               <th style={{ padding: "10px" }}>Status</th>
//               <th style={{ padding: "10px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {followUps.length === 0 ? (
//               <tr>
//                 <td colSpan="8" style={{ padding: "10px", textAlign: "center" }}>No follow-ups found.</td>
//               </tr>
//             ) : (
//               followUps.map((followUp) => (
//                 <tr key={followUp._id} style={{ borderBottom: "1px solid #ddd" }}>
//                   <td style={{ padding: "10px" }}>{followUp.telecallerName}</td>
//                   <td style={{ padding: "10px" }}>
//                     {followUp.enquiryId?.firstname} {followUp.enquiryId?.lastname}
//                   </td>
//                   <td style={{ padding: "10px" }}>{followUp.enquiryId?.mobileNumber}</td>
//                   <td style={{ padding: "10px" }}>{followUp.enquiryId?.interestedCourses}</td>
//                   <td style={{ padding: "10px" }}>{followUp.enquiryId?.branchId}</td>
//                   <td style={{ padding: "10px" }}>{formatDate(followUp.followUpDate)}</td>
//                   <td style={{ padding: "10px" }}>{followUp.status}</td>
//                   <td style={{ padding: "10px" }}>
//                     <button 
//                       onClick={() => handleViewAllFollowUps(followUp)}
//                       style={{ marginRight: "5px", padding: "5px 10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                     >
//                       View History
//                     </button>
//                     <button 
//                       onClick={() => handleOpenReassign(followUp)}
//                       style={{ marginRight: "5px", padding: "5px 10px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                     >
//                       Reassign
//                     </button>
//                     <button 
//                       onClick={() => handleDelete(followUp._id)}
//                       style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
      
//       {/* Modal for viewing history or reassigning */}
//       {showModal && selectedFollowUp && (
//         <div style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0,0,0,0.5)",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: 1000
//         }}>
//           <div style={{
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "5px",
//             width: "80%",
//             maxWidth: "800px",
//             maxHeight: "80vh",
//             overflowY: "auto"
//           }}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
//               <h3 style={{ margin: 0 }}>
//                 {selectedTelecaller ? "Reassign Follow-up" : "Follow-up History"}
//               </h3>
//               <button 
//                 onClick={closeModal}
//                 style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer" }}
//               >
//                 ×
//               </button>
//             </div>
            
//             {selectedTelecaller ? (
//               <div>
//                 <p>
//                   <strong>Enquiry:</strong> {selectedFollowUp.enquiryId?.firstname} {selectedFollowUp.enquiryId?.lastname}
//                 </p>
//                 <p>
//                   <strong>Current Telecaller:</strong> {selectedFollowUp.telecallerName}
//                 </p>
//                 <div style={{ marginBottom: "15px" }}>
//                   <label style={{ display: "block", marginBottom: "5px" }}>Select New Telecaller:</label>
//                   <select 
//                     value={selectedTelecaller} 
//                     onChange={(e) => setSelectedTelecaller(e.target.value)}
//                     style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ddd" }}
//                   >
//                     <option value="">Select Telecaller</option>
//                     {telecallers[selectedFollowUp.enquiryId?.branchId]?.map((telecaller) => (
//                       <option key={telecaller._id} value={telecaller._id}>
//                         {telecaller.firstName} {telecaller.lastName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                   <button 
//                     onClick={closeModal}
//                     style={{ marginRight: "10px", padding: "8px 15px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                     onClick={handleReassign}
//                     disabled={loading}
//                     style={{ padding: "8px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                   >
//                     {loading ? "Processing..." : "Reassign"}
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <p>
//                   <strong>Enquiry:</strong> {selectedFollowUp.enquiryId?.firstname} {selectedFollowUp.enquiryId?.lastname}
//                 </p>
//                 <p>
//                   <strong>Telecaller:</strong> {selectedFollowUp.telecallerName}
//                 </p>
//                 <h4>Follow-up History</h4>
//                 <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                   <thead>
//                     <tr style={{ backgroundColor: "#f2f2f2" }}>
//                       <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Date</th>
//                       <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Status</th>
//                       <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Notes</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedFollowUp.allFollowUps.map((f, index) => (
//                       <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
//                         <td style={{ padding: "8px", border: "1px solid #ddd" }}>{formatDate(f.followUpDate)}</td>
//                         <td style={{ padding: "8px", border: "1px solid #ddd" }}>{f.status}</td>
//                         <td style={{ padding: "8px", border: "1px solid #ddd" }}>{f.notes || "No notes"}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end" }}>
//                   <button 
//                     onClick={() => {
//                       setSelectedTelecaller("");
//                     }}
//                     style={{ marginRight: "10px", padding: "8px 15px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                   >
//                     Reassign
//                   </button>
//                   <button 
//                     onClick={closeModal}
//                     style={{ padding: "8px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SuperAdminDashboard;


import { useState, useEffect } from "react";
import axios from "axios";

const SuperAdminDashboard = () => {
  const [followUps, setFollowUps] = useState([]);
  const [branches, setBranches] = useState([]);
  const [telecallers, setTelecallers] = useState({});
  const [selectedBranch, setSelectedBranch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [newTelecallerId, setNewTelecallerId] = useState("");
  
  useEffect(() => {
    fetchFollowUps();
    fetchBranches();
  }, [selectedBranch]);

  const fetchFollowUps = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8080/api/followups", {
        params: selectedBranch ? { branchId: selectedBranch } : {},
      });
      
      const processedData = processFollowUps(response.data.followUps);
      setFollowUps(processedData);
    } catch (error) {
      console.error("Error fetching follow-ups:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const processFollowUps = (data) => {
    const enquiryMap = new Map();
    
    data.forEach(telecallerData => {
      telecallerData.followUps.forEach(followUp => {
        if (followUp.enquiryId) {
          const enquiryId = followUp.enquiryId._id;
          
          if (!enquiryMap.has(enquiryId) || 
              new Date(followUp.followUpDate) > new Date(enquiryMap.get(enquiryId).followUpDate)) {
            
            enquiryMap.set(enquiryId, {
              ...followUp,
              telecallerId: telecallerData._id,
              telecallerName: telecallerData.firstName + " " + telecallerData.lastName,
              allFollowUps: []
            });
          }
        }
      });
    });
    
    data.forEach(telecallerData => {
      telecallerData.followUps.forEach(followUp => {
        if (followUp.enquiryId) {
          const enquiryId = followUp.enquiryId._id;
          if (enquiryMap.has(enquiryId)) {
            enquiryMap.get(enquiryId).allFollowUps.push({
              ...followUp,
              telecallerId: telecallerData._id,
              telecallerName: telecallerData.firstName + " " + telecallerData.lastName,
            });
          }
        }
      });
    });
    
    enquiryMap.forEach(item => {
      item.allFollowUps.sort((a, b) => 
        new Date(b.followUpDate) - new Date(a.followUpDate)
      );
    });
    
    return Array.from(enquiryMap.values());
  };

  const fetchBranches = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/branches");
      setBranches(response.data);
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };
  
  const fetchTelecallers = async (branchId) => {
    try {
      if (telecallers[branchId]) return;
      
      const response = await axios.get(`http://localhost:8080/api/telecallers/${branchId}`);
      setTelecallers(prev => ({
        ...prev,
        [branchId]: response.data
      }));
    } catch (error) {
      console.error("Error fetching telecallers:", error);
    }
  };
  
  const handleViewDetails = (followUp, e) => {
    e.stopPropagation();
    setSelectedEnquiry(followUp);
    setIsModalOpen(true);
  };
  
  const handleStartEdit = async (followUp, e) => {
    e.stopPropagation();
    setEditingEnquiry(followUp);
    setNewTelecallerId("");
    
    if (followUp.enquiryId && followUp.enquiryId.branchId) {
      await fetchTelecallers(followUp.enquiryId.branchId);
    }
  };
  
  const handleCancelEdit = (e) => {
    e.stopPropagation();
    setEditingEnquiry(null);
  };
  
  const handleReassign = async (e) => {
    e.stopPropagation();
    
    if (!newTelecallerId) {
      alert("Please select a telecaller");
      return;
    }
    
    try {
      setIsLoading(true);
      await axios.put(`http://localhost:8080/api/reassign-enquiry`, {
        enquiryId: editingEnquiry.enquiryId._id,
        oldTelecallerId: editingEnquiry.telecallerId,
        newTelecallerId: newTelecallerId
      });
      
      alert("Enquiry reassigned successfully!");
      setEditingEnquiry(null);
      fetchFollowUps();
    } catch (error) {
      console.error("Error reassigning enquiry:", error);
      alert("Failed to reassign enquiry");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDelete = async (followUp, e) => {
    e.stopPropagation();
    
    if (!window.confirm("Are you sure you want to delete this enquiry?")) {
      return;
    }
    
    try {
      setIsLoading(true);
      await axios.delete(`http://localhost:8080/api/enquiry/${followUp.enquiryId._id}`);
      
      alert("Enquiry deleted successfully!");
      fetchFollowUps();
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      alert("Failed to delete enquiry");
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  // Get status badge styling based on status
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case "converted":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  // Format student name helper
  const formatName = (enquiry) => {
    if (!enquiry?.enquiryId) return "N/A";
    return `${enquiry.enquiryId.firstname || ""} ${enquiry.enquiryId.lastname || ""}`.trim() || "N/A";
  };

  // Get branch name helper
  const getBranchName = (branchId) => {
    if (!branchId) return "N/A";
    return branches.find(b => b._id === branchId)?.name || branchId;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Super Admin Dashboard</h2>
        </div>
        
        {/* Branch Filter */}
        <div className="p-6 border-b">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <label className="font-medium text-gray-700 mr-3">Filter by Branch:</label>
              <select 
                value={selectedBranch} 
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Branches</option>
                {branches.map((branch) => (
                  <option key={branch._id} value={branch._id}>
                    {branch.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={fetchFollowUps}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Refresh Data
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="p-6 overflow-x-auto">
            {followUps.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p className="text-xl">No follow-ups found</p>
                <p className="mt-2">Try selecting a different branch or refreshing the data</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Telecaller</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Enquiry Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Mobile</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Interested Course</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Branch</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Latest Follow-up</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {followUps.map((followUp, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        {followUp.telecallerName || followUp.telecallerId || "N/A"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {formatName(followUp)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {followUp.enquiryId?.mobileNumber || "N/A"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {followUp.enquiryId?.interestedCourses || "N/A"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {getBranchName(followUp.enquiryId?.branchId)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {formatDate(followUp.followUpDate)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(followUp.status)}`}>
                          {followUp.status || "N/A"}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {editingEnquiry && editingEnquiry.enquiryId?._id === followUp.enquiryId?._id ? (
                          <div className="flex items-center gap-2">
                            <select 
                              value={newTelecallerId} 
                              onChange={(e) => setNewTelecallerId(e.target.value)}
                              className="p-1 border rounded text-sm focus:ring-blue-500 focus:border-blue-500"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <option value="">Select Telecaller</option>
                              {telecallers[followUp.enquiryId?.branchId]?.map(tc => (
                                <option key={tc._id} value={tc._id}>
                                  {tc.firstName} {tc.lastName}
                                </option>
                              ))}
                            </select>
                            <button 
                              onClick={(e) => handleReassign(e)}
                              className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                            >
                              Save
                            </button>
                            <button 
                              onClick={(e) => handleCancelEdit(e)}
                              className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-xs hover:bg-gray-400 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={(e) => handleViewDetails(followUp, e)}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs hover:bg-blue-200 transition-colors"
                            >
                              View
                            </button>
                            <button 
                              onClick={(e) => handleStartEdit(followUp, e)}
                              className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded text-xs hover:bg-yellow-200 transition-colors"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={(e) => handleDelete(followUp, e)}
                              className="px-3 py-1 bg-red-100 text-red-800 rounded text-xs hover:bg-red-200 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
      
      {/* Modal for Follow-up Details */}
      {isModalOpen && selectedEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Enquiry Details: {formatName(selectedEnquiry)}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
              {/* Enquiry Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-lg text-gray-800 mb-3 border-b pb-2">Contact Information</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {formatName(selectedEnquiry)}</p>
                    <p><span className="font-medium">Mobile:</span> {selectedEnquiry.enquiryId?.mobileNumber || "Not provided"}</p>
                    <p><span className="font-medium">Email:</span> {selectedEnquiry.enquiryId?.email || "Not provided"}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-lg text-gray-800 mb-3 border-b pb-2">Course Information</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Interested Course:</span> {selectedEnquiry.enquiryId?.interestedCourses || "Not specified"}</p>
                    <p><span className="font-medium">Branch:</span> {getBranchName(selectedEnquiry.enquiryId?.branchId)}</p>
                    <p><span className="font-medium">Current Telecaller:</span> {selectedEnquiry.telecallerName || selectedEnquiry.telecallerId || "Not assigned"}</p>
                  </div>
                </div>
              </div>
              
              {/* Follow-up History */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h4 className="font-medium text-lg text-gray-800">Follow-up History</h4>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Notes</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Telecaller</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedEnquiry.allFollowUps && selectedEnquiry.allFollowUps.length > 0 ? (
                        selectedEnquiry.allFollowUps.map((followUp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap text-sm">{formatDate(followUp.followUpDate)}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(followUp.status)}`}>
                                {followUp.status || "N/A"}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">{followUp.notes || "No notes"}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">{followUp.telecallerName || followUp.telecallerId || "N/A"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-4 py-6 text-center text-gray-500">No follow-up history available.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;