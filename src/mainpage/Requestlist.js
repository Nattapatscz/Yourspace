import React from "react";
import "../styles/Requestlist.css";
import { Link } from "react-router-dom";

const Requestlist = () => {
  return (

    <div className="container-fluid bkg">

      <div className="container"> 
          <div className="request-container">

            <br />

            <br />

          <img className="request-banner" src={require("../Photo/img2.jpg")} alt=""></img>

           <Link to="/request/mainproblemlist" className="btn btn-warning request-btn ">
              <p style={{color:"black"}}>
                  <i className="fa-solid fa-plus"> </i> แจ้งงานซ่อม
              </p>
          </Link>

          <br />
          
          <p>บริการแนะนำ</p>

          <div className="card-container">
            <div className="card-list">
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">Smart Home อุปกรณ์พร้อมติดตั้ง</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿15000</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ฉีดพ่นน้ำยาฆ่าเชื้อ</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <p>บริการล้าง ทำความสะอาด</p>

          <div className="card-container">
            <div className="card-list">
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ล้างแอร์</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿650</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ล้างเครื่องซักผ้า</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <p>กำจัดไรฝุ่น และฆ่าเชื้อ</p>

          <div className="card-container">
            <div className="card-list">
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">กำจัดไรฝุ่นบนที่นอน-โซฟา</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1390</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">กำจัดคราบเปื้อน ซักที่นอน-โซฟา</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <p>อุปกรณ์คอมพิวเตอร์</p>

          <div className="card-container">
            <div className="card-list">
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ติดตั้งและแก้ไขปัญหาเครื่อง MAC</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1605</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">โอนย้ายข้อมูล (Backup) เครื่อง MAC</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿2140</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <p>อุปกรณ์ Smart Home</p>

          <div className="card-container">
            <div className="card-list">
              <div className="card">
                <img
                  src={require("../Photo/img2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">Smart Home อุปกรณ์พร้อมติดตั้ง</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿15000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          </div>

          <br / >
            

      </div>

            {/* <footer className="container">
              helloo
            </footer> */}

    </div>
    
  );
};

export default Requestlist;
