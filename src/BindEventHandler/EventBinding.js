// import React from "react";

// const EventBinding = () => {
//   return <div>EventBinding</div>;
// };

// export default EventBinding;

// Class component
import React, { Component } from "react";

// Binding Event handler 3 kinds of approach
class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this is part of 3rd apporach binding the render method so in the constructor we simply add a line
    // this.clickHandler = this.clickHandler.bind(this); // like this in 3rd approach
  }

  //   This is for approach 1 and 2
  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye!", // and this things gonna work direct this is bind method without calling this.state
  //     });

  //     console.log(this);
  //   }

  //   this is for 4th approach
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1st approach binding in rendered */}
        {/*  method working usingbinding(this ) rendered method this is 1st approach*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Second apporach  arrow function approaches binding*/}
        {/* working to change message using class  */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* // third approach binding in class constructor most uses approach => binding event handler on the constrcution as opposed to binding in the render method*/}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* final approach class property to use arrow function as class property */}
        <button onClick={this.clickHandler}>Click</button>
        {/* i think this is better */}

        {/* React documentation in class sugggest approach #3 or #4 */}
      </div>
    );
  }
}

export default EventBinding;
