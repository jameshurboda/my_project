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
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: 'fit-content'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1.5rem' }}>My Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
        style={{
          width: 'calc(100% - 20px)',
          padding: '10px',
          marginBottom: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px'
        }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
        style={{
          width: 'calc(100% - 20px)',
          padding: '10px',
          marginBottom: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px'
        }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.5rem',
        margin: '1rem 0'
      }}>
        {["+", "-", "*", "/"].map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperation(operator)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#007BFF',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {operator}
          </button>
        ))}
      </div>
      <p style={{ color: '#007BFF', fontSize: '1.2rem', marginTop: '1rem' }}>
        Result: {result !== null ? result : ""}
      </p>
    </div>
  );
}

export default App;
