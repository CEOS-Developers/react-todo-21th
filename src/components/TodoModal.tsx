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
  console.log(todoData);
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
    saveData({
      ...todoData,
      [date]: [...todoDateList, { content: contents, isDone: false }],
    });
    inputEl.value = "";
  };

  const handleDeleteTodo = (index: number) => {
    const updatedDataList = [...todoDateList];
    updatedDataList.splice(index, 1);
    setTodoDateList(updatedDataList);
    saveData({ ...todoData, [date]: updatedDataList });
  };
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
        <div>{date}</div>
        <div>할일</div>
        <ul>
          {todoDateList.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`todoChk-${index}`}
                onChange={() => handleCheckTodo(index)}
                checked={todo.isDone}
              />
              <span>{todo.content}</span>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
        <input type="text" id="addDataInput" placeholder="할 일을 입력하세요" />
        <button onClick={handleAddTodo}>추가</button>
      </Modal>
    </OverLayout>,
    modalRoot
  );
};
export default TodoModal;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background-color: white;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
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
