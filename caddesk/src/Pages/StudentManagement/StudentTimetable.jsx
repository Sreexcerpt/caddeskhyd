import React, { useState } from "react";
import { CSVLink } from "react-csv";

const StudentTimetable = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  
  const classes = ["Class 1", "Class 2", "Class 3"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const timetable = { 
    "Class 1": {
        Monday: [
            { time: "9:00 AM - 10:00 AM", subject: "Data Structures & Algorithms", lecturer: "Prof. Smith", classroom: "101" },
            { time: "10:00 AM - 11:00 AM", subject: "Object-Oriented Programming", lecturer: "Ms. Johnson", classroom: "102" },
            { time: "11:00 AM - 12:00 PM", subject: "Database Management Systems", lecturer: "Dr. Adams", classroom: "103" },
            { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
            { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
            { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
            { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
            { time: "5:00 PM - 6:00 PM", subject: "Artificial Intelligence", lecturer: "Dr. Carter", classroom: "108" },
            { time: "6:00 PM - 7:00 PM", subject: "Software Engineering", lecturer: "Ms. Lee", classroom: "109" },
          ],
      Tuesday: [
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
            { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
            { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
            { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
      ],
    },
    "Class 2": {
      Monday: [
        { time: "5:00 PM - 6:00 PM", subject: "Artificial Intelligence", lecturer: "Dr. Carter", classroom: "108" },
            { time: "6:00 PM - 7:00 PM", subject: "Software Engineering", lecturer: "Ms. Lee", classroom: "109" },
      ],
      Wednesday: [
        { time: "5:00 PM - 6:00 PM", subject: "Artificial Intelligence", lecturer: "Dr. Carter", classroom: "108" },
        { time: "6:00 PM - 7:00 PM", subject: "Software Engineering", lecturer: "Ms. Lee", classroom: "109" },
      ],
    },
    "Class 3": {
      Thursday: [
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
        { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
        { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
      ],
    },
    "Class 4": {
      Friday: [
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
            { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
            { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
            { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
      ],
    },
  };

  const getTimetableData = () => {
    return selectedClass && selectedDay && timetable[selectedClass]?.[selectedDay]
      ? timetable[selectedClass][selectedDay]
      : [];
  };

  const exportData = getTimetableData().map(({ time, subject, lecturer, classroom }) => ({
    Time: time,
    Subject: subject,
    Lecturer: lecturer,
    Classroom: classroom,
  }));

  return (
    <div style={{width:'900px', margin: "20px auto", textAlign: "center", backgroundColor: "#1e1e1e", color: "#fff", padding: "20px", borderRadius: "10px",marginLeft:'300px' }}>
      <h1>Student Timetable</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <select 
    value={selectedClass} 
    onChange={(e) => setSelectedClass(e.target.value)} 
    style={{ padding: "8px", margin: "3px",width:'330px' }}
  >
    <option value="">Select Class</option>
    {classes.map((cls) => (
      <option key={cls} value={cls}>{cls}</option>
    ))}
  </select>   

  <select 
    value={selectedDay} 
    onChange={(e) => setSelectedDay(e.target.value)} 
    style={{ padding: "8px", margin: "3px" ,width:'330px'}}
  >
    <option value="">Select Day</option>
    {days.map((day) => (
      <option key={day} value={day}>{day}</option>
    ))}
  </select>

  {selectedDay && getTimetableData().length > 0 && (
    <CSVLink data={exportData} filename={`timetable_${selectedClass}_${selectedDay}.csv`}>
      <button 
        style={{ padding: "8px", borderRadius: "5px", backgroundColor: "#ff4757", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Export to CSV
      </button>
    </CSVLink>
  )}
</div>


      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse", backgroundColor: "#2a2a2a", color: "#fff" }}>
        <thead>
          <tr style={{ backgroundColor: "#444" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Time</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Subject</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Lecturer</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Classroom</th>
          </tr>
        </thead>
        <tbody>
          {getTimetableData().length > 0 ? (
            getTimetableData().map((entry, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.time}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.subject}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.lecturer}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.classroom}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: "10px" }}>No timetable available</td>
            </tr>
          )}
        </tbody>
      </table>
      
      {/* {selectedDay && getTimetableData().length > 0 && (
        <CSVLink data={exportData} filename={`timetable_${selectedClass}_${selectedDay}.csv`}>
          <button style={{ marginTop: "10px", padding: "10px", borderRadius: "5px", backgroundColor: "#ff4757", color: "#fff" }}>Export to CSV</button>
        </CSVLink>
      )} */}
    </div>
  );
};

export default StudentTimetable;


// import React from "react";

// const ClassesToday = () => {
//   const today = "2024-03-12"; // Static date for now

//   const classes = [
//     { code: "CS101", name: "Introduction to Computer Science", start: "09:00 AM", end: "11:00 AM", venue: "Room A101" },
//     { code: "MATH202", name: "Calculus II", start: "12:00 PM", end: "02:00 PM", venue: "Room B202" },
//   ];

//   const notices = [
//     { text: "Reminder: Assignment due next week.", due: "2024-03-19 09:00 AM" },
//     { text: "Guest lecture on Machine Learning on Friday.", due: "2024-03-15 10:00 AM" },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Classes Today */}
//       <div style={styles.section}>
//         <h3 style={styles.heading}>📅 Classes Today {today}</h3>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th>Module Code</th>
//               <th>Module Name</th>
//               <th>Starts</th>
//               <th>Ends</th>
//               <th>Venue</th>
//             </tr>
//           </thead>
//           <tbody>
//             {classes.map((cls, index) => (
//               <tr key={index} style={styles.row}>
//                 <td>{cls.code}</td>
//                 <td>{cls.name}</td>
//                 <td>{cls.start}</td>
//                 <td>{cls.end}</td>
//                 <td>{cls.venue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Notices */}
//       <div style={styles.section}>
//         <h3 style={styles.heading}>📢 Notices</h3>
//         <div style={styles.notices}>
//           {notices.map((notice, index) => (
//             <div key={index} style={styles.noticeCard}>
//               <p>{notice.text}</p>
//               <span style={styles.dueDate}>Due Date: {notice.due}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   container: {
//     maxWidth: "800px",
//     margin: "20px auto",
//     backgroundColor: "#0d1117",
//     color: "#fff",
//     fontFamily: "Arial, sans-serif",
//     marginLeft:'300px'
//   },
//   section: {
//     backgroundColor: "#161b22",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "20px",
//   },
//   heading: {
//     marginBottom: "10px",
//     color: "#58a6ff",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     textAlign: "left",
//   },
//   row: {
//     borderBottom: "1px solid #30363d",
//     padding: "12px",
//   },
//   notices: {
//     display: "flex",
//     gap: "15px",
//   },
//   noticeCard: {
//     backgroundColor: "#21262d",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #30363d",
//     flex: 1,
//   },
//   dueDate: {
//     color: "#ff7b72",
//     fontWeight: "bold",
//   },
// };

// export default ClassesToday;
