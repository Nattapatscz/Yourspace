const express = require("express");
const router = express.Router();
const db = require("./db");
const multer = require("multer"); // Import Multer

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/submit-job", upload.array("images", 2), (req, res) => {
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

  const images = req.files;

  if (!images || images.length < 2) {
    return res.status(400).json({ error: "Please upload at least 2 images." });
  }

  const query = `INSERT INTO job (job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, member_username, status_id, job_type_id, technicial_username, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  for (const image of images) {
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
        image.buffer,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting data: " + err);
          // Handle the error as needed
        } else {
          console.log("Data inserted successfully");
          // Handle the success response as needed
        }
      }
    );
  }

  res.json({ message: "Data inserted successfully" });
});

module.exports = router;
