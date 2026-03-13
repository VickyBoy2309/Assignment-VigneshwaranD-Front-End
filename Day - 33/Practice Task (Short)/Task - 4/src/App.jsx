import { useState } from "react";

function App() {
  const [btnText, setBtnText] = useState("Click Me");

  const handleClick = () => {
    setBtnText("✅ Clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🔘 Button Text Change</h1>

      <button
        onClick={handleClick}
        style={{
          padding: "12px 25px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default App;