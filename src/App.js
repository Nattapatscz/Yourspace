import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Postcategories from "./components/Postcategories";
import Mainpages from "./mainpage/Mainpages";
import SubproblemList1 from "./mainpage/Subproblem/SubproblemList1";
import Requestlist from "./mainpage/Requestlist";
import Mainproblem from "./mainpage/Mainproblem";
import SubproblemList2 from "./mainpage/Subproblem/SubproblemList2";
import SubproblemList3 from "./mainpage/Subproblem/SubproblemList3";
import SubproblemList5 from "./mainpage/Subproblem/SubproblemList5";
import SubproblemList4 from "./mainpage/Subproblem/SubproblemList4";
import SubproblemList6 from "./mainpage/Subproblem/SubproblemList6";
const About = () => <div>About Page</div>;

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Mainpages />} />
            <Route path="/about" element={<About />} />
            <Route path="/forum" element={<Postcategories />} />
            <Route path="/request/request_list" element={<Requestlist />} />
            <Route path="/request/mainproblemlist" element={<Mainproblem />} />
            <Route
              path="/request/subproblemlist/1"
              element={<SubproblemList1 />}
            />
            <Route
              path="/request/subproblemlist/2"
              element={<SubproblemList2 />}
            />
            <Route
              path="/request/subproblemlist/3"
              element={<SubproblemList3 />}
            />
            <Route
              path="/request/subproblemlist/4"
              element={<SubproblemList4 />}
            />
            <Route
              path="/request/subproblemlist/5"
              element={<SubproblemList5 />}
            />
            <Route
              path="/request/subproblemlist/6"
              element={<SubproblemList6 />}
            />
            {/* Add more routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
