import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 🧹 Cleanup function
    return () => {
      clearInterval(timerId);
      console.log("Timer cleared");
    };
  }, []); // runs once on mount

  return (
    <div style={styles.container}>
      <h1>Timer with Cleanup</h1>
      <h2>Seconds: {seconds}</h2>
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