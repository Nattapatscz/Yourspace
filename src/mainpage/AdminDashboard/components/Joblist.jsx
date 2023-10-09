// import axios from "axios";
import React, { useState, useEffect } from "react";
const Joblist = () => {
  const [jobs, setJobs] = useState([]);

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
        setJobs(data);
      });
  }, []);
  const handleDeleteClick = (jobId) => {
    window.Swal.fire({
      title: "Are you sure you want to delete this job?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
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
        <h2>แก้ไขงาน</h2>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            className="form-control"
            name="job_id"
            value={editedJob.job_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Telephone:</label>
          <input
            type="text"
            className="form-control"
            name="job_tel"
            value={editedJob.job_tel}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Details:</label>
          <input
            type="text"
            className="form-control"
            name="job_details"
            value={editedJob.job_details}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Assign Date:</label>
          <input
            type="text"
            className="form-control"
            name="job_assign_date"
            value={editedJob.job_assign_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Assign Time (UTC):</label>
          <input
            type="text"
            className="form-control"
            name="job_assign_time"
            value={editedJob.job_assign_time}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Backup Telephone:</label>
          <input
            type="text"
            className="form-control"
            name="job_backup_tel"
            value={editedJob.job_backup_tel}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            name="job_location"
            value={editedJob.job_location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Member Username:</label>
          <input
            type="text"
            className="form-control"
            name="member_username"
            value={editedJob.member_username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Status ID:</label>
          <input
            type="text"
            className="form-control"
            name="status_id"
            value={editedJob.status_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Job Type ID:</label>
          <input
            type="text"
            className="form-control"
            name="job_type_id"
            value={editedJob.job_type_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Technical Username:</label>
          <input
            type="text"
            className="form-control"
            name="technicial_username"
            value={editedJob.technicial_username}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </form>
      <h2>รายการงาน</h2>
      <table
        className="table table-bordered"
        style={{ width: "50vw", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>job_id</th>
            <th>job_tel</th>
            <th>job_details</th>
            <th>job_assign_date</th>
            <th>job_assign_time</th>
            <th>job_backup_tel</th>
            <th>job_location</th>
            <th>member_username</th>
            <th>status_id</th>
            <th>job_type_id</th>
            <th>technicial_username</th>
            <th colSpan={"2"}>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.job_id}>
              <td>{job.job_id}</td>
              <td>{job.job_tel}</td>
              <td>{job.job_details}</td>
              <td>
                {new Intl.DateTimeFormat("th-TH", thaiTimeOptions).format(
                  new Date(job.job_assign_date)
                )}
              </td>{" "}
              <td>{job.job_assign_time}</td>
              <td>{job.job_backup_tel}</td>
              <td>{job.job_location}</td>
              <td>{job.member_username}</td>
              <td>{job.status_id}</td>
              <td>{job.job_type_id}</td>
              <td>{job.technicial_username}</td>
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
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(job.job_id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Joblist;
