import React, { useState } from "react";
import { CSVLink } from "react-csv";

const RegisterReport = () => {
  const [academicYear, setAcademicYear] = useState("2024");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  
  const academicYears = ["2022", "2023", "2024", "2025"];
  
  const students = [
    { name: "Alice Johnson", class: "Class 1", rollNumber: "101", contact: "1234567890", date: "2024-02-01" },
    { name: "Bob Smith", class: "Class 2", rollNumber: "102", contact: "9876543210", date: "2024-02-10" },
    { name: "Charlie Brown", class: "Class 1", rollNumber: "103", contact: "4567891230", date: "2024-03-05" },
  ];
  
  const filteredStudents = students.filter(student => {
    const studentDate = new Date(student.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    return (
      (!from || studentDate >= from) &&
      (!to || studentDate <= to)
    );
  });
  
  const exportData = filteredStudents.map(({ name, class: studentClass, rollNumber, contact, date }) => ({
    Name: name,
    Class: studentClass,
    RollNumber: rollNumber,
    Contact: contact,
    Date: date,
  }));

  return (
    <div style={{ width:'800px', margin: "20px auto", padding: "20px", backgroundColor: "#1e1e1e", color: "#fff", borderRadius: "10px",marginLeft:'300px' }}>
      <h1>Student Reports</h1>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px", justifyContent: "center", alignItems: "center" }}>
        <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }}>
          {academicYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }} />
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }} />
        
        {filteredStudents.length > 0 && (
          <CSVLink data={exportData} filename={`students_${academicYear}.csv`}>
            <button style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#ff4757", color: "#fff" }}>Export to CSV</button>
          </CSVLink>
        )}
      </div>
      
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#2a2a2a", color: "#fff" }}>
        <thead>
          <tr style={{ backgroundColor: "#444" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Name</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Class</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Roll No</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Contact</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.name}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.class}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.rollNumber}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.contact}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{student.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterReport ;