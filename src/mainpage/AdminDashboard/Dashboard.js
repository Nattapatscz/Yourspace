import React from "react";
import "../../styles/Dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { useState } from "react";
import PrivateRoute from "../../PrivateRoute";

export const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // if (userRoles !== "admin") {
  //   return <p>Access denied. Not an Admin!</p>;
  // }
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

const AdminDashboard = () => {
  return (
    <PrivateRoute
      path="/dashboard"
      element={<Dashboard />}
      requiredRolse="admin"
    />
  );
};

export default AdminDashboard;
