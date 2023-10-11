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
      <h2 style={{ textAlign: "center" }}>รายการงานที่ยังไม่ถูกดำเนินการ</h2>
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
              </td>{" "}
              <td>{job.job_assign_time}</td>
              <td>{job.status_id}</td>
              <td>{job.job_type_id}</td>
              <td>{job.technicial_username}</td>
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
    </div>
  );
};

export default Joblist;
