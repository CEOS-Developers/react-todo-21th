import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Status from "./Status";
import {
  TodoContainer,
  TodoHeader,
  TodoInput,
  AddButton,
  TodoBoard,
  SectionTitle,
  TodoListWrapper,
} from "../styles/StyledTodoList";

const TodoList = ({ selectedDate, todos, addTodo, deleteTodo, toggleTodo }) => {
  return (
    <TodoContainer>
      <TodoHeader>
        <SectionTitle>
          {year}년 {month}월 {date}일의 할 일
        </SectionTitle>
      </TodoHeader>

      {/* 할 일 입력창 */}
      <TodoHeader>
        <TodoInput
          type="text"
          placeholder="할 일 입력"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue.trim() !== "") {
              addTodo(selectedDate, inputValue);
              setInputValue(""); // 입력창 초기화
            }
          }}
        />
        <AddButton
          onClick={() => {
            addTodo(selectedDate, inputValue);
            setInputValue(""); // 입력창 초기화
          }}
        >
          +
        </AddButton>
      </TodoHeader>

      {/* 투두리스트 표시 */}
      <TodoBoard>
        <Status todos={filteredTodos} filterFunc={(todos) => todos} />

        <SectionTitle>미완료 할 일</SectionTitle>
        <TodoListWrapper>
          {filteredTodos
            .filter((todo) => !todo.completed)
            .map((todo, index) => (
              <TodoItem
                key={`${selectedDate}-${index}`}
                todo={todo}
                index={index}
                selectedDate={selectedDate}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
        </TodoListWrapper>

        <SectionTitle>완료된 할 일</SectionTitle>
        <TodoListWrapper>
          {filteredTodos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <TodoItem
                key={`${selectedDate}-${index}`}
                todo={todo}
                index={index}
                selectedDate={selectedDate}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
        </TodoListWrapper>
      </TodoBoard>
    </TodoContainer>
  );
};

export default TodoList;
