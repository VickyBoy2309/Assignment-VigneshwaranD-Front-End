import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div style={styles.container}>
      <h1>Navigation using Link</h1>

      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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