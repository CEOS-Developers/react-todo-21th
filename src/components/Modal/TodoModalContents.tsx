import { useEffect, useState } from "react";
import {
  AddButton,
  AddInput,
  AddTodoContainer,
  Contents,
  DeleteButton,
  ModalTitle,
  TodoItem,
} from "./TodoModalStyle";
import { loadData, saveData, TodoDataInfo } from "../../utils/storage";
interface TodoModalContentsProps {
  date: string;
}
const TodoModalContents = ({ date }: TodoModalContentsProps) => {
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
  return (
    <>
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
    </>
  );
};

export default TodoModalContents;
