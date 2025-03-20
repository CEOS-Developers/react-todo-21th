import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import DateNavigation from "./components/DateNavigation";
import CountTodo from "./components/CountTodo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <PageWrapper>
      <GlobalStyles />
      <MainWrapper>
        <Header>
          <Title>투두 리스트</Title>
        </Header>
        <Content>
          <DateNavigation />
          <CountTodo />
          <TodoInput />
          <TodoList />
        </Content>
      </MainWrapper>
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div``;

const MainWrapper = styled.main``;

const Header = styled.header``;

const Title = styled.h1``;

const Content = styled.section``;
