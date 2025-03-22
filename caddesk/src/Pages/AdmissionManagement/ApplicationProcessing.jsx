import React from 'react'

const ApplicationProcessing = () => {
	return (
		<div>
			<div class="page-wrapper">
				<div class="content">

					<div class="row">
						<div class="col-md-12">

							{/* <!-- Page Header --> */}
							<div class="page-header">
								<div class="row align-items-center">
									<div class="col-8">
										<h4>Application Processing</h4>
									</div>
									<div class="col-4 text-end">
										<div class="head-icons">
											<a href="/ApplicationProcessing" data-bs-toggle="tooltip" data-bs-placement="top"
												data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
											<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
												data-bs-original-title="Collapse" id="collapse-header"><i
													class="ti ti-chevrons-up"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="card">

								<div class="card-body">

									<table className="table table-striped">
										<thead>
											<tr>
												<th>ID</th>
												<th>Name</th>
												<th>Opted Course</th>
												<th>Qualification</th>
												<th>Mobile Number</th>
												<th>Email ID</th>
												<th>Status</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											{/* Example rows, replace with dynamic data */}
											<tr>
												<td>1</td>
												<td>John Doe</td>
												<td>Computer Science</td>
												<td>Bachelor's</td>
												<td>1234567890</td>
												<td>johndoe@example.com</td>
												<td>Pending</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-warning rounded-pill"><i
																class="feather-eye"></i></a>
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
												<td>2</td>
												<td>Jane Smith</td>
												<td>Mechanical Engineering</td>
												<td>Master's</td>
												<td>9876543210</td>
												<td>janesmith@example.com</td>
												<td>Approved</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-warning rounded-pill"><i
																class="feather-eye"></i></a>
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
												<td>3</td>
												<td>Michael Brown</td>
												<td>Electrical Engineering</td>
												<td>Bachelor's</td>
												<td>1122334455</td>
												<td>michaelbrown@example.com</td>
												<td>Rejected</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-warning rounded-pill"><i
																class="feather-eye"></i></a>
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
												<td>4</td>
												<td>Emily Davis</td>
												<td>Civil Engineering</td>
												<td>Diploma</td>
												<td>5566778899</td>
												<td>emilydavis@example.com</td>
												<td>Pending</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-warning rounded-pill"><i
																class="feather-eye"></i></a>
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
	)
}

export default ApplicationProcessing
