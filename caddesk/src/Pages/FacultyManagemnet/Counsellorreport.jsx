// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
// import { Card, CardContent, Typography, Grid2 } from "@mui/material";

// const inquiryData = [
//   { source: "Website", inquiries: 120 },
//   { source: "Facebook", inquiries: 80 },
//   { source: "Instagram", inquiries: 90 },
//   { source: "Walk-ins", inquiries: 50 },
//   { source: "Referrals", inquiries: 60 },
// ];

// const counselorData = [
//   { name: "Counselor A", inquiries: 200, admissions: 50 },
//   { name: "Counselor B", inquiries: 150, admissions: 40 },
//   { name: "Counselor C", inquiries: 180, admissions: 60 },
// ];

// const ReportsAndInsights = () => {
//   return (
//     <div style={{marginLeft:'300px'}}>
//     <Grid2 container spacing={3}>
//       {/* Source-wise Inquiry Analysis */}
//       <Grid2 item xs={12} md={6}>
//         <Card>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Source-wise Inquiry Analysis
//             </Typography>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={inquiryData}>
//                 <XAxis dataKey="source" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="inquiries" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </Grid2>

//       {/* Counselor Performance Reports */}
//       <Grid2 item xs={12} md={6}>
//         <Card>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Counselor Performance Reports
//             </Typography>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={counselorData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="inquiries" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="admissions" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </Grid2>
//     </Grid2>
//     </div>
//   );
// };

// export default ReportsAndInsights;

import React, { useState } from "react";
import Chart from "react-apexcharts"

const ReportsAndInsights = () => {
   const [chartData, setChartData] = useState({
      series: [
        {
          name: "STOCK ABC",
          data: [34, 45, 31, 55, 42, 67, 80, 95, 105, 115], // Sample stock price data
        },
      ],
    });
  
    const chartOptions = {
      chart: {
        type: "area",
        height: 350,
        zoom: { enabled: false },
      },
      colors: ["#4900e6"], // Custom color
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      title: { text: "Increase Your Sells", align: "left" },
      subtitle: { text: "You have achieved", align: "left" },
      labels: [
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-01-05",
        "2024-01-06",
        "2024-01-07",
        "2024-01-08",
        "2024-01-09",
        "2024-01-10",
      ], // Sample dates
      xaxis: { type: "datetime" },
      yaxis: { opposite: true },
      legend: { horizontalAlign: "left" },
    };
    
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">

        <div class="row">
					<div class="col-md-12">
						<div class="page-header">
							<div class="row align-items-center ">
								<div class="col-md-4">
									<h3 >Social Media Dashboard</h3>
								</div>
								<div class="col-md-8 float-end ms-auto">
									<div class="d-flex title-head">
										<div class="daterange-picker d-flex align-items-center justify-content-center">
											
											<div class="head-icons mb-0">
												<a href="project-dashboard.html" data-bs-toggle="tooltip"
													data-bs-placement="top" data-bs-original-title="Refresh"><i
														class="ti ti-refresh-dot"></i></a>
												<a href="javascript:void(0);" data-bs-toggle="tooltip"
													data-bs-placement="top" data-bs-original-title="Collapse"
													id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>

        <div class="row">
					<div class="col-md-12 d-flex">
						<div class="card w-100">
							<div class="card-header border-0 pb-0">
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
									<h4><i class="ti ti-grip-vertical me-1"></i>Instagram</h4>
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										
									</div>
								</div>
							</div>
							<div class="card-body">
								<div id="project-stage">
                <Chart options={chartOptions} series={chartData.series} type="area" height={350} />
                </div>
							</div>
						</div>
					</div>
					
				</div>

        <div class="row">
					<div class="col-md-12 d-flex">
						<div class="card w-100">
							<div class="card-header border-0 pb-0">
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
									<h4><i class="ti ti-grip-vertical me-1"></i>FaceBook</h4>
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										
									</div>
								</div>
							</div>
							<div class="card-body">
								<div id="project-stage">
                <Chart options={chartOptions} series={chartData.series} type="area" height={350} />
                </div>
							</div>
						</div>
					</div>
					
				</div>

        </div>
      </div>
    </div>
  );
};

export default ReportsAndInsights;
