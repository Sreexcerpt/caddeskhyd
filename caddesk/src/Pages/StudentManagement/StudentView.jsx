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
    <div style={{ maxWidth: "1000px", margin: "20px auto", textAlign: "center", marginLeft: '300px' }}>
      <h1>Student List</h1>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.studentId}</td>
                <td>{`${student.firstName} ${student.middleName || ""} ${student.lastName}`}</td>
                <td>{student.dob}</td>
                <td>{student.phoneNumber || "N/A"}</td>
                <td>{student.email || "N/A"}</td>
                <td>{student.courseEnrolled || "N/A"}</td>
                <td>{student.batchAssigned || "N/A"}</td>
                <td style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <button onClick={() => handleUpdate(student)} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                    <MdEdit size={20} color="blue" />
                  </button>
                  <button onClick={() => handleDelete(student._id)} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                    <MdDelete size={20} color="red" />
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

      {/* Pagination Controls */}
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "10px" ,width:"100px",marginLeft:'400px'}}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      {/* Pagination Controls */}
{/* <div style={{ 
  marginTop: "20px", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  gap: "5px",
  padding: "10px"
}}>
  <button 
    onClick={() => setCurrentPage(currentPage - 1)} 
    disabled={currentPage === 1}
    style={{
      padding: "6px 12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      backgroundColor: currentPage === 1 ? "#f0f0f0" : "#007bff",
      color: currentPage === 1 ? "#999" : "#fff",
      cursor: currentPage === 1 ? "not-allowed" : "pointer",
      fontSize: "14px"
    }}
  >
    ◀ Prev
  </button>

  <span style={{
    padding: "6px 12px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    minWidth: "50px",
    textAlign: "center"
  }}>
    {currentPage} / {totalPages}
  </span>

  <button 
    onClick={() => setCurrentPage(currentPage + 1)} 
    disabled={currentPage === totalPages}
    style={{
      padding: "6px 12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      backgroundColor: currentPage === totalPages ? "#f0f0f0" : "#007bff",
      color: currentPage === totalPages ? "#999" : "#fff",
      cursor: currentPage === totalPages ? "not-allowed" : "pointer",
      fontSize: "14px"
    }}
  >
    Next ▶
  </button>
</div> */}


      {/* Modal for updating student */}
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
  );
};

export default StudentList;

