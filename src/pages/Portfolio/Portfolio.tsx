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
import Header from "../../components/header";
import Features from "../../components/features";
import Asection from "../../components/asection";
import Staytunned from "../../components/staytunned";
import Footer from "../../components/Footer";
import Headerportfolio from "../../components/headerportfolio";
import Featuresportfolio from "../../components/featuresportfolio";
import Mintingdapp from "../../components/mintingdapp";
import Games from "../../components/games";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Headerportfolio />
      <div className="margin">
        <Featuresportfolio />
      </div>
      <div className="margin">
        <Mintingdapp />
      </div>
      {/* <div className="margin"><Games /></div> */}
      <Footer />
    </div>
  );
};

export default Portfolio;
