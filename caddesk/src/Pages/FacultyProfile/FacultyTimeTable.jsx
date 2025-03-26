// import React from "react";

// const FacultyTimeTable = () => {
//   return (
//     <div>
//       <div class="page-wrapper cardhead">
//         <div class="content container-fluid">
//           <div class="row">
//             <div class="col-lg-12">
//               <div class="card">
//                 <div class="card-header">
//                   <h6>Student Table</h6>
//                 </div>
//                 <div class="card-body">
//                   <div class="table-responsive">
//                     <table class="table table-bordered mb-0">
//                       <thead>
//                         <tr>
//                           <th>S.no</th>
//                           <th>Day</th>
//                           <th><span class="badge bg-outline-success">9:00-10:00</span></th>
//                           <th><span class="badge bg-outline-success">10:00-11:00</span></th>
//                           <th><span class="badge bg-outline-success">11:00-12:00</span></th>
//                           <th><span class="badge bg-outline-success">12:00-1:00</span></th>
//                           <th><span class="badge bg-outline-success">1:00-2:00</span></th>
//                           <th><span class="badge bg-outline-success">2:00-3:00</span></th>
//                           <th><span class="badge bg-outline-success">3:00-4:00</span></th>
//                           <th><span class="badge bg-outline-success">4:00-5:00</span></th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>1</td>
//                           <td><span class="badge bg-success-transparent">Monday</span></td>
//                           <td>AutoCAD</td>
//                           <td>Ansys</td>
//                           <td>Creo</td>
//                           <td>AutoCad</td>
//                           <td>Autocad</td>
//                           <td>SolidWorks</td>
//                           <td>Catia</td>
//                           <td>NxPro</td>
//                         </tr>
//                         <tr>
//                           <td>2</td>
//                           <td><span class="badge bg-warning-transparent">Tuesday</span></td>
//                           <td>AutoCAD</td>
//                           <td>Ansys</td>
//                           <td>Creo</td>
//                           <td>AutoCad</td>
//                           <td>Autocad</td>
//                           <td>SolidWorks</td>
//                           <td>Catia</td>
//                           <td>NxPro</td>
//                         </tr>
//                         <tr>
//                           <td>3</td>
//                           <td><span class="badge bg-info-transparent">Wednsday</span></td>
//                           <td>AutoCAD</td>
//                           <td>Ansys</td>
//                           <td>Creo</td>
//                           <td>AutoCad</td>
//                           <td>Autocad</td>
//                           <td>SolidWorks</td>
//                           <td>Catia</td>
//                           <td>NxPro</td>
//                         </tr>
//                         <tr>
//                           <td>4</td>
//                           <td><span class="badge bg-danger-transparent">Thrusday</span></td>
//                           <td>AutoCAD</td>
//                           <td>Ansys</td>
//                           <td>Creo</td>
//                           <td>AutoCad</td>
//                           <td>Autocad</td>
//                           <td>SolidWorks</td>
//                           <td>Catia</td>
//                           <td>NxPro</td>
//                         </tr>
//                         <tr>
//                           <td>5</td>
//                           <td><span class="badge bg-soft-dark">Friday</span></td>
//                           <td>AutoCAD</td>
//                           <td>Ansys</td>
//                           <td>Creo</td>
//                           <td>AutoCad</td>
//                           <td>Autocad</td>
//                           <td>SolidWorks</td>
//                           <td>Catia</td>
//                           <td>NxPro</td>
//                         </tr>
//                         <tr>
//                           <td>6</td>
//                           <td><span class="badge bg-success-transparent">Saturday</span></td>
//                           <td>AutoCAD</td>
//                           <td>Ansys</td>
//                           <td>Creo</td>
//                           <td>AutoCad</td>
//                           <td>Autocad</td>
//                           <td>SolidWorks</td>
//                           <td>Catia</td>
//                           <td>NxPro</td>
//                         </tr>
                       

//                       </tbody>
//                     </table>
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

// export default FacultyTimeTable;
import { useState, useEffect } from "react";
import axios from "axios";

const WeeklyTimetable = () => {
  const [timetable, setTimetable] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const facultyId = JSON.parse(localStorage.getItem("user"))?.employeeId;

  // Define static time slots
  const staticTimeSlots = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:30-12:30",
    "12:30-13:30",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00"
  ];

  useEffect(() => {
    if (!facultyId) {
      setError("No faculty ID found in localStorage");
      setIsLoading(false);
      return;
    }

    const fetchTimetable = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:8080/timetable/full/${facultyId}`);
        const data = res.data;

        const structuredTimetable = {};

        // Initialize all days with empty slots
        ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach(day => {
          structuredTimetable[day] = {};
        });

        // Populate with actual data
        data.forEach((entry) => {
          entry.schedule.forEach((scheduleItem) => {
            if (!structuredTimetable[scheduleItem.day]) {
              structuredTimetable[scheduleItem.day] = {};
            }
            structuredTimetable[scheduleItem.day][scheduleItem.timeSlot] = {
              batchName: entry.batchName,
              subjectName: entry.subject.subjectName,
            };
          });
        });

        setTimetable(structuredTimetable);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching timetable:", err);
        setError("Failed to load timetable. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchTimetable();
  }, [facultyId]);

  // Get the current day
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[new Date().getDay()];
  
  // Function to get cell background color - using brighter colors now
  const getCellStyle = (day, slot) => {
    if (!timetable[day]?.[slot]) return {};
    
    // Brighter green background for all classes
    return {
      backgroundColor: "#9EEDB3", // Brighter green
      height: "100%",
      padding: "10px 8px",
      borderRadius: "4px",
      border: "1px solidrgb(210, 153, 125)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
    };
  };

  return (
    <div className="p-2 w-full ml-2" style={{marginLeft:'300px'}}> {/* Adjusted padding and added left margin */}
      <div className="mb-3">
        <h2 className="text-lg font-bold text-gray-800">Faculty Schedule Overview</h2>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm shadow-sm">
            <thead>
              <tr className="bg-blue-100"> {/* Changed header color */}
                <th className="border py-3 px-3 text-left font-medium text-gray-700">Day</th>
                {staticTimeSlots.map((slot) => (
                  <th key={slot} className="border py-2 px-3 text-center font-medium text-gray-700">
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                <tr 
                  key={day} 
                  className={`${currentDay === day ? "bg-blue-50" : ""} hover:bg-gray-50`}
                >
                  <td className={`border py-2 px-3 font-medium ${currentDay === day ? "text-blue-700 bg-blue-100" : "text-gray-700"}`}>
                    {day}
                  </td>
                  {staticTimeSlots.map((slot) => (
                    <td key={`${day}-${slot}`} className="border p-1 text-center h-16"> {/* Reduced height */}
                      <div style={getCellStyle(day, slot)} className="h-full flex flex-col justify-center items-center">
                        {timetable[day]?.[slot] ? (
                          <>
                            <div className="font-bold text-gray-800">{timetable[day][slot].batchName}</div>
                            <div className="text-gray-700">{timetable[day][slot].subjectName}</div>
                          </>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default WeeklyTimetable;
