import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faDiamond, faGem, faHandsBubbles, faLightbulb, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla, voluptates. Architecto eum minima necessitatibus quo reiciendis! Aliquam culpa doloremque eaque esse illo, nemo nesciunt nobis quia sapiente tenetur veniam.</p>
        </div>
        <div className="row">
          <div className="column">
            <FontAwesomeIcon className="icon" icon={faGem} />
            <h5 className="bold">Powerful Design</h5>
            <p>Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum earum error et, exercitationem</p>
          </div>
          <div className="column">
            <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
            <h5 className="bold">Powerful Design</h5>
            <p>Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum earum error et, exercitationem</p>
          </div>
          <div className="column">
            <FontAwesomeIcon className="icon" icon={faLightbulb} />
            <h5 className="bold">Powerful Design</h5>
            <p>Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum earum error et, exercitationem</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default features;