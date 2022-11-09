import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
