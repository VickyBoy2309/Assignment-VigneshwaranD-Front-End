import { useState } from "react";
import "./App.css";

export default function App() {
  //  Multiple states in one component
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="page">
      <div className="card">
        <h1>Multiple States in One Component</h1>

        {/* Name State */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Age State */}
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        {/* Student State */}
        <div className="checkboxBox">
          <input
            type="checkbox"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
          />
          <label>Are you a student?</label>
        </div>

        {/* Preview */}
        <div className="preview">
          <h2>Live Preview</h2>
          <p>
            <b>Name:</b> {name || "Not entered"}
          </p>
          <p>
            <b>Age:</b> {age || "Not entered"}
          </p>
          <p>
            <b>Status:</b> {isStudent ? "Student " : "Not a Student "}
          </p>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => {
            setName("");
            setAge("");
            setIsStudent(false);
          }}
        >
          Reset All
        </button>
      </div>
    </div>
  );
}