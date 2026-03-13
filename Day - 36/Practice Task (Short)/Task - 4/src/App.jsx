import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={styles.container}>
      <h1>Dependency Mistakes Example</h1>

      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>

      <button
        style={styles.button}
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>

      <button
        style={styles.button}
        onClick={() => setName("JSX")}
      >
        Change Name
      </button>

      <p style={styles.note}>
        Open the console to observe useEffect behavior.
      </p>
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
    margin: "5px",
    padding: "10px 20px",
    cursor: "pointer"
  },
  note: {
    marginTop: "10px",
    color: "gray"
  }
};

export default App;