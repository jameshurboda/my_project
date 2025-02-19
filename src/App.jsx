/*
//create a buttons reset and decrement. implement its functionality
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>The Number: {count}</h1>
      <button onClick={handleIncrement} style={{ margin: "5px", padding: "10px" }}>Increment</button>
      <button onClick={handleDecrement} style={{ margin: "5px", padding: "10px" }}>Decrement</button>
      <button onClick={handleReset} style={{ margin: "5px", padding: "10px" }}>Reset</button>
    </div>
  );
}

export default App;

*/


/*


import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  function handleAddition() {
    setResult(Number(num1) + Number(num2));
  }

  function handleSubtraction() {
    setResult(Number(num1) - Number(num2));
  }

  function handleMultiplication() {
    setResult(Number(num1) * Number(num2));
  }

  function handleDivision() {
    if (num2 !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult("Cannot divide by zero");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ margin: "5px", padding: "10px" }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ margin: "5px", padding: "10px" }}
      />
      <br />
      <button onClick={handleAddition} style={{ margin: "5px", padding: "10px" }}>+</button>
      <button onClick={handleSubtraction} style={{ margin: "5px", padding: "10px" }}>-</button>
      <button onClick={handleMultiplication} style={{ margin: "5px", padding: "10px" }}>*</button>
      <button onClick={handleDivision} style={{ margin: "5px", padding: "10px" }}>/</button>
      <h2>Result: {result !== null ? result : ""}</h2>
    </div>
  );
}

export default App;
*/


import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  function handleOperation(operator) {
    const n1 = Number(num1);
    const n2 = Number(num2);
    switch (operator) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult(null);
    }
  }

  return (
    <div style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f0f0"
    }}>
      <div style={{ 
        textAlign: "center", 
        padding: "20px", 
        borderRadius: "10px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        backgroundColor: "#f9f9f9" 
      }}>
        <h1 style={{ color: "#333" }}>My Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          style={{ margin: "10px", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          style={{ margin: "10px", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <br />
        <div>
          {["+", "-", "*", "/"].map((operator) => (
            <button
              key={operator}
              onClick={() => handleOperation(operator)}
              style={{ margin: "10px", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", border: "none", backgroundColor: "#007BFF", color: "white", cursor: "pointer" }}
            >
              {operator}
            </button>
          ))}
        </div>
        <h2 style={{ color: "#007BFF" }}>Result: {result !== null ? result : ""}</h2>
      </div>
    </div>
  );
}

export default App;

