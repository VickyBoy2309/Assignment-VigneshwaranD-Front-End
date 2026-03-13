import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      <h1>Ternary Operator Example</h1>

      <h2>
        {isLoggedIn ? "Welcome, User!" : "Please Login"}
      </h2>

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={styles.button}
      >
        {isLoggedIn ? "Logout" : "Login"}
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
    marginTop: "15px",
    padding: "10px 20px",
    cursor: "pointer"
  }
};

export default App;