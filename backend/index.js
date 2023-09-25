const express = require('express');
const register = require('./routes/register');
const login = require('./routes/login');
const authensession = require('./routes/authensession')
const cors = require('cors');
const app = express();
const port = 5000;



      // middleware
        app.use(cors());
        app.use(express.json());

      // routes
        app.use(register);
        app.use(login); 

      //ไว้ใช้check session 
        app.use(authensession)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

