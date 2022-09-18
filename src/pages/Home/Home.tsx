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
    <div className="home-page" >
      <Navbar/>
  
      {/* First Section */}

      <div className="first-section">
        <div className="left">
          <p className="title" data-aos="fade-up">make your dreams come true </p> <Type />
          <p className="sub-title" data-aos="fade-down" >Build your own awesome <span className="blue ">Web3</span>  applications and start exploring this new world. What are you waiting for?</p>
            <input type="submit" value="GET STARTED!" id="button"/>
        </div>


        <div className="right"><img src="/build/images/second.svg" alt="" /></div>

        <ul className="shape">
          <li className="bubble" id="home-section"><img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-39.png" alt="" /></li>
        
        </ul>
        <ScrollToTop smooth />
      </div>

      {/* First Section */}
<hr></hr>

<div className="third-section">

  <div className="section-heading">
  <span>Our Valus</span>
  <h1 id="team-section">Incontra <span className="text-blue">I Cunnuti</span></h1>
  <p> Ci impegniamo molto in ciò che facciamo, dedicando la maggior parte del nostro tempo e iniettandoci nelle vene Monster per restare vivi</p>
  </div>
  <div className="row-grid">
    <div className="container">
    <div className="team-grid">
      {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
      <div className="cropper">
  <img src="/build/images/doggeshiba.png"/>
</div>
<div className="content">
      <h4>Dogge1</h4>
      <span>Ha gli occhiali quindi
      <br/>
      è più figo di te
      </span>
      </div>
      </div>
    </div>
    <div className="container">
<div className="team-grid">
      {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
      <div className="cropper">
  <img src="/build/images/doggeshiba.png"/>
</div>
<div className="content" id="container2">
      <h4>Dogge2</h4>
      <span>Ha gli occhiali quindi
      <br/>
      è più figo di te
      </span>
      </div>
      </div>
      </div>
    
      <div className="container">    
      <div className="team-grid">
      {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
      <div className="cropper">
  <img src="/build/images/doggeshiba.png"/>
</div>
<div className="content">
      <h4>Dogge3</h4>
      <span>Ha gli occhiali quindi
      <br/>
      è più figo di te
      </span>
      </div>
      </div>
      </div>
    

    </div>
  </div>
</div>
  );
};

export default Home;
