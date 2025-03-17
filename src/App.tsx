import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calendar from "./components/Calendar";
import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <div>투두리스트</div>
        <Calendar />
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
