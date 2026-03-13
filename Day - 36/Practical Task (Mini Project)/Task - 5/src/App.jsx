import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1); // ✅ safe update
    }, 1000);

    return () => clearInterval(timer);
  }, []); // no infinite loop

  return (
    <div style={styles.container}>
      <h1>Fixed useEffect Loop</h1>
      <h2>Count: {count}</h2>
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
