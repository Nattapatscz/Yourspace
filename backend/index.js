const express = require('express');
const register = require('./routes/register');
const login = require('./routes/login');
const cors = require('cors');
const app = express();
const port = 5000;



// middleware
app.use(cors());
app.use(express.json());


// routes
app.use(register);
app.use(login);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

