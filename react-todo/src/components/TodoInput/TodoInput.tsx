import { useState, useRef } from 'react';
import * as S from './TodoInput.Styled';
import { FaCalendarAlt } from 'react-icons/fa';

const TodoInput = ({
  addTodo,
  setCurrentDate,
}: {
  addTodo: (todo: string) => void;
  setCurrentDate: (date: Date) => void;
}) => {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate.getTime())) {
      setSelectedDate(e.target.value);
      setCurrentDate(newDate);
    }
  };

  const toggleDatePicker = () => {
    if (dateInputRef.current) {
      if (isDatePickerOpen) {
        dateInputRef.current.blur();
      } else {
        dateInputRef.current.showPicker();
      }
      setIsDatePickerOpen(!isDatePickerOpen);
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

      <S.CalendarWrapper>
        <input
          type="date"
          ref={dateInputRef}
          value={selectedDate}
          onChange={handleDateChange}
          onBlur={() => setIsDatePickerOpen(false)}
        />
        <S.CalendarIcon onClick={toggleDatePicker}>
          <FaCalendarAlt size={18} />
        </S.CalendarIcon>
      </S.CalendarWrapper>

      <S.EnterButton onClick={handleAddTodo}>등록</S.EnterButton>
    </S.InputContainer>
  );
};

export default TodoInput;
