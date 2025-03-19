import * as s from "./TodoPageStyled";
import TodoInput from "../components/TodoInput/TodoInput";
import SingleTodoList from "../components/TodoList/SingleTodoList";

const TodoPage = () => {
  return (
    <s.TodoPage>
      <s.TodoHeader>
        <h1>투두</h1>
        <div>
          <span>오늘 날짜</span>
          <span>오늘 할 일</span>
        </div>
      </s.TodoHeader>

      <s.TodoBody>
        <TodoInput />
        <s.TodoListMain>
          <s.TodoContainer>
            <SingleTodoList />
          </s.TodoContainer>
        </s.TodoListMain>
      </s.TodoBody>
      <s.Footer>
        <p>© 한서정 세오스 1주차 과제</p>
      </s.Footer>
    </s.TodoPage>
  );
};

export default TodoPage;
