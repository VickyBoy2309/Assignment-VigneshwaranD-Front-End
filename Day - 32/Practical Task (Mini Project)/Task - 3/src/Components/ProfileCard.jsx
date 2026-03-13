function ProfileCard({ name, role, email }) {
  return (
    <div style={styles.card}>
      <div style={styles.avatar}>👤</div>

      <h2 style={styles.name}>{name}</h2>
      <p style={styles.role}>{role}</p>
      <p style={styles.email}>{email}</p>

      <button style={styles.btn}>View Profile</button>
    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    padding: "25px",
    borderRadius: "15px",
    border: "2px solid black",
    textAlign: "center",
    boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
    backgroundColor: "white",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    margin: "0 auto 15px auto",
  },
  name: {
    margin: "10px 0 5px 0",
    fontSize: "22px",
  },
  role: {
    margin: "0",
    fontSize: "16px",
    color: "gray",
  },
  email: {
    margin: "10px 0 20px 0",
    fontSize: "14px",
  },
  btn: {
    padding: "10px 15px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProfileCard;