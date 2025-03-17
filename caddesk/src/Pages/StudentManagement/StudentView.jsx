import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5; // Change this value for more students per page

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:8080/students");
      const data = await response.json();

      // Sort in descending order (recent first)
      const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setStudents(sortedData);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete a student
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await fetch(`http://localhost:8080/students/${id}`, { method: "DELETE" });
        alert("Student deleted successfully!");
        fetchStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  // Open modal with student data for editing
  const handleUpdate = (student) => {
    setEditingStudent(student);
    setShowModal(true);
  };

  // Handle form input change
  const handleChange = (e) => {
    setEditingStudent({ ...editingStudent, [e.target.name]: e.target.value });
  };

  // Handle form submission for update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/students/${editingStudent._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingStudent),
      });

      if (response.ok) {
        alert("Student updated successfully!");
        setShowModal(false);
        fetchStudents();
      } else {
        alert("Failed to update student.");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // Pagination Logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(students.length / studentsPerPage);

  return (
    <>
      <div class="page-wrapper cardhead">
        <div class="content container-fluid">

          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 >Student List</h3>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                    Student List
                  </div>

                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table text-nowrap">
                      <thead class="table-primary">
                        <tr>
                          <th scope="col">Student ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">DOB</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Email</th>
                          <th scope="col">Course</th>
                          <th scope="col">Batch</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentStudents.length > 0 ? (
                          currentStudents.map((student) => (
                            <tr key={student._id}>
                              <th scope="row">{student.studentId}</th>
                              <td>{`${student.firstName} ${student.middleName || ""} ${student.lastName}`}</td>
                              <td>{student.dob}</td>
                              <td>{student.phoneNumber || "N/A"}</td>
                              <td>{student.email || "N/A"}</td>
                              <td>{student.courseEnrolled || "N/A"}</td>
                              <td>{student.batchAssigned || "N/A"}</td>
                              <td style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                                <button onClick={() => handleUpdate(student)} className="btn btn-icon btn-sm btn-soft-info rounded-pill">
                                  <i class="feather-edit"></i>
                                </button>
                                <button onClick={() => handleDelete(student._id)} className="btn btn-icon btn-sm btn-soft-danger rounded-pill">
                                  <i class="feather-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="10">No students found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-xl-6">

              <div className=" pagination justify-content-center mb-3">
                <div className="page-item ">
                  <button class="btn btn-secondary btn-w-sm" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                  </button>
                </div>
                <div className="page-item">
                  <div className="page-item">Page {currentPage} of {totalPages}</div>
                </div>
                <div className="page-item">
                  <button class="btn btn-info btn-w-sm" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                  </button>
                </div>
              </div>

            </div>
          </div>
          {showModal && editingStudent && (
            <div style={{
              position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              backgroundColor: "white", padding: "20px", borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)", zIndex: 1000,
              width: "50%"
            }}>
              <h2>Edit Student</h2>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>

                {/* Row 1 */}
                <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                  <input type="text" name="studentId" value={editingStudent.studentId} onChange={handleChange} placeholder="Student ID" required style={{ flex: 1 }} />
                  <input type="text" name="firstName" value={editingStudent.firstName} onChange={handleChange} placeholder="First Name" required style={{ flex: 1 }} />
                  <input type="text" name="middleName" value={editingStudent.middleName} onChange={handleChange} placeholder="Middle Name" style={{ flex: 1 }} />
                </div>

                {/* Row 2 */}
                <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                  <input type="text" name="lastName" value={editingStudent.lastName} onChange={handleChange} placeholder="Last Name" required style={{ flex: 1 }} />
                  <input type="date" name="dob" value={editingStudent.dob} onChange={handleChange} required style={{ flex: 1 }} />
                  <input type="text" name="phoneNumber" value={editingStudent.phoneNumber} onChange={handleChange} placeholder="Phone Number" style={{ flex: 1 }} />
                </div>

                {/* Row 3 */}
                <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                  <input type="email" name="email" value={editingStudent.email} onChange={handleChange} placeholder="Email" style={{ flex: 1 }} />
                  <input type="text" name="courseEnrolled" value={editingStudent.courseEnrolled} onChange={handleChange} placeholder="Course Enrolled" style={{ flex: 1 }} />
                  <input type="text" name="batchAssigned" value={editingStudent.batchAssigned} onChange={handleChange} placeholder="Batch Assigned" style={{ flex: 1 }} />
                </div>

                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <button type="submit">Update</button>
                  <button type="button" onClick={() => setShowModal(false)} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>Cancel</button>
                </div>

              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentList;

