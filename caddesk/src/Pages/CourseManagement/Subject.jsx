import React, { useState, useEffect } from "react";
import axios from "axios";

const SubjectForm = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Update subject
      await axios.put(`http://localhost:8080/api/subjects/${editId}`, {
        subjectCode,
        subjectName,
      });
    } else {
      // Add new subject
      await axios.post("http://localhost:8080/api/subjects", {
        subjectCode,
        subjectName,
      });
    }
    setSubjectCode("");
    setSubjectName("");
    setEditId(null);
    fetchSubjects();
  };

  const handleEdit = (subject) => {
    setSubjectCode(subject.subjectCode);
    setSubjectName(subject.subjectName);
    setEditId(subject._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/subjects/${id}`);
    fetchSubjects();
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
                    <h5 class="card-title">Subject Creation</h5>
                  </div>
                  <div class="card-body">
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div class="row">
                          <div class="col-xl-4">
                            <label>Subject Code:</label>
                            <input
                              type="text"
                              placeholder="Subject Code"
                              value={subjectCode}
                              onChange={(e) => setSubjectCode(e.target.value)}
                              required
                            />
                          </div>
                          <div class="col-xl-4">
                            <label>Subject Name:</label>
                            <input
                              type="text"
                              placeholder="Subject Name"
                              value={subjectName}
                              onChange={(e) => setSubjectName(e.target.value)}
                              required
                            />
                          </div>
                          <div class="col-xl-4">
                            <label>.</label>
                            <button type="submit">{editId ? "Update" : "Add"} Subject</button>
                          </div>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title
                        ">Subject List</h5>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Subject Code</th>
                            <th>Subject Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subjects.map((subject) => (
                            <tr key={subject._id}>
                              <td>{subject.subjectCode}</td>
                              <td>{subject.subjectName}</td>
                              <td>

                                <div class="hstack gap-2 fs-15">
                                  <a onClick={() => handleEdit(subject)}
                                    class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
                                      class="feather-edit"></i></a>
                                  <a onClick={() => handleDelete(subject._id)}
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

export default SubjectForm;
