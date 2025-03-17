import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, AreaChart, Area } from "recharts";
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
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header">
                <div className="row align-items-center ">
                  <div className="col-md-4">
                    <h3 >Student Dashboard</h3>
                  </div>
                  <div className="col-md-8 float-end ms-auto">
                    <div className="d-flex title-head">
                      <div className="daterange-picker d-flex align-items-center justify-content-center">

                        <div className="head-icons mb-0">
                          <a href="/studentsDashboard" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
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

            {/* Metrics */}
            {[
              { title: "Total Students", value: 200, color: "#4CAF50" },
              { title: "Attendance Rate", value: "90%", color: "#2196F3" },
              { title: "Top Performers", value: 30, color: "#FFC107" },
              { title: "Needing Assistance", value: 10, color: "#F44336" },
            ].map((metric, index) => (
              <div className="col-xl-3">
                <div className="card" style={{ backgroundColor: metric.color, color: "#fff" }}>
                  <div className="card-header">
                    <h3 style={{ color: "#fff" }}>{metric.title}</h3>
                  </div>
                  <div className="card-body">
                    <h3 style={{ color: "#fff" }}>{metric.value}</h3>
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
                  <h3>Student Performance Breakdown</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie data={studentPerformanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                        {studentPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer></div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="card">
                <div className="card-header">
                  <h3>Attendance Overview</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={280}>
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
            {/* Line Chart for Marks Trends */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h3>Marks Trends Over Months</h3>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={marksTrendData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="marks" stroke="#FF5722" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Area Chart for Subject Performance */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h3>Subject Performance Analysis</h3>
                </div>
                <div className="card-body">

                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={subjectPerformanceData}>
                      <XAxis dataKey="subject" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="score" stroke="#673AB7" fill="#B39DDB" />
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

export default Studentdash;