import { useState } from "react";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "page dark" : "page light"}>
      <div className="card">
        <h1>Toggle Light / Dark Text</h1>

        <p className="text">
          {isDark ? "🌙 Dark Mode Text" : "☀️ Light Mode Text"}
        </p>

        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </div>
  );
}