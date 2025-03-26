import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// components 
import Header from "./Components/Header/Header";
import SideNavaBar from "./Components/SideNavaBar/SideNavaBar";
import Telecaller from "./Pages/TelecallerManagement/Telecaller";
//Login
import Login from "./Pages/Login/Login";

// dhasboards
import DashBoard from "./Pages/DashBoard/DashBoard";
import EmployeeDashboardM from "./Pages/DashBoard/EmployeeDashBoard";
import Studentdash from "./Pages/DashBoard/Studentdash";

//leads
import EnquiryForm from "./Pages/Form/EnquiryForm";
import EnquiryAssignment from "./Pages/Leads/LeadAssignment";
import LeadFollowup from "./Pages/Leads/LeadFollowup";

//course
import BatchForm from "./Pages/CourseManagement/Batch";
import CourseForm from "./Pages/CourseManagement/Course";
import SubjectForm from "./Pages/CourseManagement/Subject";


import FacultyForm from "./Pages/FacultyManagemnet/AddFaculty";
import FacultyList from "./Pages/FacultyManagemnet/FacultyList";
import LeaveRequestForm from "./Pages/FacultyManagemnet/LeaveRequestpage";
import LeaveRequests from "./Pages/FacultyManagemnet/LeaveManagment";
import WorkloadDistribution from "./Pages/FacultyManagemnet/Workloaddistribution";
import AttendanceTracker from "./Pages/FacultyManagemnet/AttendanceTracker";
import Counsellorreport from "./Pages/FacultyManagemnet/Counsellorreport";
import BatchAssignment from "./Pages/FacultyManagemnet/BatchAssignment";
import AccessControl from "./Pages/FacultyManagemnet/AccessControl";
import Payroll from "./Pages/FacultyManagemnet/PayRole";
import Payview from "./Pages/FacultyManagemnet/Payview";
import Batchviewandedit from "./Pages/FacultyManagemnet/Batchviewandedit";
import Branch from "./Pages/FacultyManagemnet/Branch";


import Course from "./Pages/StudentManagement/Course";
import Subject from "./Pages/StudentManagement/Subject";
import StudentForm from "./Pages/StudentManagement/StudentForm";
import StudentView from "./Pages/StudentManagement/StudentView";
import Sattendance from "./Pages/StudentManagement/SAttendance";
import StudentTimetable from "./Pages/StudentManagement/StudentTimetable";
import AttendanceTracking from "./Pages/StudentManagement/attendancetracking";
import StudentAttendance from "./Pages/StudentManagement/studentattendance";
import StudentFeedback from "./Pages/StudentProfile/StudentFeedback/StudentFeedback";
import StudentCourseDetails from "./Pages/StudentProfile/StudentCourseDetail/StudentCourseDetails";


import RegisterReport from "./Pages/Reports/RegisterReport";
import AttendanceReport from "./Pages/Reports/AttendanceReport";
import PaymentReport from "./Pages/Reports/PaymentReport";
import WalkinsReport from "./Pages/Reports/WalkinsReport";




import ApplicationProcessing from "./Pages/AdmissionManagement/ApplicationProcessing";
import EnrollmentAllocation from "./Pages/AdmissionManagement/EnrollmentAllocation";
import FeeInvoiceGeneration from "./Pages/AdmissionManagement/FeeInvoiceGeneration";
import Invoice from "./Pages/AdmissionManagement/Invoice";


// import StudentProfile from "./Pages/StudentProfile/StudentProfile/StudentProfile";
import StudentCourse from "./Pages/StudentProfile/StudentCourse/StudentCourse";
import StudentMyAttendance from "./Pages/StudentProfile/StudentMyAttendence/StudentMyAttendance";
import StudentPayments from "./Pages/StudentProfile/StudentPayments/StudentPayments";


import PaymentsAndInvoicing from "./Pages/Fee&Accounting/PaymentsAndInvoicing/PaymentsAndInvoicing";
import FeeStructureManagement from "./Pages/Fee&Accounting/FeeStructureManagement/FeeStructureManagement";


import AutomatedNotifications from "./Pages/CommunicationNotifications/AutomatedNotifications";
import CommunicationChannels from "./Pages/CommunicationNotifications/CommunicationChannels";
import EventAnnouncementManagement from "./Pages/CommunicationNotifications/EventAnnouncementManagement";



import StudentCertificate from "./Pages/StudentManagement/StudentCertificate";


import PayRoll from "./Pages/Saff/PayRoll";
import FacultyDashboard from "./Pages/FacultyProfile/FacultyDashboard";
import Attendance from "./Pages/FacultyProfile/Attendance";
import FacultyTimeTable from "./Pages/FacultyProfile/FacultyTimeTable";
import Assignment from "./Pages/FacultyProfile/Assignment";
import FacultyLeaveRequests from "./Pages/FacultyProfile/FacultyLeaveRequests";
import FacultyCommunication from "./Pages/FacultyProfile/FacultyCommunication";

import TelecallerDashboard from './Pages/telecaller/TelecallerEnquiry'

import RegistrationForm from "./Pages/Form/RegistrationForm";

import Joblist from "./Pages/HRMS/Joblist/Joblist";
import HireFromUs from "./Pages/HRMS/HireFromUs/HireFromUs";
import InternalHiring from "./Pages/HRMS/InternalHiring/InternalHiring";


const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const storedRoles = localStorage.getItem("roles");
  const roles = storedRoles ? JSON.parse(storedRoles) : [];


  //  const roles = JSON.parse(localStorage.getItem("roles")) || [];

  // Set the first role as default activeRole
  const [activeRole, setActiveRole] = useState(localStorage.getItem("activeRole") || roles[0] || "");
  console.log("activeroel", localStorage.getItem("activeRole"))

  // Update localStorage when role changes
  useEffect(() => {
    localStorage.setItem("activeRole", activeRole);
  }, [activeRole]);




  return (
    <>
      {!isLoginPage && <Header roles={roles} activeRole={activeRole} onRoleChange={setActiveRole} />}
      {!isLoginPage && <SideNavaBar activeRole={activeRole} />}

      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="/Branch" element={<Branch />} />
        {/* telecaller */}


        <Route path="/TelecallerDash" element={<TelecallerDashboard />} />
        {/* Dashboard */}

        <Route path="/" element={<DashBoard />} />
        <Route path="/Employeedashboard" element={<EmployeeDashboardM />} />
        <Route path="/studentsDashboard" element={<Studentdash />} />

        {/* leads */}

        <Route path="/EnquiryForm" element={<EnquiryForm />} />
        {/* <Route path="/AddingLead" element={<AddingLead />} /> */}
        <Route path="/LeadFollowup" element={<Telecaller />} />
        <Route path="/LeadAssignment" element={<EnquiryAssignment />} />
        {/* <Route path="/LeadFollowup" element={<LeadFollowup />} /> */}


        {/* course */}

        <Route path="/BatchForm" element={<BatchForm />} />
        <Route path="/CourseForm" element={<CourseForm />} />
        <Route path="/SubjectForm" element={<SubjectForm />} />



        {/* Admission */}

        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/ApplicationProcessing" element={<ApplicationProcessing />} />
        <Route path="/EnrollmentAllocation" element={<EnrollmentAllocation />} />
        <Route path="/FeeInvoiceGeneration" element={<FeeInvoiceGeneration />} />


        {/* Employee */}

        <Route path="/AddFaculty" element={<FacultyForm />} />
        <Route path="/FacultyList" element={<FacultyList />} />
        <Route path="/LeaveRequestForm" element={<LeaveRequestForm />} />
        <Route path="/LeaveRequests" element={<LeaveRequests />} />
        <Route path="/WorkloadDistribution" element={<WorkloadDistribution />} />
        <Route path="/AttendanceTracker" element={<AttendanceTracker />} />
        <Route path="/AccessControl" element={<AccessControl />} />
        <Route path="/payview" element={<Payview />} />
        <Route path="/Payroll" element={<Payroll />} />
        <Route path="/PayRoll1" element={<PayRoll />} />
        <Route path="/Batchviewandedit" element={<Batchviewandedit />} />
        <Route path="/BatchAssignment" element={<BatchAssignment />} />

        {/* student */}

        <Route path="/Course" element={<Course />} />
        <Route path="/Subject" element={<Subject />} />
        <Route path="/Students" element={<StudentForm />} />
        <Route path="/StudentView" element={<StudentView />} />
        <Route path="/SAttendance" element={<Sattendance />} />
        <Route path="/StudentTimetable" element={<StudentTimetable />} />
        <Route path="/StudentCertificate" element={<StudentCertificate />} />
        <Route path="/Attendancetracking" element={<AttendanceTracking />} />
        <Route path="/studentatten" element={<StudentAttendance />} />


        {/* HRMS */}

        <Route path="/HireFromUs" element={<HireFromUs />} />
        <Route path="/joblist" element={<Joblist />} />
        <Route path="/internalhiring" element={<InternalHiring />} />

        {/* Student Profile */}

        {/* <Route path="/StudentProfile" element={<StudentProfile />} /> */}
        <Route path="/StudentCourse" element={<StudentCourse />} />
        <Route path="/StudentPayments" element={<StudentPayments />} />
        <Route path="/StudentFeedback" element={<StudentFeedback />} />
        <Route path="/Courseview" element={<StudentCourseDetails />} />
        <Route path="/StudentMyAttendance" element={<StudentMyAttendance />} />


        {/* Fee and accounting */}

        <Route path="/PaymentsAndInvoicing" element={<PaymentsAndInvoicing />} />
        <Route path="/FeeStructureManagement" element={<FeeStructureManagement />} />

        {/* Reports */}

        <Route path="/RegisterReport" element={<RegisterReport />} />
        <Route path="/AttendanceReport" element={<AttendanceReport />} />
        <Route path="/FeePaymentReport" element={<PaymentReport />} />
        <Route path="/WalkinsReport" element={<WalkinsReport />} />
        <Route path="/Counsellorreport" element={<Counsellorreport />} />

        {/* Comunication */}

        <Route path="/AutomatedNotifications" element={<AutomatedNotifications />} />
        <Route path="/CommunicationChannels" element={<CommunicationChannels />} />
        <Route path="/EventAnnouncementManagement" element={<EventAnnouncementManagement />} />

        {/* Faculty Profile */}
        <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/FacultyTimeTable" element={<FacultyTimeTable />} />
        <Route path="/Assignment" element={<Assignment />} />
        <Route path="/FacultyLeaveRequests" element={<FacultyLeaveRequests />} />
        <Route path="/FacultyCommunication" element={<FacultyCommunication />} />


       
        <Route path="/Invoice" element={<Invoice />} />
        {/* <Route path="/StudentDashboard" element={<StudentDashboard />} /> */}
        <Route path="/LeadFollowups" element={<TelecallerDashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
