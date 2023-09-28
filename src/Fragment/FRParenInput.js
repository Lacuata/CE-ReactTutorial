import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParenInput extends Component {
  constructor(props) {
    super(props);
    // 1st step create ref on parent compnent

    this.inputRef = React.createRef(); // create a ref
    this.state = {};
  }

  clickHandler = () => {
    this.inputRef.current.focus();
    // because we are using the forward left technique ref.current points to the native element and not the fr input component instance
  };
  render() {
    return (
      <div>
        {/* // 2nd step attach ref to child using ref attribute  to pass it */}
        <FRInput ref={this.inputRef} />
        {/* the child component sees the ref and tells the parent hey i am not the guy your're looking for you want the native input element right let me directly introduce him to you so the child component  recive the ref from parent and attach it to the native input which is input tag element in child component now the  parent compo can directly access this input element using this.inputRef.current or reference variable . current*/}
        {/* final step back in F or parentInput we can define click Handler the child eleemnt is basically forwarding this ref or reference  */}

        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParenInput;
