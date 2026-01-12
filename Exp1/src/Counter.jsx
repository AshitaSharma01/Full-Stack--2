import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <h2>Counter SPA</h2>
      <p style={{ fontSize: "3rem", margin: "10px 0" }}>{count}</p>
      <button style={actionBtn} onClick={() => setCount(count + 1)}>+</button>
      <button style={actionBtn} onClick={() => setCount(count - 1)}>-</button>
      <br />
      <button 
        onClick={() => setCount(0)} 
        style={{ ...actionBtn, backgroundColor: "#dc3545", color: "white", width: "100px" }}
      >
        Reset
      </button>
      <footer style={footerStyle}>
        Result: Counter value updates dynamically.
      </footer>
    </div>
  );
}

const containerStyle = { padding: "20px", textAlign: "center" };
const actionBtn = { padding: "10px 20px", margin: "5px", cursor: "pointer", fontSize: "1.2rem" };
const footerStyle = { marginTop: "20px", fontSize: "0.8em", opacity: 0.7 };

export default Counter;