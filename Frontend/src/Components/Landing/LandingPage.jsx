import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";
import Middle from "./Middle";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Middle />
      <Footer/>
    </div>
  );
};

export default LandingPage;
