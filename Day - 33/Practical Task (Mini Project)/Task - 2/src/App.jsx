import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="container">
      <h1>✅ Show / Hide Profile Component</h1>

      <button
        className="toggle-btn"
        onClick={() => setShowProfile(!showProfile)}
      >
        {showProfile ? "Hide Profile ❌" : "Show Profile ✅"}
      </button>

      {showProfile && <Profile />}
    </div>
  );
}

export default App;