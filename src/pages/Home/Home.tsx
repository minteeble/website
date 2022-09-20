import React, { Component, useEffect, useState } from "react";
import Type from "../../components/Type";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';

// @ts-ignore
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faDisease, faMailBulk, faPaperPlane } from "@fortawesome/free-solid-svg-icons";



const Home = () => {


  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener('load', function () { AOS.init(); });

  return (
    <div className="home-page" >
      <Navbar />

      {/* First Section */}

      <div className="first-section">
        <div className="left">
          <p className="title" data-aos="fade-up">make your dreams come true </p> <Type />
          <p className="sub-title" data-aos="fade-down" >Build your own awesome <span className="blue ">Web3</span>  applications and start exploring this new world. What are you waiting for?</p>
          <input type="submit" value="GET STARTED!" id="button" />
        </div>

        <div className="right"><img src="/build/images/second.svg" alt="" /></div>
        <ul className="shape">
          <li className="bubble" id="home-section"><img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-39.png" alt="" /></li>

        </ul>
        <ScrollToTop smooth />
        <div className="banner-social">
          <div className="border-line"></div>
          <ul className="social-line">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
              <a href="">Instagram</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
              <a href="">Twitter</a>

            </li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />

              <a href="">Fiverr</a>

            </li>
          </ul>
        </div>
      </div>

      {/* First Section */}


      <div className="portfolio-section">



        <div className="card">
          <motion.div className="image" > <img className="image" src="/build/images/test.webp" alt="" /> </motion.div>

          <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            style={{ borderRadius: "0rem 0rem 1rem 1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5" }}
            onClick={() => setIsOpen(!isOpen)}
            className="cards">
            <motion.h2 layout="position">Green Nft</motion.h2>
            <motion.p layout="position">Mint card integration</motion.p>
            {isOpen && (
              <motion.div
                className="items"
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>

                <div className="text">  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores unde nobis voluptatibus rerum eum tempore perferendis aliquid officia laborum! Excepturi suscipit libero architecto sint id molestias ducimus cumque itaque adipisci?</p> </div>


              </motion.div>)}


          </motion.div>
        </div>




      </div>


      <div className="third-section" id="team-section">

        <div className="section-heading" >
          <span>Our Valus</span>
          <h1 >Meet the <span className="text-blue">Minteeble</span> company</h1>
          <p> We are ordinary people who, like you, want to achieve one goal: to make your project according to your wishes</p>
        </div>
        <div className="row-grid">
          <div className="container" data-aos="fade-up">
            <div className="team-grid">
              {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
              <div className="cropper">
                <img src="/build/images/user1.jpg" />
              </div>
              <div className="content">
                <h4>Samuele Girgenti</h4>
                {/* <span>MIT
                </span> */}
              </div>
              <div className="socials">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <div className="team-grid">
              {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
              <div className="cropper">
                <img src="/build/images/user2.jpg" />
              </div>
              <div className="content" id="container2">
                <h4>Alessandro Privitera</h4>
                {/* <span>BAO
                </span> */}
              </div>
              <div className="socials">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="team-grid">
              {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
              <div className="cropper">
                <img src="/build/images/user3.jpg" />
              </div>
              <div className="content">
                <h4>Chiara Motta</h4>
                {/* <span>BAU
                </span> */}
              </div>
              <div className="socials">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>


        </div>
      </div>


      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="icon-row">
              <ul className="icons">
                <li><a data-aos="fade-up" href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a data-aos="fade-up" href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a data-aos="fade-up" href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a  data-aos="fade-up"href=""><FontAwesomeIcon icon={faCartShopping} /></a></li>
                <li><a  data-aos="fade-up"href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-main-row">
              <div className="right">
                <div className="container-right">
                  <div className="texts">
                    <h2>Get in touch!</h2>
                    <p>Subscribe and we will shortly contact you: let's make your dream true! </p>

                  </div>
                  <div className="input">
                    <input type="email" className="footer-email" placeholder="Email address" />
                    <input type="submit" className="footer-submit" value="Confirm" />
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="container-left">
                  <div className="text-row">
                    <ul className="list-text1">Map
                      <li className="nav-page"><a href="#home-section">Home</a></li>
                      <li className="nav-page"><a href="#">Portofolio</a></li>
                      <li className="nav-page"><a href="#team-section">Team</a></li>
                      <li className="nav-page"><a href="#">Contact us</a></li>
                    </ul>


                    {/*<ul className="list-text2">Bananito
           <li>è carino</li>
           <li>è carino</li>
           <li>è carino</li>
        </ul>
            
            
            <ul className="list-text3">Paolino
          <li>è carino</li>
          <li>è carino</li>
          <li>è carino</li>
         </ul>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="left-text">
                <div className="copyright-text">
                  <span>© 2022. All rights reserved by Minteeble.</span>
                </div>
              </div>
              <div className="right-text">
                <div className="privacy-text">
                  <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Use</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
