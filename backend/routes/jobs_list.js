const express = require("express");
const router = express.Router();
const db = require("./db");

// API endpoint to get job types
router.get("/job", (req, res) => {
  const query = "SELECT * FROM  job ";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch jobs" });
    } else {
      res.json(result);
    }
  });
});
router.get("/jobtypecount", (req, res) => {
  const query = "SELECT COUNT(*) as count  FROM  job_type";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch job types" });
    } else {
      res.json(result);
    }
  });
});
router.get("/jobcount", (req, res) => {
  const query = "SELECT COUNT(*) as count  FROM  job ";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch jobscount" });
    } else {
      res.json(result);
    }
  });
});

router.put("/job/:id", (req, res) => {
  const { id } = req.params;
  const updatedJob = req.body;

  const sql = "UPDATE job SET ? WHERE job_id = ?";
  db.query(sql, [updatedJob, id], (err, result) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้: " + err.message);
      res.status(500).send("เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้");
    } else {
      res.status(200).send("อัปเดตข้อมูลผู้ใช้เรียบร้อย");
    }
  });
});

router.delete("/job/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM job WHERE job_id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการลบข้อมูลผู้ใช้: " + err.message);
      res.status(500).send("เกิดข้อผิดพลาดในการลบข้อมูลผู้ใช้");
    } else {
      res.status(200).send("ลบข้อมูลผู้ใช้เรียบร้อย");
    }
  });
});

router.get("/jobst1", (req, res) => {
  const query = "SELECT * FROM  job  WHERE status_id = 1 ";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch jobst1" });
    } else {
      res.json(result);
    }
  });
});
router.get("/graph", (req, res) => {
  const query =
    "SELECT CASE WHEN MONTH(job_assign_date) = 1 THEN 'January' WHEN MONTH(job_assign_date) = 2 THEN 'February' WHEN MONTH(job_assign_date) = 3 THEN 'March' WHEN MONTH(job_assign_date) = 4 THEN 'April' WHEN MONTH(job_assign_date) = 5 THEN 'May' WHEN MONTH(job_assign_date) = 6 THEN 'June' WHEN MONTH(job_assign_date) = 7 THEN 'July'  WHEN MONTH(job_assign_date) = 8 THEN 'August' WHEN MONTH(job_assign_date) = 9 THEN 'September' WHEN MONTH(job_assign_date) = 10 THEN 'October' WHEN MONTH(job_assign_date) = 11 THEN 'November' WHEN MONTH(job_assign_date) = 12 THEN 'December' ELSE NULL END AS name, COUNT(*) AS total_jobs FROM job WHERE YEAR(job_assign_date) = 2023 GROUP BY MONTH(job_assign_date) ORDER BY MONTH(job_assign_date);";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching graph " + err);
      res.status(500).json({ error: "Failed to fetch graph" });
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
