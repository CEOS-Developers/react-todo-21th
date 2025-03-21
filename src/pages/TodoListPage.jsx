import styled from "styled-components";
import DateNavigation from "@/components/DateNavigation";
import CountTodo from "@/components/CountTodo";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const TodoListPage = ({ toggleTheme, theme }) => {
  const [date, setDate] = useState({
    selectedDate: formatDate(),
    dayOffset: 0,
  });
  const [incompleteCount, setIncompleteCount] = useState(0);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState({});
  const [addDisabled, setAddDisabled] = useState(true);

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
    setAddDisabled(true);
  };

  const handleClickComplete = (todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = { ...prevTodos };
      updatedTodos[date.selectedDate] = updatedTodos[date.selectedDate].map(
        (item) =>
          item.id === todo.id ? { ...item, completed: !item.completed } : item
      );
      return updatedTodos;
    });
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
      <ThemeToggleWrapper>
        <ThemeToggle onClick={toggleTheme} theme={theme} />
      </ThemeToggleWrapper>
      <MainWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Header>
          <Title>Todo List</Title>
          <DateNavigation date={date} setDate={setDate} />
        </Header>
        <Content>
          <CountTodo incompleteCount={incompleteCount} />
          <TodoInput
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            addTodoItem={addTodoItem}
            addDisabled={addDisabled}
            setAddDisabled={setAddDisabled}
          />
          <TodoList
            todos={todos}
            date={date}
            handleClickComplete={handleClickComplete}
            handleClickDelete={handleClickDelete}
          />
        </Content>
      </MainWrapper>
    </PageWrapper>
  );
};

export default TodoListPage;

const PageWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: ${(props) => props.theme.background1};
`;

const ThemeToggleWrapper = styled.span`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

const MainWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  width: 24rem;
  border-radius: 1rem;
  padding: 1.5rem;
  gap: 1rem;

  background-color: ${(props) => props.theme.background2};
  color: ${(props) => props.theme.mainText};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-family: "Pretendard ExtraBold";
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
