import { useState } from "react";
import styled from "styled-components";
import AddIcon from "@/assets/images/AddIcon.svg?react";

const TodoInput = ({ todoInput, setTodoInput, addTodoItem }) => {
  const [isComposing, setIsComposing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      addTodoItem(todoInput);
    }
  };

  const handleOnChange = (e) => {
    setTodoInput(e.target.value);
    setDisabled(e.target.value.trim().length === 0);
  };

  return (
    <TodoInputSection>
      <Input
        placeholder="할 일을 입력하세요."
        onKeyDown={handleKeyDown}
        value={todoInput}
        onChange={handleOnChange}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <AddButton onClick={() => addTodoItem(todoInput)} disabled={disabled}>
        추가
      </AddButton>
    </TodoInputSection>
  );
};

export default TodoInput;

const TodoInputSection = styled.section`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.125rem 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme.subText};
  }
`;

const AddButton = styled(AddIcon)`
  display: flex;
  width: 2.25rem;
  flex-shrink: 0;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.disabled ? props.theme.disabled : props.theme.mainText};

  &:hover {
    color: ${(props) =>
      props.disabled ? props.theme.disabled : props.theme.subText};
  }
`;
