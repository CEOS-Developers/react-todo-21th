import * as s from "./TodoPageStyled";
import TodoInput from "../components/TodoInput/TodoInput";
import SingleTodoList from "../components/TodoList/SingleTodoList";
import { initialTodos, initialTagData } from "../assets/data";
import { useState, useEffect } from "react";
import { Todos, Tags } from "../interface";
import { isToday } from "../utils/date";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todos[]>(() => {
    // 로컬 스토리지에서 데이터 가져오기 (없으면 초기값 사용)
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : initialTodos;
  });

  const [tags, setTags] = useState<Tags[]>(() => {
    // 로컬 스토리지에서 데이터 가져오기 (없으면 초기값 사용)
    const storedTags = localStorage.getItem("tags");
    return storedTags ? JSON.parse(storedTags) : initialTagData;
  });

  // todos 변경 시 로컬 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // 초기화
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(initialTodos));
  //   localStorage.setItem("tags", JSON.stringify(initialTagData));
  // });

  //오늘 할 일 카운트
  const todayTodos = todos
    .flatMap((t) => t.todos)
    .filter((todo) => todo.date && isToday(new Date(todo.date)));

  const completedCount = todayTodos.filter((todo) => todo.isComplete).length;
  const todoCount = todayTodos.length - completedCount;

  //오늘 날짜 반환
  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  //태그 변경 시 로컬 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  const getTodosByTag = (tagName: string) => {
    const existingIndex = todos.findIndex((data) => data.tag === tagName);
    if (existingIndex == -1) {
      return [];
    } else {
      return todos[existingIndex].todos;
    }
  };

  return (
    <s.TodoPage>
      <s.TodoHeader>
        <h1>투두</h1>
        <div>
          <span>{today}</span>
          <span>
            오늘 할 일: {todoCount}개 / 한 일: {completedCount}개
          </span>
        </div>
      </s.TodoHeader>

      <s.TodoBody>
        <TodoInput
          todos={todos}
          setTodos={setTodos}
          tags={tags}
          setTags={setTags}
        />
        <s.TodoListMain>
          <s.TodoContainer>
            {tags.map((tag) => (
              <SingleTodoList
                tag={tag}
                key={tag.name}
                todos={getTodosByTag(tag.name)}
                setTodos={setTodos}
              />
            ))}
          </s.TodoContainer>
        </s.TodoListMain>
      </s.TodoBody>
      <s.Footer>
        <p>© 한서정 세오스 2주차 과제</p>
      </s.Footer>
    </s.TodoPage>
  );
};

export default TodoPage;
