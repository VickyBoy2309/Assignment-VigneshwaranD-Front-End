import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // ⏱ Start timer
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 🧹 Cleanup when component unmounts
    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []); // runs once on mount

  return (
    <div style={styles.container}>
      <h1>Timer with Cleanup</h1>
      <h2>{seconds} seconds</h2>
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
  }
};

export default App;