import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Expertise = () => {
  return (
    <>
     <section className="services" id="features">
          <div className="exp-container">
            <div className="exp-heading">
              <h2 className="exp-heading-text" id="services">Expertise</h2>
              <h4 className="exp-h4">Trusted by over 130 clients</h4>
              <p className="exp-text">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="exp-cards">
              <div className="exp-jobs exp-sect">
                <h4 className="sect-number">+200</h4>
                <p className="sect-text">Jobs completed</p>
                <a href="https://wy7qp680aox.typeform.com/to/WpoqqxS5" className="sect-button">Get in touch</a>
              </div>
              <div className="exp-smart exp-sect">

              <h4 className="sect-number">+100</h4>
                <p className="sect-text">Smart contracts written</p>
                <a href="https://wy7qp680aox.typeform.com/to/WpoqqxS5" className="sect-button">Request smart contract</a>
              </div>
              <div className="exp-req exp-sect">

              <h4 className="sect-number">+150</h4>
                <p className="sect-text">NFT collection launched</p>
                <a href="https://wy7qp680aox.typeform.com/to/WpoqqxS5" className="sect-button">Request NFT collection</a>
              </div>
            </div>
          </div>
      
      </section>
    </>
  )
}


export default Expertise;