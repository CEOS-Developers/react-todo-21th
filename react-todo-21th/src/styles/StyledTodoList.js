import styled from "styled-components";

export const TodoContainer = styled.div`
  background-color: #f2f8eb;
  padding: 1.25rem;
  border-radius: 0.75rem;
  max-width: 31.25rem;
  margin: 0 auto;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

export const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0;
`;

export const TodoInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  width: 80%;
  font-size: 1rem;
  border: 0.125rem solid #8bc34a;
  border-radius: 0.5rem;
  background-color: #ffffff;
  outline: none;
`;

export const AddButton = styled.button`
  background-color: #8bc34a;
  color: white;
  font-size: 1.25rem;
  border: none;
  padding: 0.625rem;
  margin-left: 0rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

export const TodoBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  color: #1b6530;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const TodoListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 0.625rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 0.1rem solid #4caf50;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.2s ease-in-out;
  margin-right: 0.3rem;

  &:checked {
    background-color: #4caf50;
    border-color: #388e3c;
  }

  &:checked::after {
    content: "✔";
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const TodoText = styled.span`
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
  word-break: break-all;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#888" : "black")};
`;

export const DeleteButton = styled.button`
  background-color: #8bc34a;
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-left: 0.1rem;

  &:hover {
    background-color: #689f38;
  }
`;
