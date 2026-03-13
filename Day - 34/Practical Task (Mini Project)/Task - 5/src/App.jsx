import { useState } from "react";

function App() {
  const [showList, setShowList] = useState(false);

  const items = [
    "Avengers",
    "Spider - Verse",
    "Fantastic Four",
    "Wakanada Forver",
    "Beyonder"
  ];

  return (
    <div style={styles.container}>
      <h1>Toggle List Visibility</h1>

      <button
        onClick={() => setShowList(!showList)}
        style={styles.button}
      >
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
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
    cursor: "pointer",
    marginBottom: "15px"
  },
  list: {
    listStyle: "none",
    padding: 0
  }
};

export default App;