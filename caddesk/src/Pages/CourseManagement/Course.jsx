import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseForm = () => {
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [fee, setFee] = useState("");
  const [installment, setInstallment] = useState("");
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchSubjects();
    fetchCourses();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/subjects");
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      courseCode,
      courseName,
      duration,
      subjects: selectedSubjects,
      fee,
      installment,
    };

    if (editId) {
      await axios.put(`http://localhost:8080/api/courses/${editId}`, courseData);
    } else {
      await axios.post("http://localhost:8080/api/courses", courseData);
    }

    setCourseCode("");
    setCourseName("");
    setDuration("");
    setSelectedSubjects([]);
    setFee("");
    setInstallment("");
    setEditId(null);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setCourseCode(course.courseCode);
    setCourseName(course.courseName);
    setDuration(course.duration);
    setSelectedSubjects(course.subjects);
    setFee(course.fee);
    setInstallment(course.installment);
    setEditId(course._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/courses/${id}`);
    fetchCourses();
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
                  <h5 class="card-title">Course Creation</h5>
                </div>
                <div class="card-body">
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-xl-4">
                          <label>Course Code:</label>
                      <input
                        type="text"
                        placeholder="Course Code"
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        required
                      />
                      </div>
                      <div class="col-xl-4">
                          <label>Course Name:</label>
                      <input
                        type="text"
                        placeholder="Course Name"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                      />
                      </div>
                      <div class="col-xl-4">
                          <label>Duration:</label>
                      <input
                        type="text"
                        placeholder="Duration (e.g., 6 months)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                      />
                      </div>
                      </div>
                      <br />
                      <div class="row">
                      <div class="col-xl-4">
                      <label>Subjects:</label>
                      <br />
                      <select className="select2"
                        multiple
                        value={selectedSubjects.map((sub) => sub.subjectCode)}
                        onChange={(e) => {
                          const selectedOptions = Array.from(e.target.selectedOptions).map(
                            (option) => {
                              const subject = subjects.find(
                                (sub) => sub.subjectCode === option.value
                              );
                              return { subjectCode: subject.subjectCode, subjectName: subject.subjectName };
                            }
                          );
                          setSelectedSubjects(selectedOptions);
                        }}
                      >
                        {subjects.map((subject) => (
                          <option key={subject._id} value={subject.subjectCode}>
                            {subject.subjectCode} - {subject.subjectName}
                          </option>
                        ))}
                      </select>
                      </div>
                      <div class="col-xl-4">
                      <label>Fee:</label>
                      <input
                        type="number"
                        placeholder="Fee (Single Payment)"
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
                        required
                      />
                      </div>
                      <div class="col-xl-4">
                      <label>Installment:</label>
                      <input
                        type="number"
                        placeholder="Installment Payment"
                        value={installment}
                        onChange={(e) => setInstallment(e.target.value)}
                        required
                      />
                      </div>
                      </div>
                      <div class="row">
                          <div class="col-xl-4"></div>
                          <div class="col-xl-4"></div>
                          <div class="col-xl-4">
                      <button type="submit">{editId ? "Update" : "Add"} Course</button>
                      </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body">
                    <table class="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Course Code</th>
                          <th>Course Name</th>
                          <th>Duration</th>
                          <th>Subjects</th>
                          <th>Fee</th>
                          <th>Installment</th>
                          <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                          {courses.map((course) => (
                            <tr key={course._id}>
                              <td>{course.courseCode}</td>
                              <td>{course.courseName}</td>
                              <td>{course.duration}</td>
                              <td>
                                <ul>
                                  {course.subjects.map((subject) => (
                                    <li key={subject.subjectCode}>
                                      {subject.subjectCode} - {subject.subjectName}
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td>{course.fee}</td>
                              <td>{course.installment}</td>
                              <td>
                               
                                <div class="hstack gap-2 fs-15">
                                <a onClick={() => handleEdit(course)}
                                  class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                                    class="feather-edit"></i></a>
                                <a onClick={() => handleDelete(course._id)}
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
    </div>
    </>
  );
};

export default CourseForm;
