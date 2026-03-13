import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Task - 1 : Count: ${count}`;
  }, [count]); // 👈 runs when count changes

  return (
    <div style={styles.container}>
      <h1>Change Document Title</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={styles.button}
      >
        Increment
      </button>

      <p>Check the browser tab title 👆</p>
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