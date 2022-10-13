import react, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";

export interface PopupProps {
  open: boolean;
  setOpen: any;
  children: any;
  title: String;
  image: any;
  logo: boolean;
  description: any;
  button: any;
}

const Popup = (props: PopupProps) => {
  const [isShown, setIsShown] = useState(false);

  const CloseDelay = () => {
    setTimeout(setopen, 450);
  };
  const Open = () => {
    setopen();
  };
  const setopen = () => {
    props.setOpen(false);
    setIsShown((current) => !current);
  };


  let isShowString = isShown ? `hide` : ``;
  return (
    <div
      className={
        props.open
          ? "popup-wrapper-box " + isShowString
          : "popup-wrapper-box disabled " + isShowString
      }

      onClick={(event) => {
        setIsShown((current) => !current);
        CloseDelay();
      }}
    >
      <div className="popup" onClick={(e) => { e.stopPropagation(); }}>

        {/* <FontAwesomeIcon  icon={faXmark}  className="close-popup"  onClick={() => {    console.log("Clicked");    props.setOpen(false);  }}/> */}

        <div className="main-content">
          {props.image}

          <div className="divider-custom"><div className="line-custom m-lf"></div><div className="minte-custom"><img src="/build/images/logo.png" alt="" /> </div><div className="line-custom m-rg"></div></div>
          <div className="description">{props.description}</div>
          <form action={props.button}>
          <button >See more</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Popup;
