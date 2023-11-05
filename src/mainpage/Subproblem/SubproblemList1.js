import React, { useState } from "react";
import "../../styles/SubproblemList.css";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Navbar from "../../components/Navbar";

const SubproblemList1 = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImageURL, setSelectedImageURL] = useState(null); // ใช้ null แทนสตริงว่าง
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [job_location, setJobLocation] = useState("");
  const [job_tel, setJobTel] = useState("");
  const [job_backup_tel, setJobBackupTel] = useState("");
  const [job_assign_date, setJobAssignDate] = useState("");
  const [job_assign_time, setJobAssignTime] = useState("");
  const [job_details, setJobDetails] = useState("");
  const [filename, setfilename] = useState("");
  const [status_id]= useState("1");
  const [job_type_id, setJobTypeID] = useState("100");
  // Decode Token เพื่อรับข้อมูล username
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  let member_username = decodedToken.username;

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);

    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setSelectedImageURL(imageUrl);
    } else {
      setSelectedImageURL(null); // ตั้งค่าเป็น null ถ้าไม่มีไฟล์ที่เลือก
    }
  };

  const uploadToFolder = (event) => {
    event.preventDefault();
    if (selectedFiles.length === 0) {
      alert("Please select at least one file before uploading.");
      return;
    }
  
    const formData = new FormData();
  
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.size > 1024 * 1024) {
        // ตรวจสอบขนาดของไฟล์ (1MB = 1024 * 1024 ไบต์)
        window.Swal.fire({
          icon: "error",
          title: " Maximum file size is 1MB.",
        });
        return;
      }
  
      formData.append("sampleFiles", file);
      console.log(file.name);
      setfilename(file.name);
    }
  
    setUploadedFiles(formData.sampleFiles);
    console.log(uploadedFiles);
  
    axios
      .post("https://homema-api.onrender.com/upload-to-folder", formData)
      .then((response) => {
        // Handle success response here
        console.log(response.data);
        setUploadStatus("Files uploaded to folder successfully.");
  
        // ตั้งค่า URL ของไฟล์ที่เลือก
        if (selectedFiles.length > 0) {
          const imageUrl = URL.createObjectURL(selectedFiles[0]);
          setSelectedImageURL(imageUrl);
        }
        // เพิ่มไฟล์ที่อัปโหลดลงใน uploadedFiles
        // setUploadedFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        setUploadStatus("Error uploading files to folder: " + error.message);
      });
  };
  
  const handleSubmit = (event) => {
    console.log(member_username);
    event.preventDefault();
    console.log("jobtype = " + job_type_id);
    if (selectedFiles.length === 0) {
      alert("Please select at least one file before uploading to MySQL.");
      return;
    }
    console.log(member_username);

    const formData = new FormData();

    formData.append("sampleFiles", uploadedFiles);
    formData.append("fileName", filename);
    // Add other form fields to the formData object
    formData.append("job_location", job_location);
    formData.append("job_tel", job_tel);
    formData.append("job_backup_tel", job_backup_tel);
    formData.append("job_assign_date", job_assign_date);
    formData.append("job_assign_time", job_assign_time);
    formData.append("job_details", job_details);
    formData.append("job_type_id", job_type_id);
    formData.append("status_id", status_id);
    formData.append("member_username", member_username);

    axios
      .post("https://homema-api.onrender.com/upload-to-mysql", formData)
      .then((response) => {
        // Handle success response here
        console.log(response.data);

        window.Swal.fire({
          icon: "success",
          title: "Add job Success",
        });

        setUploadStatus("Files uploaded to MySQL successfully.");
        window.location.href = "/Report";
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        console.log(JSON.stringify(formData));
        
        window.Swal.fire({
          icon: "error",
          title: "Please upload image before submit",
        });

        setUploadStatus("Error uploading files to MySQL: " + error.message);

      });
  };

  return (
    <>
      <Navbar />
        <div className="subproblem-container">
          <div className="form-content">
            <br></br>
            <h1>File Upload Form</h1>
            <form onSubmit={uploadToFolder}>
              <div>
                <label>Select Files:</label>
                <input
                  type="file"
                  name="sampleFiles"
                  className="form-control"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <div></div>
              {uploadStatus && <p>{uploadStatus}</p>}<br/>

              <h2>Uploaded Files:</h2>

              {/* Display the selected image */}
              {selectedImageURL && (
                <div>
                  <p>รูปที่เลือก:</p>
                  <img
                    src={selectedImageURL}
                    alt="Selected"
                    style={{ width: "450px" }}
                  />
                </div>
              )}
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "8px" }}
              >
                Upload to Folder
              </button>
            </form>
            <br />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <br />
              <h1>แบบฟอร์มรายละเอียดการซ่อม</h1>
              <br />
              <label className="form-label">ประเภทงาน</label>
              <select
                className="form-select"
                value={job_type_id} // Use jobType, not job_type
                onChange={(e) => setJobTypeID(e.target.value)}
              >
                <option value={100}>ปั้มน้ำ</option>
                <option value={101}>สุขภัณฑ์</option>
                <option value={102}>ส้วมตัน</option>
                <option value={103}>ท่อตัน</option>
                <option value={104}>ระบบน้ำ-ระบบประปา</option>
                <option value={105}>ท่อน้ำ-ท่อสุขภัณฑ์</option>
                <option value={106}>น้ำรั่วซึม</option>
              </select>
              <br />

              <div className="mid">
                <label className="form-label">ที่อยู่</label>
                <input
                  type="text"
                  id="job_location"
                  name="job_location"
                  className="form-control"
                  value={job_location}
                  onChange={(e) => setJobLocation(e.target.value)}
                  required
                />
                <br />
                <label className="form-label">เบอร์ติดต่อ</label>
                <input
                  type="text"
                  id="job_tel"
                  name="job_tel"
                  className="form-control"
                  value={job_tel}
                  onChange={(e) => setJobTel(e.target.value)}
                  required
                />
                <br />
                <label className="form-label">เบอร์ติดต่อสำรอง</label>
                <input
                  type="text"
                  id="job_backup_tel"
                  name="job_backup_tel"
                  className="form-control"
                  value={job_backup_tel}
                  onChange={(e) => setJobBackupTel(e.target.value)}
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
                  value={job_assign_date}
                  onChange={(e) => setJobAssignDate(e.target.value)}
                  required
                />
                <br />
                <label className="form-label">ช่วงเวลา</label>
                <input
                  type="time"
                  id="job_assign_time"
                  name="job_assign_time"
                  className="form-control"
                  value={job_assign_time}
                  onChange={(e) => setJobAssignTime(e.target.value)}
                  required
                />
                <br />
                <label className="form-label">กรุณากรอกรายละเอียดเพิ่มเติม</label>
                <textarea
                  cols="81"
                  rows="10"
                  id="job_details"
                  name="job_details"
                  value={job_details}
                  className="form-control"
                  onChange={(e) => setJobDetails(e.target.value)}
                ></textarea>
              </div>

              <br />
              <div className="d-grid gap-2">
                <button className="btn btn-warning" type="submit" >
                  Submit
                </button>
                <button className="btn btn-secondary" type="button">
                  reset
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
    </>
    
  );
};

export default SubproblemList1;
