function CourseCard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "220px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>{props.course}</h2>
      <p>⏳ Duration: {props.duration}</p>
      <button style={{ padding: "8px 15px", cursor: "pointer" }}>
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;