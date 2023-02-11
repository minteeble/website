import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup, usePopup } from "@minteeble/ui-components";
import { Widget } from "@typeform/embed-react";

const Contact = () => {
  const handleForm = usePopup();

  return (
    <>
      <Popup popupLogic={handleForm}>
        <div className="form-wrapper">
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
      <div className="contact">
        <div className="title">contact us</div>
        <div className="sub-text">
          Don't miss the opportunity to work and create your project.
        </div>
        <button
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
