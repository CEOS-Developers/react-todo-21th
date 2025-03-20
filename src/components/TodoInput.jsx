import { useState } from "react";
import styled from "styled-components";

const TodoInput = ({ todoInput, setTodoInput, addTodoItem }) => {
  const [isComposing, setIsComposing] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      addTodoItem(todoInput);
    }
  };

  return (
    <TodoInputSection>
      <Input
        placeholder="할 일을 입력하세요."
        onKeyDown={handleKeyDown}
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <AddButton onClick={() => addTodoItem(todoInput)}>추가</AddButton>
    </TodoInputSection>
  );
};

export default TodoInput;

const TodoInputSection = styled.section``;

const Input = styled.input``;

const AddButton = styled.button``;
