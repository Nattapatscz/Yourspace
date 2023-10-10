import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Postcategories from "./components/Postcategories";
import Mainpages from "./mainpage/Mainpages";
import SubproblemList1 from "./mainpage/Subproblem/SubproblemList1";
import Requestlist from "./mainpage/Requestlist";
import Mainproblem from "./mainpage/Mainproblem";
import Register from "./components/Register";
import Login from "./components/Loginpage";
import SubproblemList2 from "./mainpage/Subproblem/SubproblemList2";
import SubproblemList3 from "./mainpage/Subproblem/SubproblemList3";
import SubproblemList5 from "./mainpage/Subproblem/SubproblemList5";
import SubproblemList4 from "./mainpage/Subproblem/SubproblemList4";
import SubproblemList6 from "./mainpage/Subproblem/SubproblemList6";
import ProtectedData from "./ProtectedData";
import Search from "./mainpage/Search";
import { Dashboard } from "./mainpage/AdminDashboard/Dashboard";
import { Jobs } from "./mainpage/AdminDashboard/Jobs";
import { Users } from "./mainpage/AdminDashboard/Users";
import { Dashboard1 } from "./mainpage/TechDashboard/Dashboard1"; //
import AcceptJob from "./mainpage/TechDashboard/AcceptJob";
import Yourjob from "./mainpage/TechDashboard/Yourjob";
// import PrivateRoute from "./PrivateRoute";
const About = () => <div>About Page</div>;

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content-container">
          <Routes>
            <Route path="/dashboard" element={ProtectedData(<Dashboard />)} />
            <Route
              path="/dashboard_tech"
              element={ProtectedData(<Dashboard1 />)}
            />
            <Route
              path="/dashboard_tech/jobaccept"
              element={ProtectedData(<AcceptJob />)}
            />
            <Route
              path="/dashboard_tech/ownjob"
              element={ProtectedData(<Yourjob />)}
            />

            <Route
              path="/dashboard/joblist"
              element={ProtectedData(<Jobs />)}
            />
            <Route
              path="/dashboard/edituser"
              element={ProtectedData(<Users />)}
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Mainpages />} />

            <Route path="/about" element={<About />} />

            <Route path="/forum" element={<Postcategories />} />

            <Route path="/request/request_list" element={<Requestlist />} />

            <Route path="/request/mainproblemlist" element={<Mainproblem />} />

            <Route path="/list" element={<Search />} />

            <Route
              path="/request/subproblemlist/1"
              element={ProtectedData(<SubproblemList1 />)}
            />
            <Route
              path="/request/subproblemlist/2"
              element={ProtectedData(<SubproblemList2 />)}
            />
            <Route
              path="/request/subproblemlist/3"
              element={ProtectedData(<SubproblemList3 />)}
            />
            <Route
              path="/request/subproblemlist/4"
              element={ProtectedData(<SubproblemList4 />)}
            />
            <Route
              path="/request/subproblemlist/5"
              element={ProtectedData(<SubproblemList5 />)}
            />
            <Route
              path="/request/subproblemlist/6"
              element={ProtectedData(<SubproblemList6 />)}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
