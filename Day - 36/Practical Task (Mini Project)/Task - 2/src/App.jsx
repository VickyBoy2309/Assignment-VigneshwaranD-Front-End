import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch mock data on page load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // 👈 runs once on mount

  return (
    <div style={styles.container}>
      <h1>Mock User Data</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {users.map((user) => (
            <li key={user.id} style={styles.item}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    padding: "8px 0",
    borderBottom: "1px solid #ddd"
  }
};

export default App;