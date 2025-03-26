import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, AreaChart, Area } from "recharts";

const EmployeeDashboardM = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/faculties");
        const data = await response.json();
        setFaculties(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculties:", error);
        setLoading(false);
      }
    };

    fetchFaculties();
  }, []);

  // Calculate dynamic metrics
  const totalStaff = faculties.length;
  const activeTeachers = faculties.filter(faculty => faculty.status === "Active").length;
  const attendanceRate = totalStaff > 0 ? Math.round((activeTeachers / totalStaff) * 100) : 0;

  // Dummy chart data (Replace with API data if available)
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
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header">
                <div className="row align-items-center ">
                  <div className="col-md-4">
                    <h3>Staff Dashboard</h3>
                  </div>
                  <div className="col-md-8 float-end ms-auto">
                    <div className="d-flex title-head">
                      <div className="daterange-picker d-flex align-items-center justify-content-center">
                        <div className="head-icons mb-0">
                          <a href="/staffdashboard" data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
                            <i className="ti ti-refresh-dot"></i>
                          </a>
                          <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header">
                            <i className="ti ti-chevrons-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="row">
            {[
              { title: "Total Staff", value: totalStaff, color: "#4CAF50" },
              { title: "Attendance Rate", value: `${attendanceRate}%`, color: "#2196F3" },
              { title: "Active Teachers", value: activeTeachers, color: "#FFC107" },
              { title: "Staff Assistance", value: 5, color: "#F44336" },
            ].map((metric, index) => (
              <div className="col-xl-3" key={index}>
                <div className="card" style={{ backgroundColor: metric.color }}>
                  <div className="card-header">
                    <h3 style={{ color: "#fff" }}>{metric.title}</h3>
                  </div>
                  <div className="card-body">
                    <h4 style={{ color: "#fff" }}>{metric.value}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {/* Charts */}
            <div className="col-xl-5">
              <div className="card">
                <div className="card-header">
                  <h3>Staff Performance Breakdown</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={300}>
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
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="card">
                <div className="card-header">
                  <h3>Attendance Overview</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={attendanceData}>
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#2196F3" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Line Chart for Workload Trends */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h3>Workload Trends Over Time</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={workloadTrendData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="hours" stroke="#FF5722" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Area Chart for Experience Distribution */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h3>Experience Distribution</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={experienceDistribution}>
                      <XAxis dataKey="experience" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="count" stroke="#673AB7" fill="#B39DDB" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboardM;
