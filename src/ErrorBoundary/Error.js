import React, { Component } from "react";

class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false, // set to false
    };
  }
  // to this class component to becomea error boundary we need to define either the getderived state from error or componentdidcatch lifecycle

  // this is the 1st component life cycle method using getDerived
  static getDerivedStateFromError(error) {
    // return new state object and create state
    return {
      hasError: true, // if there an error we are setting hasError properties to true
      //   this state property can be used to create a fallback UI so in render
    };
  }

  // second one component lifecycle method didcatch
  componentDidCatch(error, info) {
    // this method is pretty much used to log the error like log service
    console.log(error); // it will automatically log all error in console
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      // if erro is true return
      return <h1>Something went wrong</h1>;
    }
    // else or if there no error just return
    return this.props.children; // this is refer to the component we are rendering make it sense later on

    // final step wrap the component with this errorBoundary or Error in app.js

    // return <div>Error</div>;
  }
}

export default Error;
