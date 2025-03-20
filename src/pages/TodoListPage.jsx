import styled from "styled-components";
import DateNavigation from "@/components/DateNavigation";
import CountTodo from "@/components/CountTodo";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";

const TodoListPage = () => {
  const [date, setDate] = useState({
    selectedDate: formatDate(),
    dayOffset: 0,
  });
  const [incompleteCount, setIncompleteCount] = useState(0);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState({});

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || {});
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    const count = (todos[date.selectedDate] || []).filter(
      (todo) => !todo.completed
    ).length;
    setIncompleteCount(count);
  }, [todos]);

  useEffect(() => {
    const count = (todos[date.selectedDate] || []).filter(
      (todo) => !todo.completed
    ).length;
    setIncompleteCount(count);
  }, [date.selectedDate]);

  const addTodoItem = (todoText) => {
    if (todoInput.trim() === "") {
      return;
    }

    const newTodo = {
      id: `${Date.now()}`,
      text: todoText,
      completed: false,
    };

    setTodos((prevTodos) => {
      const updatedTodos = { ...prevTodos };
      if (!updatedTodos[date.selectedDate]) {
        updatedTodos[date.selectedDate] = [];
      }
      updatedTodos[date.selectedDate].push(newTodo);
      return updatedTodos;
    });

    setTodoInput("");
  };

  const handleClickDelete = (todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = { ...prevTodos };
      updatedTodos[date.selectedDate] = updatedTodos[date.selectedDate].filter(
        (item) => item.id !== todo.id
      );
      return updatedTodos;
    });
  };

  return (
    <PageWrapper>
      <MainWrapper>
        <Header>
          <Title>투두 리스트</Title>
        </Header>
        <Content>
          <DateNavigation date={date} setDate={setDate} />
          <CountTodo incompleteCount={incompleteCount} />
          <TodoInput
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            addTodoItem={addTodoItem}
          />
          <TodoList
            todos={todos}
            date={date}
            handleClickDelete={handleClickDelete}
          />
        </Content>
      </MainWrapper>
    </PageWrapper>
  );
};

export default TodoListPage;

const PageWrapper = styled.div``;

const MainWrapper = styled.main``;

const Header = styled.header``;

const Title = styled.h1``;

const Content = styled.section``;
