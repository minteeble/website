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
import Asection from "../../components/ReviewSection";
import Staytunned from "../../components/staytunedsection";
import Footer from "../../components/Footer";
import Headerportfolio from "../../components/PortoflioComponents/portfoliosection";
import Featuresportfolio from "../../components/PortoflioComponents/featuresportfolio";
import Mintingdapp from "../../components/mintingdapp";
import Games from "../../components/PortoflioComponents/games";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Headerportfolio />

      <Featuresportfolio />

      <Mintingdapp />

      {/* <div className="margin"><Games /></div> */}
    </div>
  );
};

export default Portfolio;
