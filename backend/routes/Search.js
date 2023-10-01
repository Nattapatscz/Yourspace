const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/list", (req, res) => {
  // SELECT username ,roles, service_area FROM member WHERE service_area = 'กรุงเทพมหานคร' AND roles LIKE '%Technician_ELC%';
  // SELECT j.job_id, j.job_details, s.status_name, m.username,j.job_assign_date ,j.job_assign_time FROM job as j JOIN status s ON j.status_id = s.status_id JOIN member m ON j.member_id = m.member_id WHERE j.status_id = 3 ORDER BY j.job_id;
  // SELECT j.job_id, j.job_details, s.status_name, m.username FROM job j JOIN status s ON j.status_id = s.status_id JOIN member m ON j.member_id = m.member_id WHERE s.status_name IN ('รอดำเนินการ', 'กำลังดำเนินการ','กำลังซ่อมแซม') ORDER BY j.job_id;

  db.query(
    "SELECT COUNT(*) AS total_jobs FROM job j WHERE MONTH(j.job_assign_date) = 10;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
