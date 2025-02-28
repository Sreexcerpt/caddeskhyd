import React, { useEffect, useState } from "react";
import axios from "axios";

const SubjectForm = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);

  // ✅ Fetch all subjects
  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = () => {
    axios.get("http://localhost:8080/api/get-subjects")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/add-subject", { subjectCode, subjectName })
      .then(() => {
        alert("Subject Added Successfully");
        fetchSubjects(); // Refresh subject list
        setSubjectCode("");
        setSubjectName("");
      })
      .catch((error) => console.error("Error adding subject:", error));
  };

  return (
    <div style={{marginLeft:'500px'}}>
      <h2>Add Subject</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Subject Code" 
          value={subjectCode} 
          onChange={(e) => setSubjectCode(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Subject Name" 
          value={subjectName} 
          onChange={(e) => setSubjectName(e.target.value)} 
          required 
        />
        <button type="submit">Add Subject</button>
      </form>

      <h2>Subjects List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject._id}>
              <td>{subject.subjectCode}</td>
              <td>{subject.subjectName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectForm;
