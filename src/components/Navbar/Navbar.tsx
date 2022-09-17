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
    <header>
      <div className={fix ? 'navbar fixed' : 'navbar'}>
        <div className="logo">
          <img src="/build/images/logo.png" alt="" />
          <h1>Minteeble<span className="blue">.com</span> </h1>
        </div>
        <div className="link">
          <ul>
            <li>Home</li>
            <li>Portofolio</li>
            <li>TEAM</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </header>
  )
}


export default Navbar;