import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart/Cart";
import Checkout from "../Components/Cart/Checkout";
import OrderConfirm from "../Components/Cart/OrderConfirm";
import Otp from "../Components/Cart/Otp";
import LandingPage from "../Components/Landing/LandingPage";
import Skin from "../Components/Skin/Skin"
import Login from "../Components/Login-Signup/Login";
import Signup from "../Components/Login-Signup/Signup";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Navbar from "../Components/Navbar/Navbar";
import Authprovider from "../Components/Private/Authprovider";

const AllRoutes = () => {
  return (
    <Routes>

      {/* <Route path="/" element={<Navbar/>}/> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/skin" element={<Skin />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={
      <Authprovider>
      <Cart />
      </Authprovider>
      } />
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/orderplaced" element={<OrderConfirm/>}/>


    </Routes>
  );
};

export default AllRoutes;
