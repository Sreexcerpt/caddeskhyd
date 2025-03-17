import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import plus icon

const AttendanceTracker = () => {
  const [attendance, setAttendance] = useState([
    {
      employeeId: "E101",
      employeeName: "John Doe",
      inTime: "09:30",
      outTime: "18:00",
      workingHours: "8h 30m",
    },
    {
      employeeId: "E102",
      employeeName: "Jane Smith",
      inTime: "10:15",
      outTime: "16:45",
      workingHours: "6h 30m",
    },
  ]);

  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    inTime: "",
    outTime: "",
  });

  const [showForm, setShowForm] = useState(false); // State to toggle form

  const employees = [
    { id: "E101", name: "John Doe" },
    { id: "E102", name: "Jane Smith" },
    { id: "E103", name: "David Johnson" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.employeeId || !formData.inTime || !formData.outTime) {
      alert("Please fill all fields!");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    const inTime = new Date(`${today}T${formData.inTime}:00`);
    const outTime = new Date(`${today}T${formData.outTime}:00`);

    if (outTime <= inTime) {
      alert("Out Time must be after In Time!");
      return;
    }

    const diffMs = outTime - inTime;
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const workingHours = `${hours}h ${minutes}m`;

    const newEntry = { ...formData, workingHours };
    setAttendance([...attendance, newEntry]);
    setFormData({ employeeId: "", employeeName: "", inTime: "", outTime: "" });
    setShowForm(false); // Hide form after submission
  };

  const handleEmployeeSelect = (e) => {
    const selectedEmployee = employees.find((emp) => emp.id === e.target.value);
    setFormData({
      ...formData,
      employeeId: selectedEmployee.id,
      employeeName: selectedEmployee.name,
    });
  };

  return (
    <>
      {/* <div
        style={{
          width: "80%",
          margin: "auto",
          padding: "20px",
          textAlign: "center",
          marginLeft: "300px",
        }}
      >
        <h2>Attendance Tracker</h2>

        <input type="file" placeholder="import from boimetric" />
        <label>Choose the file from boimetric</label>

        <table
          border="1"
          style={{
            width: "100%",
            marginBottom: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#333", color: "#fff" }}>
              <th>Employee ID</th>
              <th>Name</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, index) => (
              <tr
                key={index}
                style={{ background: index % 2 === 0 ? "#f2f2f2" : "#fff" }}
              >
                <td>{record.employeeId}</td>
                <td>{record.employeeName}</td>
                <td>{record.inTime}</td>
                <td>{record.outTime}</td>
                <td
                  style={{
                    color:
                      record.workingHours === "Invalid Time" ? "red" : "black",
                  }}
                >
                  {record.workingHours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "auto",
          }}
        >
          <FaPlus /> Add Attendance
        </button>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "10px",
              maxWidth: "400px",
              margin: "20px auto",
            }}
          >
            <h3>Add Attendance</h3>
            <select
              name="employeeId"
              value={formData.employeeId}
              onChange={handleEmployeeSelect}
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              placeholder="Employee Name"
              readOnly
            />
            <input
              type="time"
              name="inTime"
              value={formData.inTime}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="outTime"
              value={formData.outTime}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                background: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div> */}

      {/* <!-- Page Wrapper --> */}
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              {/* <!-- Page Header --> */}
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h4 >
                      AttendanceTracker<span class="count-title">123</span>
                    </h4>
                  </div>
                  <div class="col-4 text-end">
                    <div class="head-icons">
                      <a
                        href="deals.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Refresh"
                      >
                        <i class="ti ti-refresh-dot"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Collapse"
                        id="collapse-header"
                      >
                        <i class="ti ti-chevrons-up"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Page Header --> */}

              <div class="card">
                <div class="card-header">
                  {/* <!-- Search --> */}
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <div class="icon-form mb-3 mb-sm-0">
                        <span class="form-icon">
                          <i class="ti ti-file-type-xls text-green me-1"></i>
                        </span>
                        <input
                          type="file"
                          class="form-control"
                          placeholder="Search Deals"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end">
                        <div class="dropdown me-2">
                          <div class="dropdown-menu  dropdown-menu-end">
                            <ul>
                              <li>
                                <input type="file" />
                                <i class="ti ti-file-type-xls text-green me-1"></i>
                                Import as Excel
                              </li>
                            </ul>
                          </div>
                        </div>
                        <a
                          href="javascript:void(0);"
                          class="btn btn-primary"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_add"
                        >
                          <i class="ti ti-square-rounded-plus me-2"></i>Add
                          Deals
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Search --> */}
                </div>
                <div class="card-body">
                  {/* <!-- Contact List --> */}
                  <div class="table-responsive custom-table">
                  <table class="table" >
                  <thead class="thead-light">
											<tr>
												<th class="no-sort">
													<label class="checkboxs"><input type="checkbox"
															id="select-all"/><span class="checkmarks"></span></label>
												</th>
												<th class="no-sort"></th>
                        <th></th>
												<th>S.no</th>
												<th>Employee ID</th>
												<th>Name</th>
												<th>In Time</th>
												<th>Out Time</th>
												<th>Working Hours</th>
										
												<th class="text-end">Action</th>
											</tr>
                      {attendance.map((record, index) => (
                        <tr  key={index}>
												<td class="no-sort">
													<label class="checkboxs"><input type="checkbox"
															id="select-all"/><span class="checkmarks"></span></label>
												</td>
												<td class="no-sort"></td>
                        <td><div class="set-star rating-select"><i class="fa fa-star"></i></div></td>
												<td>{index + 1}</td>
												<td>{record.employeeId}</td>
												<td>{record.employeeName}</td>
												<td>{record.inTime}</td>
												<td>{record.outTime}</td>
                        <td><span class="badge badge-pill badge-status bg-success">{record.workingHours}</span></td>
												<td><div class="dropdown table-action"><a href="#" class="action-icon " data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#"><i class="ti ti-bounce-right text-info"></i>Add Activity</a><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit" href="#"><i class="ti ti-edit text-blue"></i> Edit</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_deal"><i class="ti ti-trash text-danger"></i> Delete</a><a class="dropdown-item" href="deals-details.html"><i class="ti ti-eye text-blue-light"></i> Preview</a></div></div></td>
											</tr>))}
										</thead>
                    </table>

                  </div>

                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <div class="datatable-length"></div>
                    </div>
                    <div class="col-md-6">
                      <div class="datatable-paginate"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Wrapper --> */}

      {/* <!-- Add New Deals --> */}
      <div
        class="offcanvas offcanvas-end offcanvas-large"
        tabindex="-1"
        id="offcanvas_add"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="fw-semibold">Add Attendance</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <form onSubmit={handleSubmit} >
            <div class="row">
            <div class="col-md-12">
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <label class="col-form-label">
                      Select Employee <span class="text-danger">*</span>
                    </label>
                   
                  </div>
                  <select class="select2"  value={formData.employeeId}
              onChange={handleEmployeeSelect}
              required >
                    {employees.map((emp) => (<option key={emp.id} value={emp.id}>{emp.name}</option>
                     ))}
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    Employee Name <span class="text-danger">*</span>
                  </label>
                  <input  value={formData.employeeName}
              placeholder="Employee Name"
              readOnly/>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    In Time <span class="text-danger">*</span>
                  </label>
                  <input
              type="time"
              name="inTime"
              value={formData.inTime}
              onChange={handleChange}
              required
            />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    Out Time <span class="text-danger">*</span>
                  </label>
                  <input
              type="time"
              name="outTime"
              value={formData.outTime}
              onChange={handleChange}
              required
            />
                </div>
              </div>
             
              
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                class="btn btn-light me-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#create_success"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- /Add New Deals --> */}

      {/* <!-- Edit Deals --> */}
      <div
        class="offcanvas offcanvas-end offcanvas-large"
        tabindex="-1"
        id="offcanvas_edit"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="fw-semibold">Edit Deals</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <form action="deals.html">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    Deal Name <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" value="Collins" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <label class="col-form-label">
                      Pipeine <span class="text-danger">*</span>
                    </label>
                    <a
                      href=""
                      class="label-add "
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas_pipeline"
                    >
                      <i class="ti ti-square-rounded-plus"></i>
                      Add New
                    </a>
                  </div>
                  <select class="select2">
                    <option>Choose</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Calls</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Status <span class="text-danger">*</span>
                  </label>
                  <select class="select2">
                    <option>Choose</option>
                    <option>Open</option>
                    <option>Lost</option>
                    <option>Won</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Deal Value<span class="text-danger"> *</span>
                  </label>
                  <input class="form-control" type="text" value="$04,51,000" />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Currency <span class="text-danger">*</span>
                  </label>
                  <select class="select">
                    <option>Choose</option>
                    <option selected>Dollar</option>
                    <option>Euro</option>
                    <option>Pound</option>
                    <option>Rupee</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Period <span class="text-danger">*</span>
                  </label>
                  <select class="select">
                    <option>Choose</option>
                    <option>Days</option>
                    <option>Month</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Period Value <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    Contact <span class="text-danger">*</span>
                  </label>
                  <select class="multiple-img" multiple="multiple">
                    <option
                      data-image="assets/img/profiles/avatar-19.jpg"
                      selected
                    >
                      Darlee Robertson
                    </option>
                    <option data-image="assets/img/profiles/avatar-20.jpg">
                      Sharon Roy
                    </option>
                    <option data-image="assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">
                    Project <span class="text-danger">*</span>
                  </label>
                  <select class="select" multiple="multiple">
                    <option selected>Devops Design</option>
                    <option selected>MargrateDesign</option>
                    <option selected>UI for Chat</option>
                    <option>Web Chat</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Due Date <span class="text-danger">*</span>
                  </label>
                  <div class="icon-form">
                    <span class="form-icon">
                      <i class="ti ti-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control datetimepicker"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Expected Closing Date <span class="text-danger">*</span>
                  </label>
                  <div class="icon-form">
                    <span class="form-icon">
                      <i class="ti ti-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control datetimepicker"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    Assignee <span class="text-danger">*</span>
                  </label>
                  <select class="multiple-img" multiple="multiple">
                    <option data-image="assets/img/profiles/avatar-19.jpg">
                      Darlee Robertson
                    </option>
                    <option
                      data-image="assets/img/profiles/avatar-20.jpg"
                      selected
                    >
                      Sharon Roy
                    </option>
                    <option data-image="assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Follow Up Date <span class="text-danger">*</span>
                  </label>
                  <div class="icon-form">
                    <span class="form-icon">
                      <i class="ti ti-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control datetimepicker"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Source <span class="text-danger">*</span>
                  </label>
                  <select class="select">
                    <option>Select</option>
                    <option>Google</option>
                    <option>Social Media</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Tags <span class="text-danger">*</span>
                  </label>
                  <input
                    class="input-tags form-control"
                    type="text"
                    data-role="tagsinput"
                    name="Label"
                    value="Collab, Rated"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="col-form-label">
                    Priority <span class="text-danger">*</span>
                  </label>
                  <select class="select">
                    <option>Select</option>
                    <option>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="col-form-label">
                    Description <span class="text-danger">*</span>
                  </label>
                  <div class="summernote"></div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                class="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- /Edit Deals --> */}

      {/* <!-- Delete Deal --> */}
      <div class="modal fade" id="delete_deal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="text-center">
                <div class="avatar avatar-xl bg-danger-light rounded-circle mb-3">
                  <i class="ti ti-trash-x fs-36 text-danger"></i>
                </div>
                <h4 class="mb-2">Remove Deal?</h4>
                <p class="mb-0">
                  Are you sure you want to remove <br /> deal you selected.
                </p>
                <div class="d-flex align-items-center justify-content-center mt-4">
                  <a
                    href="#"
                    class="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <a href="deals.html" class="btn btn-danger">
                    Yes, Delete it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Delete Deal --> */}

      {/* <!-- Create Deal --> */}
      <div class="modal custom-modal fade" id="create_success" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0 m-0 justify-content-end">
              <button
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="ti ti-x"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="success-message text-center">
                <div class="success-popup-icon bg-light-blue">
                  <i class="ti ti-medal"></i>
                </div>
                <h3>Deal Created Successfully!!!</h3>
                <p>View the details of deal, created</p>
                <div class="col-lg-12 text-center modal-btn">
                  <a href="#" class="btn btn-light" data-bs-dismiss="modal">
                    Cancel
                  </a>
                  <a href="deals-details.html" class="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Create Deal --> */}

      {/* <!-- Add New Pipeline --> */}
      <div
        class="offcanvas offcanvas-end offcanvas-large"
        tabindex="-1"
        id="offcanvas_pipeline"
      >
        <div class="offcanvas-header border-bottom">
          <h4>Add New Pipeline</h4>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <form action="deals.html">
            <div>
              <div class="mb-3">
                <label class="col-form-label">
                  Pipeline Name <span class="text-danger">*</span>
                </label>
                <input class="form-control" type="text" />
              </div>
              <div class="mb-3">
                <div class="pipe-title d-flex align-items-center justify-content-between">
                  <h5 class="form-title">Pipeline Stages</h5>
                  <a
                    href="#"
                    class="add-stage"
                    data-bs-toggle="modal"
                    data-bs-target="#add_stage"
                  >
                    <i class="ti ti-square-rounded-plus"></i>Add New
                  </a>
                </div>
                <div class="pipeline-listing">
                  <div class="pipeline-item">
                    <p>
                      <i class="ti ti-grip-vertical"></i> Inpipeline
                    </p>
                    <div class="action-pipeline">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_stage"
                      >
                        <i class="ti ti-edit text-blue"></i>Edit
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_stage"
                      >
                        <i class="ti ti-trash text-danger"></i>Delete
                      </a>
                    </div>
                  </div>
                  <div class="pipeline-item">
                    <p>
                      <i class="ti ti-grip-vertical"></i> Follow Up
                    </p>
                    <div class="action-pipeline">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_stage"
                      >
                        <i class="ti ti-edit text-blue"></i>Edit
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_stage"
                      >
                        <i class="ti ti-trash text-danger"></i>Delete
                      </a>
                    </div>
                  </div>
                  <div class="pipeline-item">
                    <p>
                      <i class="ti ti-grip-vertical"></i> Schedule Service
                    </p>
                    <div class="action-pipeline">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_stage"
                      >
                        <i class="ti ti-edit text-blue"></i>Edit
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_stage"
                      >
                        <i class="ti ti-trash text-danger"></i>Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <h5 class="form-title">Access</h5>
                <div class="d-flex flex-wrap access-item nav">
                  <div
                    class="radio-btn"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                  >
                    <input
                      type="radio"
                      class="status-radio"
                      id="all"
                      name="status"
                      checked=""
                    />
                    <label for="all">All</label>
                  </div>
                  <div
                    class="radio-btn"
                    data-bs-toggle="tab"
                    data-bs-target="#select-person"
                  >
                    <input
                      type="radio"
                      class="status-radio"
                      id="select"
                      name="status"
                    />
                    <label for="select">Select Person</label>
                  </div>
                </div>
                <div class="tab-content mb-3">
                  <div class="tab-pane fade" id="select-person">
                    <div class="access-wrapper">
                      <div class="access-view">
                        <div class="access-img">
                          <img
                            src="assets/img/profiles/avatar-21.jpg"
                            alt="Image"
                          />
                          Vaughan Lewis
                        </div>
                        <a href="#">Remove</a>
                      </div>
                      <div class="access-view">
                        <div class="access-img">
                          <img
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="Image"
                          />
                          Jessica Louise
                        </div>
                        <a href="#">Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                class="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- /Add New Pipeline --> */}

      {/* <!-- Delete Stage --> */}
      {/* <div class="modal fade" id="delete_stage" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body">
						<div class="text-center">
							<div class="avatar avatar-xl bg-danger-light rounded-circle mb-3">
								<i class="ti ti-trash-x fs-36 text-danger"></i>
							</div>
							<h4 class="mb-2">Remove Stage?</h4>
							<p class="mb-0">Are you sure you want to remove <br/> stage you selected.</p>
							<div class="d-flex align-items-center justify-content-center mt-4">
								<a href="#" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
								<a href="deals.html" class="btn btn-danger">Yes, Delete it</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}
      {/* <!-- /Delete Stage --> */}

      {/* <!-- Add New Stage --> */}
      {/* <div class="modal custom-modal fade" id="add_stage" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add New Stage</h5>
						<button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<div class="modal-body">
						<form action="deals.html">
							<div class="mb-3">
								<label class="col-form-label">Stage Name *</label>
								<input type="text" class="form-control"/>
							</div>
							<div class="modal-btn text-end">
								<a href="#" class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
								<button type="submit" class="btn btn-danger">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div> */}
      {/* <!-- /Add New Stage --> */}

      {/* <!-- Edit Stage --> */}
      {/* <div class="modal custom-modal fade" id="edit_stage" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Edit Stage</h5>
						<button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<div class="modal-body">
						<form action="deals.html">
							<div class="mb-3">
								<label class="col-form-label">Stage Name *</label>
								<input type="text" class="form-control" value="Inpipeline"/>
							</div>
							<div class="modal-btn text-end">
								<a href="#" class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
								<button type="submit" class="btn btn-danger">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div> */}
      {/* <!-- /Edit Stage --> */}

      {/* <!-- Add New View --> */}
      {/* <div class="modal custom-modal fade" id="save_view" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add New View</h5>
						<button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<div class="modal-body">
						<form action="deals.html">
							<div class="mb-3">
								<label class="col-form-label">View Name</label>
								<input type="text" class="form-control"/>
							</div>
							<div class="modal-btn text-end">
								<a href="#" class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
								<button type="submit" class="btn btn-danger">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div> */}
      {/* <!-- /Add New View --> */}
    </>
  );
};

export default AttendanceTracker;
