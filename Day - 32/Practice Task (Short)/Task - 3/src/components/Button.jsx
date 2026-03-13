function Button({ text }) {
  return (
    <button style={styles.btn}>
      {text}
    </button>
  );
}

const styles = {
  btn: {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Button;