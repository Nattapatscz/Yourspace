const express = require("express");
const router = express.Router();
const db = require("./db");

// API endpoint to get job types
router.get("/member", (req, res) => {
  const query = "SELECT * FROM  member ";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch member" });
    } else {
      res.json(result);
    }
  });
});
router.put("/member/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  const sql = "UPDATE member SET ? WHERE member_id = ?";
  db.query(sql, [updatedUser, id], (err, result) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้: " + err.message);
      res.status(500).send("เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้");
    } else {
      res.status(200).send("อัปเดตข้อมูลผู้ใช้เรียบร้อย");
    }
  });
});
module.exports = router;
