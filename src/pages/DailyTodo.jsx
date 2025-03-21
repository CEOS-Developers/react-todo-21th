import React from "react";
import Header from "../components/Header";
import {useParams} from "react-router-dom";

function DailyTodo() {
  const params = useParams();
  console.log(params)
  const {date} = params; //URL에서 날짜 가져오기
  console.log(date)

  return (
    <div>
      <Header title="DailyTodoList" />
      <h2>{date}</h2>
      <input type="text" placeholder="할 일을 입력해주세요"/>
      <button>추가</button>
    </div>
  );
}
export default DailyTodo;
