import * as S from './TodoInput.Styled';

const TodoInput = () => {
  return (
    <S.InputContainer>
      <S.TextInput placeholder="오늘의 할 일을 적어주세요 !"></S.TextInput>
      <S.EnterButton>등록</S.EnterButton>
    </S.InputContainer>
  );
};

export default TodoInput;
