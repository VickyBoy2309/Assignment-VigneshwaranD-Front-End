import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Task - 5";
  }, []);

  return <h1>Hello There!</h1>;
}

export default App;