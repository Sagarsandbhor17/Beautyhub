import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart/Cart";
import Checkout from "../Components/Cart/Checkout";
import OrderConfirm from "../Components/Cart/OrderConfirm";
import Otp from "../Components/Cart/Otp";
import LandingPage from "../Components/Landing/LandingPage";
import Skin from "../Components/Skin/Skin";
import Login from "../Components/Login-Signup/Login";
import Signup from "../Components/Login-Signup/Signup";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Navbar from "../Components/Navbar/Navbar";
import Authprovider from "../Components/Private/Authprovider";
import DummyProduct from "../Components/SingleProduct/DummyProduct";
import Admin from "../Components/admin/Admin";
import Hair from "../Components/Hairs/Hair";
import Bath from "../Components/Bath&Body/Bath";
import Fragrance from "../Components/Fragrance/Fragrance";

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar/>}/>  */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/skin" element={<Skin />} />
      <Route path="/hair" element={<Hair />} />
      <Route path="/fragrance" element={<Fragrance />} />
      <Route path="/bath&body" element={<Bath />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/cart"
        element={
          <Authprovider>
            <Cart />
          </Authprovider>
        }
      />

      <Route path="/dummyproduct" element={<DummyProduct />} />
      <Route
        path="/products/:id"
        element={
          <Authprovider>
            <SingleProduct />
          </Authprovider>
        }
      />
      <Route
        path="/checkout"
        element={
          <Authprovider>
            <Checkout />
          </Authprovider>
        }
      />
      <Route
        path="/otp"
        element={
          <Authprovider>
            <Otp />
          </Authprovider>
        }
      />
      <Route
        path="/orderplaced"
        element={
          <Authprovider>
            <OrderConfirm />
          </Authprovider>
        }
      />
      {/* <Route path="/dummyproduct" element={ <DummyProduct/>}/>   */}
      <Route
        path="/admin"
        element={
          <Authprovider>
            <Admin />
          </Authprovider>
        }
      />
      {/* <Route path="/admin" element={<Multistep/>} /> */}
    </Routes>
  );
};

export default AllRoutes;
