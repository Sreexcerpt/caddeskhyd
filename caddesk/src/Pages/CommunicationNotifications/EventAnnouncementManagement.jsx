import React from 'react'

const EventAnnouncementManagement = () => {
  return (
    <div>
      <div class="page-wrapper">
            <div class="content">
                <div class="page-header">
                    <div class="row align-items-center w-100">
                        <div class="col-lg-10 col-sm-12">
                            <h3 >Calendar</h3>
                        </div>
                        <div class="col-lg-2 col-sm-12 d-flex justify-content-end p-0">
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_event">Create Event</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4">
                        <h4 class="card-title">Drag & Drop Event</h4>
                        <div id="calendar-events" class="mb-3">
                            <div class="calendar-events" data-class="bg-info"><i class="fas fa-circle text-info"></i> My Event One</div>
                            <div class="calendar-events" data-class="bg-success"><i class="fas fa-circle text-success"></i> My Event Two</div>
                            <div class="calendar-events" data-class="bg-danger"><i class="fas fa-circle text-danger"></i> My Event Three</div>
                            <div class="calendar-events" data-class="bg-warning"><i class="fas fa-circle text-warning"></i> My Event Four</div>
                        </div>
                        <div class="input-block add-lists todo-inbox-check mb-3">
                            <label class="checkboxs">
								<input type="checkbox" id="drop-remove"/>
								<span class="checkmarks"></span> Remove after drop
							</label>
                        </div>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_new_event" class="btn mb-3 btn-primary btn-block w-100">
							<i class="fas fa-plus"></i> Add New Event
						</a>
                    </div>
                    <div class="col-lg-9 col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <div id="calendar">

                                <div class="table-responsive">
									<table class="table text-nowrap">
										<thead class="table-primary">
											<tr>
                                            <th scope="col">S.no</th>
												<th scope="col">Event Name</th>
												<th scope="col">Created</th>
												<th scope="col">Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Photo session</td>
												<td>24 May 2022</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
																class="feather-edit"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
																class="feather-trash"></i></a>
													</div>
												</td>
											</tr>
										
                                            <tr>
												<th scope="row">2</th>
												<td>AI event</td>
												<td>24 March 2024</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
																class="feather-edit"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
																class="feather-trash"></i></a>
													</div>
												</td>
											</tr>

                                            <tr>
												<th scope="row">3</th>
												<td>Offer</td>
												<td>24 July 2026</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
																class="feather-edit"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
																class="feather-trash"></i></a>
													</div>
												</td>
											</tr>

                                            <tr>
												<th scope="row">4</th>
												<td>Interviewers Selections</td>
												<td>24 April 2025</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
																class="feather-edit"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
																class="feather-trash"></i></a>
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
                </div>

            </div>
        </div>


        {/* <!-- Add Event Modal --> */}
        <div id="add_event" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Event</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span
								aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="calendar.html">
                            <div class="input-blocks">
                                <label>Event Name <span class="text-danger">*</span></label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div class="input-blocks">
                                <label>Event Date <span class="text-danger">*</span></label>
                                <div class="cal-icon">
                                    <input class="form-control " type="text"/>
                                </div>
                            </div>
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Add Event Modal --> */}



        {/* <!-- Add Event Modal --> */}
        <div class="modal custom-modal fade none-border" id="my_event">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Event</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form action="calendar.html">
                            <div class="modal-footer justify-content-center">
                                <button type="button" class="btn btn-success save-event submit-btn">Create
									event</button>
                                <button type="submit" class="btn btn-danger delete-event submit-btn" data-dismiss="modal">Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Add Event Modal --> */}

        {/* <!-- Add Category Modal --> */}
        <div class="modal custom-modal fade" id="add_new_event">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Category</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"><span
								aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="calendar.html">
                            <div class="mb-3">
                                <label class="form-label">Category Name</label>
                                <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Choose Category Color</label>
                                <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
									<option value="success">Success</option>
									<option value="danger">Danger</option>
									<option value="info">Info</option>
									<option value="primary">Primary</option>
									<option value="warning">Warning</option>
									<option value="inverse">Inverse</option>
								</select>
                            </div>
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary save-category submit-btn" data-dismiss="modal">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Add Category Modal --> */}

    </div>
  )
}

export default EventAnnouncementManagement
