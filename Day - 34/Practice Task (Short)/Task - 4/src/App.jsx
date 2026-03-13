import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={styles.container}>
      <h1>Logical AND (&&) Example</h1>

      {isVisible && (
        <p style={styles.message}>
          Welcome! You are logged in.
        </p>
      )}

      <button
        onClick={() => setIsVisible(!isVisible)}
        style={styles.button}
      >
        Toggle Message
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
  message: {
    margin: "15px 0",
    color: "green",
    fontSize: "18px"
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer"
  }
};

export default App;