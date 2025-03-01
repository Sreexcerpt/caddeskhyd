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
    <>

      <div class="page-wrapper cardhead">
        <div class="content container-fluid">
          
          <div class="row">
            <div class="col-xl-8">
              <div class="card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                  Add Course
                  </div>

                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="colFormLabelSm" class="col-form-label col-form-label-sm">Course Code</label>
                      <input class="form-control form-control-sm" id="colFormLabelSm"
                        type="text" name="courseCode" placeholder="Course Code" onChange={handleChange} required />
                    </div>
                    <div class="mb-3">
                      <label for="colFormLabel" class="col-form-label">Course Name</label>
                      <input class="form-control" id="colFormLabel"
                        type="text" name="courseName" placeholder="Course Name" onChange={handleChange} required />
                    </div>
                    <div class="mb-3">
                      <label for="colFormLabel" class="col-form-label">Course Description</label>
                      <input class="form-control" id="colFormLabel" type="text" name="description" placeholder="Course Description" onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                      <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Duration</label>
                      <input class="form-control form-control-lg" id="colFormLabelLg"
                        type="text" name="duration" placeholder="Duration" onChange={handleChange} required />
                    </div>
                    <div class="mb-3">
                      <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Select Subjects</label>
                      <select multiple onChange={handleSubjectChange}>
                        {subjects.map((subject) => (
                          <option key={subject._id} value={subject.subjectCode}>
                            {subject.subjectCode} - {subject.subjectName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit">Add Course</button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CourseForm;
