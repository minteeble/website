import React, { Component, useEffect, useState } from "react";
import Type from "../../components/Type";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../../components/Navbar";

// @ts-ignore
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Home = () => {



  window.addEventListener('load', function () { AOS.init(); });

  return (
    <div className="home-page">

      <Navbar />
      <Navbar />
      {/* First Section */}
      <div className="first-section">

        <div className="left">
          <p className="title" data-aos="fade-up">make your dreams come true </p> <Type />
          <p className="sub-title" data-aos="fade-down" >Build your own awesome <span className="blue ">Web3</span>  applications and start exploring this new world. What are you waiting for?</p>
            <input type="submit" value="Get Started" id="button"/>
        </div>

        <div className="right"><img src="/build/images/second.svg" alt="" /></div>


        <ul className="shape">
          <li className="bubble" ><img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-39.png" alt="" /></li>
          <li className="bubble2"> <img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-38.png" alt="" /></li>
        </ul>
        <ScrollToTop smooth />


      </div>

      {/* First Section */}



    </div>
  );
};

export default Home;
