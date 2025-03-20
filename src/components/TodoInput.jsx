import styled from "styled-components";

const TodoInput = () => {
  return (
    <TodoInputSection>
      <Input />
      <AddButton />
    </TodoInputSection>
  );
};

export default TodoInput;

const TodoInputSection = styled.section``;

const Input = styled.input``;

const AddButton = styled.button``;
