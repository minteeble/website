import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup";


const mintingdapp = () => {

  const [PopupOpen3, setPopupOpen3] = useState<boolean>(false);
  const [PopupOpen4, setPopupOpen4] = useState<boolean>(false);
  const [PopupOpen5, setPopupOpen5] = useState<boolean>(false);

  return (

    <section className="section-featuresportfolio" id="features">

      <div className="container">
        <Popup open={PopupOpen3} setOpen={setPopupOpen3} title={"Profile"} logo={false} image={<><img src="build/images/portfolio/dapp1.png" alt="" /></>} >
        </Popup>
        <Popup open={PopupOpen4} setOpen={setPopupOpen4} title={"Profile"} logo={false} image={<><img src="build/images/portfolio/dapp2.png" alt="" /></>} >
        </Popup>
        <Popup open={PopupOpen5} setOpen={setPopupOpen5} title={"Profile"} logo={false} image={<><img src="build/images/portfolio/dapp3.png" alt="" /></>} >
        </Popup>

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
            <figure onClick={() => {
              setPopupOpen3((v) => !v);
            }}> <img src="build/images/portfolio/dapp1.png" alt="" />
              <figcaption>ZB Dubai Club</figcaption>
            </figure>

          </div>
          <div className="column">
            <figure onClick={() => {
              setPopupOpen4((v) => !v);
            }}> <img src="build/images/portfolio/dapp2.png" alt="" />
              <figcaption>Gangsta Giraffes</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure onClick={() => {
              setPopupOpen5((v) => !v);
            }}> <img src="build/images/portfolio/dapp3.png" alt="" />
              <figcaption>Urban Geckos Club</figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}


export default mintingdapp;