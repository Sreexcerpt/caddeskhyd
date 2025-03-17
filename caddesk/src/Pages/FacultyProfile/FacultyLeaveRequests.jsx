import React from "react";

const FacultyLeaveRequests = () => {
  return (
    <div>
      <div class="page-wrapper cardhead">
        <div class="content container-fluid">
          {/* <!-- Page Header --> */}
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="page-title">Employee Leave Request</h3>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                    How many days You have taken leave
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead class="table-primary">
                        <tr>
                          <th scope="col">S.no</th>
                          <th scope="col">Date From</th>
                          <th scope="col">Date To</th>
                          <th scope="col">Reason</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td scope="row">24 May 2022</td>

                          <td scope="row">28 May 2022</td>

                          <td>Sick</td>
                          <td>
                            <span class="badge bg-danger-transparent">
                              Reject
                            </span>
                          </td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-soft-success rounded-pill"
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
                          <td scope="row">24 May 2022</td>

                          <td scope="row">28 May 2022</td>

                          <td>Sick</td>
                          <td>
                            <span class="badge bg-success-transparent">
                              Approved
                            </span>
                          </td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-soft-success rounded-pill"
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
                          <td scope="row">24 May 2022</td>

                          <td scope="row">28 May 2022</td>

                          <td>Casual</td>
                          <td>
                            <span class="badge bg-warning-transparent">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-soft-success rounded-pill"
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
                          <td scope="row">24 July 2022</td>

                          <td scope="row">28 July 2022</td>

                          <td>Marriage</td>
                          <td>
                            <span class="badge bg-danger-transparent">
                              Reject
                            </span>
                          </td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-soft-success rounded-pill"
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
                          <td scope="row">24 Oct 2022</td>

                          <td scope="row">28 Oct 2022</td>

                          <td>Emergency</td>
                          <td>
                            <span class="badge bg-success-transparent">
                              Approved
                            </span>
                          </td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-soft-success rounded-pill"
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
                          <td scope="row">24 Nov 2022</td>

                          <td scope="row">28 Nov 2022</td>

                          <td>Celebration</td>
                          <td>
                            <span class="badge bg-warning-transparent">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-soft-success rounded-pill"
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
            <div class="col-md-6">
              <div class="card">
                <div class="card-body p-4">
                  <form>
                    <div class="row">
                      

											<div class="row">
												<label class="col-lg-3 col-form-label">Date From To :</label>
												<div class="col-lg-9">
													<div class="row">
														<div class="col-md-6">
															<div class="mb-3">
																<input type="date" placeholder="From Date"
																	class="form-control"/>
															</div>
														</div>
														<div class="col-md-6">
															<div class="mb-3">
																<input type="date" placeholder="To Date"
																	class="form-control"/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row mb-3">
												<label class="col-lg-3 col-form-label">Leave Type :</label>
												<div class="col-lg-9">
												<div class="mb-3">
																<select class="select">
																	<option>Leave Type</option>
																	<option value="1">Sick</option>
																	<option value="2">Casula</option>
																</select>
															</div>
															
												</div>
											</div>
											<div class="row mb-3">
												<label class="col-lg-3 col-form-label">Reason: </label>
												<div class="col-lg-9">
													<div class="mb-3">
														<textarea class="form-control" rows="3"></textarea>
													</div>
												</div>
											</div>
										
											
									
								

                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyLeaveRequests;
