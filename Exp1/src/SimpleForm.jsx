import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    alert(`Submitted Details:\nName: ${name}\nAge: ${age}\nGender: ${gender}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", padding: "20px" }}>
      <h2>Form SPA</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle}/>
      <input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} style={inputStyle}/>
      <select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button 
        onClick={handleSubmit} 
        style={{ backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
      >
        Submit
      </button>
      <footer style={{ marginTop: "20px", fontSize: "0.8em", opacity: 0.7 }}>
        Result: Form data is captured and displayed instantly.
      </footer>
    </div>
  );
}

const inputStyle = { padding: "10px", width: "100%", boxSizing: "border-box" };

export default SimpleForm;