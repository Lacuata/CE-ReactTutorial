import React from "react";
import EventBinding from "./EventBinding";

const App = () => {
  return (
    <div>
      <EventBinding />
    </div>
  );
};

export default App;

// The reason we bind event handler in react is purely because of the way this keyword works in havascript is not how react works
