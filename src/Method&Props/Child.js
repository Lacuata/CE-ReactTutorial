import React from "react";

function Child(props) {
  const { greet } = props;
  return (
    <div>
      {/* receiving the props that are passed in parent */}
      {/* <button onClick={greet}>Greet Parent</button> */}

      {/* Pasing parameter props from child component to parent using arrow function*/}
      {/* now we can pass now a parameter in greet() */}
      <button onClick={() => greet("Ciaooo")}>Greet Parent</button>
      {/* 3rd in child component access the mthod using props.object if at all we have to pass a parameter use arrow function */}
    </div>
  );
}

export default Child;
