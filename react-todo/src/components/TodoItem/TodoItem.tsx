import * as S from './TodoItem.Styled';

interface TodoItemProps {
  todo: string;
  isCompleted: boolean;
  onRemove: () => void;
  onToggleComplete: () => void;
}

const TodoItem = ({ todo, isCompleted, onRemove, onToggleComplete }: TodoItemProps) => {
  return (
    <S.ItemContainer>
      <S.CheckBox checked={isCompleted} onChange={onToggleComplete} />
      <S.Text $isCompleted={isCompleted}>{todo}</S.Text>
      <S.DeleteButton onClick={onRemove}>삭제</S.DeleteButton>
    </S.ItemContainer>
  );
};

export default TodoItem;
