import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover"
    style = {{backgroundSize: "30%", backgroundPosition: "right 100px top 100px"}}>
      
      <Navbar />

      <div className="container grid  lg:grid-cols-5 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
          <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
             <div>
              <p data-aos="zoom-in-up">I'm</p>
              <p data-aos="zoom-in-up">Sharmeen</p>
              <p data-aos="zoom-in-up">A.Samad</p>
              <p data-aos="zoom-in-up" className="text-[10px] sm:text-[30px]  leading-tight flex justify-center items-center">A FinTech Expert</p>
              <p data-aos="zoom-in-up" className="text-[10px] sm:text-[30px]  leading-tight flex justify-center items-center">based in Pakistan</p>
           </div>          
          </div>
      </div>
    </div>
  );
};

export default Hero;