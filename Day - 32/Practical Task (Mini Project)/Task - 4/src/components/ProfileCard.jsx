function ProfileCard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <button style={{ padding: "8px 15px", cursor: "pointer" }}>
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;