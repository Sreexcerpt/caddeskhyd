import { Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, AreaChart, Area } from "recharts";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const Studentdash = () => {
  const studentPerformanceData = [
    { name: "Excellent", value: 30 },
    { name: "Good", value: 40 },
    { name: "Average", value: 20 },
    { name: "Needs Improvement", value: 10 },
  ];

  const colors = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];

  const attendanceData = [
    { category: "Present", count: 80 },
    { category: "Absent", count: 15 },
    { category: "Late", count: 5 },
  ];

  const marksTrendData = [
    { month: "Jan", marks: 70 },
    { month: "Feb", marks: 75 },
    { month: "Mar", marks: 80 },
    { month: "Apr", marks: 85 },
    { month: "May", marks: 90 },
  ];

  const subjectPerformanceData = [
    { subject: "Math", score: 85 },
    { subject: "Science", score: 90 },
    { subject: "English", score: 80 },
    { subject: "History", score: 75 },
  ];

  return (
    <Grid container spacing={2} padding={1}style={{marginTop:'90px',marginLeft:'240px'}}>
      {/* Metrics */}
      {[
        { title: "Total Students", value: 200, color: "#4CAF50" },
        { title: "Attendance Rate", value: "90%", color: "#2196F3" },
        { title: "Top Performers", value: 30, color: "#FFC107" },
        { title: "Needing Assistance", value: 10, color: "#F44336" },
      ].map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ backgroundColor: metric.color, color: "#fff", height: "100px",width:'80%',display: "flex", flexDirection: "column", justifyContent: "left", textAlign: "left"}}>
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
          <CardHeader title="Student Performance Breakdown" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={studentPerformanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {studentPerformanceData.map((entry, index) => (
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

      {/* Line Chart for Marks Trends */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ height: "260px", width: "95%" }}>
          <CardHeader title="Marks Trends Over Months" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={marksTrendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="marks" stroke="#FF5722" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Area Chart for Subject Performance */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ height: "260px", width: "95%" }}>
          <CardHeader title="Subject Performance Analysis" />
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={subjectPerformanceData}>
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="score" stroke="#673AB7" fill="#B39DDB" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Studentdash;