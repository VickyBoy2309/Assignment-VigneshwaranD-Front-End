import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div style={styles.container}>
      <h1>User List</h1>

      {users.length === 0 ? (
        <p style={styles.noData}>No data available</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      {/* Button only to demonstrate data */}
      <button
        style={styles.button}
        onClick={() =>
          setUsers([
            { id: 1, name: "Vicky_Boy_23" },
            { id: 2, name: "Tony Stark" }
          ])
        }
      >
        Load Data
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial"
  },
  noData: {
    color: "gray",
    margin: "15px 0"
  },
  button: {
    marginTop: "20px",
    padding: "8px 16px",
    cursor: "pointer"
  }
};

export default App;