import React from "react";


//Component import//
import Header from "./Components/Header/Header";
import SideNavaBar from "./Components/SideNavaBar/SideNavaBar";
import DashBoard from "./Pages/DashBoard/DashBoard";

const App = () => {
  return (
    <div>
       <Header/>
       <SideNavaBar/>
       <DashBoard/>
    </div>
  );
};

export default App;
