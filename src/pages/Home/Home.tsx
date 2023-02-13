import React, { Component, useEffect, useState } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import Sectionhome from "../../components/homesection";
import Contracts from "../../components/contracts";
import { Sidetab } from "@typeform/embed-react";
import Contact from "../../components/Contact";
import Services from "../../components/Services";
import Expertise from "../../components/Expertise";
import ReviewSection from "../../components/Reviewsectionewg";

const Home = () => {
  const [email, setEmail] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("load", function () {
    AOS.init();
  });

  return (
    <>
      <Sidetab id="WpoqqxS5" buttonText="click to open" />
      <Sectionhome />
      <Services></Services>

      <Expertise></Expertise>

      <Contracts />

      {/* <div className="container-project">
        <div className="main">
          <div className="title">
            Projects that have worked with our libraries
          </div>
          <div className="logos">
            <div className="logo">
              <img
                src="https://www.openzeppelin.com/hubfs/Theme_2022/content/Logos/coinbase.svg"
                alt="coinbase"
                loading="lazy"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://www.openzeppelin.com/hubfs/Theme_2022/content/Logos/coinbase.svg"
                alt="coinbase"
                loading="lazy"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://www.openzeppelin.com/hubfs/Theme_2022/content/Logos/coinbase.svg"
                alt="coinbase"
                loading="lazy"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://www.openzeppelin.com/hubfs/Theme_2022/content/Logos/coinbase.svg"
                alt="coinbase"
                loading="lazy"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://www.openzeppelin.com/hubfs/Theme_2022/content/Logos/coinbase.svg"
                alt="coinbase"
                loading="lazy"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://www.openzeppelin.com/hubfs/Theme_2022/content/Logos/coinbase.svg"
                alt="coinbase"
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>
      </div> */}

      <ReviewSection></ReviewSection>

      {/* <section className="team-section" id="team-section">
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
            <div className="container-team" data-aos="fade-up">
              <div className="team-grid">
               //<div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>
                <div className="cropper">
                  <img src="/build/images/user1.webp" alt="user1" />
                </div>
                <div className="content">
                  <h4>Samuele Girgenti</h4>
                  //<span>MIT
              //  </span>
                </div>
                <div className="socials">
                // <a href="">
                //  <FontAwesomeIcon icon={faInstagram} />
               // </a>
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
               // <div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>
                <div className="cropper">
                  <img src="/build/images/user2.webp" alt="user2" />
                </div>
                <div className="content" id="container2">
                  <h4>Alessandro Privitera</h4>
                 // <span>BAO
                 //</span>
                </div>
                <div className="socials">
                //  <a href="">
                //  <FontAwesomeIcon icon={faInstagram} />
               // </a>
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
              // <div className="thumbnail"><img src="/build/images/doggeshiba.png" alt="Dogge1"/></div>
                <div className="cropper">
                  <img src="/build/images/user3.webp" alt="user3" />
                </div>
                <div className="content">
                  <h4>Chiara Motta</h4>
                  // <span>BAU
                  //</span>
                </div>
                <div className="socials">
                  <a href="https://www.instagram.com/_chiaretta23/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  // <a href="">
                  //<FontAwesomeIcon icon={faLinkedin} />
                  // </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      <Contact />
    </>
  );
};

export default Home;
