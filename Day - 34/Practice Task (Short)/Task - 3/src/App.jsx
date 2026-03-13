function App() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Hyderabad" },
    { id: 4, name: "Mumbai" },
    { id: 5, name: "Delhi" }
  ];

  return (
    <div style={styles.container}>
      <h1>City List</h1>

      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name}
          </li>
        ))}
      </ul>
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
  }
};

export default App;