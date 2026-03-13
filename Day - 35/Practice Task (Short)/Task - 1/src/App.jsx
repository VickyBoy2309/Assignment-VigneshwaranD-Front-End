import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={styles.container}>
      <h1>Controlled Input Field</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={styles.input}
      />

      <p>You typed: <strong>{name}</strong></p>
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
  input: {
    padding: "8px",
    fontSize: "16px",
    marginBottom: "10px"
  }
};

export default App;