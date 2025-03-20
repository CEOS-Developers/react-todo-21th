import { useState } from 'react';
import * as S from './TodoInput.Styled';

const TodoInput = ({ addTodo }: { addTodo: (todo: string) => void }) => {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleAddTodo = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault();
      handleAddTodo();
    }
  };

  return (
    <S.InputContainer>
      <S.TextInput
        placeholder="오늘의 할 일을 적어주세요 !"
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <S.EnterButton onClick={handleAddTodo}>등록</S.EnterButton>
    </S.InputContainer>
  );
};

export default TodoInput;
