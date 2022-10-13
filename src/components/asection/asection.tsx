import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


const asection = () => {
  return (
    <div className="asection">
      <div className="shapes">
        {/* <div className="ring-l common-b"></div> */}
        <div className="b-pattern-shape common-b "></div>
        <div className="circle common-b"></div>
        <div className="b-circle common-b"></div>
        <div className="animated-move common-b">
          <div className="icon-animated"></div>
        </div>
      </div>
      <div className="container-as">
        <div className="row">
          <div className="column-as">
            <div className="section-heading">
              <h2 className="after">What our customers think of us

              </h2>
              <p className="p-margin">Over time we have created many projects and all our customers have always been satisfied with our work.</p>
            </div>
            <div className="nav">
              <button className="b-decoration a-decoration a-backgr-color"><a >
                Now is the time<span className="zoom"><FontAwesomeIcon icon={faArrowRight} /></span></a></button>
            </div>
          </div>
          <div className="column-as height-auto">
            <div className="image-as">
              <figure>
                <img src="/build/images/review1.png" alt="image" /></figure>
            </div>
            <div className="image-as margin-top">
              <figure>
                <img src="/build/images/review2.png" alt="image" /></figure>
            </div>
            <div className="image-as margin-top">
              <figure>
                <img src="/build/images/review3.png" alt="image" /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default asection;