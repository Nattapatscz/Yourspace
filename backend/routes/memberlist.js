const express = require('express');
const router = express.Router();
const db = require('./db'); // Import your database library

router.get("/member", async (req, res) => {
  try {
    // Execute a SELECT query to retrieve all members from the "member" table
    const query = "SELECT * FROM member";

    db.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching members: ' + err);
        res.status(500).json({ error: 'Failed to fetch members' });
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
