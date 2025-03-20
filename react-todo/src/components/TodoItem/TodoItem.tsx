import * as S from './TodoItem.Styled';

const TodoItem = ({ todo, onRemove }: { todo: string; onRemove: () => void }) => {
  return (
    <S.ItemContainer>
      <S.CheckBox />
      <S.Text>{todo}</S.Text>
      <S.DeleteButton onClick={onRemove}>삭제</S.DeleteButton>
    </S.ItemContainer>
  );
};

export default TodoItem;
