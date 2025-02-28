import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  // Register Chart.js components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Sattendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [formData, setFormData] = useState({
    studentId: "",
    date: "",
    time: "",
    subject: "",
    status: "Present",
  });

  // Fetch attendance records
  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await fetch("http://localhost:8080/attendance");
      const data = await response.json();
      setAttendance(data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit attendance
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Attendance marked!");
      setFormData({ studentId: "", date: "", time: "", subject: "", status: "Present" });
      fetchAttendance();
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  // Delete attendance record
  const handleDelete = async (id) => {
    if (window.confirm("Delete this record?")) {
      try {
        await fetch(`http://localhost:8080/attendance/${id}`, { method: "DELETE" });
        fetchAttendance();
      } catch (error) {
        console.error("Error deleting record:", error);
      }
    }
  };

  // Attendance Data for Chart
  const attendanceSummary = attendance.reduce((acc, record) => {
    acc[record.status] = (acc[record.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: ["Present", "Absent", "Late"],
    datasets: [
      {
        label: "Attendance Count",
        data: ["Present", "Absent", "Late"].map((status) => attendanceSummary[status] || 0),
        backgroundColor: ["#4CAF50", "#F44336", "#FFC107"],
      },
    ],
  };

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto",marginLeft:"300px" }}>
      <h2>Attendance Tracker</h2>

      {/* Attendance Form */}
      <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <input type="text" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Course/Subject" value={formData.subject} onChange={handleChange} required />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Late">Late</option>
        </select>
        <button type="submit" style={{ gridColumn: "span 3", background: "#4CAF50", color: "white", padding: "10px" }}>Mark Attendance</button>
      </form>

      {/* Attendance Table */}
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record._id}>
              <td>{record.studentId}</td>
              <td>{record.date}</td>
              <td>{record.time}</td>
              <td>{record.subject}</td>
              <td>{record.status}</td>
              <td style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                  <MdEdit size={20} color="blue" />
                </button>
                <button onClick={() => handleDelete(record._id)} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                  <MdDelete size={20} color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Attendance Chart */}
      <h3>Attendance Summary</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default Sattendance;


// import React, { useState } from "react";

// const WeekClasses = () => {
//   // Sample class data
//   const classesData = [
//     { day: "Monday", module: "Mathematics", start: "08:00", end: "10:00", lecturer: "John Doe", room: "Room 101" },
//     { day: "Tuesday", module: "Physics", start: "09:00", end: "11:00", lecturer: "Jane Smith", room: "Room 102" },
//     { day: "Wednesday", module: "Biology", start: "10:00", end: "12:00", lecturer: "Sarah Johnson", room: "Room 103" },
//     { day: "Thursday", module: "Chemistry", start: "11:00", end: "13:00", lecturer: "Michael Williams", room: "Room 104" },
//     { day: "Friday", module: "History", start: "12:00", end: "14:00", lecturer: "David Brown", room: "Room 105" },
//   ];

//   // Generate time slots (7:00 AM - 7:00 PM)
//   const timeSlots = [];
//   for (let i = 7; i <= 19; i++) {
//     timeSlots.push(`${i}:00 - ${i + 1}:00`);
//   }

//   // Days of the week
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   return (
//     <div className="container mt-4">
//       <h4>Weekly Timetable</h4>
//       <div className="card bg-light shadow">
//         <div className="card-header">
//           <span><i className="bi bi-table me-2"></i></span> Weekly Classes
//         </div>
//         <div className="card-body">
//           <div className="table-responsive">
//             <div className="pb-3 d-flex justify-content-between">
//               <button className="btn btn-outline-info"><i className="bi bi-download me-2"></i>Export PDF</button>
//             </div>
//             <table className="table table-bordered text-center table-striped">
//               <thead>
//                 <tr className="bg-secondary text-white">
//                   <th>Time</th>
//                   {days.map((day) => (
//                     <th key={day}>{day}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {timeSlots.map((timeSlot, index) => (
//                   <tr key={index}>
//                     <td className="align-middle">{timeSlot}</td>
//                     {days.map((day, dayIndex) => {
//                       const classForSlot = classesData.find((classItem) => {
//                         return (
//                           classItem.day === day &&
//                           classItem.start === timeSlot.split(" - ")[0]
//                         );
//                       });

//                       return (
//                         <td key={dayIndex}>
//                           {classForSlot ? (
//                             <div className="class-info">
//                               <span className="bg-info text-white px-2 py-1 rounded">{classForSlot.module}</span>
//                               <div className="font-size14">{classForSlot.start} - {classForSlot.end}</div>
//                               <div className="font-size13 text-muted">{classForSlot.lecturer}</div>
//                               <div className="font-size13 text-success">{classForSlot.room}</div>
//                             </div>
//                           ) : null}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeekClasses;





