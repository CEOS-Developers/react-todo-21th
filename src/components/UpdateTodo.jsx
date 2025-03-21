import React, { useState } from "react";
import { formatDate } from "../utils/dateFormatter";

function Update({ todos, setTodos, date }) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const isDuplicate = todos.some(todo => todo.text === inputValue.trim());
    if (isDuplicate) {
      alert("이미 동일한 할 일이 존재합니다.");
      setInputValue("")
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

  const checkTodo = () => {};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div>
      <div id="currentDate">{date}</div>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>삭제</button>
            <button onClick={() => checkTodo(index)}>완료</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Update;
