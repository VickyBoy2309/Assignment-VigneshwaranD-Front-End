import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component mounted");
    alert("useEffect ran once!");
  }, []); // 👈 runs only once

  return (
    <div style={styles.container}>
      <h1>useEffect Runs Once</h1>
      <p>Check console or alert</p>
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
  }
};

export default App;