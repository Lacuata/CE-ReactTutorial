import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
  // constructor lifecycle method 1st method
  constructor(props) {
    super(props);

    this.state = {
      name: "Ciaoo",
    };
    console.log("LifecycleA constructor");
  }

  //   second method static // static keyword make sure it declared // this is static method which receives props and state as parameter has to return either null or object that represent the updated state of component. this component called every time a component is rerendered as
  static getDerivedStateFromProps(props, state) {
    // this method get access to be probes and state as parameter and has to reutn the new state or null to make it simple let's return null
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  //   4th method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  //   4th or final emthod component div didMount add it before render method
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "CodeEvolution",
    });
  };

  //   3rd method render method in JSX
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

// to see the result go to console
