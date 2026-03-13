function App() {
  const users = [
    { id: 101, name: "Vicky_Boy_23", role: "CEO", email: "0987vickyboy@gmail.com" },
    { id: 102, name: "Stark", role: "Kutty CEO", email: "ironman@stark.com" },
    { id: 103, name: "Banner", role: "Developer", email: "branner@hulk.com" },
    { id: 104, name: "Rogers", role: "Manager", email: "Rogers@carter.com" },
    { id: 105, name: "Parker", role: "Developer", email: "aunt@may69.com" }
  ];

  return (
    <div style={styles.container}>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial"
  },
  card: {
    width: "300px",
    padding: "15px",
    margin: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  }
};

export default App;