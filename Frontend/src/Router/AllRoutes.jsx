import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login-Signup/Login";
import Signup from "../Components/Login-Signup/Signup";
import Navbar from "../Components/Navbar.jsx/Navbar";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/navbar" element={<Navbar />}/>
    </Routes>
  );
};

export default AllRoutes;
