import React from "react";
import "../styles/Mainproblem.css";
import { Link } from "react-router-dom";
const Mainproblem = () => {
  return (
    <div className="mainproblem-container">
      <div className="problem-list">
        <p className="problem-header">แจ้งงานซ่อม</p>
        <div className="problem-box">
          <Link
            to="/request/subproblemlist/1"
            style={{ textDecoration: "none" }}
          >
            <p className="problem-text">
              <i
                class="fas fa-faucet"
                style={{ color: "orange", fontSize: "30px" }}
              ></i>
              ระบบน้ำ
            </p>
          </Link>
        </div>
        <hr />

        <div className="problem-box">
          <Link
            to="/request/subproblemlist/2"
            style={{ textDecoration: "none" }}
          >
            <p className="problem-text">
              <i
                class="fa-solid fa-lightbulb"
                style={{ color: "orange", fontSize: "30px" }}
              ></i>
              ระบบไฟ
            </p>
          </Link>
        </div>
        <hr />
        <div className="problem-box">
          <Link
            to="/request/subproblemlist/3"
            style={{ textDecoration: "none" }}
          >
            <p className="problem-text">
              <i
                class="fa-solid fa-plug"
                style={{ color: "orange", fontSize: "30px" }}
              ></i>
              เครื่องใช้ไฟฟ้า
            </p>
          </Link>
        </div>
        <hr />
        <div className="problem-box">
          <Link
            to="/request/subproblemlist/4"
            style={{ textDecoration: "none" }}
          >
            <p className="problem-text">
              <i
                class="fa-solid fa-house"
                style={{ color: "orange", fontSize: "30px" }}
              ></i>
              โครงสร้าง
            </p>
          </Link>
        </div>
        <hr />
        <div className="problem-box">
          <Link
            to="/request/subproblemlist/5"
            style={{ textDecoration: "none" }}
          >
            <p className="problem-text">
              <i
                class="fa-solid fa-screwdriver-wrench"
                style={{ color: "orange", fontSize: "30px" }}
              ></i>
              บริการและซ่อมบำรุง
            </p>
          </Link>
        </div>
        <hr />
        <div className="problem-box">
          <Link
            to="/request/subproblemlist/6"
            style={{ textDecoration: "none" }}
          >
            <p className="problem-text">
              <i
                class="fa-solid fa-wrench"
                style={{ color: "orange", fontSize: "30px" }}
              ></i>
              เบ็ดเตล็ด
            </p>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Mainproblem;
