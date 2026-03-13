import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🔁 Toggle Text</h1>

      <button
        onClick={handleToggle}
        style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}
      >
        {showText ? "Hide Text" : "Show Text"}
      </button>

      <h2 style={{ marginTop: "30px" }}>
        {showText ? "✅ Hello! Text is Visible 😄" : ""}
      </h2>
    </div>
  );
}

export default App;