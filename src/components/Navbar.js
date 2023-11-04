import React, { useState, useEffect } from "react";
import "../styles/Navbars.css";

export default function Navbar() {
  function delete_token() {
    localStorage.removeItem("token");
  }

  function ProtectedData() {
    const [error, setError] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      fetch("https://homema-api.onrender.com/protected", {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error retrieving protected data");
          }
          return response.json();
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);

    return (
      <>
        <div>
          {error ? (
            <a className=" btn btn-warning" href="/login">
              เข้าสู่ระบบ / สมัครสมาชิก
            </a>
          ) : (
            <a
              className=" btn btn-warning"
              href="/login"
              onClick={delete_token}
            >
              Logout
            </a>
          )}
        </div>
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  text-content shadow-sm rounded">
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
          <i className="fa-solid fa-bars "></i>
        </button>

        <div
          className="navbar-brand card logos"
          style={{ width: "350px", height: "200px", border: "none" }}
        ></div>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/">
                หน้าแรก
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/list">
                รายชื่อผู้ให้บริการ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/Report">
                รายการงาน
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/forum">
                ติดต่อ
              </a>
            </li>
          </ul>

          <div className="d-flex">{ProtectedData()}</div>
        </div>
      </div>
    </nav>
  );
}
