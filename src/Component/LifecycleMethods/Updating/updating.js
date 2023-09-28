  //   1st method static // static keyword make sure it declared // this is static method which receives props and state as parameter has to return either null or object that represent the updated state of component. this component called every time a component is rerendered as 
  static getDerivedStateFromProps(props, state) {
    // this method get access to be probes and state as parameter and has to reutn the new state or null to make it simple let's return null
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }



//   second method 
shouldComponentUpdate(nextProps, nextState) //Dictates if the component should rerender or not
// by default all class component will we rendered whenver props receive or state changes this method can prvent that default behavior by returning false.

render