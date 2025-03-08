import { useState } from "react";

export function Counter() {
  let [count,setCount] = useState(0);
  function inc() {
    count++;
    setCount(count);
  }
  function dec() {
    count--;
    setCount(count);
  }
  return (
    <div>
        <h3> Function Comp</h3>
      <div>
        <label>Count : {count} </label>
      </div>
      <div>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
      </div>
    </div>
  );
}
