import Product from "./components/Product.jsx";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Component ✅</h1>

      <Product name="Laptop" price={55000} />
      <Product name="Mobile" price={25000} />
      <Product name="Headphones" price={2000} />
    </div>
  );
}

export default App;