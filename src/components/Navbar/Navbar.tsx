import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCode,
  faDiagramProject,
  faHouseChimney,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import ReactDOM from "react-dom";

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [side, setSide] = useState(false);

  function setFixed() {
    if (window.scrollY >= 110) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  const handleClick = () => {
    setSide((current) => !current);
  };

  window.addEventListener("scroll", setFixed);

  return (
      <nav className={fix ? "nav fixed" : "nav"}>
        <div className="container">
          <div onClick={handleClick} className="mobile-hamburger">
            <FontAwesomeIcon className="hamburger" icon={faBars} />
          </div>

          <a href="#home-page" className="nav-a">
            <img className="nav-logo" src="/build/images/logo.webp" alt="" />
          </a>

          <div className={side ? "collapse animate" : "collapse "}>
            <div className="mobile-sidebar">
              <a href="">
                <img className="nav-logo" src="/build/images/logo.png" alt="" />
              </a>
            </div>
            <div className="close" onClick={handleClick}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <ul className="nav-page dahsboard">
              <li className="nav-item">
                {" "}
                <a className="nav-text" href="#home-section">
                  <FontAwesomeIcon className="icon" icon={faHouseChimney} />
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                {" "}
                <a className="nav-text" href="#features">
                <FontAwesomeIcon className="icon" icon={faDiagramProject} />
Services                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-text" href="#contracts">
                <FontAwesomeIcon className="icon" icon={faCode} />
                  Contracts
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-text" href="/Portfolio">
                  <FontAwesomeIcon className="icon" icon={faDiagramProject} />
                  Portfolio
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-text" href="#team-section">
                  <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
                  Team
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-text" href="#contact">
                  <FontAwesomeIcon className="icon" icon={faMessage} />
                  Contact us
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
  );
};

export default Navbar;

document.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.render(<Navbar />, document.getElementById("navbar"));
});