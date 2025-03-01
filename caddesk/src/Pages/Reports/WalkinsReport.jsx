import React, { useState } from "react";
import { CSVLink } from "react-csv";

const WalkinsReport = () => {
  const [academicYear, setAcademicYear] = useState("2024");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showReport, setShowReport] = useState(false);
  
  const academicYears = ["2022", "2023", "2024", "2025"];
  
  const walkinsData = [
    { name: "John Doe", date: "2024-02-01", purpose: "Inquiry" },
    { name: "Jane Smith", date: "2024-02-05", purpose: "Admission" },
    { name: "Mark Taylor", date: "2024-02-10", purpose: "Counseling" },
  ];

  const filteredWalkins = walkinsData.filter(entry => {
    return true; // Can add filters based on date if needed
  });
  
  const exportData = filteredWalkins.map(({ name, date, purpose }) => ({
    Name: name,
    Date: date,
    Purpose: purpose,
  }));

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", padding: "20px", backgroundColor: "#1e1e1e", color: "#fff", borderRadius: "10px",marginLeft:"300px" }}>
      <h1>Walk-ins Report</h1>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px", justifyContent: "center", alignItems: "center" }}>
        <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }}>
          {academicYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }} />
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ padding: "10px", borderRadius: "5px" }} />
        
        <button onClick={() => setShowReport(true)} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#28a745", color: "#fff" }}>Generate Report</button>
        {filteredWalkins.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              <CSVLink data={exportData} filename={`walkins_${academicYear}.csv`}>
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
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Date</th>
                <th style={{ padding: "10px", borderBottom: "1px solid #555" }}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {filteredWalkins.length > 0 ? (
                filteredWalkins.map((entry, index) => (
                  <tr key={index}>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{index + 1}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.name}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.date}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.purpose}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ padding: "10px", textAlign: "center" }}>No records found</td>
                </tr>
              )}
            </tbody>
          </table>
          
          
        </>
      )}
    </div>
  );
};

export default WalkinsReport;