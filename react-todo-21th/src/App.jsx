import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";
import { GlobalStyles } from "./styles/GlobalStyles"; // 스타일 가져오기
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // LocalStorage에서 기존 데이터 불러오기, todo 데이터 관리
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    // 저장된 데이터 있으면 반환, 없으면 빈 배열
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 상태 변경시 LocalStorage에 업로드
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // todolist 변경시마다 실행

  // 오늘 날짜로 selectedDate 업데이트
  const getToday = () => {
    const today = new Date(); // 오늘 날짜 객체 생성
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(today.getDate()).padStart(2, "0"); // 1자리 수일 경우 0 추가
    return `${year}-${month}-${day}`; // "YYYY-MM-DD" 형식으로 반환
  };

  const [selectedDate, setSelectedDate] = useState(getToday());

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 새로운 할 일 추가
  const addTodo = (date, text) => {
    setTodos((prevTodos) => {
      // 기존 상태를 새로운 객체로 복사
      return {
        ...prevTodos,
        [date]: [
          ...(prevTodos[date] || []),
          { id: uuidv4(), text, completed: false },
        ],
      };
    });
  };

  // 할 일 list에서 제거
  const deleteTodo = (date, id) => {
    setTodos((prevTodos) => {
      const updatedTodoList = prevTodos[date].filter((todo) => todo.id !== id);
      return { ...prevTodos, [date]: updatedTodoList };
    });
  };

  // 체크박스 토글 (완료/미완료)
  const toggleTodo = (date, id) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [date]: prevTodos[date].map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  // 모달 열기/닫기
  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <GlobalStyles />
      <h1>📅To-do List</h1>
      <Calendar
        openModal={openModal}
        setSelectedDate={setSelectedDate}
        todos={todos}
        selectedDate={selectedDate}
      />

      {isModalOpen && (
        <Modal
          selectedDate={selectedDate}
          closeModal={closeModal}
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      )}
    </div>
  );
};

export default App;
