import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    // bind this method
    this.greetParent = this.greetParent.bind(this);
  }

  /* this is how you pass methods as props in react component */

  //1st in the parent component define a method
  greetParent(childName) {
    //receive parameter pass from child and named it anything you want from this example childName //2. when we pass the method parameter defined the method
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        {/* Passing a props to child component */}
        <Child greet={this.greetParent} />
        {/* 2. child component tag pass the method as a props */}
      </div>
    );
  }
}

export default Parent;
