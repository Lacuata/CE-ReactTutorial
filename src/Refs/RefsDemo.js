import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    // 1st create a ref to do that react.createRef Method
    this.inputRef = React.createRef(); // it is common to create refs in the constructor so they can be referrenced throughtout the  component

    // another apprach using cbRef 1a.

    this.cbRef = null; // set as null
    this.setCbRef = (element) => {
      // in setCbRef pass props element
      this.cbRef = element;
    };

    this.state = {};
  }

  componentDidMount() {
    /* 3rd and final step call focus method on this input element to focus on the input element in component did mount we simply call the  focus method on current property*/

    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    // another apprach using cbRef
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value); //basically we are accessing the value property of the input dom node which is available as current property
  };
  render() {
    return (
      <div>
        {/* 2nd step attach to input element in rrender method use of the reserved ref attribute and now we have a referrence to the input element  */}
        <input type="text" placeholder="username" ref={this.inputRef} />

        <input type="text" placeholder="username" ref={this.setCbRef} />

        <button onClick={this.clickHandler}>Click</button>
        {/* // Second possible use case of using refs would be fetch input value using eventHandler onClick and this.clickHandler */}
      </div>
    );
  }
}

export default RefsDemo;
