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
import { loadData, saveData, TodoDataInfo } from "../../utils/storage.tsx";
interface TodoModalContentsProps {
  date: string;
}

const TodoModalContents = ({ date }: TodoModalContentsProps) => {
  const todoData: TodoDataInfo = loadData(); //로컬 스토리지에서 데이터 불러오기
  const [todoDateList, setTodoDateList] = useState(todoData[date] || []); //할 일 데이터 상태 관리

  //할 일 체크 이벤트 핸들러
  const handleCheckTodo = (index: number) => {
    const updatedDataList = [...todoDateList];
    updatedDataList[index] = {
      ...updatedDataList[index],
      isDone: !updatedDataList[index].isDone,
    };
    setTodoDateList(updatedDataList);
    saveData({ ...todoData, [date]: updatedDataList });
  };

  //할 일 삭제 이벤트 핸들러
  const handleDeleteTodo = (index: number) => {
    const updatedDataList = [...todoDateList];
    updatedDataList.splice(index, 1);
    setTodoDateList(updatedDataList);
    saveData({ ...todoData, [date]: updatedDataList });
  };

  //할 일 추가 이벤트 핸들러
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

  //엔터키 입력 시 할 일 추가
  const handleKeyDown = (e: KeyboardEvent) => {
    //한글 입력 시 이벤트 무시 (중복 입력 방지)
    if (e.isComposing) return;
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTodo();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  //할 일 데이터 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    saveData({ ...todoData, [date]: todoDateList });
  }, [todoDateList]);
  return (
    <>
      <ModalTitle>
        {new Date(date).getMonth() + 1}월 {new Date(date).getDate()}일에 할 일
      </ModalTitle>

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
