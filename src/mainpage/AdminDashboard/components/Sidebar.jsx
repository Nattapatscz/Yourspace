import React from "react";
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  function delete_token() {
    localStorage.removeItem("token");
  }
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

        <li className="sidebar-list-item">
          <a href="/dashboard/joblist">
            <BsFillArchiveFill className="icon" /> Jobs
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/dashboard/edituser">
            <BsPeopleFill className="icon" /> Users
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/login" onClick={delete_token}>
            <i class="fa-solid fa-right-from-bracket"></i> &nbsp;Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
