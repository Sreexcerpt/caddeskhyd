import React from 'react'

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
											</tr>
										</thead>
										<tbody>
											<tr>
                      <td>1</td>
												<th scope="row">24 May 2022</th>
                        <th scope="row">28 May 2022</th>
												<td>Sick</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
													</div>
												</td>
											</tr>
                      <tr>
                      <td>2</td>
												<th scope="row">24 April 2023</th>
                        <th scope="row">28 April 2023</th>
												<td>Sick</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
													</div>
												</td>
											</tr>
                      <tr>
                      <td>3</td>
												<th scope="row">24 July 2022</th>
                        <th scope="row">28 July 2022</th>
												<td>Marriage</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
													</div>
												</td>
											</tr>
                      <tr>
                      <td>4</td>
												<th scope="row">24 Oct 2022</th>
                        <th scope="row">28 Oct 2022</th>
												<td>Emergency</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
													</div>
												</td>
											</tr>
                      <tr>
                      <td>5</td>
												<th scope="row">24 Dec 2022</th>
                        <th scope="row">28 Dec 2022</th>
												<td>Emergency</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
													</div>
												</td>
											</tr>
                      <tr>
                      <td>6</td>
												<th scope="row">2 Jan 2022</th>
                        <th scope="row">8 Jan 2022</th>
												<td>Sick</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill"><i
																class="feather-download"></i></a>
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
						
							<div class="card-body">
								<form >
									<div class="row">
										<div class="col-md-6 col-lg-12">
											<h5 class="card-title">Employee details</h5>
											<div class="mb-3">
												<label class="form-label">EmployeeId:</label>
												<input type="text" class="form-control" name="employeeId" />
											</div>
											
											<div class="mb-3">
												<label class="form-label">Leave Type:</label>
												<select class="select" name="leaveType" >
													<option>Select Leave</option>
                          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Annual Leave">Annual Leave</option>
												</select>
											</div>

                      <div class="mb-3">
												<label class="form-label">From Date:</label>
												<input type="date" name="fromDate" />
											</div>

                      <div class="mb-3">
												<label class="form-label">To Date:</label>
												<input type="date" name="toDate" />
											</div>

											<div class="mb-3">
												<label class="form-label">Reason:</label>
												<textarea rows="5" cols="5" class="form-control"
													placeholder="Enter message"  name="reason" ></textarea>
											</div>
										</div>
									
									</div>
									<div class="text-end">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
      </div>
      </div>
    </div>
  )
}

export default FacultyLeaveRequests

