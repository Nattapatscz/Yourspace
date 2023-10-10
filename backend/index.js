const express = require("express");
const register = require("./routes/register");
const login = require("./routes/login");
const authensession = require("./routes/authensession");
const jobsubmit = require("./routes/job_submit");
const jobtype = require("./routes/job_type");
const users = require("./routes/users");
const cors = require("cors");
const app = express();
const port = 5000;
const job = require("./routes/jobs_list");
const status = require("./routes/status");
// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(status);
app.use(job);
app.use(register);
app.use(login);
app.use(users);
app.use(jobsubmit);
app.use(jobtype);

//ไว้ใช้check session
app.use(authensession);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
