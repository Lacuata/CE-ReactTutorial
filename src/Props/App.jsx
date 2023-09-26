// import "../App.css";
// import { Greet } from "./Greet";
// import Hello from "./Hello";

// function App() {
//   return (
//     // Passing props in function component
//     <div className="App">
//       {/* <Hello /> */}
//       <Greet name="Ciaoo">
//         <p>Hello</p>
//       </Greet>
//     </div>
//   );
// }
// export default App;

// Passing props in Class components
import React, { Component } from "react";
import Greet from "./Greet";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Ciaooo" text="Pogi">
          Ko
        </Greet>
      </div>
    );
  }
}
