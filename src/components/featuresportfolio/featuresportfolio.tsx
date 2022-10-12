import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup";


const featuresportfolio = () => {
  const [PopupOpen, setPopupOpen] = useState<boolean>(false);

  return (
    <section className="section-featuresportfolio" id="features">
      <Popup open={PopupOpen} setOpen={setPopupOpen} title={"Profile"} logo={false}>
      </Popup>
      <div className="container">
        <div className="heading">
          <h2 id="website" className="heading-text">
            Websites</h2>
          <div className="divider-custom">
            <div className="line-custom m-lf"></div>
            <div className="minte-custom">
              <img src="/build/images/logo.png" alt="" />
            </div>
            <div className="line-custom m-rg"></div>
          </div>
          <p>Do you want to create an NFTs collection but you don't know how to do it? Don't worry, I'm here to help you! As a blockchain developer, I want to provide you a premium solution for building NFTs Collections and NFT Website.</p></div>
        <div className="row">
          <div className="column">
            <figure onClick={() => {
              setPopupOpen((v) => !v);
            }}> <img src="build/images/portfolio/website1.png" alt="" />
              <figcaption>Fighter Punks</figcaption>
            </figure>

          </div>
          <div className="column">
            <figure> <img src="build/images/portfolio/website2.png" alt="" />
              <figcaption>Chirpy Chicks</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure> <img src="build/images/portfolio/website3.png" alt="" />
              <figcaption>Prettiest woman</figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}


export default featuresportfolio;