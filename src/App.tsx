import "./App.css";
import Calendar from "./components/Calendar";
import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <MainTitle>투두리스트</MainTitle>
        <Calendar />
      </Container>
    </>
  );
}

export default App;
const MainTitle = styled.h1`
  @font-face {
    font-family: "DungGeunMo";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "DungGeunMo";
  font-size: 2rem;
  margin: 30px;
  margin-bottom: 15px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 30px;
  flex-direction: column;
  align-items: center;
`;
