import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">REPAIR SYSTEM</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        {/* <li className="sidebar-list-item">
          <a href="/">
            <BsGrid1X2Fill className="icon" /> Home
          </a>
        </li> */}
        <li className="sidebar-list-item">
          <a href="/dashboard/joblist">
            <BsFillArchiveFill className="icon" /> Jobs
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/dashboard/categories">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/dashboard/edituser">
            <BsPeopleFill className="icon" /> Users
          </a>
        </li>
        {/* <li className="sidebar-list-item">
          <a href="s">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li> */}
        {/* <li className="sidebar-list-item">
          <a href="s">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li> */}
        <li className="sidebar-list-item">
          <a href="s">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
