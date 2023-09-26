import React from "react";
// Desturcturing in Parameter
const Greet = ({ name, heroName }) => {
  // Destructuing in function body
  //   const { name, heroName } = props; we don't need to passs the name, heroName in parameter function

  return (
    <div>
      {name} a.k a {heroName}
    </div>
  );
};

export default Greet;
