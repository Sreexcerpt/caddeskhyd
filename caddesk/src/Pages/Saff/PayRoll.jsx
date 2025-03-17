import React from 'react'

const PayRoll = () => {
  return (
    <div>
        		{/* <!-- Page Wrapper --> */}
		<div class="page-wrapper">
			<div class="content">

				<div class="row">
					<div class="col-md-8">

						{/* <!-- Page Header --> */}
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col-4">
									<h4 >Payments<span class="count-title">123</span></h4>
								</div>
								<div class="col-8 text-end">
									<div class="head-icons">
										<a href="payments.html" data-bs-toggle="tooltip" data-bs-placement="top"
											data-bs-original-title="Refresh">
											<i class="ti ti-refresh-dot"></i>
										</a>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
											data-bs-original-title="Collapse" id="collapse-header">
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
											<span class="form-icon"><i class="ti ti-search"></i></span>
											<input type="text" class="form-control" placeholder="Search Payments"/>
										</div>
									</div>
									<div class="col-sm-8">
										<div
											class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end mb-3 mb-sm-0">
											<div class="dropdown me-2">
												<a href="javascript:void(0);" class="dropdown-toggle"
													data-bs-toggle="dropdown"><i
														class="ti ti-package-export me-2"></i>Export</a>
												<div class="dropdown-menu  dropdown-menu-end">
													<ul>
														<li>
															<a href="javascript:void(0);" class="dropdown-item"><i
																	class="ti ti-file-type-pdf text-danger me-1"></i>Export
																as PDF</a>
														</li>
														<li>
															<a href="javascript:void(0);" class="dropdown-item"><i
																	class="ti ti-file-type-xls text-green me-1"></i>Export
																as Excel </a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- /Search --> */}
							</div>

						    <div class="card">
					
							<div class="card-body">
								<div class="table-responsive">
									<table class="table table-bordered table-hover">
										<thead>
											<tr>
												<th scope="col">EmployeeName</th>
												<th scope="col">Basic Salary</th>
												<th scope="col">Health Insur</th>
												<th scope="col">Total Salary</th>
                                                <th scope="col">Total Addition</th>
                                                <th scope="col">Total Deduction</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="d-flex align-items-center">
														
														<div>
															<div class="lh-1">
																<span>Joanna Smith</span>
															</div>
															<div class="lh-1">
																<span
																	class="badge bg-soft-info">Id: 547722</span>
															</div>
														</div>
													</div>
												</td>
												<td>25000.00</td>
												<td>200.00</td>
                                                <td>25200.00</td>
                                                <td>200.00</td>
                                                <td><span class="badge bg-soft-danger">400.00</span></td>
											</tr>
                                            <tr>
												<td>
													<div class="d-flex align-items-center">
														
														<div>
															<div class="lh-1">
																<span>Ajay</span>
															</div>
															<div class="lh-1">
																<span
																	class="badge bg-soft-info">Id: 547722</span>
															</div>
														</div>
													</div>
												</td>
												<td>21000.00</td>
												<td>120.00</td>
                                                <td>23200.00</td>
                                                <td>210.00</td>
                                                <td><span class="badge bg-soft-danger">300.00</span></td>
											</tr>
                                            <tr>
												<td>
													<div class="d-flex align-items-center">
														
														<div>
															<div class="lh-1">
																<span>Raju</span>
															</div>
															<div class="lh-1">
																<span
																	class="badge bg-soft-info">Id: 547722</span>
															</div>
														</div>
													</div>
												</td>
												<td>25900.00</td>
												<td>300.00</td>
                                                <td>24200.00</td>
                                                <td>220.00</td>
                                                <td><span class="badge bg-soft-danger">300.00</span></td>
											</tr>
                                            <tr>
												<td>
													<div class="d-flex align-items-center">
														
														<div>
															<div class="lh-1">
																<span>Balu</span>
															</div>
															<div class="lh-1">
																<span
																	class="badge bg-soft-info">Id: 547722</span>
															</div>
														</div>
													</div>
												</td>
												<td>25000.00</td>
												<td>200.00</td>
                                                <td>25200.00</td>
                                                <td>200.00</td>
                                                <td><span class="badge bg-soft-danger">400.00</span></td>
											</tr>
                                            <tr>
												<td>
													<div class="d-flex align-items-center">
														
														<div>
															<div class="lh-1">
																<span>Kavan</span>
															</div>
															<div class="lh-1">
																<span
																	class="badge bg-soft-info">Id: 547722</span>
															</div>
														</div>
													</div>
												</td>
												<td>22000.00</td>
												<td>220.00</td>
                                                <td>200.00</td>
                                                <td>210.00</td>
                                                <td><span class="badge bg-soft-danger">140.00</span></td>
											</tr>
                                            <tr>
												<td>
													<div class="d-flex align-items-center">
														
														<div>
															<div class="lh-1">
																<span>Tharun</span>
															</div>
															<div class="lh-1">
																<span
																	class="badge bg-soft-info">Id: 547722</span>
															</div>
														</div>
													</div>
												</td>
												<td>15000.00</td>
												<td>100.00</td>
                                                <td>2200.00</td>
                                                <td>100.00</td>
                                                <td><span class="badge bg-soft-danger">100.00</span></td>
											</tr>			
										</tbody>
									</table>
								</div>
							</div>

						</div>

						</div>

					</div>

                    <div class="col-md-4">
                    <div class="card">
							<div class="card-header">
								<h6>Jan 2024 Payroll approval</h6>
                                <p>From Vijaywada 2:30pm</p>
							</div>
							<div class="card-body">
								<h6>Payroll Summary</h6>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Total Amount
                                        <span>12300.00</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Total Employees
                                        <span >123</span>
                                    </li>

                                   
                                    
                                    </ul>

                                    <h6>Approval Cycle</h6>
                                    <ul class="list-group list-group-flush mt-40">
                                        <li>
                                            <span>The finance manager</span>
                                        </li>
                                        <li>
                                            <span>The finance manager</span>
                                        </li>
                                    </ul>
                                    <div class="mt-3">
                                        <button class="btn btn-outline-success rounded-pill">Approve</button>
                                            </div>
							</div>
						</div>

                        <div class="card">
							<div class="card-header">
								<h6>Jan 2025 Payroll approval</h6>
                                <p>From Hyderabad 2:30pm</p>
							</div>
							<div class="card-body">
								<h6>Payroll Summary</h6>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Total Amount
                                        <span>12300.00</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Total Employees
                                        <span >123</span>
                                    </li>

                                   
                                    
                                    </ul>

                                    <h6>Approval Cycle</h6>
                                    <ul class="list-group list-group-flush mt-40">
                                        <li>
                                            <span>The finance manager</span>
                                        </li>
                                        <li>
                                            <span>The finance manager</span>
                                        </li>
                                    </ul>
                                    <div class="mt-3">
                                        <button class="btn btn-outline-success rounded-pill">Approve</button>
                                            </div>
							</div>
						</div>
						
                    </div>
				</div>

			</div>
		</div>
		{/* <!-- /Page Wrapper --> */}
    </div>
  )
}

export default PayRoll
