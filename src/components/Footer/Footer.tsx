import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import ReactDOM from "react-dom";


const Footer = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="" id="contact">
      <div className="footer-cont">
        <div className="row">
          <div className="a-colum-ft padding">
            <img className="logo-minte" src="/build/images/Logosmall.webp" alt="logo" />
            <p className="description-minte">Build your own awesome Web3 applications and start exploring this new world. What are you waiting for?</p>
          </div>
          <div className="colum padding">
            <div className="top">Company</div>
            <div className="text">
              <ul className="decoration">
                <li><a href="#">Home</a></li>
                <li><a href="#features">Portofolio</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#staytunned">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="colum padding">
            <div className="top">Follow us</div>
            <div className="text ">
              <ul className="decoration">
                <li><a href=""><span className="span hover-i"><FontAwesomeIcon className="socials" icon={faInstagram} />Instagram</span></a></li>
                <li><a href="https://twitter.com/minteeble"><span className=" span hover-t"><FontAwesomeIcon className="socials" icon={faTwitter} />Twitter</span></a></li>
                <li><a href=""><span className="span hover-tk"><FontAwesomeIcon className="socials" icon={faTiktok} />TikTok</span></a></li>
                <li><a href=""><span className="span hover-y"><FontAwesomeIcon className="socials" icon={faYoutube} />Youtube</span></a></li>
              </ul>
            </div>
          </div>
          <div className="colum padding">
            <div className="top">Connect</div>
            <div className="text">
              <ul className="decoration">
                {/*<li>+39 ---</li>*/}
                <li><a href=""><span className="color">minteeble@gmail.com</span></a></li>

              </ul>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="row-small">
          <div className="row-ft-l">© Copyright 2022 <a href=""> Minteeble </a>. All rights reserved.</div>
          <div className="right">
            <div className="privacy"><a href="" className="white">Privacy Policy</a></div>
            <div><a href="" className="white">Terms & Conditions</a></div>

          </div>
        </div>
      </div>
    </footer>

  )
}


export default Footer;

document.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.render(<Footer />, document.getElementById("footer"));
});