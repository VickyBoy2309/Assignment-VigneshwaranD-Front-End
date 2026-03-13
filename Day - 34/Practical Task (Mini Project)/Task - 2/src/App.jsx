function App() {
  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Smartphone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 }
  ];

  return (
    <div style={styles.container}>
      <h1>Product List</h1>

      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.item}>
            <span>{product.name}</span>
            <span>₹{product.price}</span>
          </li>
        ))}
      </ul>
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
  list: {
    listStyle: "none",
    padding: 0,
    width: "300px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc"
  }
};

export default App;