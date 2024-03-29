import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faChevronDown,
  faHandsBubbles,
  faHome,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import ReactPlayer from "react-player";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Type from "../../Type";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Typeportfolio from "../typeportfolio";
import { useNavigate } from "react-router";

const portfoliosection = () => {
  const navigate = useNavigate();

  return (
    <section className="portfoliosection">
      <div className="shapes">
        <div className="main-shape common-b"></div>
        <div className="ring-r common-b"></div>
        <div className="ring-l common-b"></div>
        <div className="ring-shape"></div>
        <div className="pattern-shape common-b "></div>
        <div className="b-pattern-shape common-b "></div>

        <div className="long-shape common-a common-b"></div>
        <div className="common-a short-shape common-b"></div>
        <div className="b-long-shape common-a common-b "></div>
        <div className="b-short-shape common-a common-b"></div>
        <div className="c-long-shape common-a common-b"></div>
        <div className="c-short-shape common-a common-b"></div>
        <div className="lonely-shape common-a common-b"></div>
        <div className="d-long-shape common-a common-b "></div>
        <div className="d-short-shape common-a common-b"></div>

        <div className=" common-b animation">
          <div className="icon-animated">
            <img src="/build/images/minty.svg" />
          </div>
        </div>
        <div className=" common-b a-animation">
          <div className="a-icon-animated">
            <FontAwesomeIcon className="eth" icon={faEthereum} />
          </div>
        </div>
        <div className=" common-b b-animation">
          <div className="b-icon-animated"></div>
        </div>
        <div className=" common-b c-animation">
          <div className="c-icon-animated"></div>
        </div>
      </div>
      <div className="container-width" id="home-section">
        <div className="row">
          <div className="column-r width-a">
            {/* <p className="border-radius padding span bold toggle">
              <span className="Highlighter" ><FontAwesomeIcon icon={faLightbulb} />
                Awesome</span> Landing Page
            </p> */}
            <p className="bold h1">PORTFOLIO</p>
            <p className="Highlighter f-size bold">
              {" "}
              <Typeportfolio />{" "}
            </p>
            <p className="f-size description">
              Build your own awesome Web3 applications and start exploring this
              new world. What are you waiting for?
            </p>
            <div className="button-cont">
              <a href="#features">
                <button className="cta bg-blue">
                  See more
                  <FontAwesomeIcon
                    className="margin-left"
                    icon={faChevronDown}
                  />
                </button>
              </a>

              <button
                onClick={() => {
                  navigate("/");
                }}
                className="cta bg-white"
              >
                Return to Home
              </button>

              {/* <form action="Portfolio#website" ><button className="b-decoration a-decoration a-backgr-color">
                Our Portfolio  <FontAwesomeIcon icon={faDiagramProject} />
              </button></form> */}
            </div>
          </div>
          {/* <div className="column-r width-b">
            <div className="iphone14pro">

              <div className="screen">
                <div className="notch"></div>

                <img className="zb" src="/build/images/zb.webp" alt="screen-project1" />
                <img className="benjis" src="/build/images/benjis.webp" alt="screen-project2" />
                <img src="/build/images/green.webp" alt="screen-project3" />
                <img src="/build/images/crash.webp" alt="screen-project4" />

              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default portfoliosection;
