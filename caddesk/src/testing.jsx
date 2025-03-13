import React, { useState, useEffect } from "react";
import axios from "axios";

const FacultyForm = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [facultyData, setFacultyData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Faculty",
    department: "",
    qualification: "",
    experience: "",
    dob: "",
    joinDate: "",
    address: "",
    gender: "",
    employmentType: "Full-Time",
    status: "Active",
    salary: "",
    staffOrFacultyId: "",
    subjects: [],
  });
  const [faculties, setFaculties] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFaculties();
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/subjects");
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchFaculties = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/faculties");
      setFaculties(response.data);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...facultyData, [name]: value };

    // Reset subjects when switching to "Staff"
    if (name === "role" && value === "Staff") {
      setSelectedSubjects([]);
      updatedData.subjects = [];
    }

    setFacultyData(updatedData);
  };

  const handleSubjectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => {
      const subject = subjects.find((sub) => sub.subjectCode === option.value);
      return { subjectCode: subject.subjectCode, subjectName: subject.subjectName };
    });

    setSelectedSubjects(selectedOptions);
    setFacultyData((prev) => ({ ...prev, subjects: selectedOptions }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const facultyPayload = { ...facultyData, subjects: selectedSubjects };

    if (editId) {
      await axios.put(`http://localhost:8080/api/faculties/${editId}`, facultyPayload);
    } else {
      await axios.post("http://localhost:8080/api/faculties", facultyPayload);
    }

    setFacultyData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "Faculty",
      department: "",
      qualification: "",
      experience: "",
      dob: "",
      joinDate: "",
      address: "",
      gender: "",
      employmentType: "Full-Time",
      status: "Active",
      salary: "",
      staffOrFacultyId: "",
      subjects: [],
    });

    setSelectedSubjects([]);
    setEditId(null);
    fetchFaculties();
  };

  const handleEdit = (faculty) => {
    setFacultyData(faculty);
    setSelectedSubjects(faculty.subjects || []);
    setEditId(faculty._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/faculties/${id}`);
    fetchFaculties();
  };

  return (
    <div style={{marginLeft:"350px",padding:"200px"}} >
      <h2>Faculty Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={facultyData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={facultyData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={facultyData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={facultyData.phone} onChange={handleChange} required />
        
        <select name="role" value={facultyData.role} onChange={handleChange} required>
          <option value="Faculty">Faculty</option>
          <option value="Staff">Staff</option>
        </select>

        <input type="text" name="department" placeholder="Department" value={facultyData.department} onChange={handleChange} required />
        <input type="text" name="qualification" placeholder="Qualification" value={facultyData.qualification} onChange={handleChange} required />
        <input type="number" name="experience" placeholder="Experience (Years)" value={facultyData.experience} onChange={handleChange} required />
        
        <label>Date of Birth</label>
        <input type="date" name="dob" value={facultyData.dob} onChange={handleChange} required />

        <label>Joining Date</label>
        <input type="date" name="joinDate" value={facultyData.joinDate} onChange={handleChange} required />

        <input type="text" name="address" placeholder="Address" value={facultyData.address} onChange={handleChange} required />
        
        <select name="gender" value={facultyData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <select name="employmentType" value={facultyData.employmentType} onChange={handleChange} required>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>

        <select name="status" value={facultyData.status} onChange={handleChange} required>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Show subjects dropdown only if role is Faculty */}
        {facultyData.role === "Faculty" && (
          <>
            <label>Select Subjects</label>
            <select multiple value={selectedSubjects.map((sub) => sub.subjectCode)} onChange={handleSubjectChange}>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject.subjectCode}>
                  {subject.subjectCode} - {subject.subjectName}
                </option>
              ))}
            </select>
          </>
        )}

        <input type="number" name="salary" placeholder="Salary" value={facultyData.salary} onChange={handleChange} required />
        <input type="text" name="staffOrFacultyId" placeholder="Staff/Faculty ID" value={facultyData.staffOrFacultyId} onChange={handleChange} required />
        
        <button type="submit">{editId ? "Update" : "Add"} Faculty</button>
      </form>

      <h3>Faculty List</h3>
      <ul>
        {faculties.map((faculty) => (
          <li key={faculty._id}>
            {faculty.firstName} {faculty.lastName} - {faculty.role} - {faculty.department}
            <br />
            <button onClick={() => handleEdit(faculty)}>Edit</button>
            <button onClick={() => handleDelete(faculty._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyForm;
