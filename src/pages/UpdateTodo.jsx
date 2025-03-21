import React, { useState } from "react";
import { formatDate } from "../utils/dateFormatter";
import { countCompletedTodos, countPendingTodos } from "../utils/CountTodo";
import {
  UpdateWrapper,
  CurrentDate,
  CountTodo,
  InputSection,
  TodoList,
} from "../styles/UpdateStyles";

function Update({ todos, setTodos, date }) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const isDuplicate = todos.some((todo) => todo.text === inputValue.trim());
    if (isDuplicate) {
      alert("이미 동일한 할 일이 존재합니다.");
      setInputValue("");
      return;
    }

    const newTodo = { text: inputValue, completed: false };
    const updatedTodos = [...todos, newTodo];
    const formattedDate = formatDate(date);
    setTodos(updatedTodos);
    localStorage.setItem(`${formattedDate}`, JSON.stringify(updatedTodos));
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    const formattedDate = formatDate(date);
    setTodos(updatedTodos);

    if (updatedTodos.length === 0) {
      localStorage.removeItem(`${formattedDate}`);
    } else {
      localStorage.setItem(`${formattedDate}`, JSON.stringify(updatedTodos));
    }
  };

  const checkTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    const formattedDate = formatDate(date);
    setTodos(updatedTodos);
    localStorage.setItem(`${formattedDate}`, JSON.stringify(updatedTodos));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <UpdateWrapper>
      <CurrentDate>{date}</CurrentDate>

      <CountTodo>
        <p>완료된 할 일: {countCompletedTodos(todos)}</p>
        <p>미완료 할 일: {countPendingTodos(todos)}</p>
      </CountTodo>

      <InputSection>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>추가</button>
      </InputSection>

      <TodoList>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => checkTodo(index)} // 체크 상태 변경
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </TodoList>
    </UpdateWrapper>
  );
}

export default Update;
