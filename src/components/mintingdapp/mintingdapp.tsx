import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


const mintingdapp = () => {
  return (
    <section className="section-featuresportfolio" id="features">
      <div className="container">
        <div className="heading">
          <h2 id="website" className="heading-text">
            Minting Dapp</h2>
          <div className="divider-custom">
            <div className="line-custom m-lf"></div>
            <div className="minte-custom">
              <img src="/build/images/logo.png" alt="" />
            </div>
            <div className="line-custom m-rg"></div>
          </div>
          <p>Do you want to create an NFTs collection but you don't know how to do it? Don't worry, I'm here to help you! As a blockchain developer, I want to provide you a premium solution for building NFTs Collections and NFT Minting Website.</p></div>
        <div className="row">
          <div className="column">
            <figure> <img src="build/images/portfolio/dapp1.png" alt="" />
              <figcaption>ZB Dubai Club</figcaption>
            </figure>

          </div>
          <div className="column">
            <figure> <img src="build/images/portfolio/dapp2.png" alt="" />
              <figcaption>Gangsta Giraffes</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure> <img src="build/images/portfolio/dapp3.png" alt="" />
              <figcaption>Urban Geckos Club</figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}


export default mintingdapp;