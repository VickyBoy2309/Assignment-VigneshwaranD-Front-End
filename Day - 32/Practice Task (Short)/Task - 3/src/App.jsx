import Button from "./components/Button.jsx";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Button Component Example ✅</h1>

      <Button text="Click Me" />
      <br /><br />
      <Button text="Submit" />
      <br /><br />
      <Button text="Login" />
    </div>
  );
}

export default App;