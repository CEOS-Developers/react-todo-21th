import ReactDOM from "react-dom";
import styled from "styled-components";
import { loadData, TodoDataInfo, saveData } from "../utils/storage";
import { useEffect, useState } from "react";

interface TodoModalProps {
  isClose: () => void;
  date: string;
}
const TodoModal = ({ isClose, date }: TodoModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;
  const todoData: TodoDataInfo = loadData();
  const [todoDateList, setTodoDateList] = useState(todoData[date] || []);

  const handleCheckTodo = (index: number) => {
    const updatedDataList = [...todoDateList];
    updatedDataList[index] = {
      ...updatedDataList[index],
      isDone: !updatedDataList[index].isDone,
    };
    setTodoDateList(updatedDataList);
    saveData({ ...todoData, [date]: updatedDataList });
  };

  const handleAddTodo = () => {
    console.log("다른거", todoDateList);
    const inputEl = document.getElementById("addDataInput") as HTMLInputElement;
    const contents = inputEl.value.trim();
    if (!contents) {
      alert("할 일을 입력하세요");
      return;
    }
    setTodoDateList((prevState) => [
      ...prevState,
      { content: contents, isDone: false },
    ]);
    console.log("세이브 전", todoData);

    saveData({
      ...todoData,
      [date]: [...todoDateList, { content: contents, isDone: false }],
    });
    console.log("세이브 후", todoData);
    inputEl.value = "";
  };

  const handleDeleteTodo = (index: number) => {
    const updatedDataList = [...todoDateList];
    updatedDataList.splice(index, 1);
    setTodoDateList(updatedDataList);
    saveData({ ...todoData, [date]: updatedDataList });
  };
  useEffect(() => {
    saveData({ ...todoData, [date]: todoDateList });
  }, [todoDateList]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.isComposing) return;
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddTodo();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return ReactDOM.createPortal(
    <OverLayout onClick={isClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalContainer>
          <ModalTitle>{new Date(date).getDate()}일에 할 일</ModalTitle>

          <ul>
            {todoDateList.map((todo, index) => (
              <TodoItem key={index}>
                <input
                  type="checkbox"
                  id={`todoChk-${index}`}
                  onChange={() => handleCheckTodo(index)}
                  checked={todo.isDone}
                />
                <Contents>{todo.content}</Contents>
                <DeleteButton onClick={() => handleDeleteTodo(index)}>
                  삭제
                </DeleteButton>
              </TodoItem>
            ))}
          </ul>
          <AddTodoContainer>
            <AddInput
              type="text"
              id="addDataInput"
              placeholder="할 일을 입력하세요"
            />
            <AddButton onClick={handleAddTodo}>추가</AddButton>
          </AddTodoContainer>
        </ModalContainer>
      </Modal>
    </OverLayout>,
    modalRoot
  );
};
export default TodoModal;
const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const AddButton = styled.button`
  width: 18%;
`;
const AddInput = styled.input`
  width: 80%;
  padding: 5px;
`;
const AddTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 27px;
`;
const Contents = styled.span`
  font-size: 1.2rem;
  margin-left: 10px;
  margin-right: 35px;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  padding: 1.5px 4px;
`;
const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  @media (max-width: 768px) {
    width: 80%;
  }
  background-color: white;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 30px;
`;
const OverLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
