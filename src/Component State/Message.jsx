//State Components

import React, { useState } from "react";

const Message = () => {
  const [Message, setMessage] = useState("Thank You Visitor ");
  const [name, setName] = useState("Ciaoo");

  const changeMessage = () => {
    setMessage("Thank you for subscribe.");
  };

  return (
    <div>
      <h1>
        {Message}
        {name}
      </h1>
      <button onClick={changeMessage}>Subscribe</button>
    </div>
  );
};

export default Message;

// Class Components

// import React, { Component } from "react";
// import "../App.css";

// // if we use state in App then pass it it immutable means we cannot changed it

// export default class Message extends Component {
//   // state usually done inside of constructor class
//   constructor() {
//     super(); // this is required because we extend the reacts components class and a call has to be made to the base class constructor

//     // create state
//     this.state = {
//       // this is state and this keyword is requred
//       message: "Welcome Visitor",
//       name: "Ciaoo",
//     };
//   }

//   //   define a changeMessage handler
//   changeMessage() {
//     // to change the message from this state we need to call the this.setState method it's like the useState in function
//     this.setState({
//       // a new state of the component
//       message: "Thank you for subscribe.",
//     });
//   }
//   render() {
//     // bind the state same as props
//     return (
//       <>
//         <h1>
//           {this.state.message} {this.state.name}
//         </h1>
//         {/* step 2 add a button element that gonna change the message when clicked  add an event handling*/}
//         <button onClick={() => this.changeMessage()}>Subscribe</button>
//       </>
//     );
//   }
// }
