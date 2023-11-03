import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import StatusTypeModal from "../../../components/StatusTypeModel";
import JobTypeModal from "../../../components/JobTypeModal";

const Ownjob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showJobTypeModal, setShowJobTypeModal] = useState(false);
  const [showStatusTypeModal, setShowStatusTypeModal] = useState(false);

  const handleShowStatusTypeModal = () => {
    setShowStatusTypeModal(true);
  };

  const handleCloseStatusTypeModal = () => {
    setShowStatusTypeModal(false);
  };
  const handleShowJobTypeModal = () => {
    setShowJobTypeModal(true);
  };

  const handleCloseJobTypeModal = () => {
    setShowJobTypeModal(false);
  };
  // Decode Token เพื่อรับข้อมูล username
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const username = decodedToken.username;
  console.log(username);

  useEffect(() => {
    // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อรับรายการงานที่เป็นของคุณ
    fetch(`http://localhost:5000/joblist/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setLoading(false); // เมื่อรับข้อมูลเสร็จแล้วให้ปิดการโหลด
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการรับข้อมูลงาน: " + error.message);
        setLoading(false); // หากเกิดข้อผิดพลาดให้ปิดการโหลดเช่นกัน
      });
  }, [username]);

  const thaiTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok", // กำหนดเป็นเวลาของไทย
  };

  const handleCancelJob = (jobId) => {
    // ส่งคำขอ PUT ไปยังเซิร์ฟเวอร์เพื่อยกเลิกงาน
    fetch(`http://localhost:5000/cancelJob/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status_id: 1, // กำหนด status_id เป็น 1
        technicial_username: null, // กำหนด technicial_username เป็น null
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.Swal.fire({
          icon: "success",
          title: "ยกเลิกงานสำเร็จ",
        });
        setTimeout(() => {
          window.location.href = "/dashboard_tech/jobaccept";
        }, 3000);
        // อัปเดตรายการงานหลังยกเลิก
        const updatedJobs = jobs.map((job) => {
          if (job.job_id === jobId) {
            // อัปเดตเฉพาะงานที่ถูกยกเลิก
            return {
              ...job,
              status_id: 1, // กำหนด status_id เป็น 1
              technicial_username: null, // กำหนด technicial_username เป็น null
            };
          }
          return job;
        });

        setJobs(updatedJobs);
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการยกเลิกงาน: " + error.message);
      });
  };

  return (
    <div className="useredit-con container">
      <div style={{ width: "80vw", margin: "20px auto" }}>
        <h2 style={{ fontSize: "20px", marginTop: "5px" }}>รายการงานของคุณ</h2>
        <hr />
        <input
          class="form-control "
          type="search"
          style={{ width: "20%", float: "right" }}
          aria-label="Search"
          placeholder="ค้นหา"
        />
        <br />
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table
            className="table table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>ชื่อลูกค้า</th>
                <th>เบอร์โทรศัพท์</th>
                <th>เบอร์โทรศัพท์สำรอง</th>
                <th>สถานที่นัดหมาย</th>
                <th>รายละเอียดงาน</th>
                <th>วันที่นัดหมาย</th>
                <th>เวลาที่นัดหมาย</th>
                <th>
                  สถานะงาน
                  <i
                    class="fa-solid fa-circle-info"
                    onClick={handleShowStatusTypeModal}
                    style={{ marginLeft: "5px" }}
                  ></i>
                </th>
                <th>
                  ประเภทงาน
                  <i
                    class="fa-solid fa-circle-info"
                    onClick={handleShowJobTypeModal}
                    style={{ marginLeft: "5px" }}
                  ></i>
                </th>
                <th>รูปภาพ</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.job_id}>
                  <td>{job.member_username}</td>
                  <td>{job.job_tel}</td>
                  <td>{job.job_backup_tel}</td>
                  <td>{job.job_location}</td>
                  <td>{job.job_details}</td>
                  <td>
                    {new Intl.DateTimeFormat("th-TH", thaiTimeOptions).format(
                      new Date(job.job_assign_date)
                    )}
                  </td>
                  <td>{job.job_assign_time}</td>
                  <td>{job.status_id}</td>
                  <td>{job.job_type_id}</td>
                  <td>{job.file_name}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancelJob(job.job_id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <JobTypeModal
          show={showJobTypeModal}
          handleClose={handleCloseJobTypeModal}
        />
        <StatusTypeModal
          show={showStatusTypeModal}
          handleClose={handleCloseStatusTypeModal}
        />
        <nav aria-label="Page navigation example" style={{ float: "right" }}>
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                ก่อนหน้า
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a className="page-link" href="#">
                ถัดไป
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Ownjob;
