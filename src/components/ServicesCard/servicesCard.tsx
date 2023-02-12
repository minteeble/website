import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface servicesCardProps {
  icon: any;
  title:string;
  content: string;
}

const ServicesCard = (props: servicesCardProps) => {
  return (
    <>
      <div className="servicesCard-wrapper">
        <div className="servicesCard-head">
          <div className="servicesCard-square">{props.icon}</div>
          <h3 className="servicesCard-title">{props.title}</h3>
          <p className="servicesCard-content">{props.content}</p>
        </div>
        <div className="servicesCard-foot">
          <a className="servicesCard-contact" href="#contact">Contact us <span className="servicesCard-arrow">→</span></a>
        </div>
      </div>
    </>
  )
}


export default ServicesCard;