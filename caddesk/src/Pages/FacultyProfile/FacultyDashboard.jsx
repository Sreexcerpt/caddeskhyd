
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const FacultyDashboard = () => {
  const [studentBatches, setStudentBatches] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const facultyId = JSON.parse(localStorage.getItem("user"))?.employeeId;
  const userFullName = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return `${user.firstName || ''} ${user.lastName || ''}`.trim();
    }
    return "Faculty Member";
  };

  useEffect(() => {
    if (!facultyId) {
      console.error("No faculty ID found in localStorage");
      return;
    }

    // const fetchStudentBatches = async () => {
    //   try {
    //     const res = await axios.get(`http://localhost:8080/student-batches/${facultyId}`);
    //     setStudentBatches(res.data);
    //   } catch (err) {
    //     console.error("Error fetching student batches:", err);
    //   }
    // };

    const fetchTimetable = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/timetable/${facultyId}`);
        setTimetable(res.data);
      } catch (err) {
        console.error("Error fetching timetable:", err);
      }
    };

    // fetchStudentBatches();
    fetchTimetable();
  }, [facultyId]);

  const options = {
    chart: {
      type: 'bar',
      height: 650,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      formatter: (val) => val / 1000 + 'K'
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    fill: {
      opacity: 1
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
      labels: {
        formatter: (val) => val / 1000 + 'K'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  };

  const series = [
    {
      group: 'budget',
      data: [44000, 55000, 41000]
    },
    {
      group: 'actual',
      data: [48000, 50000, 40000]
    },
    {
      group: 'budget',
      data: [13000, 36000, 20000]
    },
    {
      group: 'actual',
      data: [20000, 40000, 25000]
    }
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="page-title">Dashboard</h3>
                  </div>
                  <div className="col-md-8 float-end ms-auto">
                    <div className="d-flex title-head">
                      <div className="daterange-picker d-flex align-items-center justify-content-center">
                        <div className="form-sort me-2">
                          <i className="ti ti-calendar"></i>
                          <input type="text" className="form-control date-range bookingrange"/>
                        </div>
                        <div className="head-icons mb-0">
                          <a href="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh">
                            <i className="ti ti-refresh-dot"></i>
                          </a>
                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header">
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

          {/* <!-- Welcome Wrap --> */}
          <div className="welcome-wrap mb-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="mb-3">
                <h2 className="mb-1 text-white">{userFullName()}</h2>
                <p className="text-light">You have 27 student added your domain. please reach out to the header teachers if you want them excluded from your domain</p>
              </div>
              <div className="d-flex align-items-center flex-wrap mb-1">
                <a href="" className="btn btn-light btn-md mb-2">All Batches</a>
              </div>
            </div>
          </div>	
          {/* <!-- /Welcome Wrap --> */}

          <div className="row">
            {/* Today's Timetable Card */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Today's Timetable</h5>
                </div>
                <div className="card-body pb-2">
                  {timetable.length > 0 ? (
                    timetable.map((entry, index) => 
                      entry.schedule.map((scheduleItem, i) => (
                        <div key={`${index}-${i}`} className="card border border-info mb-3">
                          <div className="card-body">
                            <div className="d-flex align-items-center w-100">
                              <div className="">
                                <div className="fs-15 fw-semibold">{entry.subject.subjectName} ({entry.subject.subjectCode})</div>
                                <p className="mb-0 text-fixed-black op-7 fs-12"><i className="ti ti-clock"></i> {scheduleItem.timeSlot}</p>
                              </div>
                              <div className="ms-auto">
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                  <span className="badge bg-info-transparent">Class</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  ) : (
                    <div className="card border border-warning">
                      <div className="card-body">
                        <p className="mb-0 text-fixed-black fs-14">No classes scheduled for today.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Student Batches Card */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Your Student Batches</h5>
                </div>
                <div className="card-body pb-2">
                  {studentBatches && studentBatches.length > 0 ? (
                    studentBatches.map((batch, index) => (
                      <div key={index} className="card border border-info mb-3">
                        <div className="card-body">
                          <div className="d-flex align-items-center w-100">
                            <div className="">
                              <div className="fs-15 fw-semibold">{batch.batchName || `Batch ${index + 1}`}</div>
                              <p className="mb-0 text-fixed-black op-7 fs-12">
                                <i className="ti ti-users"></i> {batch.studentCount || 0} Students
                              </p>
                            </div>
                            <div className="ms-auto">
                              <div className="d-flex flex-wrap gap-2 mb-4">
                                {batch.subjects && batch.subjects.map((subject, subIndex) => (
                                  <span key={subIndex} className={`badge bg-${getColorForSubject(subIndex)}-transparent`}>
                                    {subject}
                                  </span>
                                ))}
                                {(!batch.subjects || batch.subjects.length === 0) && (
                                  <span className="badge bg-secondary-transparent">No Subjects</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="card border border-warning">
                      <div className="card-body">
                        <p className="mb-0 text-fixed-black fs-14">No student batches assigned yet.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Upcoming Activities</h5>
                </div>
                <div className="card-body pb-2">
                  <div className="card border border-info" >
                    <div className="card-body">
                      <div className="d-flex align-items-center w-100">
                        <div className="">
                          <div className="fs-15 fw-semibold">Staff Meeting</div>
                          <p className="mb-0 text-fixed-black op-7 fs-12 "><i className="ti ti-calendar"></i> 10:00Am To 11:00Am</p>
                        </div>
                        <div className="ms-auto">
                          <div className="d-flex flex-column flex-wrap gap-2 mb-4">
                            <span className="badge bg-danger-transparent"><i className="ti ti-calendar"></i> 12-3-2013</span>
                            <p className="mb-0 text-fixed-black op-7 fs-12 "><i className="ti ti-phone-check"></i> Google Meeting</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card border border-info" >
                    <div className="card-body">
                      <div className="d-flex align-items-center w-100">
                        <div className="">
                          <div className="fs-15 fw-semibold">Parents Meeting</div>
                          <p className="mb-0 text-fixed-black op-7 fs-12 "><i className="ti ti-calendar"></i> 10:00Am To 11:00Am</p>
                        </div>
                        <div className="ms-auto">
                          <div className="d-flex flex-column flex-wrap gap-2 mb-4">
                            <span className="badge bg-danger-transparent"><i className="ti ti-calendar"></i> 12-3-2013</span>
                            <p className="mb-0 text-fixed-black op-7 fs-12 "><i className="ti ti-phone-check"></i> Offline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card border border-info" >
                    <div className="card-body">
                      <div className="d-flex align-items-center w-100">
                        <div className="">
                          <div className="fs-15 fw-semibold">Course Meeting</div>
                          <p className="mb-0 text-fixed-black op-7 fs-12 ">10:00Am To 11:00Am</p>
                        </div>
                        <div className="ms-auto">
                          <div className="d-flex flex-column flex-wrap gap-2 mb-4">
                            <span className="badge bg-danger-transparent"><i className="ti ti-calendar"></i> 12-3-2013</span>
                            <p className="mb-0 text-fixed-black op-7 fs-12 "><i className="ti ti-phone-check"></i> Function Hall</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

// Helper function to get different colors for subject badges
const getColorForSubject = (index) => {
  const colors = ['primary', 'success', 'danger', 'warning', 'info'];
  return colors[index % colors.length];
};

export default FacultyDashboard;


  