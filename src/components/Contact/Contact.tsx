import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup, usePopup } from "@minteeble/ui-components";
import { Widget } from "@typeform/embed-react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const handleForm = usePopup();

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
          contact us
        </div>
        <div className="sub-text" data-aos="zoom-in">
          Don't miss the opportunity to work and create your project.
        </div>
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
    </>
  );
};

export default Contact;
