import * as s from "./SingleTodoListStyled";
import SingleTodo from "./SingleTodo";

const SingleTodoList = () => {
  return (
    <s.TodoListWrapper $bg="">
      <h2>제목</h2>
      <ul>
        <SingleTodo />
      </ul>
    </s.TodoListWrapper>
  );
};

export default SingleTodoList;
