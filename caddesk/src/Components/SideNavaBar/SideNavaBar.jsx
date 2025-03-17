import React from "react";

const SideNavaBar = () => {
    return (
        <div>
            {/* <!-- Sidebar --> */}
            <div className="sidebar" id="sidebar">
                <div className="modern-profile p-3 pb-0">
                    <div className="sidebar-nav mb-3">
                        <ul
                            className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a className="nav-link active border-0" href="">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link border-0" href="chat.html">
                                    Chats
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link border-0" href="email.html">
                                    Inbox
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-header p-3 pb-0 pt-2">
                    <div className="d-flex align-items-center justify-content-between menu-item mb-3">
                        <div className="me-3">
                            <a
                                href="calendar.html"
                                className="btn btn-icon border btn-menubar"
                            >
                                <i className="ti ti-layout-grid-remove"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a
                                href="chat.html"
                                className="btn btn-icon border btn-menubar position-relative"
                            >
                                <i className="ti ti-brand-hipchat"></i>
                            </a>
                        </div>
                        <div className="me-3 notification-item">
                            <a
                                href="activities.html"
                                className="btn btn-icon border btn-menubar position-relative me-1"
                            >
                                <i className="ti ti-bell"></i>
                                <span className="notification-status-dot"></span>
                            </a>
                        </div>
                        <div className="me-0">
                            <a href="email.html" className="btn btn-icon border btn-menubar">
                                <i className="ti ti-message"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="clinicdropdown">
                                <a href="profile.html">
                                    <img
                                        src="./src/assets/assets/img/profiles/avatar-14.jpg"
                                        className="img-fluid"
                                        alt="Profile"
                                    />
                                    <div className="user-names">
                                        <h5>Adrian Davies</h5>
                                        <h6>Tech Lead</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <ul>
                                    <li className="submenu active">
                                        <a href="/">
                                            <i className="ti ti-layout-2"></i>
                                            <span>Dashboard</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/">Leads Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="/studentsDashboard">Student Dashboard</a>
                                            </li>

                                            <li>
                                                <a href="/staffdashboard">Staff Dashboard</a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Lead management tabs start*/}
                                    <li className="submenu active">
                                        <a href="">
                                            <i class="ti ti-chart-arcs"></i>
                                            <span>Lead & Inquiry</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/AddingLead">Lead Capture & Tracking</a>
                                            </li>
                                            <li>
                                                <a href="/LeadAssignment">LeadAssignment</a>
                                            </li>
                                            <li>
                                                <a href="/LeadFollowup">LeadFollowup</a>
                                            </li>
                                            <li>
                                                <a href="/Counsellorreport">Report And Insights</a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Lead management tabs end */}

                                    {/*  Admission & Enrollment Management tabs start  */}
                                    <li className="submenu active">
                                        <a href="">
                                            <i class="ti ti-steam"></i>
                                            <span>Admission & Enrollment </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/ApplicationProcessing">
                                                    Application Processing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/EnrollmentAllocation">
                                                    Enrollment & Allocation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/FeeInvoiceGeneration">
                                                    Fee & Invoice Generation
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*  Admission & Enrollment Management tabs end  */}

                                    {/*  Student Information Management tabs start  */}
                                    <li className="submenu active">
                                        <a href="">
                                            <i className="ti ti-user-star"></i>
                                            <span>Student Information</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/StudentView">Student Database</a>
                                            </li>
                                            <li>
                                                <a href="/Students">Student Registraion</a>
                                            </li>
                                            <li>
                                                <a href="/SAttendance">Attendance Tracking</a>
                                            </li>
                                            <li><a href="/studentatten">Student Attendance</a></li>
                                            {/* <li><a href="/Attendancetracking">Attendance Tracking1</a></li> */}
                                            <li>
                                                <a href="">Course & Subject Mapping</a>
                                            </li>
                                            <li>
                                                <a href="/StudentCertificate">Certificate</a>
                                            </li>
                                            {/* <li>extra tabs</li>
                      <li>
                        <a href="/Course">Course</a>
                      </li>
                      <li>
                        <a href="/Subject">Subject</a>
                      </li>
                      <li>
                        <a href="/StudentTimetable">Student Timetable</a>
                      </li> */}
                                        </ul>
                                    </li>

                                    {/*  Student Information Management tabs end  */}

                                    {/*  Fee Management & Accounting tabs start  */}
                                    <li className="submenu active">
                                        <a href="">
                                            <i class="ti ti-report-money"></i><span>Fee & Accounting</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li><a href="">Fee Structure Management</a></li>
                                            <li><a href="">Online Payments & Invoicing</a></li>
                                            <li><a href="">Financial Reporting</a></li>
                                        </ul>
                                    </li>
                                    {/*  Fee Management & Accounting tabs end  */}

                                    {/*  Communication & Notifications tabs start  */}
                                    <li className="submenu active">
                                        <a href="">
                                            <i className="ti ti-user-star"></i><span>Communication</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li><a href="/AutomatedNotifications">Automated Notifications</a></li>
                                            <li><a href="/CommunicationChannels">Communication Channels</a></li>
                                            <li><a href="/EventAnnouncementManagement">Event & Announcement Management</a></li>
                                        </ul>
                                    </li>
                                    {/*  Communication & Notifications tabs end  */}
                                    {/*  Faculty & Staff Management tabs start  */}

                                    <li className="submenu active">
                                        <a href=""><i class="ti ti-users"></i><span>Faculty & Staff </span><span className="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="/FacultyList">Staff Profiles</a></li>
                                            <li><a href="">Access Control</a></li>
                                            <li><a href="">Attendance & Leave Tracking</a></li>
                                            <li><a href="/payroll">Payroll & Salary Management</a></li>
                                            <li><a href="/payview">PaySlip</a></li>
                                            <li><a href="/WorkloadDistribution">WorkloadDistribution</a></li>
                                            <li>extra tabs</li>
                                            <li><a href="/BatchAssignment">BatchAssignment</a></li>
                                            <li><a href="/AddFaculty">AddFaculty</a></li>
                                            <li><a href="/AttendanceTracker">AttendanceTracker</a></li>
                                            <li><a href="/LeaveRequests">LeaveRequests</a></li>
                                            <li><a href="/LeaveRequestForm">LeaveRequestForm</a></li>

                                        </ul>
                                    </li>
                                    {/*  Faculty & Staff Management tabs end  */}
                                    {/*  Course, Class & Batch Management tabs start  */}

                                    <li className="submenu active">
                                        <a href="" >
                                            <i class="ti ti-artboard"></i><span>Course, Class & Batch</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li><a href="/SubjectForm">Subjects Creation</a></li>
                                            <li><a href="/CourseForm">Course Creation</a></li>
                                            <li><a href="/BatchForm">Batch Creation</a></li>
                                            <li><a href="">Timetable Management</a></li>
                                            <li><a href="">Virtual Classroom Integration</a></li>
                                        </ul>
                                    </li>
                                    {/*  Course, Class & Batch Management tabs end  */}


                                    <li className="submenu active">
                                        <a href="">
                                            <i className="ti ti-file-invoice"></i><span>Reports and Analytics</span><span className="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li><a href="/RegisterReport">Register Report</a></li>
                                            <li><a href="/AttendanceReport">Attendance Report</a></li>
                                            <li><a href="/FeePaymentReport">FeePayment Report</a></li>
                                            <li><a href="/WalkinsReport">Walkins Report</a></li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 class="submenu-hdr">Student Profile</h6>
                                <ul>
                                    <li className="active">
                                        <a href="/StudentDashboard">
                                            <i className="ti ti-user"></i><span>Student Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/StudentCourse">
                                            <i className="ti ti-book"></i><span>Course</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Courseview">
                                            <i className="ti ti-book"></i><span>Course view</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/StudentPayments">
                                            <i className="ti ti-wallet"></i><span>Payments</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/StudentMyAttendance">
                                            <i className="ti ti-calendar"></i><span>My Attendance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/StudentFeedback">
                                            <i className="ti ti-book"></i><span>Feedback</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <h6 class="submenu-hdr">Faculty Profile</h6>
                                <ul>
                                    <li>
                                        <a href="/FacultyDashboard">
                                            <i className="ti ti-user"></i><span>Faculty Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/FacultyTimeTable">
                                            <i className="ti ti-book"></i><span>Faculty TimeTable</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/FacultyCommunication">
                                            <i className="ti ti-wallet"></i><span>Faculty Communication</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Attendance">
                                            <i className="ti ti-calendar"></i><span>Attendance</span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/Attendance">
                                            <i className="ti ti-calendar"></i><span>Accessment</span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/FacultyLeaveRequests" >
                                            <i className="ti ti-calendar"></i><span>LeaveRequest</span>
                                        </a>
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- /Sidebar --> */}
        </div>
    )
}

export default SideNavaBar;
