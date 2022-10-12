import React from "react";
import { TypeAnimation } from 'react-type-animation';


const typeportfolio = () => {
  return (
    <TypeAnimation
      sequence={[
        'Websites.', // Types 'One'
        5000, // Waits 1s
        'Minting Dapps.', // Deletes 'One' and types 'Two'
        5000, // Waits 2s
        'Games.', // Types 'Three' without deleting 'Two'
        4000,
        'and more.', // Types 'Three' without deleting 'Two'
        4000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="type"
      style={{ color: "#53C2DE", textTransform: "uppercase", fontSize: "1.5rem" }}
    />
  );
};

export default typeportfolio;