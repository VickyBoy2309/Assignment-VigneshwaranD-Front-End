function Product({ name, price }) {
  return (
    <div style={styles.box}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
}

const styles = {
  box: {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default Product;