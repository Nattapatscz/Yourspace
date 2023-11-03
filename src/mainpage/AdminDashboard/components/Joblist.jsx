// import axios from "axios";
import React, { useState, useEffect } from "react";
import JobTypeModal from "../../../components/JobTypeModal";
import StatusTypeModal from "../../../components/StatusTypeModel";
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

  const [editedJob, setEditedJob] = useState({
    job_id: "",
    job_tel: "",
    job_details: "",
    job_assign_date: "",
    job_assign_time: "",
    job_backup_tel: "",
    job_location: "",
    member_username: "",
    status_id: "",
    job_type_id: "",
    technicial_username: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/job")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setJobs(data);
      });
  }, []);
  const handleDeleteClick = (jobId) => {
    window.Swal.fire({
      title: "คุณต้องการลบงานนี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job/${jobId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              window.Swal.fire(
                "Deleted!",
                "The job has been deleted.",
                "success"
              );
              const updatedJobs = jobs.filter((job) => job.job_id !== jobId);
              setJobs(updatedJobs);
            } else {
              window.Swal.fire("Error", "Failed to delete the job.", "error");
            }
          });
      }
    });
  };

  const handleEditClick = (job) => {
    setEditedJob(job);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedJob({ ...editedJob, [name]: value });
  };

  const handleUpdateClick = () => {
    window.Swal.fire({
      icon: "success",
      title: "Update Success",
    });
    fetch(`http://localhost:5000/job/${editedJob.job_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedJob),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedJobs = jobs.map((job) =>
          job.job_id === editedJob.job_id ? editedJob : job
        );
        setJobs(updatedJobs);
        setEditedJob({
          job_id: "",
        });
      });
  };
  const thaiTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",

    hour12: false,
    timeZone: "Asia/Bangkok", // กำหนดเป็นเวลาของไทย
  };
  return (
    <div className="useredit-con container">
      <form>
        <h2 style={{ fontSize: "20px", marginTop: "5px" }}>แก้ไขงาน</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                className="form-control"
                name="job_id"
                value={editedJob.job_id}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>เบอร์โทรศัพท์:</label>
              <input
                type="text"
                className="form-control"
                name="job_tel"
                value={editedJob.job_tel}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>รายละเอียดงาน:</label>
              <input
                type="text"
                className="form-control"
                name="job_details"
                value={editedJob.job_details}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>วันที่นัดหมาย:</label>
              <input
                type="text"
                className="form-control"
                name="job_assign_date"
                value={editedJob.job_assign_date}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>เวลาที่นัดหมาย:</label>
              <input
                type="text"
                className="form-control"
                name="job_assign_time"
                value={editedJob.job_assign_time}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>เบอร์โทรศัพท์สำรอง:</label>
              <input
                type="text"
                className="form-control"
                name="job_backup_tel"
                value={editedJob.job_backup_tel}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>สถานที่นัดหมาย:</label>
              <input
                type="text"
                className="form-control"
                name="job_location"
                value={editedJob.job_location}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>ชื่อลูกค้า:</label>
              <input
                type="text"
                className="form-control"
                name="member_username"
                value={editedJob.member_username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>สถานะงาน:</label>
              <input
                type="text"
                className="form-control"
                name="status_id"
                value={editedJob.status_id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>ประเภทงาน:</label>
              <input
                type="text"
                className="form-control"
                name="job_type_id"
                value={editedJob.job_type_id}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>ชื่อช่างผู้รับงาน:</label>
              <input
                type="text"
                className="form-control"
                name="technicial_username"
                value={editedJob.technicial_username}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateClick}
          style={{ marginTop: "5px" }}
        >
          Update
        </button>
      </form>
      <br />
      <div style={{ width: "88vw", margin: "20px auto" }}>
        <h2 style={{ fontSize: "20px", marginTop: "5px" }}>รายการงาน</h2>
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
              <th>ชื่อช่างผู้รับงาน</th>
              <th>รูปภาพ</th>
              <th colSpan={"2"}>Action</th>
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
                <td>{job.technicial_username}</td>
                <td>{job.file_name}</td>

                {/* <td>
                <img
                  src={require("../../../../backend/public/images/job1.jpg")}
                  alt=""
                />
              </td> */}
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEditClick(job)}
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(job.job_id)}
                  >
                    ยกเลิก
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
