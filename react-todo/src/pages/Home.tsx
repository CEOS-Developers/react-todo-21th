import { useState, useEffect } from 'react';
import * as S from './Home.Styled';
import { getFormattedDate } from '@/utils/dateUtils';

import Header from '@/components/Header/Header';
import TodoInput from '@/components/TodoInput/TodoInput';
import TodoItem from '@/components/TodoItem/TodoItem';

interface HomeProps {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
}

const Home = ({ themeMode, toggleTheme }: HomeProps) => {
  // ✅ Props 추가
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todos, setTodos] = useState<string[]>([]);

  // 날짜 변경
  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  // 선택된 날짜의 Todo 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem(getFormattedDate(currentDate));
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, [currentDate]);

  // 새로운 Todo 추가
  const addTodo = (todo: string) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem(getFormattedDate(currentDate), JSON.stringify(newTodos));
  };

  // Todo 삭제
  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem(getFormattedDate(currentDate), JSON.stringify(newTodos));
  };

  return (
    <>
      <Header themeMode={themeMode} toggleTheme={toggleTheme} /> {/* ✅ Header로 props 전달 */}
      <S.Container>
        <S.DateSection>
          <S.WeekButton onClick={() => changeDate(-7)}>◀◀</S.WeekButton>
          <S.DayButton onClick={() => changeDate(-1)}>◀</S.DayButton>
          <S.Date>{getFormattedDate(currentDate)}</S.Date>
          <S.DayButton onClick={() => changeDate(1)}>▶</S.DayButton>
          <S.WeekButton onClick={() => changeDate(7)}>▶▶</S.WeekButton>
        </S.DateSection>
        <TodoInput addTodo={addTodo} />
        <S.ItemContainer>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} onRemove={() => removeTodo(index)} />
          ))}
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Home;
