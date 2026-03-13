function Student(props) {
  return (
    <div style={styles.box}>
      <h2>Student Details</h2>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

const styles = {
  box: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default Student;