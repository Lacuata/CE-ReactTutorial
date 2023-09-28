import React, { Component } from "react";

// this is controleed component in Class
// follow 2 step to set it on controled component
//1st    component state that will control value of input element

export class Form extends Component {
  constructor(props) {
    super(props);
    // 1st steo
    this.state = {
      username: "",
      comments: "",
      topic: "angular",
      show: "",
    };
  }

  handleUserName = (e) => {
    this.setState(
      {
        username: e.target.value,
      },
      console.log(this.state.username)
    );
  };

  handleCommentChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  //   so we can select other option
  handlerChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      show: `${this.state.username} ${this.state.comments} ${this.state.topic}`,
      topic: "angular",
      comments: "",
      username: "",
    });
  };

  render() {
    const { username, comments, topic, show } = this.state;
    // Form control
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              placeholder="name"
              onChange={this.handleUserName}
            />
          </div>
          {/* step 1 add an html form for comments */}
          <div>
            <label htmlFor="">Comments</label>
            {/* step 2 assign component state to  value */}
            <textarea
              value={comments}
              onChange={this.handleCommentChange}
            ></textarea>
            {/* 3rd and final step assign change handler that update the state */}
          </div>

          {/* Select tag step 1 add html */}
          <div>
            <label>Topic</label>
            {/* step 2 assign a component state in the element value */}
            <select value={topic} onChange={this.handlerChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue ">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        {show}
      </div>
    );
  }
}

export default Form;
