import {
  TodoItemContainer,
  Checkbox,
  TodoText,
  DeleteButton,
} from "../styles/StyledTodoList";

const TodoItem = ({ todo, selectedDate, deleteTodo, toggleTodo }) => {
  return (
    <TodoItemContainer>
      <Checkbox
        checked={todo.completed}
        onChange={() => {
          toggleTodo(selectedDate, todo.id);
        }}
      />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <DeleteButton onClick={() => deleteTodo(selectedDate, todo.id)}>
        del
      </DeleteButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
