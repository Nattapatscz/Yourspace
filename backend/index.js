const express = require("express");
const fileUpload = require('express-fileupload'); // เพิ่มบรรทัดนี้
const register = require("./routes/register");
const login = require("./routes/login");
const authensession = require("./routes/authensession");
// const jobsubmit = require("./routes/job_submit");
const jobtype = require("./routes/job_type");
const users = require("./routes/users");
// const upload = require("./routes/uploads")
const fs = require('fs');
const db = require("./routes/db");
const multer = require('multer');

const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const path = require('path'); // เพิ่มโมดูล path

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware
  app.use(cors());
  app.use(express.json());
  app.use(fileUpload());

  
  // ตั้งค่า Multer
// job submit !!!!!!!!!!!!!!!!!!!!!!
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // กำหนดโฟลเดอร์ปลายทางสำหรับไฟล์ที่อัปโหลด
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post('/upload', (req, res) => {
  if (!req.files || !req.files.sampleFiles || req.files.sampleFiles.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFiles = Array.isArray(req.files.sampleFiles) ? req.files.sampleFiles : [req.files.sampleFiles]; // Ensure uploadedFiles is an array
  const fileNames = [];

  // Move each uploaded file to the 'uploads' directory
  uploadedFiles.forEach((uploadedFile) => {
    const fileName = uploadedFile.name;
    fileNames.push(fileName);

    uploadedFile.mv(path.join(__dirname, 'uploads', fileName), (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
  });

  // Insert data into the database for each uploaded file
  fileNames.forEach((fileName) => {
    const fileData = fs.readFileSync(path.join(__dirname, 'uploads', fileName));

    const sql =
      'INSERT INTO job (job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, member_username, status_id, job_type_id, technicial_username, file_name, file_data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(
      sql,
      [
        req.body.job_tel,
        req.body.job_details,
        req.body.job_assign_date,
        req.body.job_assign_time,
        req.body.job_backup_tel,
        req.body.job_location,
        req.body.member_username,
        req.body.status_id,
        req.body.job_type_id,
        req.body.technicial_username,
        fileName,
        fileData,
      ],
      (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
      }
    );
  });

  res.send('Files uploaded and data saved to MySQL.');
});



// routes
app.use(register);
app.use(login);
app.use(users);
// app.use(jobsubmit);
app.use(jobtype);

// app.use(upload);



//ไว้ใช้check session
app.use(authensession);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
