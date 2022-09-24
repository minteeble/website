import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";


const Footer = () => {
  const [email, setEmail] = useState<string>("");

  return (

    <div className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="icon-row">
          <ul className="icons">
            <li>
              <a data-aos="fade-up" href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a data-aos="fade-up" href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a data-aos="fade-up" href="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a data-aos="fade-up" href="">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
            <li>
              <a data-aos="fade-up" href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-main" id="contact">
        <div className="footer-main-row">
          <div className="right">
            <div className="container-right">
              <div className="texts">
                <h2>Get in touch!</h2>
                <p>
                  Subscribe and we will shortly contact you: let's make your
                  dream true!{" "}
                </p>
              </div>
              <div className="input">
                <input
                  type="email"
                  className="footer-email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="submit"
                  className="footer-submit"
                  value="Subscribe"
                  onClick={() => {
                    var re = /\S+@\S+\.\S+/;
                    if (re.test(email)) {
                      const serviceId = "service_xm5h4w9";
                      const templateId = "template_btqhgdn";
                      const userId = "Wo7KOzV-a-7MhMkG0";

                      const templateParams = {
                        email: email,
                      };

                      emailjs
                        .send(serviceId, templateId, templateParams, userId)
                        .then((response) => {
                          console.log(response);
                          setEmail("");
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="left">
            <div className="container-left">
              <div className="text-row">
                <ul className="list-text1">
                  Map
                  <li className="nav-page">
                    <a href="#home-section">Home</a>
                  </li>
                  {/* <li className="nav-page">
                    <a href="#">Portfolio</a>
                  </li> */}
                  <li className="nav-page">
                    <a href="#team-section">Team</a>
                  </li>
                  <li className="nav-page">
                    <a href="#contact">Contact us</a>
                  </li>
                </ul>

                {/*<ul className="list-text2">Bananito
       <li>è carino</li>
       <li>è carino</li>
       <li>è carino</li>
    </ul>
        
        
        <ul className="list-text3">Paolino
      <li>è carino</li>
      <li>è carino</li>
      <li>è carino</li>
     </ul>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="left-text">
            <div className="copyright-text">
              <span>© 2022. All rights reserved by Minteeble.</span>
            </div>
          </div>
          <div className="right-text">
            <div className="privacy-text">
              <ul>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Footer;