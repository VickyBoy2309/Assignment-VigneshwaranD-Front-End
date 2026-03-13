import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>⌨️ Live Input Preview</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "18px",
          borderRadius: "8px",
        }}
      />

      <h2 style={{ marginTop: "30px" }}>
        You typed: <span style={{ color: "blue" }}>{text}</span>
      </h2>
    </div>
  );
}

export default App;