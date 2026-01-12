import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Allows user to press "Enter" to add a task
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ marginTop: 0 }}>To-Do SPA</h2>
      
      <div style={inputGroupStyle}>
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          onKeyDown={handleKeyDown}
          placeholder="Enter task..." 
          style={inputStyle}
        />
        <button onClick={addTask} style={addBtnStyle}>Add</button>
      </div>

      <h3 style={headerStyle}>Today, you have to do:</h3>
      
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tasks.length === 0 ? (
          <p style={{ opacity: 0.5, fontStyle: "italic" }}>No tasks yet!</p>
        ) : (
          tasks.map((t, i) => (
            <li key={i} style={listItemStyle}>
              <span style={textStyle}>{t}</span>
              <button 
                onClick={() => completeTask(i)} 
                style={checkBtnStyle}
                title="Complete Task"
              >
                ✓
              </button>
            </li>
          ))
        )}
      </ul>

      <footer style={{ marginTop: "30px", fontSize: "0.8em", opacity: 0.6 }}>
        Result: Tasks are added and removed dynamically.
      </footer>
    </div>
  );
}

// --- STYLES ---

const inputGroupStyle = { 
  display: "flex", 
  gap: "8px", 
  marginBottom: "20px" 
};

const inputStyle = { 
  flex: 1, 
  padding: "12px", 
  borderRadius: "5px", 
  border: "1px solid #ccc",
  fontSize: "1rem"
};

const addBtnStyle = { 
  padding: "10px 20px", 
  backgroundColor: "#007bff", 
  color: "white", 
  border: "none", 
  borderRadius: "5px", 
  cursor: "pointer",
  fontWeight: "bold"
};

const headerStyle = { 
  borderBottom: "2px solid #eee", 
  paddingBottom: "10px", 
  textAlign: "left",
  fontSize: "1.1em"
};

const listItemStyle = { 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center",      // Aligns text and button vertically in the center
  padding: "12px 0", 
  borderBottom: "1px dashed #ddd" 
};

const textStyle = {
  textAlign: "left",
  paddingRight: "10px",
  wordBreak: "break-word"    // Prevents long text from breaking layout
};

const checkBtnStyle = { 
  display: "flex",           // Flexbox to center the checkmark
  alignItems: "center", 
  justifyContent: "center", 
  flexShrink: 0,             // Prevents circle from becoming an oval
  color: "green", 
  backgroundColor: "white",
  border: "2px solid green", 
  borderRadius: "50%", 
  width: "32px", 
  height: "32px", 
  cursor: "pointer",
  fontSize: "18px",
  transition: "all 0.2s ease"
};

export default Todo;