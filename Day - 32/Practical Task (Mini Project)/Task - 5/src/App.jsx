import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>📚 Online Courses</h1>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <CourseCard course="React Basics" duration="10 Hours" />
        <CourseCard course="Node.js Mastery" duration="15 Hours" />
        <CourseCard course="MongoDB Beginner" duration="8 Hours" />
      </div>
    </div>
  );
}

export default App;