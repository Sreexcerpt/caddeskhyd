import React from "react";
import "../src/assets/assets/plugins/select2/css/select2.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideNavaBar from "./Components/SideNavaBar/SideNavaBar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Register from "./Pages/Register/Register";
import FacultyForm from "./Pages/FacultyManagemnet/AddFaculty";
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
import BatchAssignment from "./Pages/FacultyManagemnet/BatchAssignment";
import BatchForm from "./Pages/CourseManagement/Batch";
import CourseForm from "./Pages/CourseManagement/Course";
import SubjectForm from "./Pages/CourseManagement/Subject";
import StudentDashboard from "./Pages/StudentProfile/StudentDashboard/StudentDashboard";
import StudentCourse from "./Pages/StudentProfile/StudentCourse/StudentCourse";
// import StudentProfile from "./Pages/StudentProfile/StudentProfile/StudentProfile";
import StudentMyAttendance from "./Pages/StudentProfile/StudentMyAttendence/StudentMyAttendance";
import StudentPayments from "./Pages/StudentProfile/StudentPayments/StudentPayments";
// import FacultyForm from "./testing";
import PaymentsAndInvoicing from "./Pages/Fee&Accounting/PaymentsAndInvoicing/PaymentsAndInvoicing";
import Invoice from "./Pages/AdmissionManagement/Invoice";
import AutomatedNotifications from "./Pages/CommunicationNotifications/AutomatedNotifications";
import CommunicationChannels from "./Pages/CommunicationNotifications/CommunicationChannels";
import EventAnnouncementManagement from "./Pages/CommunicationNotifications/EventAnnouncementManagement";
import StudentFeedback from "./Pages/StudentProfile/StudentFeedback/StudentFeedback";
import FeeStructureManagement from "./Pages/Fee&Accounting/FeeStructureManagement/FeeStructureManagement";
import StudentCertificate from "./Pages/StudentManagement/StudentCertificate";
import StudentCourseDetails from "./Pages/StudentProfile/StudentCourseDetail/StudentCourseDetails";
import AccessControl from "./Pages/FacultyManagemnet/AccessControl";import PayRoll from "./Pages/Saff/PayRoll";
import FacultyDashboard from "./Pages/FacultyProfile/FacultyDashboard";
import Attendance from "./Pages/FacultyProfile/Attendance";
import FacultyTimeTable from "./Pages/FacultyProfile/FacultyTimeTable";
import Assignment from "./Pages/FacultyProfile/Assignment";
import FacultyLeaveRequests from "./Pages/FacultyProfile/FacultyLeaveRequests";
import FacultyCommunication from "./Pages/FacultyProfile/FacultyCommunication";
import Payroll from "./Pages/FacultyManagemnet/PayRole";
import Payview from "./Pages/FacultyManagemnet/Payview";
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      {!isLoginPage && <SideNavaBar />}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/testing" element={<FacultyForm />} />
        <Route path="/Login" element={<Register />} />
        <Route path="/AddFaculty" element={<FacultyForm />} />
        <Route path="/BatchForm" element={<BatchForm />} />
        <Route path="/CourseForm" element={<CourseForm />} />
        <Route path="/SubjectForm" element={<SubjectForm />} />
        <Route path="/Payroll" element={<Payroll/>}/>
        <Route path="/FacultyList" element={<FacultyList />} />
        <Route path="/PaymentsAndInvoicing" element={<PaymentsAndInvoicing />} />
        <Route path="/StudentMyAttendance" element={<StudentMyAttendance />} />
        <Route path="/FeeStructureManagement" element={<FeeStructureManagement />} />
        <Route path="/Courseview" element={<StudentCourseDetails/>}/>
        <Route path="/AccessControl" element={<AccessControl />} />
        <Route path="/payview" element={<Payview/>}/>
        {/* <Route path="/StudentProfile" element={<StudentProfile />} /> */}
        <Route path="/StudentCertificate" element={<StudentCertificate />} />
        <Route path="/StudentCourse" element={<StudentCourse />} />
        <Route path="/StudentPayments" element={<StudentPayments />} />
        <Route path="/StudentFeedback" element={<StudentFeedback/>}/>
        <Route path="/BatchAssignment" element={<BatchAssignment />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
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
        <Route path="/PayRoll" element={<PayRoll/>}/>
        <Route path="/FacultyDashboard" element={<FacultyDashboard/>}/>
        <Route path="/Attendance" element={<Attendance/>}/>
        <Route path="/FacultyTimeTable" element={<FacultyTimeTable/>}/>
        <Route path="/Assignment" element={<Assignment/>}/>
        <Route path="/FacultyLeaveRequests" element={<FacultyLeaveRequests/>}/>
        <Route path="/FacultyCommunication" element={<FacultyCommunication/>}/>
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
