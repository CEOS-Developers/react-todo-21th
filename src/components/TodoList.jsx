import styled from "styled-components";
import DeleteIcon from "@/assets/images/DeleteIcon.svg?react";
import CheckIcon from "@/assets/images/CheckIcon.png";
import { AnimatePresence, motion } from "motion/react";

const TodoList = ({
  todos = {},
  date,
  handleClickComplete,
  handleClickDelete,
}) => {
  return (
    <TodoListSection>
      <TodoListItems>
        <AnimatePresence initial={false}>
          {todos[date.selectedDate]?.map((item) => (
            <TodoListItem
              key={item.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <CheckButton
                type="checkbox"
                id={item.id}
                checked={item.completed === true ? true : false}
                onChange={() => handleClickComplete(item)}
              />
              <Text
                htmlFor={item.id}
                checked={item.completed === true ? true : false}
              >
                {item.text}
              </Text>
              <DeleteButton onClick={() => handleClickDelete(item)} />
            </TodoListItem>
          ))}
        </AnimatePresence>
      </TodoListItems>
    </TodoListSection>
  );
};

export default TodoList;

const TodoListSection = styled.section`
  width: 100%;
  max-height: 50dvh;
  min-height: 24rem;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${(props) => props.theme.subText};
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background2};
  }
`;

const TodoListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TodoListItem = styled(motion.li)`
  display: flex;
  align-items: start;
  gap: 0.5rem;
`;

const CheckButton = styled.input`
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: solid ${(props) => props.theme.subText} 0.125rem;
  cursor: pointer;
  flex-shrink: 0;

  &:checked {
    border: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${CheckIcon});
  }
`;

const Text = styled.label`
  display: block;
  min-width: 0;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: 1.25rem;
  color: ${(props) =>
    props.checked ? props.theme.disabled : props.theme.mainText};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const DeleteButton = styled(DeleteIcon)`
  width: 1.25rem;
  cursor: pointer;
  flex-shrink: 0;
`;
