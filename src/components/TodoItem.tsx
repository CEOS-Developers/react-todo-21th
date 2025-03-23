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

const Item = styled.li``;
const Label = styled.label``;
const Checkbox = styled.input``;
const Text = styled.span<{ isDone: boolean }>`
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
`;
const DeleteButton = styled.button``;
