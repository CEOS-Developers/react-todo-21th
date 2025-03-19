import * as s from "./TodoInputStyled";

const TodoInput = () => {
  return (
    <s.InputSection>
      <div>
        <s.TodoInput />
        <s.TodoBtn>+</s.TodoBtn>
      </div>
      <s.DateInput />
      <s.AddTag />
      <div></div>
    </s.InputSection>
  );
};

export default TodoInput;

/*
.input-group input {
    flex: 1;
    padding: 14px;
    border-radius: 10px;
    transition: 0.2s;
  }

  .meta-group input {
    padding: 12px;
    border-radius: 10px;
    transition: 0.2s;
  }
  .meta-group input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 5px rgba(76, 154, 207, 0.3);
  }

  .new-tag input {
    width: 100px;
    height: 1.2rem;
    border: none;
    border-radius: 5px;
  }
*/
