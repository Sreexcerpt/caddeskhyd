import React from 'react'

const Invoice = () => {
  return (
    <div>
       <div class="page-wrapper">
			<div class="content">

				<div class="row">
					<div class="col-md-12">

						{/* <!-- Page Header --> */}
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col-4">
									<h4 >Invoice Details</h4>
								</div>
								<div class="col-2 text-end">
									<div>
										<button class="btn btn-primary" type="button"><i class="ti ti-download me-1"></i>Download</button>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Page Header --> */}

						{/* <!-- Invoices --> */}
						<div>
							<div class="row">
								<div class="col-sm-10 mx-auto">
									 <a href="/" class="back-icon d-flex align-items-center fs-12 fw-medium mb-3 d-inline-flex">
										<span class=" d-flex justify-content-center align-items-center rounded-circle me-2">
											<i class="ti ti-arrow-left"></i>
										</span>
										Back to List
									</a>
									<div class="card">
										<div class="card-body p-4">
											<div class="border-bottom mb-3">
												<div class="row justify-content-between align-items-center">
													<div class="col-md-6">
														<div class="mb-3">
															<div class="mb-2">
																<img src="assets/img/logo.svg" class="img-fluid" alt="logo"/>
															</div>
															<p>1/2/219 Vijayawada Lenin Center 54688</p>
														</div>
													</div>
													<div class="col-md-6">
														<div class="text-end mb-3">
															<h5 class="text-gray mb-1">Invoice No <span class="text-primary">#INV00013455</span></h5>
															<p class="mb-1 fw-medium">Created Date : <span class="text-dark">Sep 24, 2023</span> </p>
															<p class="fw-medium">Due Date : <span class="text-dark">Sep 30, 2023</span> </p>
														</div>
													</div>
												</div>
											</div>
											<div class="border-bottom mb-3">
												<div class="row">
													<div class="col-md-5">
														<div class="mb-3">
															<p class="text-dark mb-2 fw-semibold">From</p>
															<div>
																<h4 class="mb-1">Karthik</h4>
																<p class="mb-1">1/5/239 Hyderbad Durgam Cheruvu 54688</p>
																<p class="mb-1">Email : <span class="text-dark"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ecb88d9e8d808dded8d8d9ac89948d819c8089c28f8381">Karthik@gmail.com</a></span></p>
																<p>Phone : <span class="text-dark">+91 987654433</span></p>
															</div>
														</div>
													</div>
													<div class="col-md-5">
														<div class="mb-3">
															<p class="text-dark mb-2 fw-semibold">To</p>
															<div>
																<h4 class="mb-1">Vinya,.</h4>
																<p class="mb-1">Kurnol District Orvakal Rock Garden 567596</p>
																<p class="mb-1">Email : <span class="text-dark"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e5b6849784ba8c8b86d6d1a5809d8488958980cb868a88">vinyakumar</a></span></p>
																<p>Phone : <span class="text-dark">+91 9987678509</span></p>
															</div>
														</div>
													</div>
													<div class="col-md-2">
														<div class="mb-3">
															<p class="text-title mb-2 fw-medium">Payment Status </p>
															<span class="badge badge-danger align-items-center mb-3"><i class="ti ti-point-filled "></i>Due in 10 Days</span>
															<div>
																<img src="assets/img/profiles/qr.png" class="img-fluid" alt="QR"/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div>
												<p class="fw-medium">Invoice For : <span class="text-dark fw-medium">Payment For Course Fee</span></p>
												<div class="table-responsive mb-3">
													<table class="table">
														<thead class="thead-light">
															<tr>
																<th>Course</th>
															
																<th class="text-end">Cost</th>
																<th class="text-end">Discount</th>
																<th class="text-end">Total</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><h6>Soild Works</h6></td>
																
																<td class="text-gray-9 fw-medium text-end">5000.00</td>
																<td class="text-gray-9 fw-medium text-end">1000.00</td>
																<td class="text-gray-9 fw-medium text-end">4000.00</td>
															</tr>
															
														</tbody>
													</table>
												</div>
											</div>
											<div class="border-bottom mb-3">
												<div class="row align-items-center">
													<div class="col-md-7">
														<div class="mb-3">
															<div class="mb-3">
																<h6 class="mb-1">Terms and Conditions</h6>
																<p>Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.</p>
															</div>
															<div class="mb-3">
																<h6 class="mb-1">Notes</h6>
																<p>Please quote invoice number when remitting funds.</p>
															</div>
														</div>
													</div>
													<div class="col-md-5">
														<div class="mb-3">
															<div class="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
																<p class="mb-0">Sub Total</p>
																<p class="text-dark fw-medium mb-2">4000.00</p>
															</div>
															<div class="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
																<p class="mb-0">Discount(0%)</p>
																<p class="text-dark fw-medium mb-2">1000.00</p>
															</div>
															<div class="d-flex justify-content-between align-items-center mb-2 pe-3">
																<p class="mb-0">GST(5%)</p>
																<p class="text-dark fw-medium mb-2">54.00</p>
															</div>
															<div class="d-flex justify-content-between align-items-center mb-2 pe-3">
																<h5>Total Amount</h5>
																<h5>4054.00</h5>
															</div>
															<p class="fs-12">
																Amount in Words : Rupess Four thousand fithity Four
															</p>
														</div>
													</div>
												</div>
											</div>
											<div class="border-bottom mb-3">
												<div class="row justify-content-end">
													<div class="col-md-3">
														<div class="mb-3">
															<div class="text-end">
																<img src="assets/img/icons/sign.svg" class="img-fluid" alt="sign"/>
															</div>
															<div class="text-end mb-3">
																<h6 class="fs-14 fw-medium pe-3">Vijay Kuamr</h6>
																<p>Assistant Manager</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="text-center">
												<div class="mb-3">
													<img src="assets/img/logo.svg" class="img-fluid" alt="logo"/>
												</div>
												<p class="text-dark mb-1">Payment Made Via bank transfer / Cheque in the name of Thomas Lawler</p>
												<div class="d-flex justify-content-center align-items-center flex-wrap row-gap-2">
													<p class="fs-12 mb-0 me-3">Bank Name : <span class="text-dark">HDFC Bank</span></p>
													<p class="fs-12 mb-0 me-3">Account Number : <span class="text-dark">45366287987</span></p>
													<p class="fs-12">IFSC : <span class="text-dark">HDFC0018159</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Invoices --> */}

						<div class="d-flex justify-content-center align-items-center mb-4">
							<a href="#" class="btn btn-primary d-flex justify-content-center align-items-center me-2"><i class="ti ti-printer me-2"></i>Print Invoice</a>
							<a href="#" class="btn btn-white d-flex justify-content-center align-items-center border"><i class="ti ti-copy me-2"></i>Clone Invoice</a>
						</div>

					</div>
				</div>

			</div>
		</div>
    </div>
  )
}

export default Invoice
