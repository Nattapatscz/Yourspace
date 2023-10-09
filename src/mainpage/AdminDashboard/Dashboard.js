import React from "react";
import "../../styles/Dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { useState } from "react";

export const Dashboard = ({ userRoles }) => {
  console.log("UserRoles:", userRoles);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Check the user's role here
  if (userRoles !== "admin") {
    return <p>Access denied. Not an Admin!</p>;
  }
  

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
};

export default Dashboard;
