import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div style={styles.container}>
      <h1>Checkbox State Example</h1>

      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        Accept Terms & Conditions
      </label>

      <p>
        Status:{" "}
        <strong>{isChecked ? "Checked ✅" : "Not Checked ❌"}</strong>
      </p>
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
  label: {
    margin: "10px 0",
    fontSize: "16px"
  }
};

export default App;