import { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="page">
      <div className="card">
        <h1>Input Preview</h1>

        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="preview">
          <h2>Live Preview</h2>
          <p>{text.trim() === "" ? "Nothing typed yet..." : text}</p>
        </div>
      </div>
    </div>
  );
}