import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // useEffect(setup, dependencies?)
  useEffect(() => {
    console.log(`useEffect run on Mount`);
  }, []);

  useEffect(() => {
    console.log(`Use effect run with dependencies on mounting or updating! ${counter}`)
  }, [counter]);

  // 1) Mount -->> useEffect
  // 2) Mounting/Updating -->> useEffect

  return (
    <>
      <h1>Shopping List</h1>
      <div style={{ display: `flex` }}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
