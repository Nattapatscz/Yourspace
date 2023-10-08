const express = require("express");
const router = express.Router();
const db = require("./db");
const multer = require("multer");

// กำหนดโฟลเดอร์ที่จะเก็บรูปภาพ
const upload = multer({ dest: "uploads/" });

router.post("/submit-job", upload.single("image"), (req, res) => {
  const {
    job_tel,
    job_details,
    job_assign_date,
    job_assign_time,
    job_backup_tel,
    job_location,
    member_username,
    status_id,
    job_type_id,
    technicial_username,
  } = req.body;

  const image = req.file ? req.file.filename : null; // หากมีรูปภาพถูกอัปโหลดให้ใช้ชื่อไฟล์

  // Insert data into the job table
  const query = `INSERT INTO job (job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, member_username, status_id, job_type_id, technicial_username, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    query,
    [
      job_tel,
      job_details,
      job_assign_date,
      job_assign_time,
      job_backup_tel,
      job_location,
      member_username,
      status_id,
      job_type_id,
      technicial_username,
      image,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting data: " + err);
        res.status(500).json({ error: "Failed to insert data" });
      } else {
        console.log("Data inserted successfully");
        res.json({ message: "Data inserted successfully" });
      }
    }
  );
});

module.exports = router;
