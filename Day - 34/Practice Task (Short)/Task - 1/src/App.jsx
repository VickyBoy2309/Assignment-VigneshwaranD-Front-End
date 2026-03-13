import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      <h1>
        {isLoggedIn ? "Logged In" : "Logged Out"}
      </h1>

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
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default App;