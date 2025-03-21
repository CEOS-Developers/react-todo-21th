import styled from "styled-components";

const CountTodo = ({ incompleteCount }) => {
  return <CountTodoContainer>남은 할 일: {incompleteCount}</CountTodoContainer>;
};

export default CountTodo;

const CountTodoContainer = styled.span`
  display: flex;
  justify-content: end;
  font-size: 1rem;
`;
