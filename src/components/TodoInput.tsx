import { useState } from 'react';
import styled from 'styled-components';
import { LABELS } from '../constants/texts';
import { AddTodo } from '../types/todoActions';

interface TodoInputProps {
  selectedDateKey: string;
  onAddTodo: AddTodo;
}

function TodoInput({ selectedDateKey, onAddTodo }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleClick = () => {
    onAddTodo(selectedDateKey, text);
    setText('');
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={LABELS.placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick();
          }
        }}
      />
      <AddButton onClick={handleClick} disabled={!text.trim()}>
        {LABELS.add}
      </AddButton>
    </InputWrapper>
  );
}

export default TodoInput;

const InputWrapper = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} auto 0;
`;

const Input = styled.input`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.radius.small};
  padding: ${({ theme }) => theme.spacing.sm};
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) =>
    disabled ? ({ theme }) => theme.colors.gray : 'black'};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: white;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  border: none;
  border-radius: ${({ theme }) => theme.radius.small};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;
