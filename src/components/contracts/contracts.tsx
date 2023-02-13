import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faCode,
  faCubes,
  faDiamond,
  faGem,
  faHandsBubbles,
  faLightbulb,
  faPalette,
  faPenRuler,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const contracts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section-features" id="contracts">
      <div className="container">
        <div className="heading">
          <h2 id="contracts" className="heading-text" data-aos="fade-up">
            Contracts
          </h2>
          <h4 data-aos="fade-up">
            Build your Web3 Website with our Library Code
          </h4>
          <p data-aos="fade-up">
            Minteeble Contracts helps you minimize risk by using battle-tested
            libraries of smart contracts for Ethereum and other blockchains. It
            includes the most used implementations of ERC standards.
          </p>
        </div>
        <div className="row">
          <form
            data-aos="flip-left"
            className="margin-right"
            target="_blank"
            action="#features"
          >
            <button className="bg-white cta flex-display">
              Minteeble Libraries{" "}
              <div className="minte-custom">
                <img src="/build/images/logo.webp" alt="" />{" "}
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contracts;
