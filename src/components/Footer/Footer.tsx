import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";


const Footer = () => {
  const [email, setEmail] = useState<string>("");

  return (

    <div className="footer">
      <div className="footer-cont">
        <div className="row">
          <div className="a-colum-ft padding">
            <img className="logo-minte" src="/build/images/Logosmall.png" alt="" />
            <p className="description-minte">i cunnuti di minteeble sono tornati più cunnuti di prima, non so cosa scrivere e devo occupare spazio ciau</p>
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
                <li>
                  <div id="container">
                    <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <FontAwesomeIcon className="socials-ft" icon={faInstagram} />
                      </span>
                      <span className="button-text">Instagram</span>
                    </button>
                  </div></li>



                <li><a href="https://twitter.com/minteeble"><FontAwesomeIcon className="socials" icon={faTwitter} />Twitter</a></li>
                <li><a href=""><FontAwesomeIcon className="socials" icon={faTiktok} />TikTok</a></li>
                <li><a href=""><FontAwesomeIcon className="socials" icon={faYoutube} />Youtube</a></li>
              </ul>
            </div>
          </div>
          <div className="colum padding">
            <div className="top">Contacts</div>
            <div className="text">
              <ul className="decoration">
                {/* <li>+39 xxx </li>*/}
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
    </div>

    //  <div className="footer">
    //   <div className="container">
    //     <div className="footer-top">
    //       <div className="icon-row">
    //         <ul className="icons">
    //           <li>
    //             <a data-aos="fade-up" href="">
    //               <FontAwesomeIcon icon={faInstagram} />
    //             </a>
    //           </li>
    //           <li>
    //             <a data-aos="fade-up" href="">
    //               <FontAwesomeIcon icon={faGithub} />
    //             </a>
    //           </li>
    //           <li>
    //             <a data-aos="fade-up" href="">
    //               <FontAwesomeIcon icon={faYoutube} />
    //             </a>
    //           </li>
    //           <li>
    //             <a data-aos="fade-up" href="">
    //               <FontAwesomeIcon icon={faCartShopping} />
    //             </a>
    //           </li>
    //           <li>
    //             <a data-aos="fade-up" href="">
    //               <FontAwesomeIcon icon={faTwitter} />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="footer-main" id="contact">
    //       <div className="footer-main-row">
    //         <div className="right">
    //           <div className="container-right">
    //             <div className="texts">
    //               <h2>Get in touch!</h2>
    //               <p>
    //                 Subscribe and we will shortly contact you: let's make your
    //                 dream true!{" "}
    //               </p>
    //             </div>
    //             <div className="input">
    //               <input
    //                 type="email"
    //                 className="footer-email"
    //                 placeholder="Email address"
    //                 value={email}
    //                 onChange={(e) => {
    //                   setEmail(e.target.value);
    //                 }}
    //               />
    //               <input
    //                 type="submit"
    //                 className="footer-submit"
    //                 value="Subscribe"
    //                 onClick={() => {
    //                   var re = /\S+@\S+\.\S+/;
    //                   if (re.test(email)) {
    //                     const serviceId = "service_xm5h4w9";
    //                     const templateId = "template_btqhgdn";
    //                     const userId = "Wo7KOzV-a-7MhMkG0";

    //                     const templateParams = {
    //                       email: email,
    //                     };

    //                     emailjs
    //                       .send(serviceId, templateId, templateParams, userId)
    //                       .then((response) => {
    //                         console.log(response);
    //                         setEmail("");
    //                       })
    //                       .catch((error) => {
    //                         console.log(error);
    //                       });
    //                   }
    //                 }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="left">
    //           <div className="container-left">
    //             <div className="text-row">
    //               <ul className="list-text1">
    //                 Map
    //                 <li className="nav-page">
    //                   <a href="#home-section">Home</a>
    //                 </li>
    //                 {/* <li className="nav-page">
    //                   <a href="#">Portfolio</a>
    //                 </li> */}
    //                 <li className="nav-page">
    //                   <a href="#team-section">Team</a>
    //                 </li>
    //                 <li className="nav-page">
    //                   <a href="#contact">Contact us</a>
    //                 </li>
    //               </ul>

    //               {/*<ul className="list-text2">Bananito
    //      <li>è carino</li>
    //      <li>è carino</li>
    //      <li>è carino</li>
    //   </ul>


    //       <ul className="list-text3">Paolino
    //     <li>è carino</li>
    //     <li>è carino</li>
    //     <li>è carino</li>
    //    </ul>*/}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="footer-bottom">
    //       <div className="row">
    //         <div className="left-text">
    //           <div className="copyright-text">
    //             <span>© 2022. All rights reserved by Minteeble.</span>
    //           </div>
    //         </div>
    //         <div className="right-text">
    //           <div className="privacy-text">
    //             <ul>
    //               <li>
    //                 <a href="">Privacy Policy</a>
    //               </li>
    //               <li>
    //                 <a href="">Terms of Use</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}


export default Footer;