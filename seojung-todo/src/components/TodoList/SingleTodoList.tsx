import * as s from "./SingleTodoListStyled";
import SingleTodo from "./SingleTodo";
import { Tags, Todo, Todos } from "../../interface";

interface SingleTodoListProps {
  tag: Tags;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodoList: React.FC<SingleTodoListProps> = ({
  tag,
  todos,
  setTodos,
}) => {
  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos((prev) =>
      prev.map((t) => (t.tag === tag.name ? { ...t, todos: updatedTodos } : t))
    );
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );

    setTodos((prev) =>
      prev.map((t) => (t.tag === tag.name ? { ...t, todos: updatedTodos } : t))
    );
  };

  return (
    <s.TodoListWrapper $bg={tag.background}>
      <h2>{tag.name}</h2>
      <ul>
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        ))}
      </ul>
    </s.TodoListWrapper>
  );
};

export default SingleTodoList;
