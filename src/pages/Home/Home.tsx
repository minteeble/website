import React, { Component, useEffect, useState } from "react";
import Type from "../../components/Type";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// @ts-ignore
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faDisease,
  faMailBulk,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/homesection";
import Features from "../../components/features";
import Asection from "../../components/reviewsection";
import Staytunned from "../../components/staytunnedsection";
import Footer from "../../components/Footer";
import Sectionhome from "../../components/homesection";

const Home = () => {
  const [email, setEmail] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("load", function () {
    AOS.init();
  });

  return (
    <>

      <Navbar />

      <main>

        <Sectionhome />

        <Features />

        <Asection />

        <section className="team-section" id="team-section">
          <div className="section-heading">
            <span>Our Valus</span>
            <h1>
              Meet the <span className="text-blue">Minteeble</span> company
            </h1>
            <p>
              {" "}
              We are ordinary people who, like you, want to achieve one goal: to
              make your project according to your wishes
            </p>
          </div>
          <div className="row-grid">
            <div className="container" data-aos="fade-up">
              <div className="team-grid">
                {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
                <div className="cropper">
                  <img src="/build/images/user1.webp" alt="user1" />
                </div>
                <div className="content">
                  <h4>Samuele Girgenti</h4>
                  {/* <span>MIT
                </span> */}
                </div>
                <div className="socials">
                  {/* <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a> */}
                  <a
                    href="https://www.linkedin.com/in/samuele-girgenti"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
            <div className="container" data-aos="fade-up">
              <div className="team-grid">
                {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
                <div className="cropper">
                  <img src="/build/images/user2.webp" alt="user2" />
                </div>
                <div className="content" id="container2">
                  <h4>Alessandro Privitera</h4>
                  {/* <span>BAO
                </span> */}
                </div>
                <div className="socials">
                  {/* <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a> */}
                  <a
                    href="https://www.linkedin.com/in/mario-alessandro-privitera/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="container" data-aos="fade-up">
              <div className="team-grid">
                {/*<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>*/}
                <div className="cropper">
                  <img src="/build/images/user3.webp" alt="user3" />
                </div>
                <div className="content">
                  <h4>Chiara Motta</h4>
                  {/* <span>BAU
                </span> */}
                </div>
                <div className="socials">
                  <a href="https://www.instagram.com/_chiaretta23/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  {/*<a href="">
                  <FontAwesomeIcon icon={faLinkedin} />
              </a>*/}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Staytunned />

      </main>
      
      <Footer></Footer>
    </>
  );
};

export default Home;
