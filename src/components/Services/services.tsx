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
              Some Services
            </h2>
            <p className="sub-text epx-h4" data-aos="zoom-in">
              {" "}
              Whether it is DeFi, NFT or other, the blockchain is always the
              core of our solutions.
            </p>
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
                  "Create a pre-approved list of users or wallet addresses who are allowed to participate in an NFT sales event or receive a specific NFT before anyone else."
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <ServicesCard
                title={"Staking"}
                content={
                  "Users hold cryptocurrencies as collateral to participate in the validation of transactions in a blockchain network. In exchange, they receive a reward in cryptocurrencies proportional to the amount of cryptocurrency held and the duration of the staking period."
                }
                icon={<FontAwesomeIcon className="icon" icon={faPalette} />}
              />
            </div>
            {/* <div data-aos="zoom-in" data-aos-delay="200">
              <ServicesCard
                title={"Pre-Reveal"}
                content={
                  "Hide the real NFT with a temporary image during presale and reveal it at all times. Presale is often used as a marketing mechanism in order to increase the interest and value of the NFT."
                }
                icon={<FontAwesomeIcon className="icon" icon={faPalette} />}
              />
            </div> */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <ServicesCard
                title={"1 of 1 NFT Collection"}
                content={
                  "In addition to the creation of ERC-A721 collections with numerous NFTs all different from each other, it will be possible to create collections of a single NFT present in numerous quantities with a different smart contract"
                }
                icon={<FontAwesomeIcon className="icon" icon={faPenRuler} />}
              />
            </div>
            <div data-aos="zoom-in">
              <ServicesCard
                title={"Dynamic Collection"}
                content={
                  "Unlike static NFT collections, which represent unique and immutable digital objects, dynamic collections can include NFTs that change or evolve over time. For example, a dynamic NFT collection could be Mutant Ape Yacht Club"
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <ServicesCard
                title={"Gallery"}
                content={
                  "An NFT gallery is an application to be integrated into your website or dapp that displays a NFT collection and allows users to search and filter them through the properties of individual NFTs."
                }
                icon={<FontAwesomeIcon className="icon" icon={faCubes} />}
              />
            </div>

            <div data-aos="zoom-in" data-aos-delay="400">
              <ServicesCard
                title={"NFT Maker (PFP)"}
                content={
                  "It is an application that allows you to create and mint your own NFT starting from the metadata attributes of the collection and mint it"
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
