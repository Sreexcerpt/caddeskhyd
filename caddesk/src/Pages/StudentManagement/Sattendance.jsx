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
    <>
      {/* <div style={{ maxWidth: "900px", margin: "20px auto", marginTop: "300px" }}>
        <h2>Attendance Tracker</h2>

         Attendance Form 
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

        Attendance Table
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

        Attendance Chart
        <h3>Attendance Summary</h3>
        <Bar data={chartData} />
      </div> */}
      <div class="page-wrapper cardhead">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header justify-content-between">
                    <div class="card-title">
                      Attendance Tracker
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-body">
                          <form onSubmit={handleSubmit}>
                          <div class="row">
                            <div class="col-md-4 col-12 mb-6">
                              <label class="col-form-label col-md-10">Student ID</label>
                              <div class="col-md-10">
                                <input type="text" class="form-control" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />
                              </div>
                            </div>
                           
                              <div class="col-md-4 col-12 mb-6">
                                <label class="col-form-label col-md-2">Date</label>
                                <div class="col-md-10">
                                  <input class="form-control" type="date" name="date" value={formData.date} onChange={handleChange} required />
                                </div>
                              </div>

                              <div class="col-md-4 col-12 mb-6">
                                <label class="col-form-label col-md-2">Time</label>
                                <div class="col-md-10">
                                  <input type="time" name="time" class="form-control" value={formData.time} onChange={handleChange} required />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-5 col-12 mb-6">
                                <label class="col-form-label col-md-5">Course/Subject</label>
                                <div class="col-md-10">
                                  <input type="text" class="form-control" name="subject" placeholder="Course/Subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                              </div>
                              <div class="col-md-5 col-12 mb-6">
                                <label class="col-form-label col-md-2">status</label>
                                <div class="col-md-10">
                                  <select name="status" className="placeholder js-states form-control" value={formData.status} onChange={handleChange}>
                                    <option value="Present">--select--</option>
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                    <option value="Late">Late</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-5 col-12 mb-6">
                            <button class="btn btn-success" type="submit">Submit</button></div>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table text-nowrap">
                      <thead>
                        <tr>

                          <th scope="col">Student ID</th>
                          <th scope="col">Date</th>
                          <th scope="col">Time</th>
                          <th scope="col">Subject</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>

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
                  </div>
                </div>
                </div>
                <h3>Attendance Summary</h3>
                <Bar data={chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Sattendance;




