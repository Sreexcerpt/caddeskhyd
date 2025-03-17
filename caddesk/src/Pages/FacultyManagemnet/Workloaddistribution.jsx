


// import React, { useState, useEffect } from 'react';
// import { Calendar, User, Clock, BookOpen, X, Users, ChevronLeft, ChevronRight, Grid, LogIn, UserPlus, List, FileText, Calendar as CalendarIcon, Briefcase, Settings, Shield, Book, File, Clipboard } from 'lucide-react';
// const WorkloadDistribution = () => {
//   // Sample initial staff data
//   const [staffList, setStaffList] = useState([
//     { id: 1, name: "Mr. Kumar", department: "Mathematics", classes_assigned: 2, free_slots: 19, student_feedback: 4.5 },
//     { id: 2, name: "Ms. Sharma", department: "Science", classes_assigned: 1, free_slots: 20, student_feedback: 4.8 },
//     { id: 3, name: "Mr. Patel", department: "English", classes_assigned: 0, free_slots: 21, student_feedback: 4.2 },
//     { id: 4, name: "Dr. Singh", department: "Science", classes_assigned: 3, free_slots: 18, student_feedback: 4.6 },
//     { id: 5, name: "Mrs. Joshi", department: "Mathematics", classes_assigned: 4, free_slots: 17, student_feedback: 4.3 },
//   ]);

//   // Batches/grades
//   const batches = ["Grade A", "Grade B", "Grade C"];
  
//   // Days of the week
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
//   // Time slots
//   const timeSlots = [
//     "8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", 
//     "12:00-13:00", "13:00-14:00", "14:00-15:00"
//   ];

//   // Get current date and next few days
//   const [currentWeekStart, setCurrentWeekStart] = useState(() => {
//     const today = new Date();
//     const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
//     const diff = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
//     const monday = new Date(today);
//     monday.setDate(today.getDate() - diff);
//     return monday;
//   });

//   const getWeekDates = (startDate) => {
//     return days.map((day, index) => {
//       const date = new Date(startDate);
//       date.setDate(startDate.getDate() + index);
//       return {
//         day,
//         date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
//         fullDate: date.toISOString().split('T')[0]
//       };
//     });
//   };

//   const [weekDates, setWeekDates] = useState(getWeekDates(currentWeekStart));

//   // Schedule state: { day: { batchId: { timeSlot: staffId } } }
//   const [schedule, setSchedule] = useState({
//     "Monday": {
//       "Grade A": {
//         "8:00-9:00": 1,
//       },
//       "Grade B": {
//         "8:00-9:00": 2,
//       },
//     },
//     "Tuesday": {
//       "Grade C": {
//         "11:00-12:00": 1,
//       },
//     },
//   });

//   // State for assignment modal
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDay, setSelectedDay] = useState("");
//   const [selectedBatch, setSelectedBatch] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [selectedStaff, setSelectedStaff] = useState("");
//   const [selectedCell, setSelectedCell] = useState(null);

//   // For filtering the calendar view
//   const [filterBatch, setFilterBatch] = useState("all");
  
//   // Update staff workload counts
//   useEffect(() => {
//     // Reset counters
//     const updatedStaff = staffList.map(staff => ({
//       ...staff,
//       classes_assigned: 0,
//       free_slots: timeSlots.length * batches.length * days.length
//     }));
    
//     // Count assigned classes
//     Object.keys(schedule).forEach(day => {
//       Object.keys(schedule[day] || {}).forEach(batch => {
//         Object.keys(schedule[day][batch] || {}).forEach(timeSlot => {
//           const staffId = schedule[day][batch][timeSlot];
//           const staffIndex = updatedStaff.findIndex(s => s.id === staffId);
          
//           if (staffIndex !== -1) {
//             updatedStaff[staffIndex].classes_assigned += 1;
//             updatedStaff[staffIndex].free_slots -= 1;
//           }
//         });
//       });
//     });
    
//     setStaffList(updatedStaff);
//   }, [schedule]);

//   // Move to previous week
//   const previousWeek = () => {
//     const newStart = new Date(currentWeekStart);
//     newStart.setDate(currentWeekStart.getDate() - 7);
//     setCurrentWeekStart(newStart);
//     setWeekDates(getWeekDates(newStart));
//   };

//   // Move to next week
//   const nextWeek = () => {
//     const newStart = new Date(currentWeekStart);
//     newStart.setDate(currentWeekStart.getDate() + 7);
//     setCurrentWeekStart(newStart);
//     setWeekDates(getWeekDates(newStart));
//   };

//   // Check if staff is available at the selected time across all batches for the selected day
//   const isStaffAvailable = (staffId, day, timeSlot) => {
//     if (!schedule[day]) return true;
    
//     for (const batch of batches) {
//       if (schedule[day][batch] && schedule[day][batch][timeSlot] === staffId) {
//         return false;
//       }
//     }
//     return true;
//   };

//   // Open assignment modal
//   const openAssignmentModal = (day, timeSlot, batch) => {
//     setSelectedDay(day);
//     setSelectedTimeSlot(timeSlot);
//     setSelectedBatch(batch);
//     setSelectedStaff("");
//     setSelectedCell({ day, timeSlot, batch });
//     setShowModal(true);
//   };

//   // Assign staff to a class
//   const assignStaff = () => {
//     if (!selectedDay || !selectedBatch || !selectedTimeSlot || !selectedStaff) {
//       alert("Please select a staff member");
//       return;
//     }

//     // Check if staff is available at this time
//     if (!isStaffAvailable(parseInt(selectedStaff), selectedDay, selectedTimeSlot)) {
//       alert("This staff member is already assigned to another batch at this time on this day");
//       return;
//     }

//     // Update schedule
//     setSchedule(prev => ({
//       ...prev,
//       [selectedDay]: {
//         ...prev[selectedDay],
//         [selectedBatch]: {
//           ...(prev[selectedDay] ? prev[selectedDay][selectedBatch] : {}),
//           [selectedTimeSlot]: parseInt(selectedStaff)
//         }
//       }
//     }));

//     // Close modal
//     setShowModal(false);
//     setSelectedCell(null);
//   };

//   // Remove assignment
//   const removeAssignment = (day, batch, timeSlot) => {
//     const updatedSchedule = { ...schedule };
//     if (updatedSchedule[day] && updatedSchedule[day][batch]) {
//       delete updatedSchedule[day][batch][timeSlot];
      
//       // Clean up empty objects
//       if (Object.keys(updatedSchedule[day][batch]).length === 0) {
//         delete updatedSchedule[day][batch];
//       }
//       if (Object.keys(updatedSchedule[day]).length === 0) {
//         delete updatedSchedule[day];
//       }
//     }
//     setSchedule(updatedSchedule);
//   };

//   // Get staff name by ID
//   const getStaffName = (staffId) => {
//     const staff = staffList.find(s => s.id === staffId);
//     return staff ? staff.name : "Unknown";
//   };

//   // Get staff department by ID
//   const getStaffDepartment = (staffId) => {
//     const staff = staffList.find(s => s.id === staffId);
//     return staff ? staff.department : "";
//   };

//   // Get cell color based on department
//   const getCellColor = (staffId) => {
//     const department = getStaffDepartment(staffId);
//     switch(department) {
//       case "Mathematics": return "bg-blue-100 border-blue-300";
//       case "Science": return "bg-green-100 border-green-300";
//       case "English": return "bg-purple-100 border-purple-300";
//       default: return "bg-gray-100 border-gray-300";
//     }
//   };

//   // Check if a cell has an assignment
//   const getCellAssignment = (day, batch, timeSlot) => {
//     if (schedule[day] && schedule[day][batch] && schedule[day][batch][timeSlot]) {
//       return schedule[day][batch][timeSlot];
//     }
//     return null;
//   };

//   return (
//     <div className="flex h-screen bg-gray-100" style={{marginLeft:'400px'}}>
//       {/* Sidebar */}
//       <div className="w-64 bg-indigo-900 text-white">
//         <div className="p-4">
//           <div className="flex items-center mb-8">
//             <img src="/api/placeholder/40/40" alt="Logo" className="mr-2" />
//             <h1 className="text-xl font-bold">WS Online Science</h1>
//           </div>
          
//           <nav className="space-y-2">
//             <NavItem icon={<Grid size={16} />} label="Dashboard" />
//             <NavItem icon={<LogIn size={16} />} label="Login" />
//             <NavItem icon={<UserPlus size={16} />} label="AddFaculty" />
//             <NavItem icon={<List size={16} />} label="AFacultyList" />
//             <NavItem icon={<FileText size={16} />} label="LeaveRequestForm" />
//             <NavItem icon={<CalendarIcon size={16} />} label="LeaveManagement" />
//             <NavItem icon={<Briefcase size={16} />} label="WorkloadDistribution" active />
//             <NavItem icon={<Settings size={16} />} label="Sidebar Manager" />
            
//             <div className="pt-4 pb-2">
//               <p className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">ADMINISTRATION</p>
//             </div>
            
//             <NavItem icon={<Shield size={16} />} label="Admin Section" hasDropdown />
//             <NavItem icon={<Book size={16} />} label="Academics" hasDropdown />
//             <NavItem icon={<File size={16} />} label="Study Material" hasDropdown />
//             <NavItem icon={<Clipboard size={16} />} label="Lesson Plan" hasDropdown />
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <div className="p-6">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">Workload Distribution Calendar</h1>

//           {/* Faculty Stats and Filters */}
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-white p-4 rounded-lg shadow flex items-center">
//               <User className="text-indigo-600 mr-3" size={24} />
//               <div>
//                 <p className="text-gray-500 text-sm">Total Faculty</p>
//                 <p className="text-2xl font-semibold">{staffList.length}</p>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow flex items-center">
//               <BookOpen className="text-green-600 mr-3" size={24} />
//               <div>
//                 <p className="text-gray-500 text-sm">Total Classes</p>
//                 <p className="text-2xl font-semibold">
//                   {staffList.reduce((sum, staff) => sum + staff.classes_assigned, 0)}
//                 </p>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow flex items-center">
//               <Clock className="text-orange-600 mr-3" size={24} />
//               <div>
//                 <p className="text-gray-500 text-sm">Available Slots</p>
//                 <p className="text-2xl font-semibold">
//                   {staffList.reduce((sum, staff) => sum + staff.free_slots, 0)}
//                 </p>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow">
//               <label className="block text-sm font-medium text-gray-500 mb-1">Filter by Grade:</label>
//               <select 
//                 className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={filterBatch}
//                 onChange={(e) => setFilterBatch(e.target.value)}
//               >
//                 <option value="all">All Grades</option>
//                 {batches.map(batch => (
//                   <option key={batch} value={batch}>{batch}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Calendar Navigation */}
//           <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
//             <button 
//               onClick={previousWeek}
//               className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
//             >
//               <ChevronLeft size={20} className="text-gray-600" />
//             </button>
            
//             <div className="text-lg font-medium text-gray-800">
//               {weekDates[0].date} - {weekDates[4].date}
//             </div>
            
//             <button 
//               onClick={nextWeek}
//               className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
//             >
//               <ChevronRight size={20} className="text-gray-600" />
//             </button>
//           </div>

//           {/* Calendar */}
//           <div className="bg-white p-4 rounded-lg shadow mb-6 overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="w-16 py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                   {weekDates.map((dateInfo) => (
//                     <th key={dateInfo.day} className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       <div>{dateInfo.day}</div>
//                       <div className="text-gray-400">{dateInfo.date}</div>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {timeSlots.map((timeSlot) => (
//                   <tr key={timeSlot}>
//                     <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">{timeSlot}</td>
//                     {weekDates.map((dateInfo) => (
//                       <td key={`${dateInfo.day}-${timeSlot}`} className="p-1 border-b border-gray-200">
//                         {filterBatch === "all" ? (
//                           <div className="grid grid-cols-1 gap-1">
//                             {batches.map((batch) => {
//                               const staffId = getCellAssignment(dateInfo.day, batch, timeSlot);
//                               return (
//                                 <div
//                                   key={`${dateInfo.day}-${timeSlot}-${batch}`}
//                                   onClick={() => openAssignmentModal(dateInfo.day, timeSlot, batch)}
//                                   className={`p-2 rounded border cursor-pointer transition-all text-xs h-12 flex flex-col justify-between ${
//                                     staffId ? getCellColor(staffId) : 'bg-gray-50 border-dashed border-gray-300 hover:bg-gray-100'
//                                   }`}
//                                 >
//                                   <div className="font-medium truncate">{batch}</div>
//                                   {staffId ? (
//                                     <div className="flex justify-between items-center">
//                                       <span className="truncate">{getStaffName(staffId)}</span>
//                                       <button 
//                                         onClick={(e) => {
//                                           e.stopPropagation();
//                                           removeAssignment(dateInfo.day, batch, timeSlot);
//                                         }}
//                                         className="ml-1 p-1 text-red-500 rounded-full hover:bg-red-100"
//                                       >
//                                         <X size={12} />
//                                       </button>
//                                     </div>
//                                   ) : (
//                                     <div className="text-gray-400">+ Assign</div>
//                                   )}
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         ) : (
//                           (() => {
//                             const batch = filterBatch;
//                             const staffId = getCellAssignment(dateInfo.day, batch, timeSlot);
//                             return (
//                               <div
//                                 onClick={() => openAssignmentModal(dateInfo.day, timeSlot, batch)}
//                                 className={`p-2 rounded border cursor-pointer transition-all h-12 flex flex-col justify-between ${
//                                   staffId ? getCellColor(staffId) : 'bg-gray-50 border-dashed border-gray-300 hover:bg-gray-100'
//                                 }`}
//                               >
//                                 {staffId ? (
//                                   <>
//                                     <div className="font-medium">{batch}</div>
//                                     <div className="flex justify-between items-center">
//                                       <span>{getStaffName(staffId)}</span>
//                                       <button 
//                                         onClick={(e) => {
//                                           e.stopPropagation();
//                                           removeAssignment(dateInfo.day, batch, timeSlot);
//                                         }}
//                                         className="ml-1 p-1 text-red-500 rounded-full hover:bg-red-100"
//                                       >
//                                         <X size={14} />
//                                       </button>
//                                     </div>
//                                   </>
//                                 ) : (
//                                   <div className="flex items-center justify-center h-full text-gray-400">
//                                     + Assign {batch}
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })()
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Faculty Information */}
//           <div className="bg-white p-4 rounded-lg shadow">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold text-gray-700">Faculty Information</h2>
//               <div className="flex gap-2">
//                 <div className="flex items-center">
//                   <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded mr-1"></div>
//                   <span className="text-xs text-gray-600">Mathematics</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-1"></div>
//                   <span className="text-xs text-gray-600">Science</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-4 h-4 bg-purple-100 border border-purple-300 rounded mr-1"></div>
//                   <span className="text-xs text-gray-600">English</span>
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes Assigned</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Free Slots</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Feedback</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {staffList.map((staff, index) => (
//                     <tr key={staff.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                       <td className="py-3 px-4 text-sm text-gray-900">{staff.id}</td>
//                       <td className="py-3 px-4 text-sm text-gray-900">{staff.name}</td>
//                       <td className="py-3 px-4 text-sm text-gray-900">{staff.department}</td>
//                       <td className="py-3 px-4 text-sm text-gray-900">{staff.classes_assigned}</td>
//                       <td className="py-3 px-4 text-sm text-gray-900">{staff.free_slots}</td>
//                       <td className="py-3 px-4 text-sm text-gray-900">{staff.student_feedback}/5.0</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Assignment Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-medium text-gray-900">
//                 Assign Class: {selectedDay}, {selectedTimeSlot}
//               </h3>
//               <button 
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <X size={20} />
//               </button>
//             </div>
            
//             <div className="mb-4">
//               <p className="text-sm text-gray-500">Batch: <span className="font-medium text-gray-700">{selectedBatch}</span></p>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Select Faculty:</label>
//               <select 
//                 className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={selectedStaff}
//                 onChange={(e) => setSelectedStaff(e.target.value)}
//               >
//                 <option value="">Choose a faculty member</option>
//                 {staffList.map(staff => (
//                   <option 
//                     key={staff.id} 
//                     value={staff.id}
//                     disabled={!isStaffAvailable(staff.id, selectedDay, selectedTimeSlot)}
//                   >
//                     {staff.name} ({staff.department}) 
//                     {!isStaffAvailable(staff.id, selectedDay, selectedTimeSlot) ? ' - Already Assigned' : ''}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex justify-end space-x-2">
//               <button 
//                 onClick={() => setShowModal(false)}
//                 className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Cancel
//               </button>
//               <button 
//                 onClick={assignStaff}
//                 className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 disabled={!selectedStaff}
//               >
//                 Assign
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Navigation Item Component
// const NavItem = ({ icon, label, active = false, hasDropdown = false }) => {
//   return (
//     <div className={`flex items-center p-2 rounded-md ${active ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}>
//       <div className="w-6 h-6 mr-3 flex items-center justify-center">
//         {icon}
//       </div>
//       <span className="flex-1">{label}</span>
//       {hasDropdown && (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//         </svg>
//       )}
//     </div>
//   );
// };

// export default WorkloadDistribution;


import React, { useState, useEffect } from 'react';

const Workloaddistribution = () => {
    // Sample initial staff data
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Mr. Kumar", department: "Mathematics", classes_assigned: 2, free_slots: 19, student_feedback: 4.5 },
    { id: 2, name: "Ms. Sharma", department: "Science", classes_assigned: 1, free_slots: 20, student_feedback: 4.8 },
    { id: 3, name: "Mr. Patel", department: "English", classes_assigned: 0, free_slots: 21, student_feedback: 4.2 },
    { id: 4, name: "Dr. Singh", department: "Science", classes_assigned: 3, free_slots: 18, student_feedback: 4.6 },
    { id: 5, name: "Mrs. Joshi", department: "Mathematics", classes_assigned: 4, free_slots: 17, student_feedback: 4.3 },
  ]);

  // Batches/grades
  const batches = ["Grade A", "Grade B", "Grade C"];
  
  // Days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  // Time slots
  const timeSlots = [
    "8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", 
    "12:00-13:00", "13:00-14:00", "14:00-15:00"
  ];

  // Get current date and next few days
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const diff = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    const monday = new Date(today);
    monday.setDate(today.getDate() - diff);
    return monday;
  });

  const getWeekDates = (startDate) => {
    return days.map((day, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      return {
        day,
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        fullDate: date.toISOString().split('T')[0]
      };
    });
  };

  const [weekDates, setWeekDates] = useState(getWeekDates(currentWeekStart));

  // Schedule state: { day: { batchId: { timeSlot: staffId } } }
  const [schedule, setSchedule] = useState({
    "Monday": {
      "Grade A": {
        "8:00-9:00": 1,
      },
      "Grade B": {
        "8:00-9:00": 2,
      },
    },
    "Tuesday": {
      "Grade C": {
        "11:00-12:00": 1,
      },
    },
  });

  // State for assignment modal
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedCell, setSelectedCell] = useState(null);

  // For filtering the calendar view
  const [filterBatch, setFilterBatch] = useState("all");
  
  // Update staff workload counts
  useEffect(() => {
    // Reset counters
    const updatedStaff = staffList.map(staff => ({
      ...staff,
      classes_assigned: 0,
      free_slots: timeSlots.length * batches.length * days.length
    }));
    
    // Count assigned classes
    Object.keys(schedule).forEach(day => {
      Object.keys(schedule[day] || {}).forEach(batch => {
        Object.keys(schedule[day][batch] || {}).forEach(timeSlot => {
          const staffId = schedule[day][batch][timeSlot];
          const staffIndex = updatedStaff.findIndex(s => s.id === staffId);
          
          if (staffIndex !== -1) {
            updatedStaff[staffIndex].classes_assigned += 1;
            updatedStaff[staffIndex].free_slots -= 1;
          }
        });
      });
    });
    
    setStaffList(updatedStaff);
  }, [schedule]);

  // Move to previous week
  const previousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newStart);
    setWeekDates(getWeekDates(newStart));
  };

  // Move to next week
  const nextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newStart);
    setWeekDates(getWeekDates(newStart));
  };

  // Check if staff is available at the selected time across all batches for the selected day
  const isStaffAvailable = (staffId, day, timeSlot) => {
    if (!schedule[day]) return true;
    
    for (const batch of batches) {
      if (schedule[day][batch] && schedule[day][batch][timeSlot] === staffId) {
        return false;
      }
    }
    return true;
  };

  // Open assignment modal
  const openAssignmentModal = (day, timeSlot, batch) => {
    setSelectedDay(day);
    setSelectedTimeSlot(timeSlot);
    setSelectedBatch(batch);
    setSelectedStaff("");
    setSelectedCell({ day, timeSlot, batch });
    setShowModal(true);
  };

  // Assign staff to a class
  const assignStaff = () => {
    if (!selectedDay || !selectedBatch || !selectedTimeSlot || !selectedStaff) {
      alert("Please select a staff member");
      return;
    }

    // Check if staff is available at this time
    if (!isStaffAvailable(parseInt(selectedStaff), selectedDay, selectedTimeSlot)) {
      alert("This staff member is already assigned to another batch at this time on this day");
      return;
    }

    // Update schedule
    setSchedule(prev => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        [selectedBatch]: {
          ...(prev[selectedDay] ? prev[selectedDay][selectedBatch] : {}),
          [selectedTimeSlot]: parseInt(selectedStaff)
        }
      }
    }));

    // Close modal
    setShowModal(false);
    setSelectedCell(null);
  };

  // Remove assignment
  const removeAssignment = (day, batch, timeSlot) => {
    const updatedSchedule = { ...schedule };
    if (updatedSchedule[day] && updatedSchedule[day][batch]) {
      delete updatedSchedule[day][batch][timeSlot];
      
      // Clean up empty objects
      if (Object.keys(updatedSchedule[day][batch]).length === 0) {
        delete updatedSchedule[day][batch];
      }
      if (Object.keys(updatedSchedule[day]).length === 0) {
        delete updatedSchedule[day];
      }
    }
    setSchedule(updatedSchedule);
  };

  // Get staff name by ID
  const getStaffName = (staffId) => {
    const staff = staffList.find(s => s.id === staffId);
    return staff ? staff.name : "Unknown";
  };

  // Get staff department by ID
  const getStaffDepartment = (staffId) => {
    const staff = staffList.find(s => s.id === staffId);
    return staff ? staff.department : "";
  };

  // Get cell color based on department
  const getCellColor = (staffId) => {
    const department = getStaffDepartment(staffId);
    switch(department) {
      case "Mathematics": return "bg-blue-100 border-blue-300";
      case "Science": return "bg-green-100 border-green-300";
      case "English": return "bg-purple-100 border-purple-300";
      default: return "bg-gray-100 border-gray-300";
    }
  };

  // Check if a cell has an assignment
  const getCellAssignment = (day, batch, timeSlot) => {
    if (schedule[day] && schedule[day][batch] && schedule[day][batch][timeSlot]) {
      return schedule[day][batch][timeSlot];
    }
    return null;
  };

  return (
    <div>
      {/* <!-- Page Wrapper --> */}
		<div class="page-wrapper">
			<div class="content">

				<div class="row">
					<div class="col-md-12">

						{/* <!-- Page Header --> */}
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col-8">
									<h4 >WS Online Science<span class="count-title">123</span></h4>
								</div>
								<div class="col-4 text-end">
									<div class="head-icons">
										<a href="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Page Header --> */}

						<div class="row">
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Total Faculty</span>
														<h5>540</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-1" data-width="100%">
                            <svg class="peity" height="35" width="100%"><polygon fill="#F7A37A" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#F7A37A" stroke-width="1" stroke-linecap="square"></polyline></svg>
                            </span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Total Classes</span>
														<h5>600</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-2" data-width="100%"><svg class="peity" height="35" width="100%"><polygon fill="#70b0ff" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#70b0ff" stroke-width="1" stroke-linecap="square"></polyline></svg></span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Available Slots</span>
														<h5>560</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-3" data-width="100%"><svg class="peity" height="35" width="100%"><polygon fill="#5fde96" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#5fde96" stroke-width="1" stroke-linecap="square"></polyline></svg></span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Filter by Grade</span>
														<h5>40</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-4" data-width="100%"><svg class="peity" height="35" width="100%"><polygon fill="red" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#F7A37A" stroke-width="1" stroke-linecap="square"></polyline></svg></span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="card ">
							<div class="card-header">
								{/* <!-- Search --> */}
								<div class="row align-items-center">
									<div class="col-sm-4">
										<div class="icon-form mb-3 mb-sm-0">
											<span class="form-icon"><i class="ti ti-search"></i></span>
											<input type="text" class="form-control" placeholder="Search"/>
										</div>
									</div>
									<div class="col-sm-8">
										<div
											class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end">
											<div class="dropdown me-2">
												<a href="javascript:void(0);" class="dropdown-toggle"
													data-bs-toggle="dropdown"><i
														class="ti ti-package-export me-2"></i>Export</a>
												<div class="dropdown-menu  dropdown-menu-end">
													<ul>
														<li>
															<a href="javascript:void(0);" class="dropdown-item"><i
																	class="ti ti-file-type-pdf text-danger me-1"></i>Export
																as PDF</a>
														</li>
														<li>
															<a href="javascript:void(0);" class="dropdown-item"><i
																	class="ti ti-file-type-xls text-green me-1"></i>Export
																as Excel </a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- /Search --> */}
							</div>
							<div class="card-body">
								{/* <!-- Filter --> */}
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-4">
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										<div class="dropdown me-2">
											<a href="javascript:void(0);" class="dropdown-toggle"
												data-bs-toggle="dropdown"><i
													class="ti ti-sort-ascending-2 me-2"></i>Sort </a>
											<div class="dropdown-menu  dropdown-menu-start">
												<ul>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Ascending
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Descending
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Recently
															Viewed
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Recently
															Added
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="icon-form">
											<span class="form-icon"><i class="ti ti-calendar"></i></span>
											<input type="text" class="form-control bookingrange" placeholder=""/>
										</div>
									</div>
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										<div class="dropdown me-2">
											<a href="javascript:void(0);" class="btn bg-soft-purple text-purple"
												data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
													class="ti ti-columns-3 me-2"></i>Faculty Information</a>
											<div class="dropdown-menu  dropdown-menu-md-end dropdown-md p-3">
												<div class="border-top pt-3">
													<div class="d-flex align-items-center justify-content-between mb-3">
														<p class="mb-0 d-flex align-items-center"><i
																class="ti ti-grip-vertical me-2"></i>Mathematics</p>
													</div>
													<div class="d-flex align-items-center justify-content-between mb-3">
														<p class="mb-0 d-flex align-items-center"><i
																class="ti ti-grip-vertical me-2"></i>English</p>
													</div>
													
												</div>
											</div>
										</div>
										<div class="form-sorts dropdown">
											<a href="javascript:void(0);" data-bs-toggle="dropdown"
												data-bs-auto-close="outside"><i
													class="ti ti-filter-share"></i>Student Time Table</a>
											<div class="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end p-3">
												<div class="filter-set-view">
													<div class="filter-set-head">
														<h4><i class="ti ti-filter-share"></i>Student Time Table</h4>
													</div>
													{/* <div class="filter-reset-btns">
														<div class="row">
															<div class="col-6">
																<a href="#" class="btn btn-light">Reset</a>
															</div>
															<div class="col-6">
																<a href="subscription.html"
																	class="btn btn-primary">Filter</a>
															</div>
														</div>
													</div> */}
                          
                          <div class="card-body">
								<div class="table-responsive">
									<table class="table table-bordered mb-0">
										<thead>
											<tr>
												<th>Time</th>
												<th>Monday</th>
												<th>Tuesday</th>
                        <th>Webnesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>9:00 Am - 10:00AM</td>
												<td>Grade-A Karthik</td>
                        <td>Grade-B</td>
                        <td>Grade-C</td>
                        <td>Grade-D</td>
                        <td>Grade-E</td>
											</tr>

                      <tr>
												<td>10:00 Am - 11:00AM</td>
												<td>Grade-A</td>
                        <td>Grade-B + Vijay</td>
                        <td>Grade-C</td>
                        <td>Grade-D</td>
                        <td>Grade-E</td>
											</tr>

                      <tr>
												<td>11:00 Am - 12:00PM</td>
												<td>Grade-A</td>
                        <td>Grade-B</td>
                        <td>Grade-C + kavana</td>
                        <td>Grade-D</td>
                        <td>Grade-E</td>
											</tr>
										
										</tbody>
									</table>
								</div>
							</div>

												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- /Filter --> */}

								{/* <!-- Contact List --> */}
								<div class="table-responsive custom-table">
									<table class="table datatable">
										<thead class="thead-light">
											<tr>
												<th class="no-sort">
													<label class="checkboxs"><input type="checkbox" id="select-all"/><span class="checkmarks"></span></label>
												</th>
												<th class="no-sort"></th>
												<th>Id</th>
												<th>Name</th>
												<th>Department</th>
												<th>Classes Assigned</th>
												<th>Free Slots</th>
												<th>Student Feedback</th>
												<th>Status</th>
												<th class="text-end">Action</th>
											</tr>
										</thead>
										<tbody>
                    {staffList.map((staff, index) => (<tr key={staff.id}>
												<td><label class="checkboxs"><input type="checkbox"/><span class="checkmarks"></span></label></td>
												<td>
													<div class="set-star rating-select"><i class="fa fa-star"></i></div>
												</td>
												<td>
													<div class="d-flex align-items-center">
													
														<a href="" class="d-flex flex-column fw-medium">{staff.id}</a>
													</div>
												</td>
												<td>{staff.name}</td>
												<td>{staff.department}</td>
												<td>{staff.classes_assigned}</td>
												<td>{staff.free_slots}</td>
												<td>{staff.student_feedback}</td>
												<td><span class="badge badge-pill badge-status bg-success">class Accept</span></td>
												<td>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#view_invoice"><i class="ti ti-eye text-blue-light"></i> Preview</a>
															<a class="dropdown-item" href="#">
																<i class="ti ti-download text-blue"></i>Download
															</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_company">
																<i class="ti ti-trash text-danger"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr> ))}
										
											
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
								{/* <!-- /Contact List --> */}

							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
		{/* <!-- /Page Wrapper --> */}
    </div>
  )
}

export default Workloaddistribution
