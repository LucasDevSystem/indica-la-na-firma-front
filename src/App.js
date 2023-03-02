import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobRegister from "./pages/JobRegister";

import JobSearch from "./pages/JobSearch";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Jobs" element={<JobSearch />} />
        <Route path="/JobRegister" element={<JobRegister />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
