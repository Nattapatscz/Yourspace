// import axios from "axios";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import StatusTypeModal from "../../../components/StatusTypeModel";
import JobTypeModal from "../../../components/JobTypeModal";
const Joblist = () => {
  const [jobs, setJobs] = useState([]);
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
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const username = decodedToken.username;

  useEffect(() => {
    fetch("http://localhost:5000/jobst1")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const handleAcceptJob = (job) => {
    const updatedJobWithStatusAndTechnician = {
      ...job,
      status_id: 2,
      technicial_username: username,
    };

    window.Swal.fire({
      icon: "success",
      title: "รับงานสำเร็จ",
    });

    fetch(`http://localhost:5000/jobaccept/${job.job_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJobWithStatusAndTechnician),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedJobs = jobs.map((j) =>
          j.job_id === job.job_id ? updatedJobWithStatusAndTechnician : j
        );
        setJobs(updatedJobs);
      });
  };

  const thaiTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok",
  };

  return (
    <div className="useredit-con container">
      <div style={{ width: "80vw", margin: "20px auto" }}>
        <h2 style={{ fontSize: "20px", marginTop: "5px" }}>
          รายการงานที่ยังไม่ถูกดำเนินการ
        </h2>
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
        <table className="table table-striped" style={{ textAlign: "center" }}>
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
                </td>{" "}
                <td>{job.job_assign_time}</td>
                <td>{job.status_id}</td>
                <td>{job.job_type_id}</td>
                <td>{job.file_name}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAcceptJob(job)}
                  >
                    รับงาน
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Joblist;
