import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Reusable Component Example</h1>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <ProfileCard name="Vicky" role="Frontend Developer" />
        <ProfileCard name="Stark" role="Backend Developer" />
        <ProfileCard name="Rogers" role="UI/UX Designer" />
      </div>
    </div>
  );
}

export default App;