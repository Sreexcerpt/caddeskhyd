


import React from 'react'

const LeadFollowup = () => {
  return (
    <div>
       {/* <!-- Page Wrapper --> */}
		<div class="page-wrapper">
			<div class="content">

				<div class="row">
					<div class="col-md-12">

						{/* <!-- Page Header --> */}
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col-8">
									<h4 class="page-title">LeadFollowup<span class="count-title">123</span></h4>
								</div>
								<div class="col-4 text-end">
									<div class="head-icons">
										<a href="contact-grid.html" data-bs-toggle="tooltip" data-bs-placement="top"
											data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
											data-bs-original-title="Collapse" id="collapse-header"><i
												class="ti ti-chevrons-up"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Page Header --> */}

						{/* <!-- Card --> */}
						<div class="card">
							<div class="card-header">
								{/* <!-- Search --> */}
								<div class="row align-items-center">
									<div class="col-sm-4">
										<div class="icon-form mb-3 mb-sm-0">
											<span class="form-icon"><i class="ti ti-search"></i></span>
											<input type="text" class="form-control" placeholder="Search Lead Followup"/>
										</div>
									</div>
									<div class="col-sm-8">
										<div
											class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end">
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
											<a href="javascript:void(0);" class="btn btn-primary"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add"><i
													class="ti ti-square-rounded-plus me-2"></i>Lead Followup</a>
										</div>
									</div>
								</div>
								{/* <!-- /Search --> */}
							</div>
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-4">
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										<div class="dropdown me-2">
											<a href="javascript:void(0);" class="dropdown-toggle"
												data-bs-toggle="dropdown"><i
													class="ti ti-sort-ascending-2 me-1"></i>Sort </a>
											<div class="dropdown-menu  dropdown-menu-start">
												<ul>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Ascending
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Descending
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Recently
															Viewed
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<i class="ti ti-circle-chevron-right me-1"></i>Recently
															Added
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="icon-form">
											<span class="form-icon"><i class="ti ti-calendar"></i></span>
											<input type="text" class="form-control bookingrange" placeholder=""/>
										</div>
									</div>
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										<div class="form-sorts dropdown me-2">
											<a href="javascript:void(0);" data-bs-toggle="dropdown"
												data-bs-auto-close="outside"><i
													class="ti ti-filter-share"></i>Filter Due</a>
											<div class="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end p-3">
												<div class="filter-set-view">
													<div class="filter-set-head">
														<h4><i class="ti ti-filter-share"></i>Due Fee</h4>
													</div>
													<div class="accordion" id="accordionExample">
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" data-bs-toggle="collapse"
																	data-bs-target="#collapseTwo" aria-expanded="true"
																	aria-controls="collapseTwo">Due Today</a>
															</div>
															
														</div>
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" class="collapsed" data-bs-toggle="collapse"
																	data-bs-target="#owner" aria-expanded="false"
																	aria-controls="owner">OverDue</a>
															</div>
														
														</div>
														
													</div>
													<div class="filter-reset-btns">
														<div class="row">
															<div class="col-6">
																<a href="#" class="btn btn-light">Reset</a>
															</div>
															<div class="col-6">
																<a href="contact-grid.html"
																	class="btn btn-primary">Filter</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									
									</div>
								</div>
								{/* <!-- Contact Grid --> */}
								<div class="row">
									<div class="col-xxl-3 col-xl-4 col-md-6">
										<div class="card border">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between mb-3">
													<div class="d-flex align-items-center">
														<a href="contact-details.html"
															class="avatar avatar-md flex-shrink-0 me-2">
															<img src="./src/assets/assets/img/profiles/avatar-20.jpg" alt="img"/>
														</a>
														<div>
															<h6><a href="contact-details.html" class="fw-medium">Darlee
																	Robertson</a></h6>
															<p class="text-default">Mechanical (Catia)</p>
														</div>
													</div>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"
															aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
																data-bs-target="#offcanvas_edit"><i
																	class="ti ti-edit text-blue"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal"
																data-bs-target="#delete_contact"><i
																	class="ti ti-trash text-danger"></i> Delete</a>
															<a class="dropdown-item" href="contact-details.html"><i
																	class="ti ti-eye text-blue-light"></i> Preview</a>
														</div>
													</div>
												</div>
												<div class="d-block">
													<div class="d-flex flex-column mb-3">
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-mail text-dark me-1"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="33415c51564147405c5d73564b525e435f561d505c5e">useremail@gmail.com</a>
														</p>
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-phone text-dark me-1"></i>1234567890</p>
														<p class="text-default d-inline-flex align-items-center"><i
																class="ti ti-map-pin-pin text-dark me-1"></i>Germany</p>
													</div>
													<div class="d-flex align-items-center">
														<span class="badge badge-tag badge-success-light me-2">1-Followpup</span>
														<span class="badge badge-tag badge-warning-light">Processing</span>
													</div>
												</div>
												<div
													class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
													<div class="d-flex align-items-center grid-social-links">
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-mail fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-phone-check fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-message-circle-share fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-brand-skype fs-14"></i></a>
														<a href="#" class="avatar avatar-xs text-dark rounded-circle"><i
																class="ti ti-brand-facebook fs-14"></i></a>
													</div>
													<div class="d-flex align-items-center">
														<div class="set-star text-default me-2">
                            <button type="button" class="btn btn-outline-info">Reminder</button>
														</div>
														<a href="javascript:void(0);" class="avatar avatar-md"
															data-bs-toggle="tooltip" data-bs-original-title="Mervin"
															data-bs-placement="top">
															<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFGFJ4B9bKrG0zpU3F60kRwLfB0nq06zyVA&s" alt="img"/>
														</a>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div class="col-xxl-3 col-xl-4 col-md-6">
										<div class="card border">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between mb-3">
													<div class="d-flex align-items-center">
														<a href="contact-details.html"
															class="avatar avatar-md flex-shrink-0 me-2">
															<img src="./src/assets/assets/img/profiles/avatar-14.jpg" alt="img"/>
														</a>
														<div>
															<h6><a href="contact-details.html" class="fw-medium">Sharon
																	Roy</a></h6>
															<p class="text-default">Mechanical (Solid Works)</p>
														</div>
													</div>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"
															aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
																data-bs-target="#offcanvas_edit"><i
																	class="ti ti-edit text-blue"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal"
																data-bs-target="#delete_contact"><i
																	class="ti ti-trash text-danger"></i> Delete</a>
															<a class="dropdown-item" href="contact-details.html"><i
																	class="ti ti-eye text-blue-light"></i> Preview</a>
														</div>
													</div>
												</div>
												<div class="d-block">
													<div class="d-flex flex-column mb-3">
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-mail text-dark me-1"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="55263d34273a3b15302d34382539307b363a38">useremail@gmail.com</a>
														</p>
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-phone text-dark me-1"></i>+1 989757485</p>
														<p class="text-default d-inline-flex align-items-center"><i
																class="ti ti-map-pin-pin text-dark me-1"></i>+1
															989757485</p>
													</div>
													<div class="d-flex align-items-center">
														<span
															class="badge badge-tag badge-success-light me-2">2-Followup</span>
														<span class="badge badge-tag badge-warning-light">Intial Contact</span>
													</div>
												</div>
												<div
													class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
													<div class="d-flex align-items-center grid-social-links">
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-mail fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-phone-check fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-message-circle-share fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-brand-skype fs-14"></i></a>
														<a href="#" class="avatar avatar-xs text-dark rounded-circle"><i
																class="ti ti-brand-facebook fs-14"></i></a>
													</div>
													<div class="d-flex align-items-center">
														<div class="set-star text-default me-2">
															<button type="button" class="btn btn-outline-info">Reminder</button>
														</div>
														<a href="javascript:void(0);" class="avatar avatar-md"
															data-bs-toggle="tooltip" data-bs-original-title="Mervin"
															data-bs-placement="top">
															<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX////JIi/fnzhCOpDFAADHEiPGABrchorFAAzGABD67/D24+TGABbHCh/JHy3IFCXafoPkpKfhmZ3ejZHvzM7rvsDFAA3enC7NPEY9NI40Korux8n13t/dmSHemysnGoYvJIjmq67Zd3zotLbSV1757d/99/fy1NbPSVHUZGrLLzrd3OnfkZX46erXbnTMN0H25dDjrFrlsWjw1LHqwoy1s8/u7fSDf7HuzaM4L4zinqHQUFjltG7hpUrFw9mqp8h4dKtJQZOSj7qem8H78+llYKFOR5ZYUpvovYHy273g3+vx8fZva6YfD4PRz+AUAIHZiwAHri1GAAANDUlEQVR4nO2deV/aShfHkzoJCc4CyCIY1iCLVdSqdS3aalvbWu7z/l/NM1sWSFCukRvwM99/pCGE82NmzjKQU01TKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoEpPtl9qFTK7TyWX286V+Nm173pQDNzewLWgiZBiEEMNAJrSM4VU/bcPehmxhzzIJ1mfBBNkoc5C2eclxAYqq81UaoJO2gYkp6RawOLYN6UQ1CJ5SjPR3sSJ7vV42e+D0d0rt/U4XA9skvkSyl7Z1y8BxOxB5EmE7bXOWRNuWsxV30zZlWThlqRClbcnSyBjvXaErliIepG3I0rgSCo1M2oYsjYFwNXYxbUOWhWOJSYrTNmRpDEXUR/m0DVkWfTmEZtqGLI09/L4zGm1fhorttA1ZFn0gEhrwDgrEWHqyaLTctC1ZFtvCj5q5tA1ZFkOxCNG7rSpypkjXrtM2ZFls2WIE363AfSEQDtM2ZFnIEbTebUWR4wIxeLdhYgTFFuJm2oYsiy7iA7j+28Bz6B2ynRlk7KRtyLJwEGEDGMljekcnF483n46Pjz/dnF6cHO2mYdxbUAJYx/bAmT56dPqhXm80Kh6NRr1e/3BzcZSOkUnYAjqGemn64EWlXvkQQ6VRb1ykY+er6ZrYxDMh4qjSiJMnRdY/pWPp63AwgvpsCLyohwVV2PRkNMSofvn0KxVTX0cegEFp9mAgkIqr3JxSF/PQS8O65PQGIOdEj/oC659+PaRg1huyE5uhnfhrcG2jwwucSifaWKfl9q94/wq9WVo5TtuSZfHgeZr6SdqmvILf49tvd9+/1pqU1sbPu29nkz+Rk469bKa+Xq7m89n5j2ardnlZrW5IqtXLWqu5cT6ejnZHQcBPydZX8Pn+a7PmK5vhstZ8GofP/uQNYmVt8rOzv5dz1Hmj2doIafRX4ofGaXpG/yvO/7bC1Gpsss6IbN4F558Eac26hIzPHyeTyUfBZDI+u70/f/pKV2VYZu0uOP/GL53qa523/T67a9VCozgJngoVF+nZ9zachVzrt+BwsBTXx9vM5cmTWP0eOhqEjPq61fRRNuIUar8Cieu1NfPxY+TQvQwl1fOpw0EhvFbe5vzvP5FjY+ltamfTxx+9QrHy5T+y7g14qm00IwfPpMLm55kn/NymcfPfmJec89rG5Xn0qJil1Z+RZ774OfialBm3LTpQ0VriMn6SUnr+hsZ6lBkfm1TGfeTwpCUVxrxkd73KDD4Vo4e/i3hYu417jR8zKmuwFNlya40jh9nI8hoq/lWnjbVZiuNmrDPRfoohjNEuCCr+VY+KLCQ0o+H+rBWTz4TprUtUZHO0ehc5/Kc1JxYG+BnqaieoE7baYiKFdDOtaKQICJbiKn97wX1JNFJ8E+lMLZoGhPnizdMV3tO4r8UGvLPmvGxmCj8q1pdkXnI+N2NzlrEU+PWl1z96G/0rGzHYaovqmEiBG9HlOYM3iCsb9setuIA3XligpnnTdFUDRjUu4N1KgT8WcJAPK67wPi7Yn4tAWJsb6cN4heKKztI/bLBmgv2fnyJMNJ8PE5zdiw9+4raa+8N31UjOMm7xQF9tPhfoH3aPfl08HtfrfpG4ot8o8tphurI/F0uw9sOT/XBywThlPLLfeX2piN+XNMI/G2qs6CrktUM4X5tURVHfDDaA/0e1hH7gFf9rqPpjCtYvAI8Uod3sP3dyADdCe/hHX+qNWFkhfcerumtana4cbptyBc7kqA8nNx/4z55ihLLfDZ2u7D7NbS3sSM+q3IVWW99ji6XdXxenN8eV+jTHjycrK4/SCu2ijb+KGNj6MXnhVQ+7u0ec3VWv67Vv3KnwMRz/ECGitjFvv2Id+eztMn39Kb7Gr7Y2nguB68d58N2gWH8/3tP4UX43N0JcNp9eWn9rx1PwNX21dXk/f7NpAUaAMXor094Gb693o1pr3iWdnjl2Y6KxYrclin00Ku/pDbzLKiqcNNmPumrnb+NcVlHht+bP87Pfz59z0C8WF7vTqQNM01y3u4ayGWJBCMuwM1dkNrNFyfQ0rV9iTLU5c8STWjGzlQl6Srn0UPDj+AP63PO90dytzLJuRnKBIZsJGaAw55xNYFBAfE+sonhS6wMDBJoGphG6R5O+CXh+kuRsa0ntKVwQauxV3oo/aZPflGjNUchv6AOaBnQUfEQW6/jm/ytHXurjkzGW1IAjGxZI7Yzv1LKYwgEm/qg5Nh7h4AXboafiWZpC0RwCQ0v0vZrTT2gxhRkjGDXXNK4M6H9e4MUWKUtTyPt7YOxom9t4fpeIxRS6ZnBKjsozfZv7ULdfaMK4LIU9PkmRK6xgXRRi7y5ZTOFmWfdHjX5eBzbxokobseefZVkKD3jHMsg/X/7Q8xWOu5/JFFw5onMUupmMG1KowWAuAtzVLOy16+sQr+mbU3JLkTuQer14hUXX3UnaeUSYLgbOgiyYc29aPLRMxJp8AnHDZaAwlHn3oWkYkGz2fYVd4o1aH5KMZmIgvyrYw+KTK+kWfY+ydxdgfnubPipgQM8LFPa2B9vMigygBkFwmKxNVZY3EsI6f3sOU5QHfnNIzENcoDDI2rKW8E2wjTyFBeSNWhuhttbFYnKwtcCnbw5gAm1oYEsUJwUTtrVDE+MphV3DOKR/DhFG9GSS9MZ50aWF7IXDcX8qgjDfE6cwZ8gTxF+mcAd6y61DqLgtA4kGRXQes9FsWzocFZ1irqzbfEgLCLkjOlH0sMIriE36Rh2kw6u+UxyZ+pxMY0E6RA5VKNZ3+TEDQm47GcUrFD0HsSG7ZDJpdEZIl0kvSCeFKVP0PGKtinqWbopV7kJhdQGREcQiD/IUOlRvn8dpeakRQfNSrYVwvPFCxMu4hH9lfeiE/HKsQkf0XiCFYTCGVJhY0j3AAuumLXswjQi7Wt6fw9o1RvtcoU50uVQ9hRjb7K9rev2b6JJO1qGj43XxxPZA+K2+kEPf+YA/Km/GKSyZnhcWjetAIIVNS/7X1i1NWG2W2Hm+t6T27wmF0Eu3pcIhQXyN5hGRGwmbAOiJFGoDv1EpEWt6h/tGbpslVcQoFP4FcmN8hXSYeFJ0hfhYXmObOS46edlL6bzz4gQNUmyaUs/kt7sTCts2PtTCV9J4+9hkCrWhHXiV/LRCMF8h18XNEaPJFfalqxmSMnNdWwYXugOZs6bTGvimityArkO/0uQKHYChcCslqJejd+6+lrbl99QFzqIK+RjytRJEfD5OTBrCbHBZcsomqxBCLxuUF3t8wRaQ4Ts4rpDGHhn9qDPAKHLz9avJDr0AiK+TKdzmK+7AIjyFoQUG61M0JExOycRBR2K6Jttc4X5IodsxgqyxzRsgXL1Zm+b+nlyNdHkkUZghzOaSKR084JeBfGAD70jpxijEA9aH2l+YbUBXKQKjN5urGW6nTocgiULXZKO3b0gXOcBUG3UrkD8VKs26JKqQhp4hnb1+F8PelgkJdX/dRKlpKcNhD7ntOrpKpJCGQMR8qExDMgb9xEomD2il6TGU63BaodY2p/YCSiOLhkyQpPv9vm3QBNtgD3s8NNC3TKKQhcAsLSpkBHPZdN0Ska4Ip9YhW68zCpmbI5h+xiF6V2UaqZMoZAmJnPs68zbUuSVSyLLtoDB0bBq3u5jnX/Qa0H9fnSfl0wr547YZOovTp8legv6bXKG8Jvc19DP/NwrZqITiIbug6RYh8kyy6GdASwlNXMzy46HIAWZ8Kc94iEjoQgxJkk7GohkyD0J+jT+b09ixCl1fVwGFFO5Ao9BG0Fs52zQwWvjae+yVejSMEC1eIR1E9kHkgL8zuW8k2WMXarDRdkrY26cReSlz8LK2zcYpFM/RT9chOKQwa5HcvuFvWeQM2IcydGwZxBsLmczEKaRJLBuyfQN5kTGXrLgQGRutNc1gr01UxXvtPF+ZLDOLUSgqEN2Qm3T+Pgwhw5HhO02a1eS90EHLmLIM4AjbO/MUtnlB6Jp+RWHgRN2o80FSyu1k0ysndhiRqI5Zm924+vDa2wcgUwqpvGvkr5u+jYf+XkaX4EMmsXdNhFuNVcgGMcc+QJsv5t6QhHzwaxjCsEAxHXDwfz/oBhvVOIU7srKEBV4+eQppUYBDG3Y095LVAt/3wNYwN7QJBs58hWwQD7Q8daF7nVy37J38egref1KCkSVdYG9QFosLE4snmJvsGyeThfEO20qyeDDIsY0abA81nW9hycsV6amhryj2oAn8EXUMExOamiE57fZBsLVAXYsXCA1oDVlnLoPQk4lpJP7vbrJX1zb7L0qu80EdttPBwLKA3hGm9MQu1cx3T+4hAHttuYXlDVvPDR4zwfSp0B5Q/hrZ5uBKvpHjBt9i9Uv+LqMjruBkDm2bDN+oF3UvG60ysy/n9YlrU4VCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoViEf4PK7YoponpUTIAAAAASUVORK5CYII=" alt="img"/>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xxl-3 col-xl-4 col-md-6">
										<div class="card border">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between mb-3">
													<div class="d-flex align-items-center">
														<a href="contact-details.html"
															class="avatar avatar-md flex-shrink-0 me-2">
															<img src="./src/assets/assets/img/profiles/avatar-06.jpg" alt="img"/>
														</a>
														<div>
															<h6><a href="contact-details.html"
																	class="fw-medium">Vaughan Lewis</a></h6>
															<p class="text-default">Civil (Auto Cad)</p>
														</div>
													</div>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"
															aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
																data-bs-target="#offcanvas_edit"><i
																	class="ti ti-edit text-blue"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal"
																data-bs-target="#delete_contact"><i
																	class="ti ti-trash text-danger"></i> Delete</a>
															<a class="dropdown-item" href="contact-details.html"><i
																	class="ti ti-eye text-blue-light"></i> Preview</a>
														</div>
													</div>
												</div>
												<div class="d-block">
													<div class="d-flex flex-column mb-3">
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-mail text-dark me-1"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="aed8cfdbc9c6cfc09f9ceecbd6cfc3dec2cb80cdc1c3">useremail@gmail.com</a>
														</p>
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-phone text-dark me-1"></i>+1 546555455</p>
														<p class="text-default d-inline-flex align-items-center"><i
																class="ti ti-map-pin-pin text-dark me-1"></i>India</p>
													</div>
													<div class="d-flex align-items-center">
														<span
															class="badge badge-tag badge-success-light me-2">1-Followup</span>
														<span class="badge badge-tag badge-warning-light">Application Review</span>
													</div>
												</div>
												<div
													class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
													<div class="d-flex align-items-center grid-social-links">
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-mail fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-phone-check fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-message-circle-share fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-brand-skype fs-14"></i></a>
														<a href="#" class="avatar avatar-xs text-dark rounded-circle"><i
																class="ti ti-brand-facebook fs-14"></i></a>
													</div>
													<div class="d-flex align-items-center">
														<div class="set-star text-default me-2">
															<button type="button" class="btn btn-outline-info">Reminder</button>
														</div>
														<a href="javascript:void(0);" class="avatar avatar-md"
															data-bs-toggle="tooltip" data-bs-original-title="Mervin"
															data-bs-placement="top">
															<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yHhtVpYvuSckcqqmmbDCrbHzS-LIHybuMA&s" alt="img"/>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>			
                  <div class="col-xxl-3 col-xl-4 col-md-6">
										<div class="card border">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between mb-3">
													<div class="d-flex align-items-center">
														<a href="contact-details.html"
															class="avatar avatar-md flex-shrink-0 me-2">
															<img src="./src/assets/assets/img/profiles/avatar-20.jpg" alt="img"/>
														</a>
														<div>
															<h6><a href="contact-details.html" class="fw-medium">Darlee
																	Robertson</a></h6>
															<p class="text-default">3D MAX (Civil)</p>
														</div>
													</div>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"
															aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
																data-bs-target="#offcanvas_edit"><i
																	class="ti ti-edit text-blue"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal"
																data-bs-target="#delete_contact"><i
																	class="ti ti-trash text-danger"></i> Delete</a>
															<a class="dropdown-item" href="contact-details.html"><i
																	class="ti ti-eye text-blue-light"></i> Preview</a>
														</div>
													</div>
												</div>
												<div class="d-block">
													<div class="d-flex flex-column mb-3">
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-mail text-dark me-1"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="33415c51564147405c5d73564b525e435f561d505c5e">useremail@gmail.com</a>
														</p>
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-phone text-dark me-1"></i>1234567890</p>
														<p class="text-default d-inline-flex align-items-center"><i
																class="ti ti-map-pin-pin text-dark me-1"></i>Germany</p>
													</div>
													<div class="d-flex align-items-center">
														<span
															class="badge badge-tag badge-success-light me-2">1-Followpup</span>
														<span class="badge badge-tag badge-warning-light">Review</span>
													</div>
												</div>
												<div
													class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
													<div class="d-flex align-items-center grid-social-links">
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-mail fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-phone-check fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-message-circle-share fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-brand-skype fs-14"></i></a>
														<a href="#" class="avatar avatar-xs text-dark rounded-circle"><i
																class="ti ti-brand-facebook fs-14"></i></a>
													</div>
													<div class="d-flex align-items-center">
														<div class="set-star text-default me-2">
															<button type="button" class="btn btn-outline-info">Reminder</button>
														</div>
														<a href="javascript:void(0);" class="avatar avatar-md"
															data-bs-toggle="tooltip" data-bs-original-title="Mervin"
															data-bs-placement="top">
															<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yHhtVpYvuSckcqqmmbDCrbHzS-LIHybuMA&s" alt="img"/>
														</a>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div class="col-xxl-3 col-xl-4 col-md-6">
										<div class="card border">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between mb-3">
													<div class="d-flex align-items-center">
														<a href="contact-details.html"
															class="avatar avatar-md flex-shrink-0 me-2">
															<img src="./src/assets/assets/img/profiles/avatar-14.jpg" alt="img"/>
														</a>
														<div>
															<h6><a href="contact-details.html" class="fw-medium">Sharon
																	Roy</a></h6>
															<p class="text-default">Electrical</p>
														</div>
													</div>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"
															aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
																data-bs-target="#offcanvas_edit"><i
																	class="ti ti-edit text-blue"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal"
																data-bs-target="#delete_contact"><i
																	class="ti ti-trash text-danger"></i> Delete</a>
															<a class="dropdown-item" href="contact-details.html"><i
																	class="ti ti-eye text-blue-light"></i> Preview</a>
														</div>
													</div>
												</div>
												<div class="d-block">
													<div class="d-flex flex-column mb-3">
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-mail text-dark me-1"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="55263d34273a3b15302d34382539307b363a38">useremail@gmail.com</a>
														</p>
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-phone text-dark me-1"></i>+1 989757485</p>
														<p class="text-default d-inline-flex align-items-center"><i
																class="ti ti-map-pin-pin text-dark me-1"></i>+1
															989757485</p>
													</div>
													<div class="d-flex align-items-center">
														<span
															class="badge badge-tag badge-success-light me-2">1-Followpup</span>
														<span class="badge badge-tag badge-warning-light">Accepted</span>
													</div>
												</div>
												<div
													class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
													<div class="d-flex align-items-center grid-social-links">
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-mail fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-phone-check fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-message-circle-share fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-brand-skype fs-14"></i></a>
														<a href="#" class="avatar avatar-xs text-dark rounded-circle"><i
																class="ti ti-brand-facebook fs-14"></i></a>
													</div>
													<div class="d-flex align-items-center">
														<div class="set-star text-default me-2">
															<button type="button" class="btn btn-outline-info">Reminder</button>
														</div>
														<a href="javascript:void(0);" class="avatar avatar-md"
															data-bs-toggle="tooltip" data-bs-original-title="Mervin"
															data-bs-placement="top">
															<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yHhtVpYvuSckcqqmmbDCrbHzS-LIHybuMA&s" alt="img"/>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xxl-3 col-xl-4 col-md-6">
										<div class="card border">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between mb-3">
													<div class="d-flex align-items-center">
														<a href="contact-details.html"
															class="avatar avatar-md flex-shrink-0 me-2">
															<img src="./src/assets/assets/img/profiles/avatar-06.jpg" alt="img"/>
														</a>
														<div>
															<h6><a href="contact-details.html"
																	class="fw-medium">Vaughan Lewis</a></h6>
															<p class="text-default">Mechanical Catia</p>
														</div>
													</div>
													<div class="dropdown table-action">
														<a href="#" class="action-icon " data-bs-toggle="dropdown"
															aria-expanded="false">
															<i class="fa fa-ellipsis-v"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#" data-bs-toggle="offcanvas"
																data-bs-target="#offcanvas_edit"><i
																	class="ti ti-edit text-blue"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal"
																data-bs-target="#delete_contact"><i
																	class="ti ti-trash text-danger"></i> Delete</a>
															<a class="dropdown-item" href="contact-details.html"><i
																	class="ti ti-eye text-blue-light"></i> Preview</a>
														</div>
													</div>
												</div>
												<div class="d-block">
													<div class="d-flex flex-column mb-3">
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-mail text-dark me-1"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="aed8cfdbc9c6cfc09f9ceecbd6cfc3dec2cb80cdc1c3">useremail@gmail.com</a>
														</p>
														<p class="text-default d-inline-flex align-items-center mb-2"><i
																class="ti ti-phone text-dark me-1"></i>+1 546555455</p>
														<p class="text-default d-inline-flex align-items-center"><i
																class="ti ti-map-pin-pin text-dark me-1"></i>India</p>
													</div>
													<div class="d-flex align-items-center">
														<span
															class="badge badge-tag badge-success-light me-2">1-Followpup</span>
														<span class="badge badge-tag badge-warning-light">Review</span>
													</div>
												</div>
												<div
													class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
													<div class="d-flex align-items-center grid-social-links">
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-mail fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-phone-check fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-message-circle-share fs-14"></i></a>
														<a href="#"
															class="avatar avatar-xs text-dark rounded-circle me-1"><i
																class="ti ti-brand-skype fs-14"></i></a>
														<a href="#" class="avatar avatar-xs text-dark rounded-circle"><i
																class="ti ti-brand-facebook fs-14"></i></a>
													</div>
													<div class="d-flex align-items-center">
														<div class="set-star text-default me-2">
															<button type="button" class="btn btn-outline-info">Reminder</button>
														</div>
														<a href="javascript:void(0);" class="avatar avatar-md"
															data-bs-toggle="tooltip" data-bs-original-title="Mervin"
															data-bs-placement="top">
															<img src="./src/assets/assets/img/profiles/avatar-06.jpg" alt="img"/>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- /Contact Grid --> */}

								<div class="load-btn text-center">
									<a href="javascript:void(0);" class="btn btn-primary">Load More Contacts<i
											class="ti ti-loader"></i></a>
								</div>
							</div>
						</div>
						{/* <!-- /Card --> */}

					</div>
				</div>

        {/* <!-- Always responsive --> */}
				<div class="row">
					<div class="col-xl-12">
						<div class="card">
							<div class="card-header justify-content-between">
								<div class="card-title">
									Always responsive
								</div>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table text-nowrap">
										<thead>
											<tr>

												<th scope="col">Team Head</th>
												<th scope="col">Category</th>
												<th scope="col">Role</th>
												<th scope="col">Gmail</th>
												<th scope="col">Team</th>
												<th scope="col">Work Progress</th>
											</tr>
										</thead>
										<tbody>
											<tr>

												<td>
													<div class="d-flex align-items-center">
														<span class="avatar avatar-xs me-2 online avatar-rounded">
															<img src="./src/assets/assets/img/profiles/avatar-20.jpg" alt="img"/>
														</span>Mayor Kelly
													</div>
												</td>
												<td>Mechanical (Solid work)</td>
												<td><span class="badge bg-soft-primary">Followup Team</span></td>
												<td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fe939f87918c958c929287be9b869f938e929bd09d9193">Email Through</a></td>
												<td>
													<div class="avatar-list-stacked">
														<span class="avatar avatar-sm avatar-rounded">
															<img src="./src/assets/assets/img/profiles/avatar-06.jpg" alt="img"/>
														</span>
														<span class="avatar avatar-sm avatar-rounded">
															<img src="./src/assets/assets/img/profiles/avatar-03.jpg" alt="img"/>
														</span>
														<span class="avatar avatar-sm avatar-rounded">
															<img src="./src/assets/assets/img/profiles/avatar-02.jpg" alt="img"/>
														</span>
														<a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
															href="javascript:void(0);">
															+4
														</a>
													</div>
												</td>
												<td>
													<div class="progress progress-xs">
														<div class="progress-bar bg-secondary" role="progressbar"
															style={{width: "52%"}} aria-valuenow="52" aria-valuemin="0"
															aria-valuemax="100">
														</div>
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
				{/* <!-- /Always responsive --> */}

			</div>
		</div>
		{/* <!-- /Page Wrapper --> */}

    </div>
  )
}

export default LeadFollowup
