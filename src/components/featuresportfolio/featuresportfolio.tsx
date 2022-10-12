import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup";


const featuresportfolio = () => {
  const [PopupOpen, setPopupOpen] = useState<boolean>(false);
  const [PopupOpen1, setPopupOpen1] = useState<boolean>(false);
  const [PopupOpen2, setPopupOpen2] = useState<boolean>(false);

  return (
    <section className="section-featuresportfolio" id="features">
      <Popup open={PopupOpen} setOpen={setPopupOpen} title={"Profile"} logo={false}
        image={<><img src="build/images/portfolio/website1.png" alt="" /></>}
        description={
          <>
          <p>A collection of 3,500 unique, Ethereum NFTs called Fighterpunks™ by the Metaverse Fight League™. A cultural movement to bring live combat sports to the next generation of fans; video-game visuals, more relatable content and fan ownership.</p>
          <p>Each Fighterpunk is computer generated with a truly unique combination of traits and a randomly assigned set of attributes - which give the owner commercial rights for Metaverse Fight League event passes, plus image licensing rights.</p>
          <button >Go To Website</button>
          
          </>}
      >
      </Popup>
      <Popup open={PopupOpen1} setOpen={setPopupOpen1} title={"Profile"} logo={false}
        image={<><img src="build/images/portfolio/website2.png" alt="" /></>}
        description={<></>}>
      </Popup>
      <Popup open={PopupOpen2} setOpen={setPopupOpen2} title={"Profile"} logo={false} image={<><img src="build/images/portfolio/website3.png" alt="" /></>}
        description={<></>}>
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
            <figure onClick={() => {
              setPopupOpen1((v) => !v);
            }}> <img src="build/images/portfolio/website2.png" alt="" />
              <figcaption>Chirpy Chicks</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure onClick={() => {
              setPopupOpen2((v) => !v);
            }}> <img src="build/images/portfolio/website3.png" alt="" />
              <figcaption>Prettiest woman</figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}


export default featuresportfolio;