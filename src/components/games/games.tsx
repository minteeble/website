import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


const games = () => {
  const [PopupOpen6, setPopupOpen6] = useState<boolean>(false);

  return (
    <section className="section-featuresportfolio" id="features">
      <Popup open={PopupOpen6} setOpen={setPopupOpen6} title={"Profile"} logo={false} image={<><img src="/build/images/portfolio/game1.png" alt="" /></>}
         description={<></>} 
         button="https://chirpychicksnft.netlify.app/">
      </Popup>
      <div className="container">
        <div className="heading">
          <h2 id="website" className="heading-text">
            Games</h2>
          <div className="divider-custom">
            <div className="line-custom m-lf"></div>
            <div className="minte-custom">
              <img src="/build/images/logo.png" alt="" />
            </div>
            <div className="line-custom m-rg"></div>
          </div>
          <p>In addition to the creation of NFT Website and Minting page we have dedicated ourselves to the creation of a game, on a graphic level and beyond.A new challenge that we managed to win!</p></div>
        <div className="row">
          <div className="column game">
            <figure onClick={() => {
              setPopupOpen6((v) => !v);
            }}> <img src="/build/images/portfolio/game1.png" alt="" />
              <figcaption>The Crypto Crash</figcaption>
            </figure>

          </div>
          {/*<div className="column">
            <figure> <img src="/build/images/portfolio/website2.png" alt="" />
              <figcaption>Chirpy Chicks</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure> <img src="/build/images/portfolio/website3.png" alt="" />
              <figcaption>Prettiest woman</figcaption>
            </figure>
  </div>*/}

        </div>
      </div>
    </section>
  )
}


export default games;