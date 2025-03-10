


// import { useState } from "react";
// import { Box, Button, Select, MenuItem, Typography, Grid2, Card, CardContent } from "@mui/material";

// // Updated Indian names for counselors
// const counselors = [
//   { id: 1, name: "Amit Sharma" },
//   { id: 2, name: "Priya Verma" },
//   { id: 3, name: "Rajesh Kumar" },
// ];

// // Updated Indian names for leads
// const initialLeads = [
//   { id: 1, name: "Rohan Mehta", status: "New", counselor: null },
//   { id: 2, name: "Neha Patil", status: "In Progress", counselor: 1 },
//   { id: 3, name: "Aarav Singh", status: "Converted", counselor: 2 },
//   { id: 4, name: "Sanya Iyer", status: "Dropped", counselor: 3 },
//   { id: 5, name: "Vikram Chauhan", status: "New", counselor: null },
//   { id: 6, name: "Meera Joshi", status: "In Progress", counselor: 2 },
//   { id: 7, name: "Kabir Nair", status: "Converted", counselor: 3 },
//   { id: 8, name: "Sneha Kapoor", status: "Dropped", counselor: 1 },
//   { id: 9, name: "Aisha Khan", status: "New", counselor: null },
//   { id: 10, name: "Karan Malhotra", status: "In Progress", counselor: 2 },
// ];

// function LeadAssignment() {
//   const [leads, setLeads] = useState(initialLeads);
//   const [selectedCounselor, setSelectedCounselor] = useState("");

//   const assignLead = (leadId) => {
//     setLeads(
//       leads.map((lead) =>
//         lead.id === leadId ? { ...lead, counselor: selectedCounselor } : lead
//       )
//     );
//   };

//   return (
//     <Box p={3} maxWidth={900} mx="auto" marginLeft={40}>
//       <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold" color="primary">
//         🎯 Lead Assignment & Follow-ups
//       </Typography>

//       <Grid2 container spacing={3}>
//         {counselors.map((counselor) => (
//           <Grid2 item xs={12} sm={6} md={4} key={counselor.id}>
//             <Card elevation={4} sx={{ borderRadius: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" color="secondary">
//                   {counselor.name}
//                 </Typography>
//                 <Box mt={2}>
//                   {leads
//                     .filter((lead) => lead.counselor === counselor.id)
//                     .map((lead) => (
//                       <Box
//                         key={lead.id}
//                         display="flex"
//                         justifyContent="space-between"
//                         alignItems="center"
//                         p={1}
//                         bgcolor="#e3f2fd"
//                         my={1}
//                         borderRadius={1}
//                       >
//                         <Typography>{lead.name}</Typography>
//                         <Typography variant="body2" color="textSecondary">
//                           {lead.status}
//                         </Typography>
//                       </Box>
//                     ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid2>
//         ))}
//       </Grid2>

//       {/* Unassigned Leads */}
//       <Typography variant="h5" mt={4} textAlign="center" fontWeight="bold" color="primary">
//         Unassigned Leads
//       </Typography>
//       <Box mt={2} p={2} bgcolor="#f3f3f3" borderRadius={3}>
//         {leads.filter((lead) => !lead.counselor).map((lead) => (
//           <Box
//             key={lead.id}
//             display="flex"
//             alignItems="center"
//             justifyContent="space-between"
//             my={1}
//             p={2}
//             bgcolor="#ffffff"
//             borderRadius={2}
//             boxShadow={1}
//           >
//             <Typography fontWeight="bold">{lead.name}</Typography>
//             <Select
//               value={selectedCounselor}
//               onChange={(e) => setSelectedCounselor(e.target.value)}
//               size="small"
//             >
//               <MenuItem value="">Select Counselor</MenuItem>
//               {counselors.map((counselor) => (
//                 <MenuItem key={counselor.id} value={counselor.id}>
//                   {counselor.name}
//                 </MenuItem>
//               ))}
//             </Select>
//             <Button variant="contained" color="primary" onClick={() => assignLead(lead.id)}>
//               Assign
//             </Button>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// export default LeadAssignment;



import React from 'react'

const LeadAssignment = () => {
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
								<div class="col-4">
									<h4 class="page-title">Lead Assignment & Follow-ups<span class="count-title">420</span></h4>
								</div>
								<div class="col-8 text-end">
									<div class="head-icons">
										<a href="tasks.html" data-bs-toggle="tooltip" data-bs-placement="top"
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

						<div class="card ">
							<div class="card-header">
								{/* <!-- Search --> */}
								<div class="row align-items-center">
									<div class="col-sm-4">
										<div class="icon-form mb-sm-0">
											<span class="form-icon"><i class="ti ti-search"></i></span>
											<input type="text" class="form-control" placeholder="Search Task"/>
										</div>
									</div>
									<div class="col-sm-8">
										<div
											class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end mb-3 mb-sm-0">
											<a href="javascript:void(0);" class="btn btn-primary"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add"><i
													class="ti ti-square-rounded-plus me-2"></i>Add Leads Assignment</a>
										</div>
									</div>
								</div>
								{/* <!-- /Search --> */}
							</div>
							<div class="card-body">
								{/* <!-- Filter --> */}
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-4">
									<div class="sort-dropdown drop-down task-drops">
										<a href="javascript:void(0);" class="dropdown-toggle"
											data-bs-toggle="dropdown">All Leads Assignment & Follow-ups</a>
										<div class="dropdown-menu  dropdown-menu-start">
											<ul>
												<li>
													<a href="tasks.html">
														<i class="ti ti-dots-vertical"></i>All Tasks
													</a>
												</li>
												<li>
													<a href="tasks-important.html">
														<i class="ti ti-dots-vertical"></i>Important
													</a>
												</li>
												<li>
													<a href="tasks-completed.html">
														<i class="ti ti-dots-vertical"></i>Completed
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="d-flex align-items-center flex-wrap row-gap-2">
									
										<div class="dropdown me-2">
											<a href="javascript:void(0);" class="dropdown-toggle"
												data-bs-toggle="dropdown"><i
													class="ti ti-sort-ascending-2 me-2"></i>Sort </a>
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
										<div class="icon-form me-2">
											<span class="form-icon"><i class="ti ti-calendar"></i></span>
											<input type="text" class="form-control bookingrange" placeholder=""/>
										</div>
										<div class="form-sorts dropdown">
											<a href="javascript:void(0);" data-bs-toggle="dropdown"
												data-bs-auto-close="outside"><i
													class="ti ti-filter-share"></i>Filter</a>
											<div class="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end p-3">
												<div class="filter-set-view">
													<div class="filter-set-head">
														<h4><i class="ti ti-filter-share"></i>Filter</h4>
													</div>
													<div class="accordion" id="accordionExample">
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" data-bs-toggle="collapse"
																	data-bs-target="#collapseTwo" aria-expanded="true"
																	aria-controls="collapseTwo">Task Name</a>
															</div>
															<div class="filter-set-contents accordion-collapse collapse show"
																id="collapseTwo" data-bs-parent="#accordionExample">
																<div class="filter-content-list">
																	<div class="mb-2 icon-form">
																		<span class="form-icon"><i
																				class="ti ti-search"></i></span>
																		<input type="text" class="form-control"
																			placeholder="Search Task"/>
																	</div>
																	<ul>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox" checked/>
																					<span class="checkmarks"></span>
																					Add a form to Update Task
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Add a form to Update Task
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Update orginal content
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Use only component colours
																				</label>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" class="collapsed" data-bs-toggle="collapse"
																	data-bs-target="#owner" aria-expanded="false"
																	aria-controls="owner">Task Type</a>
															</div>
															<div class="filter-set-contents accordion-collapse collapse"
																id="owner" data-bs-parent="#accordionExample">
																<div class="filter-content-list">
																	<div class="mb-2 icon-form">
																		<span class="form-icon"><i
																				class="ti ti-search"></i></span>
																		<input type="text" class="form-control"
																			placeholder="Search Client"/>
																	</div>
																	<ul>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox" checked/>
																					<span class="checkmarks"></span>
																					Meeting
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Calls
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Task
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Email
																				</label>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" class="collapsed" data-bs-toggle="collapse"
																	data-bs-target="#collapseone" aria-expanded="false"
																	aria-controls="collapseone">Tags</a>
															</div>
															<div class="filter-set-contents accordion-collapse collapse"
																id="collapseone" data-bs-parent="#accordionExample">
																<div class="filter-content-list">
																	<ul>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox" checked/>
																					<span class="checkmarks"></span>
																					Collab
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Rated
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Promotion
																				</label>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" class="collapsed" data-bs-toggle="collapse"
																	data-bs-target="#collapseThree"
																	aria-expanded="false"
																	aria-controls="collapseThree">Created By</a>
															</div>
															<div class="filter-set-contents accordion-collapse collapse"
																id="collapseThree" data-bs-parent="#accordionExample">
																<div class="filter-content-list">
																	<ul>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox" checked/>
																					<span class="checkmarks"></span>
																					Hendry Milner
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Monty Beer
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					Bradtke
																				</label>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div class="filter-set-content">
															<div class="filter-set-content-head">
																<a href="#" class="collapsed" data-bs-toggle="collapse"
																	data-bs-target="#collapsethree"
																	aria-expanded="false"
																	aria-controls="collapsethree">Created Date</a>
															</div>
															<div class="filter-set-contents accordion-collapse collapse"
																id="collapsethree" data-bs-parent="#accordionExample">
																<div class="filter-content-list">
																	<ul>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox" checked/>
																					<span class="checkmarks"></span>
																					23 Oct 2023
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					29 Sep 2023
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					24 Oct 2023
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																					25 Oct 2023
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="filter-checks">
																				<label class="checkboxs">
																					<input type="checkbox"/>
																					<span class="checkmarks"></span>
																				</label>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div class="filter-reset-btns">
														<div class="row">
															<div class="col-6">
																<a href="#" class="btn btn-light">Reset</a>
															</div>
															<div class="col-6">
																<a href="tasks.html" class="btn btn-primary">Filter</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- /Filter --> */}

								{/* <!-- Recent Task List --> */}
								<div class="task-wrapper">
									<a href="#" class="task-accordion" data-bs-toggle="collapse"
										data-bs-target="#recent">
										<h4>Karthik<span>40</span></h4>
									</a>
									<div class="tasks-activity tasks collapse show" id="recent">
										<ul>
											<li class="task-wrap pending">
												<div class="task-info">
													<span class="task-icon"><i class="ti ti-grip-vertical"></i></span>
													<div class="task-checkbox">
														<label class="checkboxs"><input type="checkbox"/><span
																class="checkmarks"></span></label>
													</div>
													<div class="set-star rating-select">
														<i class="fa fa-star"></i>
													</div>
													<p>Vijay kumar Ready</p>
													<span class="badge badge-pill badge-status bg-green"><i
															class="ti ti-phone"></i>Calls</span>

												</div>
												<div class="task-actions">
													<ul>
														<li class="task-time">
															<span
																class="badge badge-tag badge-purple-light">InProgress</span>
														</li>
														<li class="task-date">
															<i class="ti ti-calendar-exclamation"></i>25 Oct 2024
														</li>
														<li class="task-owner">
															
															<div class="dropdown table-action">
																<a href="#" class="action-icon "
																	data-bs-toggle="dropdown" aria-expanded="false">
																	<i class="fa fa-ellipsis-v"></i>
																</a>
																<div class="dropdown-menu dropdown-menu-right">
																	<a class="dropdown-item" data-bs-toggle="offcanvas"
																		href="#" data-bs-target="#offcanvas_edit"><i
																			class="ti ti-edit text-blue"></i> Edit</a>
																	<a class="dropdown-item" href="#"
																		data-bs-toggle="modal"
																		data-bs-target="#delete_activity"><i
																			class="ti ti-trash text-danger"></i>
																		Delete</a>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</li>
											<li class="task-wrap pending">
												<div class="task-info">
													<span class="task-icon"><i class="ti ti-grip-vertical"></i></span>
													<div class="task-checkbox">
														<label class="checkboxs"><input type="checkbox"/><span
																class="checkmarks"></span></label>
													</div>
													<div class="set-star rating-select">
														<i class="fa fa-star"></i>
													</div>
													<p>Kavana Kumari</p>
													<span class="badge activity-badge bg-warning"><i
															class="ti ti-mail"></i> Email</span>
												</div>
												<div class="task-actions">
													<ul>
														<li class="task-time">
															<span
																class="badge badge-tag badge-success-light">Complited</span>
														</li>
														<li class="task-date">
															<i class="ti ti-calendar-exclamation"></i>25 Oct 2024
														</li>
														<li class="task-owner">
															
															<div class="dropdown table-action">
																<a href="#" class="action-icon "
																	data-bs-toggle="dropdown" aria-expanded="false">
																	<i class="fa fa-ellipsis-v"></i>
																</a>
																<div class="dropdown-menu dropdown-menu-right">
																	<a class="dropdown-item" data-bs-toggle="offcanvas"
																		href="#" data-bs-target="#offcanvas_edit"><i
																			class="ti ti-edit text-blue"></i> Edit</a>
																	<a class="dropdown-item" href="#"
																		data-bs-toggle="modal"
																		data-bs-target="#delete_activity"><i
																			class="ti ti-trash text-danger"></i>
																		Delete</a>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</li>
											<li class="task-wrap  warning">
												<div class="task-info">
													<span class="task-icon"><i class="ti ti-grip-vertical"></i></span>
													<div class="task-checkbox">
														<label class="checkboxs"><input type="checkbox"/><span
																class="checkmarks"></span></label>
													</div>
													<div class="set-star rating-select">
														<i class="fa fa-star"></i>
													</div>
													<p>Rahul </p>
													<span class="badge badge-pill badge-status bg-green"><i
															class="ti ti-phone"></i>Calls</span>
												</div>
												<div class="task-actions">
													<ul>
														<li class="task-time">
															<span
																class="badge badge-tag badge-purple-light">Review</span>
														</li>
														<li class="task-date">
															<i class="ti ti-calendar-exclamation"></i>2 Act 2024
														</li>
														<li class="task-owner">
															
															<div class="dropdown table-action">
																<a href="#" class="action-icon "
																	data-bs-toggle="dropdown" aria-expanded="false">
																	<i class="fa fa-ellipsis-v"></i>
																</a>
																<div class="dropdown-menu dropdown-menu-right">
																	<a class="dropdown-item" data-bs-toggle="offcanvas"
																		href="#" data-bs-target="#offcanvas_edit"><i
																			class="ti ti-edit text-blue"></i> Edit</a>
																	<a class="dropdown-item" href="#"
																		data-bs-toggle="modal"
																		data-bs-target="#delete_activity"><i
																			class="ti ti-trash text-danger"></i>
																		Delete</a>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</li>
											<li class="task-wrap warning">
												<div class="task-info">
													<span class="task-icon"><i class="ti ti-grip-vertical"></i></span>
													<div class="task-checkbox">
														<label class="checkboxs"><input type="checkbox"/><span
																class="checkmarks"></span></label>
													</div>
													<div class="set-star rating-select">
														<i class="fa fa-star"></i>
													</div>
													<p>Karthik Kumar Readdy</p>
													<span class="badge activity-badge bg-blue"><i
															class="ti ti-subtask"></i> Task</span>
												</div>
												<div class="task-actions">
													<ul>
														<li class="task-time">
															<span
																class="badge badge-tag badge-success-light">Complited</span>

														</li>
														<li class="task-date">
															<i class="ti ti-calendar-exclamation"></i>25 Oct 2023
														</li>
														<li class="task-owner">
															
															<div class="dropdown table-action">
																<a href="#" class="action-icon "
																	data-bs-toggle="dropdown" aria-expanded="false">
																	<i class="fa fa-ellipsis-v"></i>
																</a>
																<div class="dropdown-menu dropdown-menu-right">
																	<a class="dropdown-item" data-bs-toggle="offcanvas"
																		href="#" data-bs-target="#offcanvas_edit"><i
																			class="ti ti-edit text-blue"></i> Edit</a>
																	<a class="dropdown-item" href="#"
																		data-bs-toggle="modal"
																		data-bs-target="#delete_activity"><i
																			class="ti ti-trash text-danger"></i>
																		Delete</a>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- /Recent Task List --> */}

								{/* <!-- Task List --> */}
								<div class="task-wrapper">
									<a href="#" class="task-accordion" data-bs-toggle="collapse"
										data-bs-target="#yesterday">
										<h4>Raju<span>1</span></h4>
									</a>
									<div class="tasks-activity tasks collapse show" id="yesterday">
										<ul>
											<li class="task-wrap  warning">
												<div class="task-info">
													<span class="task-icon"><i class="ti ti-grip-vertical"></i></span>
													<div class="task-checkbox">
														<label class="checkboxs"><input type="checkbox"/><span
																class="checkmarks"></span></label>
													</div>
													<div class="set-star rating-select">
														<i class="fa fa-star"></i>
													</div>
													<p>Add images to the cards section</p>
													<span class="badge badge-pill badge-status bg-green"><i
															class="ti ti-phone"></i>Calls</span>
												</div>
												<div class="task-actions">
													<ul>
														<li class="task-time">
															<span
																class="badge badge-tag badge-warning-light">Under Review</span>
														</li>
														<li class="task-date">
															<i class="ti ti-calendar-exclamation"></i>24 Oct 2023
														</li>
														<li class="task-owner">
															
															<div class="dropdown table-action">
																<a href="#" class="action-icon "
																	data-bs-toggle="dropdown" aria-expanded="false">
																	<i class="fa fa-ellipsis-v"></i>
																</a>
																<div class="dropdown-menu dropdown-menu-right">
																	<a class="dropdown-item" data-bs-toggle="offcanvas"
																		href="#" data-bs-target="#offcanvas_edit"><i
																			class="ti ti-edit text-blue"></i> Edit</a>
																	<a class="dropdown-item" href="#"
																		data-bs-toggle="modal"
																		data-bs-target="#delete_activity"><i
																			class="ti ti-trash text-danger"></i>
																		Delete</a>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- /Task List --> */}


								{/* <!-- Task List --> */}
								<div class="task-wrapper">
									<a href="#" class="task-accordion" data-bs-toggle="collapse"
										data-bs-target="#date-02">
										<h4>Sathy Bandhi<span>24</span></h4>
									</a>
									<div class="tasks-activity tasks collapse show" id="date-02">
										<ul>
											<li class="task-wrap  success">
												<div class="task-info">
													<span class="task-icon"><i class="ti ti-grip-vertical"></i></span>
													<div class="task-checkbox">
														<label class="checkboxs"><input type="checkbox"/><span
																class="checkmarks"></span></label>
													</div>
													<div class="set-star rating-select">
														<i class="fa fa-star"></i>
													</div>
													<p>Nayana Reddy</p>
													<span class="badge badge-pill badge-status bg-purple"><i
															class="ti ti-user-share"></i>Meeting</span>
												</div>
												<div class="task-actions">
													<ul>
														<li class="task-time">
															<span
																class="badge badge-tag badge-danger-light">Rejected</span>
														</li>
														<li class="task-date">
															<i class="ti ti-calendar-exclamation"></i>22 Oct 2023
														</li>
														<li class="task-owner">
															
															<div class="dropdown table-action">
																<a href="#" class="action-icon "
																	data-bs-toggle="dropdown" aria-expanded="false">
																	<i class="fa fa-ellipsis-v"></i>
																</a>
																<div class="dropdown-menu dropdown-menu-right">
																	<a class="dropdown-item" data-bs-toggle="offcanvas"
																		href="#" data-bs-target="#offcanvas_edit"><i
																			class="ti ti-edit text-blue"></i> Edit</a>
																	<a class="dropdown-item" href="#"
																		data-bs-toggle="modal"
																		data-bs-target="#delete_activity"><i
																			class="ti ti-trash text-danger"></i>
																		Delete</a>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- /Task List --> */}

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

export default LeadAssignment
