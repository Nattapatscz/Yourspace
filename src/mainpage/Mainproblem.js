import React from "react";
import "../styles/Mainproblem.css";
import { Link } from "react-router-dom";
const Mainproblem = () => {
  return (
  <>
    <br/>
      <main className="container card cardwidthscope">
        <div className="text-content card-body">
          
          <center>
             <h3 style={{fontSize:"22.5px"}}>
                &nbsp; &nbsp; &nbsp; &nbsp; แจ้งงานซ่อม
            </h3>
          </center>
         
        <br/>
          <div className="col" >
            
            <Link
              className="btn btn-warning  btn-lg"
              to="/request/subproblemlist/1"
              style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%"  }}
            >
          
              <h5 className="text-light" style={{fontSize:"22.5px"}}>
                <i
                  className="problem-text2 fas fa-faucet"
                  style={{ color: "white", fontSize: "28.5px" }}
                ></i>
                &nbsp; &nbsp; ระบบน้ำ
              </h5>
              </Link>
          </div>

        <br />

        <div className="col" >
          
          <Link
          className="btn btn-warning  btn-lg"
            to="/request/subproblemlist/2"
            style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}>

                     <h5 className="text-light" style={{fontSize:"22.5px"}}>
              <i className="problem-text2 fa-solid fa-lightbulb" style={{ color: "white", fontSize: "28.5px" }}></i>
              &nbsp; &nbsp; ระบบไฟ
            </h5>
            </Link>
        </div>

        <br />

        <div className="col" >
          
          <Link
          className="btn btn-warning  btn-lg"
            to="/request/subproblemlist/3"
            style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
          >
        
            <h5 className="text-light" style={{fontSize:"22.5px"}}>
              <i
                className="problem-text2 fa-solid fa-plug "
                style={{ color: "white", fontSize: "28.5px" }}
              ></i>
               &nbsp; &nbsp; เครื่องใช้ไฟฟ้า
            </h5>
          </Link>
        </div>

        <br />

        <div className="col" >
          <Link
          className="btn btn-warning  btn-lg"
            to="/request/subproblemlist/4"
            style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
          >
        
            <h5 className="text-light" style={{fontSize:"22.5px"}}>
              <i
                className="problem-text2 fa-solid fa-house "
                style={{ color: "white", fontSize: "28.5px" }}
              ></i>
               &nbsp; &nbsp; โครงสร้าง
            </h5>
          </Link>
        </div>

        <br />

        <div className="col" >
          
          <Link
            className="btn btn-warning  btn-lg"
            to="/request/subproblemlist/5"
            style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
          >
        
            <h5 className="text-light" style={{fontSize:"22.5px"}}>
              <i
                className="problem-text2 fa-solid fa-screwdriver-wrench"
                style={{ color: "white", fontSize: "28.5px" }}
              ></i>
               &nbsp; &nbsp; บริการและซ่อมบำรุง
            </h5>
          </Link>
        </div>
        <br />
        <div className="col" >
          
          <Link
            className="btn btn-warning  btn-lg"
            to="/request/subproblemlist/6"
            style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
          >
        
            <h5 className="text-light" style={{fontSize:"22.5px"}}>
              <i
                className="problem-text2 fa-solid fa-wrench"
                style={{ color: "white", fontSize: "28.5px" }}
              ></i>
               &nbsp; &nbsp; เบ็ดเตล็ด
            </h5>
          </Link>
        </div>

        <br />
        <br />

        <br />
        
      </div>
      </main>
      <br />
      

      <footer > 
        <section className="container">
          <section className="row">
            <section className="col ">

              <div className="logo"></div>

              <p>อีเมล: info@HOMEMA.net</p>
              <p>เลขที่ 5** ชั้น 1 ถนน -  แขวง -  เขต -  กรุงเทพมหานคร 10232.5</p>

               </section>
              <section className="col">
              
            <br/>
              <h5>HOMEMA</h5>
              <br />
              <p>ladsfsahdfiosciohdsh</p>
              </section>

              <section className="col">
                
            <br />
                <h5>ช่วยเหลิอ</h5>
                <br />
                <p>sadasdsadsadsadasdsad</p>
              </section>

              
              <br /><section className="col">
               <br /><h5>ช่วยเหลิอ</h5>
          
              <h5>ช่วยเหลิอ</h5>
              <br />


              </section>

          </section>
          
        </section>

         <br />

        <section className="container">
            <p>© Copyright 2015</p>
        </section>
      
      </footer>
      
  </>
    
  );
};

export default Mainproblem;
