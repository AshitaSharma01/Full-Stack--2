import { useState, useEffect } from "react";
import Counter from "./Counter";
import Todo from "./Todo";
import ThemeToggle from "./ThemeToggle";
import SimpleForm from "./SimpleForm";

function App() {
  const [view, setView] = useState("home");
  
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#1a1a1a" : "#f4f4f4";
  }, [dark]);


  const dynamicPageStyle = {
    ...fullPageStyle,
    background: dark ? "#1a1a1a" : "#f4f4f4",
    color: dark ? "#ffffff" : "#000000",
  };

  const dynamicCardStyle = {
    ...cardStyle,
    background: dark ? "#2d2d2d" : "white",
    color: dark ? "#ffffff" : "#000000",
    borderColor: dark ? "#444" : "#ccc",
  };

  return (
    <div style={dynamicPageStyle}>
      <h1>Unit–1: Modern Frontend Development</h1>

      <nav style={navStyle}>
        <button style={navBtnStyle} onClick={() => setView("exp1")}>Counter</button>
        <button style={navBtnStyle} onClick={() => setView("exp2")}>To-Do</button>
        <button style={navBtnStyle} onClick={() => setView("exp3")}>Toggle theme</button>
        <button style={navBtnStyle} onClick={() => setView("exp4")}>Form</button>
      </nav>

      <hr style={{ width: "80%", maxWidth: "600px", margin: "10px 0", opacity: 0.3 }} />

      <div style={dynamicCardStyle}>
        {view === "home" && <p>Please select an experiment from the menu above.</p>}
        
        {view === "exp1" && <Counter />}
        {view === "exp2" && <Todo />}
        {view === "exp3" && <ThemeToggle dark={dark} setDark={setDark} />}
        {view === "exp4" && <SimpleForm />}
      </div>
      
      <footer style={{ marginTop: "40px", fontSize: "0.9em", opacity: 0.7 }}>
        Result: Single Page Application implemented successfully.
      </footer>
    </div>
  );
}

const fullPageStyle = { 
  minHeight: "100vh",
  width: "100%",
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "flex-start", 
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  margin: 0,
  padding: "20px",
  boxSizing: "border-box",
  transition: "background 0.3s ease, color 0.3s ease" // Smooth transition
};

const navStyle = { 
  marginBottom: "20px", 
  display: "flex", 
  gap: "10px", 
  justifyContent: "center",
  flexWrap: "wrap"
};

const navBtnStyle = { 
  padding: "10px 20px", 
  cursor: "pointer", 
  borderRadius: "5px", 
  border: "1px solid #999", 
  fontWeight: "bold",
  backgroundColor: "white",
  color: "black"
};

const cardStyle = { 
  padding: "30px", 
  border: "1px solid", 
  borderRadius: "15px", 
  width: "90%", 
  maxWidth: "500px", 
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: "background 0.3s ease"
};

export default App;