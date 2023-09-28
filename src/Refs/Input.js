import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus(); // this is to focus on input
  };

  render() {
    return (
      <div>
        {/* when focus Input is clicked it will focus on this input tag */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;

// So in this special circumstances if at all yoy need a ref to a child compo to a prent compo know that it is definitely possible however has to be a class component ref cannot be attached in functional component
