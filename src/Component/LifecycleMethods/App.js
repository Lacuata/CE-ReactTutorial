import React from "react";
import LifecycleA from "./LifecycleA";

const App = () => {
  return (
    <div>
      <LifecycleA />
    </div>
  );
};

export default App;

// Life cycle method

// Classify the 4 pahses of lifecycle method calling
// Mounting = when an instance of a component is being created
// and inserted into the DOM
// Updating = When component is being rendered as a result of changes to either it's props or state
// Unmounting = is called when a component is being removed into the dom
// ErrorHandling = are called when there is an error during rendering in a lifecycle method or in the constructor of any child component

// during the Mounting phase we have 4 method constructor a static method, get derived state from props render and component dead mount

// updating phase we have five method static method, get derive state from props , should component update, render get a snapshot before update and  component div update

// Unmounting phase we have just 1 method component will unmount

// ErrorHandling phase static method get derived state from error and component did catch

// Mounting Lifecycle Methods 1st method
// constructor { props }
// a special function that will get called whenever a new component is created
// Initializing state, Binding the event handlers
// Do not cause side effects. ex: HTTP request don't do it
// defining your own constructor 1st you have to called a special function called super this will call the base class contructor in our component we have access to this.props only after we initially called super passing in the props as an argument
// 2nd point constructor is also the only place where you are expected to change or set the state by  directly overwriting this.state fields in all other scenario you have to use this.state as a consturctor

// Do not change state or interact with DOM or make ajax calls

// second method phase static getDerivedStateFromPRops(props, state)

// 3rd method render method =
//  only a required method in a class component
// Read props & state and return JSX
//  contain other children component lifecycle methods are also executed.

// final method phase
// ComponentDidMount() this method only called once in the whole lifecycle component and invoke imediatelly after a component and its all children components
