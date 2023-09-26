// import React from "react";

// // export default function Greet({ name }) {
// //   return <div>{name}</div>;
// // }

// // export const Greet = (props) => <h1>{props.name}</h1>;

// // with children props
// export const Greet = (props) => {
//   return (
//     <>
//       <h1>
//         {props.name} {props.text}
//       </h1>
//       {/* to call childrne props of Greet */}
//       {props.children}
//     </>
//   );
// };

// Using class Components
import React, { Component } from "react";

export default class Greet extends Component {
  render() {
    return (
      <div>
        {this.props.name} {this.props.text}
        {this.props.children}
      </div>
    );
  }
}
