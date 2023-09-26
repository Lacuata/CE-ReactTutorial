import React from "react";
import Stylesheet from "./Stylesheet";
import Inline from "./Inline";
import styles from "./css/appstyle.module.css";
import "./css/AppStyles.css";

const App = () => {
  return (
    <div className="App">
      {/* to access the style in appStyle.css error is our classname in our regular stylesheet */}
      <h1 className="error">Error</h1>
      {/* we access the class using import statement variable names  success is a class name from module stylesheet*/}
      <h1 className={styles.success}>Success</h1>
      {/* advantage oc css modules is that classes are locally scoped by default */}
      <Stylesheet primary={true} />
      <Inline />
    </div>
  );
};

export default App;

// CSS Modules feature
