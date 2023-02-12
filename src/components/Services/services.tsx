import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesCard from "../ServicesCard/servicesCard";
import {
  faCubes,
  faPalette,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="services" id="features">
        <div className="ser-container">
          <div className="ser-heading">
            <h2 className="ser-heading-text" data-aos="fade-up" id="services">
              Services
            </h2>
            <p className="ser-text" data-aos="fade-up">
              Our expertise in the blockchain field allows us to offer custom
              solutions for each project, from creating smart contracts to
              building advanced user interfaces for managing transactions. We
              are able to handle all levels of the development process, from
              design to implementation and maintenance.
            </p>
          </div>
          <div className="ser-cards">
            <div data-aos="zoom-in">
              <ServicesCard
                title={"Whitelist"}
                content={
                  "Whether it is DeFi, NFT or other, the blockchain is always the core of our solutions."
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <ServicesCard
                title={"Airdrop"}
                content={
                  "We can develop for you ad hoc designs. The only limitation is you imagination!"
                }
                icon={<FontAwesomeIcon className="icon" icon={faPalette} />}
              />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
              <ServicesCard
                title={"Mutation"}
                content={
                  "Your project is really ambitious and complex? No problem, we can implement all the high-end features you may need."
                }
                icon={<FontAwesomeIcon className="icon" icon={faPenRuler} />}
              />
            </div>
            <div data-aos="zoom-in">
              <ServicesCard
                title={"Dynamic Collection"}
                content={
                  "Whether it is DeFi, NFT or other, the blockchain is always the core of our solutions."
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <ServicesCard
                title={"Dynamic Collection"}
                content={
                  "Whether it is DeFi, NFT or other, the blockchain is always the core of our solutions."
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>

            <div data-aos="zoom-in" data-aos-delay="400">
              <ServicesCard
                title={"Dynamic Collection"}
                content={
                  "Whether it is DeFi, NFT or other, the blockchain is always the core of our solutions."
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
