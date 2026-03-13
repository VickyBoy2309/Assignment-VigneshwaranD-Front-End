import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ Prevents page reload
    alert(`Form submitted by ${name}`);
  };

  return (
    <div style={styles.container}>
      <h1>Prevent Form Reload</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial"
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    marginRight: "10px"
  },
  button: {
    padding: "8px 16px",
    cursor: "pointer"
  }
};

export default App;