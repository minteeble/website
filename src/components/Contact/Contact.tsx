import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup, usePopup } from "@minteeble/ui-components";
import { Widget } from "@typeform/embed-react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Contact = () => {
  const handleForm = usePopup();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Popup popupLogic={handleForm}>
        <div className="form-wrapper" data-aos="zoom-in">
          <div className="form-header">
            <FontAwesomeIcon
              onClick={() => {
                handleForm.closePopup();
              }}
              className="close"
              icon={faXmark}
            />
          </div>
          <Widget id="WpoqqxS5" style={{ height: "90%" }} className="my-form" />
        </div>
      </Popup>
      <div className="contact" data-aos="zoom-in">
        <div className="title" data-aos="fade-down">
          Contact us
        </div>
        <div className="sub-text epx-h4" data-aos="zoom-in">
          Don't miss the opportunity to create your project.
        </div>
        <p className="ser-text" data-aos="zoom-in">
          Take a look at the projects we have created and the products we can
          offer you, minting websites, dapps, marketplaces and much more on our
          Portfolio.
        </p>
        <div className="row">
          <button
            data-aos="fade-up"
            onClick={() => {
              navigate("/portfolio");
            }}
            className="cta white"
          >
            See Portfolio
          </button>
          <button
            data-aos="fade-up"
            onClick={() => {
              handleForm.openPopup();
            }}
            className="cta"
          >
            Talk to us
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
