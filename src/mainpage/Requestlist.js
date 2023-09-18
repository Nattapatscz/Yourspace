import React from "react";
import "../styles/Requestlist.css";
import { Link } from "react-router-dom";

const Requestlist = () => {
  return (
    <div className="request-container">
      <img
        className="request-banner"
        src={require("../Photo/img2.jpg")}
        alt=""
      ></img>

      <Link to="/request/mainproblemlist" style={{ textDecoration: "none" }}>
        <button type="button" class="request-btn btn-success">
          <p>
            <i class="fa-solid fa-plus"></i>แจ้งงานซ่อม
          </p>
        </button>
      </Link>

      <p>บริการแนะนำ</p>
      <div className="card-container">
        <div className="card-list">
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">Smart Home อุปกรณ์พร้อมติดตั้ง</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿15000</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">ฉีดพ่นน้ำยาฆ่าเชื้อ</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿1990</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>บริการล้าง ทำความสะอาด</p>
      <div className="card-container">
        <div className="card-list">
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">ล้างแอร์</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿650</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">ล้างเครื่องซักผ้า</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>กำจัดไรฝุ่น และฆ่าเชื้อ</p>
      <div className="card-container">
        <div className="card-list">
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">กำจัดไรฝุ่นบนที่นอน-โซฟา</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿1390</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">กำจัดคราบเปื้อน ซักที่นอน-โซฟา</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿1890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>อุปกรณ์คอมพิวเตอร์</p>
      <div className="card-container">
        <div className="card-list">
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">ติดตั้งและแก้ไขปัญหาเครื่อง MAC</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿1605</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">โอนย้ายข้อมูล (Backup) เครื่อง MAC</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿2140</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>อุปกรณ์ Smart Home</p>
      <div className="card-container">
        <div className="card-list">
          <div class="card">
            <img
              src={require("../Photo/img2.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="top">
                <p class="card-text">Smart Home อุปกรณ์พร้อมติดตั้ง</p>
              </div>
              <div class="bottom">
                <p class="card-price"> ฿15000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestlist;
