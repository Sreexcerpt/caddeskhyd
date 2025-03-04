import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const inquiryData = [
  { source: "Website", inquiries: 120 },
  { source: "Facebook", inquiries: 80 },
  { source: "Instagram", inquiries: 90 },
  { source: "Walk-ins", inquiries: 50 },
  { source: "Referrals", inquiries: 60 },
];

const counselorData = [
  { name: "Counselor A", inquiries: 200, admissions: 50 },
  { name: "Counselor B", inquiries: 150, admissions: 40 },
  { name: "Counselor C", inquiries: 180, admissions: 60 },
];

const ReportsAndInsights = () => {
  return (
    <div style={{marginLeft:'300px'}}>
    <Grid2 container spacing={3}>
      {/* Source-wise Inquiry Analysis */}
      <Grid2 item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Source-wise Inquiry Analysis
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={inquiryData}>
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inquiries" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid2>
      
      {/* Counselor Performance Reports */}
      <Grid2 item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Counselor Performance Reports
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={counselorData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="inquiries" stroke="#8884d8" />
                <Line type="monotone" dataKey="admissions" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
    </div>
  );
};

export default ReportsAndInsights;
