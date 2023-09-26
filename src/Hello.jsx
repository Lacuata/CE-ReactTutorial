import React from "react";

function Hello() {
  //   return <div className="Hello">hello</div>;
  // 2nd way to use JSX
  //   parameter specified html we render 1st div html element 2nd pass any optional properties pass null since we don't have a properties to pass 3rd children of div tag
  //   return React.createElement("div", null, "<h1>Pogi Ako</h1>");
  //   let's split the 3rd children into two element  like this 3rd param and create an createElement for h1 tag like the first div
  return React.createElement(
    "div",
    { id: "hello", className: "greet" }, // null is an object key value pair to apply into elmenet example key object {id: 'hello', className: 'greet'} like this and a class  they are the id and class selector in normal html tag
    React.createElement("h1", null, "Pogi ako") // like this 3rd param create new element h1 then properties null and text
  );
}

export default Hello;
