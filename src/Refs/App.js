import React from "react";
// import RefsDemo from "./RefsDemo";
// import FocusInput from "./FocusInput";
import FRParenInput from "../Fragment/FRParenInput";

function App() {
  return (
    <div>
      {/* <FocusInput /> */}
      {/* instead of RefsDemo include the FocusInput Component */}
      {/* <RefsDemo /> */}

      <FRParenInput />
    </div>
  );
}

export default App;

// Refs in react is a focusing a text input for example suppose we have a login form as soon page loaded by fdefault we want the username input field focus
// we can do that in 3 steps
