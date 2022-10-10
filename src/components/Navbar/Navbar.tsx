import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faDiagramProject,
  faHouseChimney,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

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
    <div className="top">
      <nav className={fix ? "navbar fixed" : "navbar"}>
        <div className="container">
          <div onClick={handleClick} className="mobile-hamburger">
            <FontAwesomeIcon className="hamburger" icon={faBars} />
          </div>

          <a href="#home-page" className="nav-a">
            <img className="nav-logo" src="/build/images/logo.png" alt="" />
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
                  <a className="nav-text" href="#">
                    <FontAwesomeIcon className="icon" icon={faDiagramProject} />
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-text" href="#team-section">
                    <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
                    Team
                  </a>
                </li>
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

      {/* <div className={fix ? 'navbar fixed' : 'navbar'}>
        <div className="logo">
          <img src="/build/images/logo.png" alt="" />
          <h1>Minteeble<span className="blue">.com</span> </h1>
        </div>
        <div className="link">
          <ul className="nav-page">
            <li className="nav-page"><a href="#home-section">Home</a></li>
            <li className="nav-page"><a href="#">Portofolio</a></li>
            <li className="nav-page"><a href="#team-section">TEAM</a></li>
            <li className="nav-page"><a href="#contact">Contact us</a></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
