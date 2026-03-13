import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px",
    backgroundColor: "#f4f4f4"
  },
  link: {
    marginRight: "15px",
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold"
  }
};

export default Navbar;