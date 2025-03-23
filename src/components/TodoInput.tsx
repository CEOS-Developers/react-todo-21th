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
      />
      <AddButton onClick={handleClick}>{LABELS.add}</AddButton>
    </InputWrapper>
  );
}

export default TodoInput;

const InputWrapper = styled.div``;
const Input = styled.input``;
const AddButton = styled.button``;
