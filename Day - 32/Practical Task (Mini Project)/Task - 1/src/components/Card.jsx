function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    margin: "30px auto",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
};

export default Card;