// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Paper,
//   Grid2,
//   Chip,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Snackbar,
//   Alert,
//   Card,
//   CardContent,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Container,
//   Tabs,
//   Tab,
//   AppBar,
//   Toolbar,
//   Avatar,
//   Badge
// } from '@mui/material';
// import {
//   Email as EmailIcon,
//   Sms as SmsIcon,
//   WhatsApp as WhatsAppIcon,
//   Save as SaveIcon,
//   Cancel as CancelIcon,
//   Notifications as NotificationsIcon
// } from '@mui/icons-material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// // Create a theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// });

// const LeadFollowup = () => {
//   // Hardcoded data
//   const leads = [
//     { 
//       id: 1, 
//       name: "Sarah Johnson", 
//       email: "sarah.j@example.com", 
//       phone: "+1234567890",
//       location: "New York",
//       interest: "Computer Science",
//       assigned_to: "David Miller",
//       status: "Initial Contact",
//       last_contact: "2025-02-25",
//       next_followup: "2025-03-03",
//       preferred_contact: "Email",
//       notes: "Interested in summer programs, needs financial aid info"
//     },
//     { 
//       id: 2, 
//       name: "Michael Chang", 
//       email: "m.chang@example.com", 
//       phone: "+1987654321",
//       location: "California",
//       interest: "Business Studies",
//       assigned_to: "Jessica Taylor",
//       status: "Application Review",
//       last_contact: "2025-02-28",
//       next_followup: "2025-03-02",
//       preferred_contact: "WhatsApp",
//       notes: "Has questions about scholarship deadlines"
//     },
//     { 
//       id: 3, 
//       name: "Aisha Patel", 
//       email: "aisha.p@example.com", 
//       phone: "+1567891234",
//       location: "Texas",
//       interest: "Medicine",
//       assigned_to: "David Miller",
//       status: "Pending Response",
//       last_contact: "2025-02-20",
//       next_followup: "2025-03-01",
//       preferred_contact: "SMS",
//       notes: "Needs to submit transcripts"
//     },
//     { 
//       id: 4, 
//       name: "Ashok", 
//       email: "ashok.p@example.com", 
//       phone: "+1567891234",
//       location: "Texas",
//       interest: "Medicine",
//       assigned_to: "David Miller",
//       status: "Pending Response",
//       last_contact: "2025-02-20",
//       next_followup: "2025-03-01",
//       preferred_contact: "SMS",
//       notes: "Needs to submit transcripts"
//     },
//     { 
//       id: 5, 
//       name: "Ambika", 
//       email: "ambika@example.com", 
//       phone: "+1567891234",
//       location: "Texas",
//       interest: "Medicine",
//       assigned_to: "David Miller",
//       status: "Pending Response",
//       last_contact: "2025-02-20",
//       next_followup: "2025-03-01",
//       preferred_contact: "SMS",
//       notes: "Needs to submit transcripts"
//     }
//   ];

//   const counselors = [
//     { id: 1, name: "David Miller", location: "New York", specialties: ["Computer Science", "Medicine"] },
//     { id: 2, name: "Jessica Taylor", location: "California", specialties: ["Business Studies", "Arts"] },
//     { id: 3, name: "Robert Chen", location: "Texas", specialties: ["Engineering", "Sciences"] }
//   ];

//   const [selectedLead, setSelectedLead] = useState(null);
//   const [reminderSent, setReminderSent] = useState({});
//   const [filter, setFilter] = useState("all");
//   const [statusUpdate, setStatusUpdate] = useState("");
//   const [tabValue, setTabValue] = useState(0);
//   const [leadNotes, setLeadNotes] = useState("");
//   const [nextFollowup, setNextFollowup] = useState("");

//   // Filter leads based on due date
//   const filteredLeads = leads.filter(lead => {
//     const today = new Date("2025-03-01").toISOString().split('T')[0];
    
//     if (filter === "overdue") {
//       return lead.next_followup < today;
//     } else if (filter === "today") {
//       return lead.next_followup === today;
//     } else if (filter === "upcoming") {
//       return lead.next_followup > today;
//     }
//     return true;
//   });

//   // Send reminder function
//   const sendReminder = (lead) => {
//     const method = lead.preferred_contact;
//     setReminderSent({...reminderSent, [lead.id]: method});
//     setTimeout(() => {
//       setReminderSent({...reminderSent, [lead.id]: false});
//     }, 3000);
//   };

//   // Update lead status
//   const updateLeadStatus = (leadId, newStatus) => {
//     // In a real app, this would update the database
//     console.log(`Updated lead ${leadId} status to ${newStatus}`);
//     setStatusUpdate(`Updated status for ${leads.find(l => l.id === leadId).name} to ${newStatus}`);
//     setTimeout(() => setStatusUpdate(""), 3000);
//   };

//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Set lead details when selected
//   React.useEffect(() => {
//     if (selectedLead) {
//       setLeadNotes(selectedLead.notes);
//       setNextFollowup(selectedLead.next_followup);
//     }
//   }, [selectedLead]);

//   // Get chip color based on status
//   const getStatusColor = (status) => {
//     switch(status) {
//       case "Initial Contact": return { bg: '#FFF9C4', color: '#F57F17' };
//       case "Application Review": return { bg: '#BBDEFB', color: '#1565C0' };
//       case "Pending Response": return { bg: '#E1BEE7', color: '#6A1B9A' };
//       case "Documents Required": return { bg: '#FFCCBC', color: '#D84315' };
//       case "Ready for Decision": return { bg: '#C8E6C9', color: '#2E7D32' };
//       case "Accepted": return { bg: '#B2DFDB', color: '#00695C' };
//       case "Closed": return { bg: '#CFD8DC', color: '#455A64' };
//       default: return { bg: '#EEEEEE', color: '#616161' };
//     }
//   };

//   // Get notification count for badge
//   const getNotificationCount = () => {
//     const today = new Date("2025-03-01").toISOString().split('T')[0];
//     return leads.filter(lead => lead.next_followup <= today).length;
//   };

//   return (
//     <div style={{marginLeft:'300px'}}>
//     <ThemeProvider theme={theme}>
//       <Box sx={{ flexGrow: 1 }}>
//         {/* App Bar */}
//         <AppBar position="static" color="primary">
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Counselor Follow-up System
//             </Typography>
//             <IconButton color="inherit">
//               <Badge badgeContent={getNotificationCount()} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <Avatar sx={{ ml: 2, bgcolor: '#1565C0' }}>
//               {counselors[0].name.charAt(0)}
//             </Avatar>
//           </Toolbar>
//         </AppBar>

//         <Container maxWidth="xl" sx={{ mt: 4 }}>
//           {/* Notification area */}
//           <Snackbar 
//             open={!!statusUpdate} 
//             autoHideDuration={3000} 
//             onClose={() => setStatusUpdate("")}
//             anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//           >
//             <Alert severity="success" sx={{ width: '100%' }}>
//               {statusUpdate}
//             </Alert>
//           </Snackbar>
          
//           {/* Filters */}
//           <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={filter === "all" ? 0 : filter === "today" ? 1 : filter === "overdue" ? 2 : 3} onChange={(e, val) => {
//               setFilter(val === 0 ? "all" : val === 1 ? "today" : val === 2 ? "overdue" : "upcoming");
//             }}>
//               <Tab label="All Leads" />
//               <Tab label="Due Today" />
//               <Tab label="Overdue" />
//               <Tab label="Upcoming" />
//             </Tabs>
//           </Box>
          
//           {/* Main content */}
//           <Grid2 container spacing={3}>
//             {/* Lead list */}
//             <Grid2 item xs={12} md={4}>
//               <Paper elevation={2} sx={{ p: 2, height: '70vh', overflow: 'auto' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Leads Requiring Follow-up
//                 </Typography>
//                 <List>
//                   {filteredLeads.map(lead => {
//                     const statusStyle = getStatusColor(lead.status);
//                     const isOverdue = new Date(lead.next_followup) < new Date("2025-03-01");
                    
//                     return (
//                       <Card 
//                         key={lead.id} 
//                         sx={{ 
//                           mb: 2, 
//                           cursor: 'pointer',
//                           border: selectedLead?.id === lead.id ? `1px solid ${theme.palette.primary.main}` : 'none',
//                           boxShadow: selectedLead?.id === lead.id ? 3 : 1
//                         }}
//                         onClick={() => setSelectedLead(lead)}
//                       >
//                         <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
//                           <Box display="flex" justifyContent="space-between" alignItems="flex-start">
//                             <Box>
//                               <Typography variant="subtitle1" component="div" fontWeight="medium">
//                                 {lead.name}
//                               </Typography>
//                               <Typography variant="body2" color="text.secondary">
//                                 {lead.interest} - {lead.location}
//                               </Typography>
//                             </Box>
//                             <Box textAlign="right">
//                               <Typography 
//                                 variant="body2" 
//                                 fontWeight="medium"
//                                 color={isOverdue ? 'error.main' : 'primary.main'}
//                               >
//                                 {lead.next_followup}
//                               </Typography>
//                               <Typography variant="body2" color="text.secondary">
//                                 {lead.assigned_to}
//                               </Typography>
//                             </Box>
//                           </Box>
//                           <Box mt={1.5} display="flex" justifyContent="space-between" alignItems="center">
//                             <Chip 
//                               label={lead.status} 
//                               size="small"
//                               sx={{ 
//                                 backgroundColor: statusStyle.bg,
//                                 color: statusStyle.color,
//                                 fontSize: '0.75rem',
//                                 height: 24
//                               }}
//                             />
//                             <Button
//                               size="small"
//                               variant="outlined"
//                               color="primary"
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 sendReminder(lead);
//                               }}
//                               sx={{ fontSize: '0.75rem', py: 0.5 }}
//                             >
//                               {reminderSent[lead.id] ? `Sent via ${reminderSent[lead.id]}` : "Send Reminder"}
//                             </Button>
//                           </Box>
//                         </CardContent>
//                       </Card>
//                     );
//                   })}
//                 </List>
//               </Paper>
//             </Grid2>
            
//             {/* Lead details */}
//             <Grid2 item xs={12} md={8}>
//               <Paper elevation={2} sx={{ p: 3, height: '70vh', overflow: 'auto' }}>
//                 {selectedLead ? (
//                   <Box>
//                     <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//                       <Typography variant="h5" fontWeight="bold">
//                         {selectedLead.name}
//                       </Typography>
//                       <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
//                         <InputLabel>Status</InputLabel>
//                         <Select
//                           value={selectedLead.status}
//                           onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value)}
//                           label="Status"
//                         >
//                           <MenuItem value="Initial Contact">Initial Contact</MenuItem>
//                           <MenuItem value="Application Review">Application Review</MenuItem>
//                           <MenuItem value="Pending Response">Pending Response</MenuItem>
//                           <MenuItem value="Documents Required">Documents Required</MenuItem>
//                           <MenuItem value="Ready for Decision">Ready for Decision</MenuItem>
//                           <MenuItem value="Accepted">Accepted</MenuItem>
//                           <MenuItem value="Closed">Closed</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Box>
                    
//                     <Grid2 container spacing={3} mb={3}>
//                       <Grid2 item xs={12} md={6}>
//                         <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                           Contact Information
//                         </Typography>
//                         <Typography variant="body1" paragraph>
//                           <strong>Email:</strong> {selectedLead.email}
//                         </Typography>
//                         <Typography variant="body1" paragraph>
//                           <strong>Phone:</strong> {selectedLead.phone}
//                         </Typography>
//                         <Typography variant="body1">
//                           <strong>Preferred Contact:</strong> {selectedLead.preferred_contact}
//                         </Typography>
//                       </Grid2>
//                       <Grid2 item xs={12} md={6}>
//                         <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                           Application Details
//                         </Typography>
//                         <Typography variant="body1" paragraph>
//                           <strong>Interest:</strong> {selectedLead.interest}
//                         </Typography>
//                         <Typography variant="body1" paragraph>
//                           <strong>Location:</strong> {selectedLead.location}
//                         </Typography>
//                         <Typography variant="body1">
//                           <strong>Status:</strong> {selectedLead.status}
//                         </Typography>
//                       </Grid2>
//                     </Grid2>
                    
//                     <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                       Follow-up Schedule
//                     </Typography>
//                     <Grid2 container spacing={3} mb={3}>
//                       <Grid2 item xs={12} md={6}>
//                         <TextField
//                           label="Last Contact"
//                           type="date"
//                           value={selectedLead.last_contact}
//                           InputProps={{
//                             readOnly: true,
//                           }}
//                           fullWidth
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                         />
//                       </Grid2>
//                       <Grid2 item xs={12} md={6}>
//                         <TextField
//                           label="Next Follow-up"
//                           type="date"
//                           value={nextFollowup}
//                           onChange={(e) => setNextFollowup(e.target.value)}
//                           fullWidth
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                         />
//                       </Grid2>
//                     </Grid2>
                    
//                     <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                       Notes
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       multiline
//                       rows={4}
//                       value={leadNotes}
//                       onChange={(e) => setLeadNotes(e.target.value)}
//                       variant="outlined"
//                       sx={{ mb: 3 }}
//                     />
                    
//                     <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                       Communication Tools
//                     </Typography>
//                     <Box display="flex" gap={2} mb={4}>
//                       <Button 
//                         variant="outlined" 
//                         startIcon={<EmailIcon />}
//                         color="primary"
//                       >
//                         Email
//                       </Button>
//                       <Button 
//                         variant="outlined" 
//                         startIcon={<SmsIcon />}
//                         color="secondary"
//                       >
//                         SMS
//                       </Button>
//                       <Button 
//                         variant="outlined" 
//                         startIcon={<WhatsAppIcon />}
//                         sx={{ color: '#25D366', borderColor: '#25D366' }}
//                       >
//                         WhatsApp
//                       </Button>
//                     </Box>
                    
//                     <Box display="flex" justifyContent="flex-end" gap={2}>
//                       <Button variant="outlined" startIcon={<CancelIcon />}>
//                         Cancel
//                       </Button>
//                       <Button variant="contained" startIcon={<SaveIcon />} color="primary">
//                         Save Changes
//                       </Button>
//                     </Box>
//                   </Box>
//                 ) : (
//                   <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//                     <Typography color="text.secondary">
//                       Select a lead from the list to view details
//                     </Typography>
//                   </Box>
//                 )}
//               </Paper>
//             </Grid2>
//           </Grid2>
          
//           {/* Activity Log Section */}
//           <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
//             <Typography variant="h6" fontWeight="medium" gutterBottom>
//               Counselor Activity Log
//             </Typography>
//             <List>
//               <ListItem divider>
//                 <ListItemText
//                   primary={
//                     <Box display="flex" justifyContent="space-between">
//                       <Typography variant="body1">
//                         <strong>David Miller</strong>
//                         <span style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: 8 }}>updated status for</span>
//                         <strong style={{ marginLeft: 8 }}>Aisha Patel</strong>
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Today, 9:45 AM
//                       </Typography>
//                     </Box>
//                   }
//                   secondary="Changed status from 'Initial Contact' to 'Pending Response'"
//                 />
//               </ListItem>
              
//               <ListItem divider>
//                 <ListItemText
//                   primary={
//                     <Box display="flex" justifyContent="space-between">
//                       <Typography variant="body1">
//                         <strong>Jessica Taylor</strong>
//                         <span style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: 8 }}>sent an email to</span>
//                         <strong style={{ marginLeft: 8 }}>Michael Chang</strong>
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Today, 8:30 AM
//                       </Typography>
//                     </Box>
//                   }
//                   secondary="Regarding scholarship deadline information and next steps"
//                 />
//               </ListItem>
              
//               <ListItem divider>
//                 <ListItemText
//                   primary={
//                     <Box display="flex" justifyContent="space-between">
//                       <Typography variant="body1">
//                         <strong>David Miller</strong>
//                         <span style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: 8 }}>scheduled a follow-up with</span>
//                         <strong style={{ marginLeft: 8 }}>Sarah Johnson</strong>
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Yesterday, 4:15 PM
//                       </Typography>
//                     </Box>
//                   }
//                   secondary="Next follow-up on 2025-03-03 to discuss financial aid options"
//                 />
//               </ListItem>
//             </List>
//           </Paper>
//         </Container>
//       </Box>
//     </ThemeProvider>
//     </div>
//   );
// };

// export default LeadFollowup;



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
															<img src="data:image/png;base64,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" alt="img"/>
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
