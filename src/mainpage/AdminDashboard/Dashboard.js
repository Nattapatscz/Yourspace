import React from "react";
import "../../styles/Dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { useState } from "react";
import PrivateRoute from "../../PrivateRoute"; // Import your PrivateRoute component

export const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
};

// Use the PrivateRoute component to protect the dashboard route for admin users
const AdminDashboard = () => {
  return (
    <PrivateRoute path="/dashboard" element={<Dashboard />} requiredRole="admin" />
  );
};

export default AdminDashboard;