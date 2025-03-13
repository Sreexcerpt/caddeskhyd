import React, { useState, useEffect } from "react";
import axios from "axios";

const BatchForm = () => {
  const [batchId, setBatchId] = useState("");
  const [batchName, setBatchName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [studentCount, setStudentCount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("Active");
  const [batches, setBatches] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCourses();
    fetchBatches();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchBatches = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/batches");
      setBatches(response.data);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const batchData = {
      batchId,
      batchName,
      course: selectedCourse,
      studentCount,
      startDate,
      status,
    };

    if (editId) {
      await axios.put(`http://localhost:8080/api/batches/${editId}`, batchData);
    } else {
      await axios.post("http://localhost:8080/api/batches", batchData);
    }

    setBatchId("");
    setBatchName("");
    setSelectedCourse("");
    setStudentCount("");
    setStartDate("");
    setStatus("Active");
    setEditId(null);
    fetchBatches();
  };

  const handleEdit = (batch) => {
    setBatchId(batch.batchId);
    setBatchName(batch.batchName);
    setSelectedCourse(batch.course);
    setStudentCount(batch.studentCount);
    setStartDate(batch.startDate);
    setStatus(batch.status);
    setEditId(batch._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/batches/${id}`);
    fetchBatches();
  };

  return (
    <>
      <div class="main-wrapper">
        <div class="page-wrapper cardhead">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">Batch Creation</h5>
                  </div>
                  <div class="card-body">
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div class="row">
                          <div class="col-xl-4">
                            <label>Batch ID:</label>
                            <input
                              type="text"
                              placeholder="Batch ID"
                              value={batchId}
                              onChange={(e) => setBatchId(e.target.value)}
                              required
                            />
                          </div>
                          <div class="col-xl-4">
                            <label>Batch Name:</label>
                            <input
                              type="text"
                              placeholder="Batch Name"
                              value={batchName}
                              onChange={(e) => setBatchName(e.target.value)}
                              required
                            />
                          </div>
                          <div class="col-xl-4">
                            <label>Course:</label>
                            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                              <option value="">Select Course</option>
                              {courses.map((course) => (
                                <option key={course._id} value={course.courseCode}>
                                  {course.courseName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-xl-4">
                            <label>Student Count:</label>
                            <input
                              type="number"
                              placeholder="Student Count"
                              value={studentCount}
                              onChange={(e) => setStudentCount(e.target.value)}
                              required
                            />
                          </div>
                          <div class="col-xl-4">
                            <label>Start Date:</label>
                            <input
                              type="date"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              required
                            />
                          </div>
                          <div class="col-xl-4">
                            <label>Status:</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                              <option value="Active">Active</option>
                              <option value="Inactive">Inactive</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xl-4"></div>
                          <div class="col-xl-4"></div>
                          <div class="col-xl-4">
                            <button type="submit">{editId ? "Update" : "Add"} Batch</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="card-body">
                    <h3>Batch List</h3>
                    <table class="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Batch ID</th>
                          <th>Batch Name</th>
                          <th>Course</th>
                          <th>Student Count</th>
                          <th>Start Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {batches.map((batch) => (
                          <tr key={batch._id}>
                            <td>{batch.batchId}</td>
                            <td>{batch.batchName}</td>
                            <td>{batch.course}</td>
                            <td>{batch.studentCount}</td>
                            <td>{new Date(batch.startDate).toDateString()}</td>
                            <td>{batch.status}</td>
                            <td>
                              <div class="hstack gap-2 fs-15">
                                <a onClick={() => handleEdit(batch)}
                                  class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                                    class="feather-edit"></i></a>
                                <a onClick={() => handleDelete(batch._id)}
                                  class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                                    class="feather-trash"></i></a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BatchForm;
