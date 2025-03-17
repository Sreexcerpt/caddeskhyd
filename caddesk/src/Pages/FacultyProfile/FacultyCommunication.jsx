import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const FacultyCommunication = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="card ">
                <div class="card-header">
                  {/* <!-- Search --> */}
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <div class="icon-form mb-3 mb-sm-0">
                        <span class="form-icon">
                          <i class="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end">
                      <a href="javascript:void(0);" class="btn btn-primary mt-2" data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
											send message To Student Here</a>
								
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Search --> */}
                </div>
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <div class="datatable-length">
                        <div class="card">
                          <div class="card-header justify-content-between">
                            <div class="card-title">
                              Chat With Student Message List
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="table-responsive">
                              <table class="table table-bordered mb-0">
                                <thead>
                                  <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Batch Id</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <th scope="row">Harshrath</th>
                                    <td>2013-2014</td>
                                    <td>Solid Works</td>
                                    <td>Send To assignment</td>
                                    <td>1-2-2013</td>
                                    <td>
                                      <span class="badge bg-danger-transparent">
                                        Not Sent
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <th scope="row">Karthik</th>
                                    <td>2014-205</td>
                                    <td>Solid Works</td>
                                    <td>Send To Resume</td>
                                    <td>1-8-2013</td>
                                    <td>
                                      <span class="badge bg-warning-transparent">
                                        Process
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>3</td>
                                    <th scope="row">Vijay kumar</th>
                                    <td>2014-2014</td>
                                    <td>Auto Cad</td>
                                    <td>Complete The module</td>
                                    <td>1-7-2014</td>
                                    <td>
                                      <span class="badge bg-success-transparent">
                                        Sent
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>4</td>
                                    <th scope="row">Kavana</th>
                                    <td>2016-2017</td>
                                    <td>Catia</td>
                                    <td>Work on Task</td>
                                    <td>1-8-2017</td>
                                    <td>
                                      <span class="badge bg-info-transparent">
                                        Review
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>5</td>
                                    <th scope="row">Prem</th>
                                    <td>2016-2017</td>
                                    <td>Catia</td>
                                    <td>Work on Task</td>
                                    <td>1-8-2017</td>
                                    <td>
                                      <span class="badge bg-danger-transparent">
                                        Not Sent
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>6</td>
                                    <th scope="row">Prajawala</th>
                                    <td>2019-2020</td>
                                    <td>NxPro</td>
                                    <td>Work on Module</td>
                                    <td>1-8-2020</td>
                                    <td>
                                      <span class="badge bg-warning-transparent">
                                        Process
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>4</td>
                                    <th scope="row">Nayana</th>
                                    <td>2016-2017</td>
                                    <td>AutoCad</td>
                                    <td>Work on Task</td>
                                    <td>1-8-2017</td>
                                    <td>
                                      <span class="badge bg-info-transparent">
                                        Review
                                      </span>
                                    </td>
                                    <td>
                                      <div class="hstack gap-2 fs-15">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                        >
                                          <i class="feather-edit"></i>
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-icon btn-sm btn-soft-danger rounded-pill"
                                        >
                                          <i class="feather-trash"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="datatable-paginate"></div>
                    </div>
                  </div>
                  {/* <!-- /Contact List --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Add New Deals --> */}
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
										aria-labelledby="offcanvasRightLabel">
										<div class="offcanvas-header border-bottom">
				<h5 class="fw-semibold">Add New Contact</h5>
				<button type="button"
					class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
					data-bs-dismiss="offcanvas" aria-label="Close">
					<i class="ti ti-x"></i>
				</button>
			</div>

										<div class="offcanvas-body">
                    <div class="card">
							<div class="card-header">
								<h5 class="card-title">Add student Message</h5>
							</div>
							<div class="card-body">
								<form action="#">
									<div class="mb-3">
										<label class="form-label">First Name</label>
										<input type="text" class="form-control"/>
									</div>
									<div class="mb-3">
										<label class="form-label">Last Name</label>
										<input type="text" class="form-control"/>
									</div>
									<div class="mb-3">
										<label class="form-label">Email Address</label>
										<input type="email" class="form-control"/>
									</div>
									<div class="mb-3">
										<label class="form-label">Username</label>
										<input type="text" class="form-control"/>
									</div>
									<div class="mb-3">
										<label class="form-label">Password</label>
										<input type="password" class="form-control"/>
									</div>
									<div class="mb-3">
										<label class="form-label">Repeat Password</label>
										<input type="password" class="form-control"/>
									</div>
									<div class="text-end">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
								</form>
							</div>
						</div>
										</div> 
									</div> 
		{/* <!-- /Add New Deals --> */}
    </div>
  );
};

export default FacultyCommunication;
