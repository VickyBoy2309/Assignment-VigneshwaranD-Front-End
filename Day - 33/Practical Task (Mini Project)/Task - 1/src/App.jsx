import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>✅ Click Counter App</h1>

      <div className="counter-box">
        <h2>{count}</h2>

        <div className="btn-group">
          <button onClick={increase} className="btn btn-plus">+ Increase</button>
          <button onClick={decrease} className="btn btn-minus">- Decrease</button>
          <button onClick={reset} className="btn btn-reset">🔄 Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;