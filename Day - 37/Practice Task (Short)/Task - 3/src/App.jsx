import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div style={styles.container}>
      <h1>BrowserRouter Example</h1>

      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "20px"
  },
  link: {
    marginRight: "15px",
    textDecoration: "none",
    color: "blue"
  }
};

export default App;