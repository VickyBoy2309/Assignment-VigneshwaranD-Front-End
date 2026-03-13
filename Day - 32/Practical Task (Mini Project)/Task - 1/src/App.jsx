import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Card using Children ✅</h1>

      <Card>
        <h2>React Card</h2>
        <p>This content is coming from App.jsx ✅</p>
        <button style={styles.btn}>Click Here</button>
      </Card>
    </div>
  );
}

const styles = {
  btn: {
    padding: "10px 15px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;