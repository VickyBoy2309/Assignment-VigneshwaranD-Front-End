import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={styles.container}>
      <h1>Replace &lt;a&gt; with Link</h1>

      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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