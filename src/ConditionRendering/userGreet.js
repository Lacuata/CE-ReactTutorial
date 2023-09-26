import React, { Component } from "react";

class UserGreet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      name: "Ciaoo",
    };
  }

  //   1st approach
  //   if else operator
  //   render() {
  //     if (this.state.isLoggedIn) {
  //       {
  //         /* if logged welcome guest */
  //         return <div>Welcome {this.state.name}</div>;
  //       }
  //     } else {
  //       {
  //         /* if not welcome guest */
  //         return <div>Welcome Guest</div>;
  //       }
  //     }
  //     // return <></>;
  //   }

  //   second approach // element variable
  //   render() {
  //     const { name } = this.state;
  //     let message;
  //     if (this.state.isLoggedIn) {
  //       message = <div>Welcome {name}</div>;
  //     } else {
  //       message = <div>Welcome Guest.</div>;
  //     }

  //     return <div>{message}</div>;
  //   }

  //3rd approach ternary operator it's working inside of jsx
  //   render() {
  //     return this.state.isLoggedIn ? (
  //       <div>Welcome {this.state.name}</div>
  //     ) : (
  //       <div>Welcome Guest</div>
  //     );
  //   }

  //   4th approach short circuit operator we want if userisLogged display welcome name else welcome guest this apporach will display if true if false nothing will render
  render() {
    return this.state.isLoggedIn && <div>Welcome {this.state.name}</div>;
  }
}
export default UserGreet;
