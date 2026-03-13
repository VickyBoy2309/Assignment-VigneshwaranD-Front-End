import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${formData.name}, Email: ${formData.email}`);

    // 🔄 Reset form values
    setFormData({
      name: "",
      email: ""
    });
  };

  return (
    <div style={styles.container}>
      <h1>Reset Form Values</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
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
  input: {
    margin: "6px",
    padding: "8px",
    fontSize: "16px"
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    cursor: "pointer"
  }
};

export default App;