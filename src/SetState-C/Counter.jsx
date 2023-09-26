// Class Components
import React, { Component } from "react";

export default class Counter extends Component {
  // shorcut to initialize state in constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment() {
    // this is modifying state directly which is didn;t work
    // this.state.count = this.state.count + 1; // not gonna work the ui not gonna increment it or changed it

    // this is modifying state using setState it's work
    // this.setState(
    //   {
    //     // this is first parameter that count + 1 per action
    //     //   count: +1,
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     // 2nd parameter callback
    //     console.log("Callback value", this.state.count);
    //   }
    // );

    // Passing a function as an argument to set a state method instead of passing in an obj // prevState arguments mean prevState nya which is the current state o this.state.count nya like in object like iterating
    this.setState((prevState, props) => ({
      // this is when we want to pas the function based on prevState make sure to pass in function as an arugment instead of regular obj function has acces to prev State to calculate the useState and the 2nd arugment in the function is props
      //prevState is our new name
      count: prevState.count + 1, //prevState then the count then + 1 so every time we call this it will increment . what if we call this 5x in 1 function ? like in plus5?  if the plus5 function triggered or action it will count per 5

      //   unlike the object we did above it will run a synchronous code log statement
    }));
    console.log(this.state.count);
  }

  Decrement() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      //   Do do this instead place the code within the callback  function that is pass as 2nd parameter to the setSTate method
      () => {
        // 2nd parameter callback
        console.log("Callback value", this.state.count);
      }
    );
    // don't do this whenever  you need to execute some code after the state has been changed do not place that code right after the state method
    console.log(this.state.count); // like this
  }

  Plus5() {
    // this.setState(
    //   {
    //     count: this.state.count + 5,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Decrement</button>
        <button onClick={() => this.Plus5()}>+5</button>
      </div>
    );
  }
}
