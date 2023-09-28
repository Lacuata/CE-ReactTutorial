import React from "react";
import Hero from "./Hero";
import Error from "./Error";

function App() {
  return (
    <div>
      {/* Error is ErrorBoundary we wrapped the hero component  */}
      {/* <Error>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" /> */}

      {/* it's gonna throw an error what we want is particular component throw an error only that error will fallback to ui and other component should be not affected to do that let's create errorboundary at error.js*/}
      {/* </Error> */}
      {/* it's still gonna show the error not completed yet this is the intended behavior the react team have mentioned that error boundary is primary useful in production but in development they want  to make errors as highly visible as possible so we  will always see this error during development. so what we can do is on the top rightclick the close button or x icon to see the application bug on error or something went wrong if errro is true */}

      {/* so this is the difference error boundaries will catch error and display a fallback UI  which in our case the something went wrong text */}

      {/* but this is not a good idea in example like e-commerce when we have 1 error it's gonna hide all product */}

      {/* so what we're gonna do is wrap all hero in error boundary like this*/}
      <Error>
        <Hero heroName="Batman" />
        {/* so when there some error it's not gonna hide anymore all hero component it will only hide the error and show the error ui */}
      </Error>
      <Error>
        <Hero heroName="Superman" />
      </Error>
      <Error>
        <Hero heroName="Joker" />
      </Error>
    </div>
  );
}

export default App;

// if we could catch the error anywhere     in the component tree and fallback UI this is where error boundaries take the spotlight

// error boundary class component that implement either one or both life cycle method getDerivedStateFromError or ComponentDidCatch becomes an error boundary

// the static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information

// Summary error boundaries are react component that catch javascript error in the child component tree, log those errors and display a fallback UI

// A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle method

// The placement of the Error BOundary also matters as it controls if the entire app should have the fall-back UI or just component causing the problem.

// Provide a way to gratefully handle error in application code
