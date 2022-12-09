import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faCode, faCubes, faDiamond, faGem, faHandsBubbles, faLightbulb, faPalette, faPenRuler, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


const contracts = () => {
  return (
    <section className="section-features" id="contracts">
      <div className="container">
        <div className="heading">
          <h2 id="contracts" className="heading-text">
            Contracts
          </h2>
          <h4>Build your Web3 Website with our Library Code</h4>
          <p>
Minteeble Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.</p>
        </div>
        <div className="row">
        <form className="margin-right" action="#features"><button className="b-decoration a-decoration b-backgr-color">
                Download Libraries  <div className="minte-custom"><img src="/build/images/logo.webp" alt="" /> </div>
              </button></form>
        </div>
      </div>
    </section>
  )
}


export default contracts;