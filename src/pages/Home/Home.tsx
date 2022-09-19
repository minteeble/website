import React, { Component, useEffect, useState } from "react";
import Type from "../../components/Type";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../../components/Navbar";
import {motion} from 'framer-motion';

// @ts-ignore
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Home = () => {

  const [isOpen,setIsOpen] = useState(false);

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

<div className="portfolio-section">



<div className="card">
<motion.div  className="image" > <img className="image" src="/build/images/test.webp" alt="" /> </motion.div>

<motion.div 
transition={{layout:{ duration:1, type:"spring"}}}
layout 
style={{borderRadius: "0rem 0rem 1rem 1rem", boxShadow:"0px 10px 30px rgba(0,0,0,0.5"}} 
onClick={ () => setIsOpen (!isOpen)} 
className="cards">
   <motion.h2 layout="position">Green Nft</motion.h2> 
   <motion.p layout="position">Mint card integration</motion.p>
{isOpen && (
  <motion.div 
  className="items"
  layout="position" 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:1}}>
  
<div className="text">  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores unde nobis voluptatibus rerum eum tempore perferendis aliquid officia laborum! Excepturi suscipit libero architecto sint id molestias ducimus cumque itaque adipisci?</p> </div>


  </motion.div>  )}


</motion.div>
</div>




</div>


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
