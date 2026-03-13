import Student from "./components/Student.jsx";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Printing Props ✅</h1>

      <Student name="Vicky" course="Full Stack" year={2026} />
    </div>
  );
}

export default App;