// Event Handling in function Components

// import React from "react";

// const FunctionClick = () => {
//   function handleClick() {
//     alert("Button clicked");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

// export default FunctionClick;

// Evnet handling in class components

import React, { Component } from "react";

export class FunctionClick extends Component {
  handleClick() {
    alert("Mabuhay");
  }
  render() {
    return (
      <div>
        {/* remember in class this is required */}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default FunctionClick;
