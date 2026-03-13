import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // 👈 runs whenever count changes

  return (
    <div style={styles.container}>
      <h1>useEffect on State Change</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={styles.button}
      >
        Increment
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default App;