import { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false, // set to false
    };
  }
  // to this class component to becomea error boundary we need to define either the getderived state from error or componentdidcatch lifecycle
  static getDerivedStateFromError(error) {
    // return new state object and create state
    return {
      hasError: true, // if there an error we are setting hasError properties to true
      //   this state property can be used to create a fallback UI so in render
    };
  }
  render() {
    // return <div>Error</div>;
  }
}
