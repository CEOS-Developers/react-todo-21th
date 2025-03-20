import styled from "styled-components";

const TodoList = ({ todos = {}, date, handleClickDelete }) => {
  return (
    <TodoListSection>
      <TodoListItems>
        {todos[date.selectedDate]?.map((item) => (
          <TodoListItem key={item.id}>
            {item.text}
            <DeleteButton onClick={() => handleClickDelete(item)}>
              삭제
            </DeleteButton>
          </TodoListItem>
        ))}
      </TodoListItems>
    </TodoListSection>
  );
};

export default TodoList;

const TodoListSection = styled.section``;

const TodoListItems = styled.ul``;

const TodoListItem = styled.li``;

const DeleteButton = styled.button``;
