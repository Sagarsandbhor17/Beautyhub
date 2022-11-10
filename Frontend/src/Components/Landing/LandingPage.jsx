import React from "react";
import Footer from "../Footer/Footer";
import Carousel from "./Carousel";
import Middle from "./Middle";
const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <Middle />
      <Footer/>
    </div>
  );
};

export default LandingPage;
