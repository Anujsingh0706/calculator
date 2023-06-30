import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (e) => {
    setDisplay(display + e.target.value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={display} readOnly />
      <div className="buttons">
        <button value="1" onClick={handleButtonClick}>
          1
        </button>
        <button value="2" onClick={handleButtonClick}>
          2
        </button>
        <button value="3" onClick={handleButtonClick}>
          3
        </button>
        <button value="+" onClick={handleButtonClick}>
          +
        </button>
        <button value="4" onClick={handleButtonClick}>
          4
        </button>
        <button value="5" onClick={handleButtonClick}>
          5
        </button>
        <button value="6" onClick={handleButtonClick}>
          6
        </button>
        <button value="-" onClick={handleButtonClick}>
          -
        </button>
        <button value="7" onClick={handleButtonClick}>
          7
        </button>
        <button value="8" onClick={handleButtonClick}>
          8
        </button>
        <button value="9" onClick={handleButtonClick}>
          9
        </button>
        <button value="*" onClick={handleButtonClick}>
          *
        </button>
        <button value="0" onClick={handleButtonClick}>
          0
        </button>
        <button onClick={calculate}>=</button>
        <button value="/" onClick={handleButtonClick}>
          /
        </button>
        <button onClick={clearDisplay}>Clear</button>
      </div>
    </div>
  );
}

export default App;