import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart/Cart";
import Home from "../Components/Home";
import SingleProduct from "../Components/SingleProduct/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Singleproduct" element={<SingleProduct/>}/>
    </Routes>
  );
};

export default AllRoutes;
