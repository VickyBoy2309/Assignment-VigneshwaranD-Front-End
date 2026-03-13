import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("1️⃣ Component render");

  useEffect(() => {
    console.log("3️⃣ useEffect (runs after render)");

    return () => {
      console.log("5️⃣ Cleanup before next effect or unmount");
    };
  }, [count]);

  useEffect(() => {
    console.log("4️⃣ Second useEffect (also after render)");
  }, []);

  return (
    <div style={styles.container}>
      <h1>useEffect Execution Order</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={styles.button}
      >
        Increment
      </button>

      <p>Open the console to see execution order</p>
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
    cursor: "pointer"
  }
};

export default App;