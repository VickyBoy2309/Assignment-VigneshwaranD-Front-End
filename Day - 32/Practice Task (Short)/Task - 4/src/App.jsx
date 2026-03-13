import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Destructuring Props ✅</h1>

      <ProfileCard name="Vigneshwaran D" role="CEO" year={2026} />
    </div>
  );
}

export default App;