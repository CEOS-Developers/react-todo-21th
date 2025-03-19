import * as s from "./SingleTodoStyled";

const SingleTodo = () => {
  return (
    <s.SingleTodoWrapper>
      <s.UpperBox>
        <input type="checkBox" />
        <span>제목</span>
      </s.UpperBox>
      <s.DateBox>
        <span>디데이</span>
        <span>날짜</span>
        <span className="delete-btn">삭제</span>
      </s.DateBox>
    </s.SingleTodoWrapper>
  );
};

export default SingleTodo;
