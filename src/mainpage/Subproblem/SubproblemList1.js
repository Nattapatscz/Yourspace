import React, { useState } from "react";
import "../../styles/SubproblemList.css";
import axios from "axios";

const SubproblemList1 = () => {
  const [selectedFile, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("โปรดเลือกไฟล์ก่อน");
      return;
    }
    
    if (selectedFile.length === 0) {
      alert('Please select at least one file before submitting.');
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < selectedFile.length; i++) {
      formData.append('sampleFiles', selectedFile[i]);
    }

    // Add other form fields to the formData object
    formData.append("job_location", event.target.job_location.value);
    formData.append("job_tel", event.target.job_tel.value);
    formData.append("job_backup_tel", event.target.job_backup_tel.value);
    formData.append("job_assign_date", event.target.job_assign_date.value);
    formData.append("job_assign_time", event.target.job_assign_time.value);
    formData.append("job_details", event.target.job_details.value);
    formData.append("job_type", event.target.job_type.value);

    // Send the form data to the server using Axios
    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        // Handle success response here
        console.log(response.data);
        alert("Data sent successfully");
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        alert("Error sending data: " + error.message); // Display the error message
      });
  };

  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <br />
          <h1>แบบฟอร์มรายละเอียดการซ่อม</h1>
          <br />
          <label className="form-label">ประเภทงาน</label>
          <select
            className="form-select"
            name="job_type" // Add name attribute
          >
            <option>ปั้มน้ำ</option>
            <option>สุขภัณฑ์</option>
            <option>ส้วมตัน</option>
            <option>ท่อตัน</option>
            <option>ระบบน้ำ-ระบบประปา</option>
            <option>ท่อน้ำ-ท่อสุขภัณฑ์</option>
            <option>น้ำรั่วซึม</option>
          </select>
          <br />

          <div className="mid">
            <label className="form-label">ที่อยู่</label>
            <input
              type="text"
              id="job_location"
              name="job_location"
              className="form-control"
              required
            />
            <br />
            <label className="form-label">เบอร์ติดต่อ</label>
            <input
              type="text"
              id="job_tel"
              name="job_tel"
              className="form-control"
              required
            />
            <br />
            <label className="form-label">เบอร์ติดต่อสำรอง</label>
            <input
              type="text"
              id="job_backup_tel"
              name="job_backup_tel"
              className="form-control"
              required
            />
            <br />
            <label className="form-label">
              วันที่สะดวกรับบริการ (ช่างอาจไม่พร้อมให้บริการ ณ วันเวลาดังกล่าว)
            </label>
            <input
              type="date"
              id="job_assign_date"
              name="job_assign_date"
              className="form-control"
              required
            />
            <br />
            <label className="form-label">ช่วงเวลา</label>
            <input
              type="time"
              id="job_assign_time"
              name="job_assign_time"
              className="form-control"
              required
            />
            <br />
            <label className="form-label">กรุณากรอกรายละเอียดเพิ่มเติม</label>
            <textarea
              cols="81"
              rows="10"
              id="job_details"
              name="job_details"
              className="form-control"
            ></textarea>
          </div>
          <br />

          <div className="bottom">
            <label className="form-label">รูปภาพเพิ่มเติม</label>
            <input
              className="form-control form-control-sm"
              type="file"
              name="sampleFile"
              required
              onChange={handleFileChange}
            />
            <br />
            <input
              className="form-control form-control-sm"
              type="file"
              name="sampleFile"
              required
              onChange={handleFileChange}
            />
            <br />
            <input
              className="form-control form-control-sm"
              type="file"
              name="sampleFile"
              required
              onChange={handleFileChange}
            />
            <br />

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                required
              />
              <label className="form-check-label">
                เลือกวิธีชำระค่าบริการ
              </label>
            </div>
          </div>
          <br />
          <br />

          <div className="d-grid gap-2">
            <button className="btn btn-warning" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" type="button">
              reset
            </button>
          </div>
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default SubproblemList1;
