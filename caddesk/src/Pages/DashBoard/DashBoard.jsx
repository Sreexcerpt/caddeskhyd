// import React from 'react'
// import BarChart from '../../Components/Chat/BarChart'
// import GoalBarChart from '../../Components/Chat/GoalBarChart'
// import GoalBarChartGreen from '../../Components/Chat/GoalBarChart'
// import StockChart from '../../Components/Chat/StockChart'

// const DashBoard = () => {
//   return (
//     <div>
//          {/* <!-- Page Wrapper --> */}
//         <div className="page-wrapper">
//             <div className="content">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="page-header">
//                             <div className="row align-items-center ">
//                                 <div className="col-md-4">
//                                     <h3 className="page-title">Dashboard</h3>
//                                 </div>
//                                 <div className="col-md-8 float-end ms-auto">
//                                     <div className="d-flex title-head">
//                                         <div className="daterange-picker d-flex align-items-center justify-content-center">
//                                             <div className="form-sort me-2">
//                                                 <i className="ti ti-calendar"></i>
//                                                 <input type="text" className="form-control  date-range bookingrange"/>
//                                             </div>
//                                             <div className="head-icons mb-0">
//                                                 <a href="index.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
//                                                 <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-6 d-flex">
//                         <div className="card flex-fill">
//                             <div className="card-header border-0 pb-0">
//                                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//                                     <h4><i className="ti ti-grip-vertical me-1"></i>Student 
//                                     Registration</h4>
//                                     <div className="dropdown">
//                                         <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 											<i className="ti ti-calendar-check me-2"></i>Last 30 days
// 										</a>
//                                         <div className="dropdown-menu dropdown-menu-end">
//                                             <a href="javascript:void(0);" className="dropdown-item">
// 												Last 15 days
// 											</a>
//                                             <a href="javascript:void(0);" className="dropdown-item">
// 												Last 30 days
// 											</a>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className="card-body">
//                                 <div className="table-responsive custom-table">
//                                     <table className="table dataTable" id="deals-project">
//                                         <thead className="thead-light">
//                                             <tr>
//                                                 <th>Name</th>
//                                                 <th>Stage</th>
//                                                 <th>Amount</th>
//                                                 <th>Probability</th>
//                                                 <th>Status</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>

//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 d-flex">
//                         <div className="card flex-fill">
//                             <div className="card-header border-0 pb-0">
//                                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//                                     <h4><i className="ti ti-grip-vertical me-1"></i>Deals By Stage</h4>
//                                     <div className="d-flex align-items-center flex-wrap row-gap-2">
//                                         <div className="dropdown me-2">
//                                             <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 												Sales Pipeline
// 											</a>
//                                             <div className="dropdown-menu dropdown-menu-end">
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Marketing Pipeline
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Sales Pipeline
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Email
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Chats
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Operational
// 												</a>
//                                             </div>
//                                         </div>
//                                         <div className="dropdown">
//                                             <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 												Last 30 Days
// 											</a>
//                                             <div className="dropdown-menu dropdown-menu-end">
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 30 Days
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 15 Days
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 7 Days
// 												</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card-body">
//                                 <div id="deals-chart">
//                                     <BarChart/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-6 d-flex">
//                         <div className="card flex-fill">
//                             <div className="card-header border-0 pb-0">
//                                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//                                     <h4><i className="ti ti-grip-vertical me-1"></i>Faculty By Stage</h4>
//                                     <div className="d-flex align-items-center flex-wrap row-gap-2">

//                                         <div className="dropdown">
//                                             <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 												Last 3 months
// 											</a>
//                                             <div className="dropdown-menu dropdown-menu-end">
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 3 months
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 6 months
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 12 months
// 												</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card-body">
//                                 <div id="last-chart">
//                                     <GoalBarChart/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 d-flex">
//                         <div className="card flex-fill">
//                             <div className="card-header border-0 pb-0">
//                                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//                                     <h4><i className="ti ti-grip-vertical me-1"></i>Faculty on Class</h4>
//                                     <div className="d-flex align-items-center flex-wrap row-gap-2">

//                                         <div className="dropdown">
//                                             <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 												Last 3 months
// 											</a>
//                                             <div className="dropdown-menu dropdown-menu-end">
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 3 months
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 6 months
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 12 months
// 												</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card-body">
//                                 <div id="won-chart">
//                                 <GoalBarChart/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12 d-flex">
//                         <div className="card w-100">
//                             <div className="card-header border-0 pb-0">
//                                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//                                     <h4><i className="ti ti-grip-vertical me-1"></i>Growth Of Year</h4>
//                                     <div className="d-flex align-items-center flex-wrap row-gap-2">
//                                         <div className="dropdown me-2">
//                                             <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 												Sales Pipeline
// 											</a>
//                                             <div className="dropdown-menu dropdown-menu-end">

//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Marketing Pipeline
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Sales Pipeline
// 												</a>
//                                             </div>
//                                         </div>
//                                         <div className="dropdown">
//                                             <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
// 												Last 3 months
// 											</a>
//                                             <div className="dropdown-menu dropdown-menu-end">
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 3 months
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 6 months
// 												</a>
//                                                 <a href="javascript:void(0);" className="dropdown-item">
// 													Last 12 months
// 												</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card-body">
//                                 <div id="deals-year">
//                                     <StockChart/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* <!-- /Page Wrapper --> */}
//     </div>
//   )
// }

// export default DashBoard


// import { Card, CardContent, CardHeader, Typography, Grid2 } from "@mui/material";
// import { PieChart } from "recharts";
// import { Table, TableHead, TableBody, TableRow, td } from "@mui/material";
// import { useState } from "react";

// const LeadsDashboard = () => {
//   const leadData = [
//     { name: "New", value: 40 },
//     { name: "Follow-up", value: 25 },
//     { name: "Converted", value: 20 },
//     { name: "Dropped", value: 15 },
//   ];

//   const leads = [
//     { id: 1, name: "John Doe", status: "New", source: "Website", assignedTo: "Alex" },
//     { id: 2, name: "Jane Smith", status: "Follow-up", source: "Social Media", assignedTo: "Sarah" },
//     { id: 3, name: "Mike Johnson", status: "Converted", source: "Referral", assignedTo: "David" },
//   ];

//   return (
//     <Grid2 container spacing={2} padding={2} style={{marginLeft:"250px",marginTop:'30px'}}>
//       {/* Metrics */}
//       <Grid2 item xs={12} sm={4} md={3}>
//         <Card sx={{ backgroundColor: "#1976D2", color: "#fff", width: "80%" }}>
//           <CardHeader title="Total Leads" />
//           <CardContent>
//             <Typography variant="h5">100</Typography>
//           </CardContent>
//         </Card>
//       </Grid2>
//       <Grid2 item xs={12} sm={4} md={3}>
//         <Card sx={{ backgroundColor: "#388E3C", color: "#fff", width: "80%" }}>
//           <CardHeader title="Conversion Rate" />
//           <CardContent>
//             <Typography variant="h5">20%</Typography>
//           </CardContent>
//         </Card>
//       </Grid2>
//       <Grid2 item xs={12} sm={4} md={3}>
//         <Card sx={{ backgroundColor: "#F57C00", color: "#fff", width: "80%" }}>
//           <CardHeader title="Upcoming Follow-ups" />
//           <CardContent>
//             <Typography variant="h5">15</Typography>
//           </CardContent>
//         </Card>
//       </Grid2>
//       <Grid2 item xs={12} sm={4} md={3}>
//         <Card sx={{ backgroundColor: "#D32F2F", color: "#fff", width: "80%" }}>
//           <CardHeader title="Lost Leads" />
//           <CardContent>
//             <Typography variant="h5">5</Typography>
//           </CardContent>
//         </Card>
//       </Grid2>

//       {/* Charts */}
//       <Grid2 item xs={12} md={6}>
//         <Card>
//           <CardHeader title="Lead Status Breakdown" />
//           <CardContent>
//             <PieChart width={400} height={300} data={leadData} />
//           </CardContent>
//         </Card>
//       </Grid2>

//       {/* Lead Table */}
//       <Grid2 item xs={12}>
//         <Card>
//           <CardHeader title="Recent Leads" />
//           <CardContent>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#EEEEEE" }}>
//                   <td><b>Name</b></td>
//                   <td><b>Status</b></td>
//                   <td><b>Source</b></td>
//                   <td><b>Assigned To</b></td>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {leads.map((lead) => (
//                   <TableRow key={lead.id}>
//                     <td>{lead.name}</td>
//                     <td>{lead.status}</td>
//                     <td>{lead.source}</td>
//                     <td>{lead.assignedTo}</td>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </Grid2>
//     </Grid2>
//   );
// };

// export default LeadsDashboard;



import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
const LeadsDashboard = () => {
    const leadData = [
        { name: "New", value: 40 },
        { name: "Follow-up", value: 25 },
        { name: "Converted", value: 20 },
        { name: "Dropped", value: 15 },
    ];

    const colors = ["#1976D2", "#388E3C", "#F57C00", "#D32F2F"];

    const barData = [
        { category: "New", count: 40 },
        { category: "Follow-up", count: 25 },
        { category: "Converted", count: 20 },
        { category: "Dropped", count: 15 },
    ];

    const leads = [
        { id: 1, name: "John Doe", status: "New", source: "Website", assignedTo: "Alex" },
        { id: 2, name: "Jane Smith", status: "Follow-up", source: "Social Media", assignedTo: "Sarah" },
        { id: 3, name: "Mike Johnson", status: "Converted", source: "Referral", assignedTo: "David" },
    ];

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <div className="row align-items-center ">
                                <div className="col-md-4">
                                    <h3 >Lead Dashboard</h3>
                                </div>
                                <div className="col-md-8 float-end ms-auto">
                                    <div className="d-flex title-head">
                                        <div className="daterange-picker d-flex align-items-center justify-content-center">

                                            <div className="head-icons mb-0">
                                                <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                                                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">


                    {[
                        { title: "Total Leads", value: 100, color: "#1976D2" },
                        { title: "Conversion Rate", value: "20%", color: "#388E3C" },
                        { title: "Upcoming Follow-ups", value: 15, color: "#F57C00" },
                        { title: "Lost Leads", value: 5, color: "#D32F2F" },
                    ].map((metric, index) => (
                        <div key={index} className="col-xl-3">
                            <div className="card" style={{ backgroundColor: metric.color }}>
                                <div className="card-header" style={{ color: "white", fontSize: "14px" }}>{metric.title}</div>
                                <div className="card-body">
                                    <h3 style={{ color: "white" }}>{metric.value}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Lead Status Breakdown</h3>
                            </div>
                            <div className="card-body">
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie data={leadData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                                            {leadData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Lead Category Comparison</h3>
                            </div>
                            <div className="card-body">
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={barData}>
                                        <XAxis dataKey="category" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="count" fill="#1976D2" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Lead Table */}
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h3>Recent Leads</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr sx={{ backgroundColor: "#EEEEEE" }}>
                                        <th><b>Name</b></th>
                                        <th><b>Status</b></th>
                                        <th><b>Source</b></th>
                                        <th><b>Assigned To</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead) => (
                                        <tr key={lead.id}>
                                            <td>{lead.name}</td>
                                            <td>{lead.status}</td>
                                            <td>{lead.source}</td>
                                            <td>{lead.assignedTo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadsDashboard;
