import React from "react";


//Component import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideNavaBar from "./Components/SideNavaBar/SideNavaBar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Register from './Pages/Register/Register'
import AddFaculty from './Pages/FacultyManagemnet/AddFaculty'
import FacultyList from './Pages/FacultyManagemnet/FacultyList'
import LeaveRequestForm from './Pages/FacultyManagemnet/LeaveRequestpage'
import LeaveRequests from './Pages/FacultyManagemnet/LeaveManagment'
import WorkloadDistribution from './Pages/FacultyManagemnet/Workloaddistribution'
import AttendanceTracker from './Pages/FacultyManagemnet/AttendanceTracker'
const App = () => {
  return (
    <div>
      <Router>

       <Header/>
       <SideNavaBar/>
       <Routes>
       <Route path='/' element={<DashBoard/>}/>
       <Route path='/Login' element={<Register/>}/>
         <Route path='/AddFaculty' element={<AddFaculty/>}/>
         <Route path='/FacultyList' element={<FacultyList/>}/>
         <Route path='/LeaveRequestForm' element={<LeaveRequestForm/>}/>
         <Route path='/LeaveRequests' element={<LeaveRequests/>}/>
         <Route path='/WorkloadDistribution' element={<WorkloadDistribution/>}/>
         <Route path='/AttendanceTracker' element={<AttendanceTracker/>}/>
       </Routes>
       </Router>
    </div>
  );
};

export default App;
