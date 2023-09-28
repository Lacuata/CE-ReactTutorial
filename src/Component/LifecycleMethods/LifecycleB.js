import React, { Component } from "react";
class LifecycleB extends Component {
  // constructor lifecycle method 1st method
  constructor(props) {
    super(props);

    this.state = {
      name: "Ciaoo",
    };
    console.log("LifecycleB constructor");
  }

  //   second method static // static keyword make sure it declared
  static getDerivedStateFromProps(props, state) {
    // this method get access to be probes and state as parameter and has to reutn the new state or null to make it simple let's return null
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  //   4th or final emthod component div didMount add it before render method
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  //   4th method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  //   3rd method render method in JSX
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;

// to see the result go to console
