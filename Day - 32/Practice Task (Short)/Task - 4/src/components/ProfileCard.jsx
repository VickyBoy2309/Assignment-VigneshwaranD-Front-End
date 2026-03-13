function ProfileCard({ name, role, year }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Year: {year}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default ProfileCard;