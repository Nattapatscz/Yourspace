import React from "react";
import "../../styles/Dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PrivateRoute from "../../PrivateRoute";
import Home from "./components/Home";
export const Dashboard1 = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
};

const TechDashboard = () => {
  return (
    <PrivateRoute
      path="/dashboard_tech"
      element={<Dashboard1 />}
      requiredRolse="Technician_ALL"
    />
  );
};

export default TechDashboard;
