import * as s from "./TodoInputStyled";

const TodoInput = () => {
  return (
    <s.InputSection>
      <div>
        <s.TodoInput placeholder="할 일을 입력해주세요" />
        <s.TodoBtn>+</s.TodoBtn>
      </div>
      <s.DateInput type="date" />
      <s.AddTag></s.AddTag>
      <div>
        <s.NewTagInput type="text" placeholder="새 태그 추가" />
        <s.NewTagBtn>+</s.NewTagBtn>
      </div>
    </s.InputSection>
  );
};

export default TodoInput;
