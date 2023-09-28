import React from "react";

// to undestand error boundary we need to throw an error  so i will add hero name is joker
function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }
  return (
    <div>
      {heroName} {heroName}
    </div>
  );
}

export default Hero;
