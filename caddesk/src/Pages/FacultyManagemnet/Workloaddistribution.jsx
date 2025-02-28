// import React, { useState, useEffect } from 'react';

// const StaffWorkloadScheduler = () => {
//   // Sample initial staff data
//   const [staffList, setStaffList] = useState([
//     { staff_id: 1, staff_name: "Mr. Kumar", department: "Mathematics", classes_assigned: 2, free_slots: 6, student_feedback: 4.5 },
//     { staff_id: 2, staff_name: "Ms. Sharma", department: "Science", classes_assigned: 3, free_slots: 5, student_feedback: 4.8 },
//     { staff_id: 3, staff_name: "Mr. Patel", department: "English", classes_assigned: 4, free_slots: 4, student_feedback: 4.2 },
//   ]);

//   // Sample batches/grades
//   const batches = ["Grade A", "Grade B", "Grade C"];

//   // Time slots from 8AM to 3PM
//   const timeSlots = [
//     "8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", 
//     "12:00-13:00", "13:00-14:00", "14:00-15:00"
//   ];

//   // Schedule state: { batchId: { timeSlot: staffId } }
//   const [schedule, setSchedule] = useState({
//     "Grade A": {
//       "8:00-9:00": 1, // Mr. Kumar is assigned to Grade A, 8-9AM
//       "9:00-10:00": 2,
//     },
//     "Grade B": {
//       "8:00-9:00": 3,
//       "10:00-11:00": 2,
//     },
//     "Grade C": {
//       "11:00-12:00": 1,
//     }
//   });

//   // For adding new assignments
//   const [selectedBatch, setSelectedBatch] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [selectedStaff, setSelectedStaff] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Update staff workload counts
//   useEffect(() => {
//     // Reset counters
//     const updatedStaff = staffList.map(staff => ({
//       ...staff,
//       classes_assigned: 0,
//       free_slots: timeSlots.length * batches.length
//     }));
    
//     // Count assigned classes
//     Object.keys(schedule).forEach(batch => {
//       Object.keys(schedule[batch]).forEach(timeSlot => {
//         const staffId = schedule[batch][timeSlot];
//         const staffIndex = updatedStaff.findIndex(s => s.staff_id === staffId);
        
//         if (staffIndex !== -1) {
//           updatedStaff[staffIndex].classes_assigned += 1;
//           updatedStaff[staffIndex].free_slots -= 1;
//         }
//       });
//     });
    
//     setStaffList(updatedStaff);
//   }, [schedule]);

//   // Check if staff is available at the selected time across all batches
//   const isStaffAvailable = (staffId, timeSlot) => {
//     for (const batch of batches) {
//       if (schedule[batch] && schedule[batch][timeSlot] === staffId) {
//         return false;
//       }
//     }
//     return true;
//   };

//   // Assign staff to a class
//   const assignStaff = () => {
//     if (!selectedBatch || !selectedTimeSlot || !selectedStaff) {
//       setErrorMessage("Please select batch, time slot, and staff");
//       return;
//     }

//     // Check if the slot is already assigned
//     if (schedule[selectedBatch] && schedule[selectedBatch][selectedTimeSlot]) {
//       setErrorMessage("This time slot is already assigned for this batch");
//       return;
//     }

//     // Check if staff is available at this time
//     if (!isStaffAvailable(parseInt(selectedStaff), selectedTimeSlot)) {
//       setErrorMessage("This staff member is already assigned to another batch at this time");
//       return;
//     }

//     // Update schedule
//     setSchedule(prev => ({
//       ...prev,
//       [selectedBatch]: {
//         ...prev[selectedBatch],
//         [selectedTimeSlot]: parseInt(selectedStaff)
//       }
//     }));

//     // Clear form
//     setErrorMessage("");
//     setSelectedBatch("");
//     setSelectedTimeSlot("");
//     setSelectedStaff("");
//   };

//   // Remove assignment
//   const removeAssignment = (batch, timeSlot) => {
//     const updatedSchedule = { ...schedule };
//     delete updatedSchedule[batch][timeSlot];
//     setSchedule(updatedSchedule);
//   };

//   // Get staff name by ID
//   const getStaffName = (staffId) => {
//     const staff = staffList.find(s => s.staff_id === staffId);
//     return staff ? staff.staff_name : "Unknown";
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Staff Workload Scheduler</h1>
      
//       {/* Staff Information */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Staff Information</h2>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">ID</th>
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Department</th>
//               <th className="py-2 px-4 border-b">Classes Assigned</th>
//               <th className="py-2 px-4 border-b">Free Slots</th>
//               <th className="py-2 px-4 border-b">Student Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {staffList.map(staff => (
//               <tr key={staff.staff_id}>
//                 <td className="py-2 px-4 border-b">{staff.staff_id}</td>
//                 <td className="py-2 px-4 border-b">{staff.staff_name}</td>
//                 <td className="py-2 px-4 border-b">{staff.department}</td>
//                 <td className="py-2 px-4 border-b">{staff.classes_assigned}</td>
//                 <td className="py-2 px-4 border-b">{staff.free_slots}</td>
//                 <td className="py-2 px-4 border-b">{staff.student_feedback}/5.0</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Assignment Form */}
//       <div className="mb-8 p-4 border rounded-lg bg-gray-50">
//         <h2 className="text-xl font-semibold mb-4">Assign Class</h2>
//         {errorMessage && (
//           <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
//             {errorMessage}
//           </div>
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div>
//             <label className="block mb-2">Batch/Grade:</label>
//             <select 
//               className="w-full p-2 border rounded"
//               value={selectedBatch}
//               onChange={(e) => setSelectedBatch(e.target.value)}
//             >
//               <option value="">Select Batch</option>
//               {batches.map(batch => (
//                 <option key={batch} value={batch}>{batch}</option>
//               ))}
//             </select>
//           </div>
          
//           <div>
//             <label className="block mb-2">Time Slot:</label>
//             <select 
//               className="w-full p-2 border rounded"
//               value={selectedTimeSlot}
//               onChange={(e) => setSelectedTimeSlot(e.target.value)}
//             >
//               <option value="">Select Time</option>
//               {timeSlots.map(slot => (
//                 <option key={slot} value={slot}>{slot}</option>
//               ))}
//             </select>
//           </div>
          
//           <div>
//             <label className="block mb-2">Staff:</label>
//             <select 
//               className="w-full p-2 border rounded"
//               value={selectedStaff}
//               onChange={(e) => setSelectedStaff(e.target.value)}
//             >
//               <option value="">Select Staff</option>
//               {staffList.map(staff => (
//                 <option key={staff.staff_id} value={staff.staff_id}>
//                   {staff.staff_name} ({staff.department})
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="flex items-end">
//             <button 
//               onClick={assignStaff}
//               className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Assign
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Current Schedule */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Current Schedule</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Time Slot</th>
//                 {batches.map(batch => (
//                   <th key={batch} className="py-2 px-4 border-b">{batch}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {timeSlots.map(timeSlot => (
//                 <tr key={timeSlot}>
//                   <td className="py-2 px-4 border-b font-medium">{timeSlot}</td>
//                   {batches.map(batch => (
//                     <td key={`${batch}-${timeSlot}`} className="py-2 px-4 border-b">
//                       {schedule[batch] && schedule[batch][timeSlot] ? (
//                         <div className="flex justify-between">
//                           <span>{getStaffName(schedule[batch][timeSlot])}</span>
//                           <button 
//                             onClick={() => removeAssignment(batch, timeSlot)}
//                             className="text-red-500 text-sm"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ) : (
//                         <span className="text-gray-400">Available</span>
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffWorkloadScheduler;


import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, BookOpen, X, Users, ChevronLeft, ChevronRight, Grid, LogIn, UserPlus, List, FileText, Calendar as CalendarIcon, Briefcase, Settings, Shield, Book, File, Clipboard } from 'lucide-react';

const WorkloadDistribution = () => {
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
    <div className="flex h-screen bg-gray-100" style={{marginLeft:'400px'}}>
      {/* Sidebar */}
      <div className="w-64 bg-indigo-900 text-white">
        <div className="p-4">
          <div className="flex items-center mb-8">
            <img src="/api/placeholder/40/40" alt="Logo" className="mr-2" />
            <h1 className="text-xl font-bold">WS Online Science</h1>
          </div>
          
          <nav className="space-y-2">
            <NavItem icon={<Grid size={16} />} label="Dashboard" />
            <NavItem icon={<LogIn size={16} />} label="Login" />
            <NavItem icon={<UserPlus size={16} />} label="AddFaculty" />
            <NavItem icon={<List size={16} />} label="AFacultyList" />
            <NavItem icon={<FileText size={16} />} label="LeaveRequestForm" />
            <NavItem icon={<CalendarIcon size={16} />} label="LeaveManagement" />
            <NavItem icon={<Briefcase size={16} />} label="WorkloadDistribution" active />
            <NavItem icon={<Settings size={16} />} label="Sidebar Manager" />
            
            <div className="pt-4 pb-2">
              <p className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">ADMINISTRATION</p>
            </div>
            
            <NavItem icon={<Shield size={16} />} label="Admin Section" hasDropdown />
            <NavItem icon={<Book size={16} />} label="Academics" hasDropdown />
            <NavItem icon={<File size={16} />} label="Study Material" hasDropdown />
            <NavItem icon={<Clipboard size={16} />} label="Lesson Plan" hasDropdown />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Workload Distribution Calendar</h1>

          {/* Faculty Stats and Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <User className="text-indigo-600 mr-3" size={24} />
              <div>
                <p className="text-gray-500 text-sm">Total Faculty</p>
                <p className="text-2xl font-semibold">{staffList.length}</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <BookOpen className="text-green-600 mr-3" size={24} />
              <div>
                <p className="text-gray-500 text-sm">Total Classes</p>
                <p className="text-2xl font-semibold">
                  {staffList.reduce((sum, staff) => sum + staff.classes_assigned, 0)}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <Clock className="text-orange-600 mr-3" size={24} />
              <div>
                <p className="text-gray-500 text-sm">Available Slots</p>
                <p className="text-2xl font-semibold">
                  {staffList.reduce((sum, staff) => sum + staff.free_slots, 0)}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <label className="block text-sm font-medium text-gray-500 mb-1">Filter by Grade:</label>
              <select 
                className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={filterBatch}
                onChange={(e) => setFilterBatch(e.target.value)}
              >
                <option value="all">All Grades</option>
                {batches.map(batch => (
                  <option key={batch} value={batch}>{batch}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Calendar Navigation */}
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
            <button 
              onClick={previousWeek}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <div className="text-lg font-medium text-gray-800">
              {weekDates[0].date} - {weekDates[4].date}
            </div>
            
            <button 
              onClick={nextWeek}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Calendar */}
          <div className="bg-white p-4 rounded-lg shadow mb-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="w-16 py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  {weekDates.map((dateInfo) => (
                    <th key={dateInfo.day} className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div>{dateInfo.day}</div>
                      <div className="text-gray-400">{dateInfo.date}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {timeSlots.map((timeSlot) => (
                  <tr key={timeSlot}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">{timeSlot}</td>
                    {weekDates.map((dateInfo) => (
                      <td key={`${dateInfo.day}-${timeSlot}`} className="p-1 border-b border-gray-200">
                        {filterBatch === "all" ? (
                          <div className="grid grid-cols-1 gap-1">
                            {batches.map((batch) => {
                              const staffId = getCellAssignment(dateInfo.day, batch, timeSlot);
                              return (
                                <div
                                  key={`${dateInfo.day}-${timeSlot}-${batch}`}
                                  onClick={() => openAssignmentModal(dateInfo.day, timeSlot, batch)}
                                  className={`p-2 rounded border cursor-pointer transition-all text-xs h-12 flex flex-col justify-between ${
                                    staffId ? getCellColor(staffId) : 'bg-gray-50 border-dashed border-gray-300 hover:bg-gray-100'
                                  }`}
                                >
                                  <div className="font-medium truncate">{batch}</div>
                                  {staffId ? (
                                    <div className="flex justify-between items-center">
                                      <span className="truncate">{getStaffName(staffId)}</span>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          removeAssignment(dateInfo.day, batch, timeSlot);
                                        }}
                                        className="ml-1 p-1 text-red-500 rounded-full hover:bg-red-100"
                                      >
                                        <X size={12} />
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="text-gray-400">+ Assign</div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          (() => {
                            const batch = filterBatch;
                            const staffId = getCellAssignment(dateInfo.day, batch, timeSlot);
                            return (
                              <div
                                onClick={() => openAssignmentModal(dateInfo.day, timeSlot, batch)}
                                className={`p-2 rounded border cursor-pointer transition-all h-12 flex flex-col justify-between ${
                                  staffId ? getCellColor(staffId) : 'bg-gray-50 border-dashed border-gray-300 hover:bg-gray-100'
                                }`}
                              >
                                {staffId ? (
                                  <>
                                    <div className="font-medium">{batch}</div>
                                    <div className="flex justify-between items-center">
                                      <span>{getStaffName(staffId)}</span>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          removeAssignment(dateInfo.day, batch, timeSlot);
                                        }}
                                        className="ml-1 p-1 text-red-500 rounded-full hover:bg-red-100"
                                      >
                                        <X size={14} />
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex items-center justify-center h-full text-gray-400">
                                    + Assign {batch}
                                  </div>
                                )}
                              </div>
                            );
                          })()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Faculty Information */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Faculty Information</h2>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded mr-1"></div>
                  <span className="text-xs text-gray-600">Mathematics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-1"></div>
                  <span className="text-xs text-gray-600">Science</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-100 border border-purple-300 rounded mr-1"></div>
                  <span className="text-xs text-gray-600">English</span>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes Assigned</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Free Slots</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Feedback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {staffList.map((staff, index) => (
                    <tr key={staff.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-sm text-gray-900">{staff.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{staff.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{staff.department}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{staff.classes_assigned}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{staff.free_slots}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{staff.student_feedback}/5.0</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Assign Class: {selectedDay}, {selectedTimeSlot}
              </h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">Batch: <span className="font-medium text-gray-700">{selectedBatch}</span></p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Faculty:</label>
              <select 
                className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
              >
                <option value="">Choose a faculty member</option>
                {staffList.map(staff => (
                  <option 
                    key={staff.id} 
                    value={staff.id}
                    disabled={!isStaffAvailable(staff.id, selectedDay, selectedTimeSlot)}
                  >
                    {staff.name} ({staff.department}) 
                    {!isStaffAvailable(staff.id, selectedDay, selectedTimeSlot) ? ' - Already Assigned' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setShowModal(false)}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button 
                onClick={assignStaff}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={!selectedStaff}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, active = false, hasDropdown = false }) => {
  return (
    <div className={`flex items-center p-2 rounded-md ${active ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}>
      <div className="w-6 h-6 mr-3 flex items-center justify-center">
        {icon}
      </div>
      <span className="flex-1">{label}</span>
      {hasDropdown && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      )}
    </div>
  );
};

export default WorkloadDistribution;