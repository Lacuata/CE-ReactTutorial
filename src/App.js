import "./App.css";
import { Greet } from "./Props/Greet";
// import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      <Greet name="Ciaoo">
        <p>Hello</p>
      </Greet>
    </div>
  );
}

export default App;
