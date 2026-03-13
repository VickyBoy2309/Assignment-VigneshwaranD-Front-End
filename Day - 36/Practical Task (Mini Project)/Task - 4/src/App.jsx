import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // 📌 Add event listener
    window.addEventListener("resize", handleResize);

    // 🧹 Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize listener removed");
    };
  }, []); // runs once on mount

  return (
    <div style={styles.container}>
      <h1>Window Resize Event</h1>

      <p><strong>Width:</strong> {width}px</p>
      <p><strong>Height:</strong> {height}px</p>

      <p style={styles.note}>
        Resize the browser window to see updates
      </p>
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
  note: {
    marginTop: "10px",
    color: "gray"
  }
};

export default App;