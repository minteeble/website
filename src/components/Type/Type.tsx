import React from "react";
import { TypeAnimation } from 'react-type-animation';


const Type = () => {
    return (
      <TypeAnimation 
        sequence={[
          'with the Blockchain.', // Types 'One'
          5000, // Waits 1s
          'with Minteeble.', // Deletes 'One' and types 'Two'
          5000, // Waits 2s
          'Together.', // Types 'Three' without deleting 'Two'
          4000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        className="type"
        style={{ color: "#53C2DE", textTransform: "uppercase", fontSize: "1.5rem"}}
      />
    );
  };

  export default Type;