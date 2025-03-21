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
    axios.get("/api/get-subjects")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/add-subject", { subjectCode, subjectName })
      .then(() => {
        alert("Subject Added Successfully");
        fetchSubjects(); // Refresh subject list
        setSubjectCode("");
        setSubjectName("");
      })
      .catch((error) => console.error("Error adding subject:", error));
  };

  return (
    <>
      <div class="page-wrapper cardhead">
        <div class="content container-fluid">
          <div class="col-xl-6">
            <div class="card">
              <div class="card-header justify-content-between">
                <div class="card-title">
                  Add Subject
                </div>
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">

                    <input class="form-control" id="floatingInput"
                      type="text"
                      placeholder="Subject Code"
                      value={subjectCode}
                      onChange={(e) => setSubjectCode(e.target.value)}
                      required />
                    <label for="floatingInput">Subject Code</label>
                  </div>
                  <div class="form-floating">
                    <input class="form-control" id="floatingPassword"
                      type="text"
                      placeholder="Subject Name"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      required />
                    <label for="floatingPassword">Subject Name</label>
                  </div>
                  <button type="submit">Add Subject</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card">
              <div class="card-header justify-content-between">
                <div class="card-title">
                  Subjects List
                </div>

              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table text-nowrap table-striped-columns">
                    <thead>
                      <tr>
                        <th scope="col">Subject Code</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((subject) => (
                        <tr key={subject._id}>
                          <th scope="row">{subject.subjectCode}</th>
                          <td>{subject.subjectName}</td>
                          <td>Staff Name</td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a href="#"
                                class="btn btn-icon btn-sm btn-light"><i
                                  class="feather-trash align-middle me-2 d-inline-block"></i></a>
                              <a href="#"
                                class="btn btn-icon btn-sm btn-light">
                                <i class="feather-edit"></i></a>
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
    </>
  );
};

export default SubjectForm;
