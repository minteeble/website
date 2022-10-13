import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faCubes, faDiamond, faGem, faHandsBubbles, faLightbulb, faPalette, faPenRuler, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


const features = () => {
  return (
    <section className="section-features" id="features">
      <div className="container">
        <div className="heading">
          <h2 id="features" className="heading-text">
            Premium Features

          </h2>
          <p>As web3 enthusiasts, our main focus is on pairing the power of decentralization with all the most relayable and professional technologies.</p>
        </div>
        <div className="row">
          <div className="column">
            <FontAwesomeIcon className="icon" icon={faCubes} />
            <h5 className="bold">Blockchain as philosophy</h5>
            <p>Whether it is DeFi, NFT or other, the blockchain is always the core of our solutions </p>
          </div>
          <div className="column">
            <FontAwesomeIcon className="icon" icon={faPalette} />
            <h5 className="bold">UX/UI Design</h5>
            <p>We ca develop for you ad hoc designs. The only limitation is you imagination! </p>
          </div>
          <div className="column">
            <FontAwesomeIcon className="icon" icon={faPenRuler} />
            <h5 className="bold">Custom features</h5>
            <p>Your project is really ambitious and complex? No problem, we can implement all the high-end features you may need.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default features;