import React, { useState } from "react";
import { CSVLink } from "react-csv";

const StudentAttendanceReport = () => {
  const [academicYear, setAcademicYear] = useState("2024");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showReport, setShowReport] = useState(false);
  
  const academicYears = ["2022", "2023", "2024", "2025"];
  
  const attendanceData = [
    { name: "Alice Johnson", rollNumber: "101", class: "Class 1", attendance: "95%" },
    { name: "Bob Smith", rollNumber: "102", class: "Class 2", attendance: "88%" },
    { name: "Charlie Brown", rollNumber: "103", class: "Class 1", attendance: "92%" },
  ];

  const filteredAttendance = attendanceData.filter(student => {
    return true; // Can add filters based on date if needed
  });
  
  const exportData = filteredAttendance.map(({ name, rollNumber, class: studentClass, attendance }) => ({
    Name: name,
    RollNumber: rollNumber,
    Class: studentClass,
    Attendance: attendance,
  }));

  return (
    <div style={{ width:'1000px', margin: "20px auto", padding: "20px", backgroundColor: "#1e1e1e", color: "#fff", borderRadius: "10px" ,marginLeft:'300px'}}>
      <h1>Student Attendance Report</h1>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px", justifyContent: "center", alignItems: "center" }}>
        <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }}>
          {academicYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }} />
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }} />
        
        
        <button onClick={() => setShowReport(true)} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#28a745", color: "#fff" }}>Generate Report</button>
        {filteredAttendance.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              <CSVLink data={exportData} filename={`attendance_${academicYear}.csv`}>
                <button style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#ff4757", color: "#fff" }}>Export to CSV</button>
              </CSVLink>
            </div>
          )}
      </div>
      
      {showReport && (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#2a2a2a", color: "#fff" }}>
            <thead>
              <tr style={{ backgroundColor: "#444" }}>
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>S.No</th>
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Name</th>
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Class</th>
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Roll No</th>
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttendance.length > 0 ? (
                filteredAttendance.map((student, index) => (
                  <tr key={index}>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{index + 1}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.name}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.class}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.rollNumber}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.attendance}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>No records found</td>
                </tr>
              )}
            </tbody>
          </table>
          
         
        </>
      )}
    </div>
  );
};

export default StudentAttendanceReport;

