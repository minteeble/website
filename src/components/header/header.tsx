import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faHandsBubbles, faLightbulb } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Type from "../Type";


const header = () => {

  return (
    <header >
      <div className="shapes">
        <div className="main-shape common-b">
        </div>
        <div className="ring-r common-b"></div>
        <div className="ring-l common-b"></div>
        <div className="ring-shape"></div>
        <div className="pattern-shape common-b "></div>
        <div className="b-pattern-shape common-b "></div>

        <div className="long-shape common-a common-b" >
        </div>
        <div className="common-a short-shape common-b">
        </div>
        <div className="b-long-shape common-a common-b "></div>
        <div className="b-short-shape common-a common-b"></div>
        <div className="c-long-shape common-a common-b"></div>
        <div className="c-short-shape common-a common-b"></div>
        <div className="lonely-shape common-a common-b"></div>
        <div className="d-long-shape common-a common-b "></div>
        <div className="d-short-shape common-a common-b"></div>

      </div>
      <div className="container" id="home-section">
        <div className="row">
          <div className="column-r width-a">
            <p className="border-radius padding span bold toggle">
              <span className="Highlighter" ><FontAwesomeIcon icon={faLightbulb} />
                Awesome</span> Landing Page
            </p>
            <p></p> <h1 className="bold">Minteeble</h1>
            <p className="Highlighter f-size bold"> <Type /> </p>
            <p className="f-size description" >Build your own awesome Web3
              applications and start exploring this new world. What are you
              waiting for?</p>
            <div className="nav">
              <button className="b-decoration a-decoration b-backgr-color"><a >
                Know more  <FontAwesomeIcon icon={faArrowRight} />
              </a></button>
              <button className="b-decoration a-decoration a-backgr-color"><a >
                Know more  <FontAwesomeIcon icon={faArrowRight} />
              </a></button>
            </div>


          </div>
          <div className="column-r width-b">
            <div className="iphone14pro">

              <div className="screen">
                <div className="notch"></div>
                <img src="build/images/screen-exe.jpg" alt="screen-exe" />
                <img src="build/images/screen-exe.jpg" alt="screen-exe" />
                <img src="build/images/screen-exe.jpg" alt="screen-exe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


export default header;