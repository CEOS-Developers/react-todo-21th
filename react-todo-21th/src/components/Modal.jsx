import React from "react";
import TodoList from "./TodoList";
import { ModalOverlay, ModalContent, CloseButton } from "../styles/StyledModal";

const Modal = ({
  selectedDate,
  closeModal,
  todos,
  addTodo,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <ModalOverlay onClick={closeModal}>
      {/* 모달 밖 영역 클릭했을 때만 close 활성화 */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <TodoList
          selectedDate={selectedDate}
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
