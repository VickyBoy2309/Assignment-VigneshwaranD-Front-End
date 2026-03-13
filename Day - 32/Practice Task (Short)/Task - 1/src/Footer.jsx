function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "white",
    padding: "15px",
    textAlign: "center",
    marginTop: "20px",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;