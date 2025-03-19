import {
  TodoItemContainer,
  Checkbox,
  TodoText,
  DeleteButton,
} from "../styles/StyledTodoList";

const TodoItem = ({ todo, index, selectedDate, deleteTodo, toggleTodo }) => {
  return (
    <TodoItemContainer>
      <Checkbox
        checked={todo.completed}
        onChange={() => {
          toggleTodo(selectedDate, index);
        }}
      />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <DeleteButton onClick={() => deleteTodo(selectedDate, index)}>
        del
      </DeleteButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
