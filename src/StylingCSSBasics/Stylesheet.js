import React from "react";
import "./css/myStyle.css";

const Stylesheet = (props) => {
  let className = props.primary ? "primary" : "";
  //   if props is true in app.js when we pass it the primary color gonna work if false not
  return (
    <>
      <div className={`${className} font-xl`}>Stylesheet</div>
      {/* <h1 className="error">Error</h1> */}
      {/* why we remove or comment it out because it's making a css conflict because we import the css in app and the child Stylesheet inherit the class of it 
      unlike the modular css it cannot be used in children component it's only gonna work to the file where it was imported */}
    </>
  );
};
// this is how we apply a class or style in css on another file

export default Stylesheet;
