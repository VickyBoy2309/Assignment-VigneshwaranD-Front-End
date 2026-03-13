import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🔢 Counter App</h1>

      <h2 style={{ fontSize: "45px" }}>{count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={decrease}
          style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}
        >
          –
        </button>

        <button
          onClick={reset}
          style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}
        >
          Reset
        </button>

        <button
          onClick={increase}
          style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;