import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";
import { GlobalStyles } from "./styles/GlobalStyles"; // 스타일 가져오기

const App = () => {
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
