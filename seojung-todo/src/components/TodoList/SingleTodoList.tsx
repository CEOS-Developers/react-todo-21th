import * as s from "./SingleTodoListStyled";
import SingleTodo from "./SingleTodo";
import { Tags, Todo, Todos } from "../../interface";

interface SingleTodoListProps {
  tag: Tags;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  setTags: React.Dispatch<React.SetStateAction<Tags[]>>;
}

const SingleTodoList: React.FC<SingleTodoListProps> = ({
  tag,
  todos,
  setTodos,
  setTags,
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

  const handleDeleteTag = () => {
    if (!window.confirm(`'${tag.name}' 태그를 삭제하시겠습니까?`)) return;

    setTodos((prevTodos) => {
      const targetTodos =
        prevTodos.find((t) => t.tag === tag.name)?.todos || [];

      const updated = prevTodos
        .filter((t) => t.tag !== tag.name) //태그 삭제
        .map((t) => ({ ...t })); // 나머지 복사

      // 기본 태그가 존재하는지 확인
      const basicIndex = updated.findIndex((t) => t.tag === "기본");
      if (basicIndex !== -1) {
        updated[basicIndex].todos = [
          ...updated[basicIndex].todos,
          ...targetTodos,
        ];
      } else {
        updated.push({
          tag: "기본",
          todos: [...targetTodos],
        });
      }

      return updated;
    });

    // 태그 목록에서 제거!
    setTags((prevTags) => prevTags.filter((t) => t.name !== tag.name));
  };

  return (
    <s.TodoListWrapper $bg={tag.background}>
      <div>
        <h2>{tag.name}</h2>

        {tag.name !== "기본" && <button onClick={handleDeleteTag}>삭제</button>}
      </div>

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
