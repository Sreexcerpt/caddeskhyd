import { Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, AreaChart, Area } from "recharts";

const Staffdash = () => {
  const staffPerformanceData = [
    { name: "Excellent", value: 25 },
    { name: "Good", value: 40 },
    { name: "Average", value: 20 },
    { name: "Needs Improvement", value: 15 },
  ];

  const colors = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];

  const attendanceData = [
    { category: "Present", count: 70 },
    { category: "Absent", count: 20 },
    { category: "Leave", count: 10 },
  ];

  const workloadTrendData = [
    { month: "Jan", hours: 35 },
    { month: "Feb", hours: 40 },
    { month: "Mar", hours: 38 },
    { month: "Apr", hours: 42 },
    { month: "May", hours: 45 },
  ];

  const experienceDistribution = [
    { experience: "0-2 years", count: 10 },
    { experience: "3-5 years", count: 25 },
    { experience: "6-10 years", count: 30 },
    { experience: "10+ years", count: 15 },
  ];

  return (
    <Grid container spacing={2} padding={1} style={{marginTop:'90px',marginLeft:'240px'}}>
      {/* Metrics */}
      {[
        { title: "Total Staff", value: 100, color: "#4CAF50" },
        { title: "Attendance Rate", value: "85%", color: "#2196F3" },
        { title: "Active Teachers", value: 60, color: "#FFC107" },
        { title: "Staff Needing Assistance", value: 5, color: "#F44336" },
      ].map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ backgroundColor: metric.color, color: "#fff", height: "100px",width:'80%', display: "flex", flexDirection: "column", justifyContent: "left", textAlign: "left" }}>
            <CardHeader title={metric.title} sx={{ paddingBottom: 0, fontSize: "14px" }} />
            <CardContent>
              <Typography variant="h6">{metric.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Charts */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ height: "260px", width: "95%" }}>
          <CardHeader title="Staff Performance Breakdown" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={staffPerformanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {staffPerformanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ height: "260px", width: "95%" }}>
          <CardHeader title="Attendance Overview" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={attendanceData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Line Chart for Workload Trends */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ height: "260px", width: "95%" }}>
          <CardHeader title="Workload Trends Over Time" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={workloadTrendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="hours" stroke="#FF5722" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Area Chart for Experience Distribution */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ height: "260px", width: "95%" }}>
          <CardHeader title="Experience Distribution" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={experienceDistribution}>
                <XAxis dataKey="experience" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="count" stroke="#673AB7" fill="#B39DDB" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Staffdash;
