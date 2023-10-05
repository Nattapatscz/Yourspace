import React, { useState } from "react";
import "../styles/Loginpage.css";
import axios from "axios"; 

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("Submitting login form"); 
      const response = await axios.post("http://localhost:5000/login", { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token);

      window.Swal.fire({
        icon: 'success',
        title: 'Login Success',
      })

      setTimeout(() => {
        window.location.href = "/request/mainproblemlist";
      }, 2000);
      
    } catch (error) {
      // console.log("Login error:", error); 
      window.Swal.fire({
        icon: 'error',
        title: 'Invalid email or password',
      })
      
    }
  };

  return (
    <>
          <div className="container-fluid">
            <div className="container cardwidthscope">
              <br />
               <div className="card container block" >
              <div className="card-body"> 
              <h2 className="card-title">Login</h2>
              <br />
              <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                      className="form-control"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                 <button  type="submit"  className="btn btn-success">Login</button> 
                   

              </form>
          
              <br/>

              <a href="/register" style={{textDecoration:"none"}}>
                  สมัครสมาชิก 
              </a>

            </div>

              </div>
            </div>
           
              
             
            </div>
    </>
         
  );
}

export default Login;
