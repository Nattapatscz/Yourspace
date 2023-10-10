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
      <h2>รายการงานของคุณ</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          className="table table-bordered"
          style={{ width: "85vw", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>ID</th>
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
              <th>ชื่อช่างผู้รับงาน</th>
              <th>image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.job_id}>
                <td>{job.job_id}</td>
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
                <td>{job.technicial_username}</td>
                <td>{job.img_url}</td>
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
    </div>
  );
};

export default Ownjob;
