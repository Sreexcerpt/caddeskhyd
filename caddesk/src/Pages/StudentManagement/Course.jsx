import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseForm = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [formData, setFormData] = useState({
    courseCode: "",
    courseName: "",
    description: "",
    duration: "",
  });

  useEffect(() => {
    // Fetch subjects from the backend
    axios.get("http://localhost:8080/api/get-subjects")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedSubjects(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { ...formData, subjects: selectedSubjects };

    axios.post("http://localhost:8080/api/add-course", newCourse)
      .then((res) => alert("Course Added Successfully"))
      .catch((err) => console.error("Error adding course:", err));
  };

  return (
    <div style={{marginLeft:'500px'}}>
    <form onSubmit={handleSubmit}>
      <input type="text" name="courseCode" placeholder="Course Code" onChange={handleChange} required />
      <input type="text" name="courseName" placeholder="Course Name" onChange={handleChange} required />
      <textarea name="description" placeholder="Course Description" onChange={handleChange} />
      <input type="text" name="duration" placeholder="Duration" onChange={handleChange} required />

      {/* Multi-select dropdown for subjects */}
      <select multiple onChange={handleSubjectChange}>
        {subjects.map((subject) => (
          <option key={subject._id} value={subject.subjectCode}>
            {subject.subjectCode} - {subject.subjectName}
          </option>
        ))}
      </select>

      <button type="submit">Add Course</button>
    </form>
    </div>
  );
};

export default CourseForm;
