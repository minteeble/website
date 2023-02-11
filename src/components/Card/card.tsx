import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CardProps {
  icon: any;
  title:string;
  content: string;
}

const card = (props: CardProps) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-head">
          <div className="card-square">{props.icon}</div>
          <h3 className="card-title">{props.title}</h3>
          <p className="card-content">{props.content}</p>
        </div>
        <div className="card-foot">
          <button className="card-contact">Contact us <span className="card-arrow">→</span></button>
        </div>
      </div>
    </>
  )
}


export default card;