// This is controlled component
import React, { useState } from "react";
// value to change compopnent use state and set state
const Controled = () => {
  const [type, setType] = useState("");

  const handleType = (e) => {
    setType(e.target.value);
  };
  console.log(type);
  return (
    <div>
      <form>
        <input type="text" value={type} onChange={handleType} />
      </form>
    </div>
  );
};

export default Controled;
