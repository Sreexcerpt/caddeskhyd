import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideNavaBar from "./Components/SideNavaBar/SideNavaBar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Register from "./Pages/Register/Register";
import AddFaculty from "./Pages/FacultyManagemnet/AddFaculty";
import FacultyList from "./Pages/FacultyManagemnet/FacultyList";
import LeaveRequestForm from "./Pages/FacultyManagemnet/LeaveRequestpage";
import LeaveRequests from "./Pages/FacultyManagemnet/LeaveManagment";
import WorkloadDistribution from "./Pages/FacultyManagemnet/Workloaddistribution";
import AttendanceTracker from "./Pages/FacultyManagemnet/AttendanceTracker";
import Course from "./Pages/StudentManagement/Course";
import Subject from "./Pages/StudentManagement/Subject";
import StudentForm from "./Pages/StudentManagement/StudentForm";
import StudentView from "./Pages/StudentManagement/StudentView";
import RegisterReport from "./Pages/Reports/RegisterReport";
import AttendanceReport from "./Pages/Reports/AttendanceReport";
import PaymentReport from "./Pages/Reports/PaymentReport";
import WalkinsReport from "./Pages/Reports/WalkinsReport";
import Sattendance from "./Pages/StudentManagement/SAttendance";
import StudentTimetable from "./Pages/StudentManagement/StudentTimetable";
import AddingLead from "./Pages/FacultyManagemnet/AddingLead";
import LeadAssignment from "./Pages/FacultyManagemnet/LeadAssignment";
import LeadFollowup from "./Pages/FacultyManagemnet/LeadFollowup";
import Counsellorreport from "./Pages/FacultyManagemnet/Counsellorreport";
import ApplicationProcessing from "./Pages/AdmissionManagement/ApplicationProcessing";
import EnrollmentAllocation from "./Pages/AdmissionManagement/EnrollmentAllocation";
import FeeInvoiceGeneration from "./Pages/AdmissionManagement/FeeInvoiceGeneration";
import AttendanceTracking from "./Pages/StudentManagement/attendancetracking";
import StudentAttendance from "./Pages/StudentManagement/studentattendance";
import Invoice from "./Pages/AdmissionManagement/Invoice";
import AutomatedNotifications from "./Pages/CommunicationNotifications/AutomatedNotifications";
import CommunicationChannels from "./Pages/CommunicationNotifications/CommunicationChannels";
import EventAnnouncementManagement from "./Pages/CommunicationNotifications/EventAnnouncementManagement";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      {!isLoginPage && <SideNavaBar />}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Login" element={<Register />} />
        <Route path="/AddFaculty" element={<AddFaculty />} />
        <Route path="/FacultyList" element={<FacultyList />} />
        <Route path="/LeaveRequestForm" element={<LeaveRequestForm />} />
        <Route path="/LeaveRequests" element={<LeaveRequests />} />
        <Route path="/WorkloadDistribution" element={<WorkloadDistribution />} />
        <Route path="/AttendanceTracker" element={<AttendanceTracker />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Subject" element={<Subject />} />
        <Route path="/Students" element={<StudentForm />} />
        <Route path="/StudentView" element={<StudentView />} />
        <Route path="/SAttendance" element={<Sattendance />} />
        <Route path="/StudentTimetable" element={<StudentTimetable />} />
        <Route path="/RegisterReport" element={<RegisterReport />} />
        <Route path="/AttendanceReport" element={<AttendanceReport />} />
        <Route path="/Attendancetracking" element={<AttendanceTracking/>} />
        <Route path="/studentatten" element={<StudentAttendance />} />
        <Route path="/FeePaymentReport" element={<PaymentReport />} />
        <Route path="/WalkinsReport" element={<WalkinsReport />} />
        <Route path="/AddingLead" element={<AddingLead />} />
        <Route path="/LeadAssignment" element={<LeadAssignment />} />
        <Route path="/LeadFollowup" element={<LeadFollowup />} />
        <Route path="/Counsellorreport" element={<Counsellorreport />} />
        <Route path="/ApplicationProcessing" element={<ApplicationProcessing />} />
        <Route path="/EnrollmentAllocation" element={<EnrollmentAllocation/>}/>
        <Route path="/FeeInvoiceGeneration" element={<FeeInvoiceGeneration/>}/>
        <Route path="/Invoice" element={<Invoice/>}/>
        <Route path="/AutomatedNotifications" element={<AutomatedNotifications/>}/>
        <Route path="/CommunicationChannels" element={<CommunicationChannels/>}/>
        <Route path="/EventAnnouncementManagement" element={<EventAnnouncementManagement/>}/>
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
