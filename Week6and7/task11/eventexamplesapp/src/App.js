import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hello! Welcome to React Event Handling.");
  };

  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (event) => {
    alert("I was clicked!");
    console.log("Synthetic event: ", event);
  };

  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome to the Event Handling Lab!")}>
        Say Welcome
      </button>

      <br /><br />
      <button onClick={handleSyntheticEvent}>OnPress</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
