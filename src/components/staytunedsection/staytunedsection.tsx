import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faDiamond,
  faGem,
  faHandsBubbles,
  faLightbulb,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const staytunedsection = () => {
  return (
    <section className="staytunned" id="staytunned">
      <div className="container">
        <div className="main">
          <div className="heading">
            <h2 className="after">Stay tuned</h2>
            <p className="blue">
              By registering with us you will receive right in your inbox all
              new features and updates
            </p>
          </div>
          <div className="form">
            <form action="register" className="text-center">
              <div className="input-cont">
                <input type="email" placeholder="Enter your email" required />
              </div>
              <button
                type="submit"
                className="no-margin a-decoration b-backgr-color b-decoration"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default staytunedsection;
