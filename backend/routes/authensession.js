const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware สำหรับการตรวจสอบ Token
function authenticate(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, "your-secret-key", function (err, decoded) {
    if (err) {
      res.json({ status: 'error', message: 'Failed to authenticate token.' });
      return;
    }
    // Token ถูกตรวจสอบถูกต้อง
    next();
  });
}

// เส้นทาง /protected สำหรับการเข้าถึงที่ต้องการป้องกัน
router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// เส้นทาง /token สำหรับการตรวจสอบความถูกต้องของ Token
router.get('/token', (req, res, next) => {
  var token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, "your-secret-key", function (err, decoded) {
    if (err) {
      res.json({ status: 'error', message: 'Failed to authenticate token.' });
      return;
    }
    // Token ถูกตรวจสอบถูกต้อง ส่งคืนไปยังไคลเอนต์
    res.json({ status: 'ok', token });
  });
});

module.exports = router;
