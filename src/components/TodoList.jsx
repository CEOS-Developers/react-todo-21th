import styled from "styled-components";
import DeleteIcon from "@/assets/images/DeleteIcon.svg?react";
import { AnimatePresence, motion } from "motion/react";

const TodoList = ({ todos = {}, date, handleClickDelete }) => {
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
              <Text>{item.text}</Text>
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
  min-height: 24rem;
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

const Text = styled.label`
  display: block;
  min-width: 0;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: 1.25rem;
`;

const DeleteButton = styled(DeleteIcon)`
  width: 1.25rem;
  cursor: pointer;
`;
