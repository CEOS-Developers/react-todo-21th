import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>투두리스트</div>
      <Calendar />
    </>
  );
}

export default App;
