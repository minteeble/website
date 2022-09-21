import React, { useState } from "react";


const Navbar = () => {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 10) {
      setFix(true)
    }
    else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <header >
      <div className={fix ? 'navbar fixed' : 'navbar'}>
        <div className="logo">
          <img src="/build/images/logo.png" alt="" />
          <h1>Minteeble<span className="blue">.com</span> </h1>
        </div>
        <div className="link">
          <ul className="nav-page">
            <li className="nav-page"><a href="#home-section">Home</a></li>
            {/* <li className="nav-page"><a href="#">Portofolio</a></li> */}
            <li className="nav-page"><a href="#team-section">TEAM</a></li>
            <li className="nav-page"><a href="#contact">Contact us</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}


export default Navbar;