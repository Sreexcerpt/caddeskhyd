import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import plus icon

const AttendanceTracker = () => {
  const [attendance, setAttendance] = useState([
    { employeeId: "E101", employeeName: "John Doe", inTime: "09:30", outTime: "18:00", workingHours: "8h 30m" },
    { employeeId: "E102", employeeName: "Jane Smith", inTime: "10:15", outTime: "16:45", workingHours: "6h 30m" },
  ]);

  const [formData, setFormData] = useState({ employeeId: "", employeeName: "", inTime: "", outTime: "" });

  const [showForm, setShowForm] = useState(false); // State to toggle form

  const employees = [
    { id: "E101", name: "John Doe" },
    { id: "E102", name: "Jane Smith" },
    { id: "E103", name: "David Johnson" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.employeeId || !formData.inTime || !formData.outTime) {
      alert("Please fill all fields!");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    const inTime = new Date(`${today}T${formData.inTime}:00`);
    const outTime = new Date(`${today}T${formData.outTime}:00`);

    if (outTime <= inTime) {
      alert("Out Time must be after In Time!");
      return;
    }

    const diffMs = outTime - inTime;
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const workingHours = `${hours}h ${minutes}m`;

    const newEntry = { ...formData, workingHours };
    setAttendance([...attendance, newEntry]);
    setFormData({ employeeId: "", employeeName: "", inTime: "", outTime: "" });
    setShowForm(false); // Hide form after submission
  };

  const handleEmployeeSelect = (e) => {
    const selectedEmployee = employees.find((emp) => emp.id === e.target.value);
    setFormData({ ...formData, employeeId: selectedEmployee.id, employeeName: selectedEmployee.name });
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px", textAlign: "center", marginLeft:'300px'}}>
      <h2>Attendance Tracker</h2>

     
        <input type="file" placeholder="import from boimetric" />
    <label>Choose the file from boimetric</label>


      <table border="1" style={{ width: "100%", marginBottom: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#333", color: "#fff" }}>
            <th>Employee ID</th>
            <th>Name</th>
            <th>In Time</th>
            <th>Out Time</th>
            <th>Working Hours</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? "#f2f2f2" : "#fff" }}>
              <td>{record.employeeId}</td>
              <td>{record.employeeName}</td>
              <td>{record.inTime}</td>
              <td>{record.outTime}</td>
              <td style={{ color: record.workingHours === "Invalid Time" ? "red" : "black" }}>
                {record.workingHours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Plus Button to Toggle Form */}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          margin: "auto",
        }}
      >
        <FaPlus /> Add Attendance
      </button>

      {/* Conditional Form Display */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: "400px", margin: "20px auto" }}>
          <h3>Add Attendance</h3>
          <select name="employeeId" value={formData.employeeId} onChange={handleEmployeeSelect} required>
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
          <input type="text" name="employeeName" value={formData.employeeName} placeholder="Employee Name" readOnly />
          <input type="time" name="inTime" value={formData.inTime} onChange={handleChange} required />
          <input type="time" name="outTime" value={formData.outTime} onChange={handleChange} required />
          <button type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AttendanceTracker;

