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
											Send message To Student Here</a>
								
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
                                    <th scope="col">CourseName</th>
                                    <th scope="col">Batch Id</th>
                                    <th scope="col">No.Of Student</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>   
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <th scope="row">Solid Works</th>
                                    <td>2013-2014</td>
                                    <td>500</td>
                                    <td>Send To assignment</td>
                                    <td>1-2-2013</td>
                                    <td>
                                      <span class="badge bg-success-transparent">
                                        Sent
                                      </span>
                                    </td>
                                   
                                  </tr>

                                  <tr>
                                    <td>2</td>
                                    <th scope="row">AutoCad</th>
                                    <td>2014-2015</td>
                                    <td>400</td>
                                    <td>Complete The Module</td>
                                    <td>1-2-2014</td>
                                    <td>
                                      <span class="badge bg-danger-transparent">
                                        Not Sent
                                      </span>
                                    </td>
                                   
                                  </tr>

                                  <tr>
                                    <td>3</td>
                                    <th scope="row">Catia</th>
                                    <td>2016-2017</td>
                                    <td>100</td>
                                    <td>Create 3D product</td>
                                    <td>1-2-2017</td>
                                    <td>
                                      <span class="badge bg-warning-transparent">
                                        Review
                                      </span>
                                    </td>
                                   
                                  </tr>

                                  <tr>
                                    <td>4</td>
                                    <th scope="row">Creo</th>
                                    <td>2013-2014</td>
                                    <td>500</td>
                                    <td>Send To assignment</td>
                                    <td>1-2-2013</td>
                                    <td>
                                      <span class="badge bg-success-transparent">
                                        Sent
                                      </span>
                                    </td>
                                   
                                  </tr>

                                  <tr>
                                    <td>4</td>
                                    <th scope="row">NX CAD</th>
                                    <td>2013-2014</td>
                                    <td>500</td>
                                    <td>Send To assignment</td>
                                    <td>1-2-2013</td>
                                    <td>
                                      <span class="badge bg-danger-transparent">
                                        Not Sent
                                      </span>
                                    </td>
                                   
                                  </tr>

                                  <tr>
                                    <td>5</td>
                                    <th scope="row">Fusion</th>
                                    <td>2013-2014</td>
                                    <td>500</td>
                                    <td>Send To assignment</td>
                                    <td>1-2-2013</td>
                                    <td>
                                      <span class="badge bg-info-transparent">
                                        Pending
                                      </span>
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
				<button type="button"
					class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
					data-bs-dismiss="offcanvas" aria-label="Close">
					<i class="ti ti-x"></i>
				</button>
			</div>

										<div class="offcanvas-body">
                    <div class="card">
							<div class="card-header">
								<h5 class="card-title">Message Send to Student</h5>
							</div>
							<div class="card-body p-4">
              <form>
                    <div class="row">
                      

                    <div class="row mb-3">
												<label class="col-lg-3 col-form-label">Select Batch :</label>
												<div class="col-lg-9">
												<div class="mb-3">
																<select class="select">
																	<option>Select Batch</option>
																	<option value="1">2016-2017</option>
																	<option value="2">2018-2019</option>
																</select>
															</div>
															
												</div>
											</div>

                      <div class="row mb-3">
												<label class="col-lg-3 col-form-label">Subject:</label>
												<div class="col-lg-9">
													<input type="text" class="form-control"/>
												</div>
											</div>

											<div class="row mb-3">
												<label class="col-lg-3 col-form-label">Message: </label>
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
		{/* <!-- /Add New Deals --> */}
    </div>
  );
};

export default FacultyCommunication;
