import styled from 'styled-components';
import { LABELS } from '../constants/texts';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
}

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <Item>
      <Label>
        <Checkbox type="checkbox" checked={todo.isDone} onChange={onToggle} />
        <Text isDone={todo.isDone}>{todo.text}</Text>
      </Label>
      <DeleteButton onClick={onRemove}>{LABELS.delete}</DeleteButton>
    </Item>
  );
}

export default TodoItem;

interface TextProps {
  isDone: boolean;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.label`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Checkbox = styled.input`
  width: ${({ theme }) => theme.spacing.xl};
  height: ${({ theme }) => theme.spacing.xl};
`;

const Text = styled.span.withConfig({
  shouldForwardProp: (prop) => !['isDone'].includes(prop),
})<TextProps>`
  max-width: 100%;
  word-break: break-word;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  color: ${({ isDone }) =>
    isDone
      ? ({ theme }) => theme.colors.gray
      : ({ theme }) => theme.colors.primary};
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
