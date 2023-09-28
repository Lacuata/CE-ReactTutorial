import React, { Component } from "react";
import Input from "./Input";
class FocusInput extends Component {
  constructor(props) {
    super(props);
    // 1st step create a componentRef
    this.componentRef = React.createRef();
  }

  clickHander = () => {
    this.componentRef.current.focusInput(); //this FocusInput is defined from Input.js that run or execute to focus on the input field
  };
  render() {
    return (
      <div>
        {/* second pass or attach this.componentRef to pass it as a props */}
        <Input ref={this.componentRef} />
        {/* what we want to achieve here is when we click the button to parent component  the input element in child component should receive the focus*/}
        <button onClick={this.clickHander}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;

// so if we click the Focus Input in parent Element it's gonna focus in the input.js input tag
