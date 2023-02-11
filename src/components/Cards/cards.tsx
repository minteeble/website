import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CardsProps {
  
}

const cards = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-head">
          <div className="card-square">{/*fontawesome*/}</div>
          <h3 className="card-title"></h3>
        </div>
        <div className="card-foot"></div>
      </div>
    </>
  )
}


export default cards;