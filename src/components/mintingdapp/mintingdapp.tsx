import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faCode, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";


const mintingdapp = () => {

  const [PopupOpen3, setPopupOpen3] = useState<boolean>(false);
  const [PopupOpen4, setPopupOpen4] = useState<boolean>(false);
  const [PopupOpen5, setPopupOpen5] = useState<boolean>(false);

  return (

    <section className="section-featuresportfolio" id="features">
      <div className="shapes">
        {/* <div className="ring-l common-b"></div> */}
        <div className="b-pattern-shape common-b "></div>
        <div className="circle common-b"></div>
        <div className="b-circle common-b"></div>
        <div className="animated-move common-b">
          <div className="icon-animated"></div>
        </div>
      </div>
      <div className="container">
        <Popup open={PopupOpen3} setOpen={setPopupOpen3} title={"Profile"} logo={false} image={<><img src="/build/images/portfolio/dapp1.png" alt="" /></>}
          description={
            <>
              <p>
                Dubai's most insane car collectible NFTs.
                A collection of 5,001 3D animated NFTs for the first time ever</p>

              <p>The most insane car collectible NFTs with incredible collaborations from around the world. Engines are hot and the presale is live. Monsters by ZB Dubai Club is different from every other NFT project through our utility. We reward our club members with the most unbelievable giveaway to exist ever.</p>
            </>}
          button="https://mint.zbdubaiclub.com">
        </Popup>
        <Popup open={PopupOpen4} setOpen={setPopupOpen4} title={"Profile"} logo={false} image={<><img src="/build/images/portfolio/dapp2.png" alt="" /></>}
          description={<></>}
          button="https://gangstagiraffes.com/">
        </Popup>
        <Popup open={PopupOpen5} setOpen={setPopupOpen5} title={"Profile"} logo={false} image={<><img src="/build/images/portfolio/dapp3.png" alt="" /></>}
          description={<>
            <p>They have escaped from their cages, they are many, unique and fresh.</p>
            <p>They have different skin, gender and personality.</p>
            <p>8888 unique geckos are ready to be caught.</p>


          </>}
          button="https://chirpychicksnft.netlify.app/">
        </Popup>

        <div className="heading">
          <h2 id="website" className="heading-text">
            Minting Dapp</h2>
          <div className="divider-custom">
            <div className="line-custom m-lf"></div>
            <div className="minte-custom">
              <FontAwesomeIcon className="icon" icon={faCode} />
            </div>
            <div className="line-custom m-rg"></div>
          </div>
          <p>Do you want to create an NFTs collection but you don't know how to do it? Don't worry, I'm here to help you! As a blockchain developer, I want to provide you a premium solution for building NFTs Collections and NFT Minting Website.</p></div>
        <div className="row">
          <div className="column">
            <figure onClick={() => {
              setPopupOpen3((v) => !v);
            }}> <img src="/build/images/portfolio/dapp1.png" alt="" />
              <figcaption>ZB Dubai Club</figcaption>
            </figure>

          </div>
          <div className="column">
            <figure onClick={() => {
              setPopupOpen4((v) => !v);
            }}> <img src="/build/images/portfolio/dapp2.png" alt="" />
              <figcaption>Gangsta Giraffes</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure onClick={() => {
              setPopupOpen5((v) => !v);
            }}> <img src="/build/images/portfolio/dapp3.png" alt="" />
              <figcaption>Urban Geckos Club</figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}


export default mintingdapp;