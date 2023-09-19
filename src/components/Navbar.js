import React from "react";
// import { Link } from "react-router-dom";
import '../styles/Navbars.css'

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  text-content">
      
      <div className="container">

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars " ></i>
        </button>

      
        <a className=" logo" href="/About" > </a> 

       
         <div className="collapse navbar-collapse " id="navbarTogglerDemo03" >

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">

                  <a className="nav-link active " aria-current="page" href="/" >
                    หน้าแรก
                  </a>
              
                </li> 

                <li className="nav-item">

                  <a className="nav-link " href="/forum">
                    ติดต่อ
                  </a>
                  
                </li> 

                <li className="nav-item">

                  <a className="btn btn-warning" href="/About">
                    เข้าสู่ระบบ / สมัครสมาชิก 
                  </a>
                  
                </li> 
              </ul>

               

        </div>
      </div>

      
    </nav>
  );
}
