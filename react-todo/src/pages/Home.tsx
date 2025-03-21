import { useState, useEffect, useMemo } from 'react';
import * as S from './Home.Styled';
import { getFormattedDate } from '@/utils/dateUtils';
import { getTodosFromStorage, addTodo, removeTodo, toggleComplete, changeDate } from '@/utils/todoUtils';
import Header from '@/components/Header/Header';
import TodoInput from '@/components/TodoInput/TodoInput';
import TodoItem from '@/components/TodoItem/TodoItem';

interface Todo {
  text: string;
  isCompleted: boolean;
}

const Home = ({ themeMode, toggleTheme }: { themeMode: 'light' | 'dark'; toggleTheme: () => void }) => {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [todos, setTodos] = useState<Todo[]>(() => getTodosFromStorage(new Date()));

  useEffect(() => {
    setTodos(getTodosFromStorage(currentDate));
  }, [currentDate]);

  const formattedDate = useMemo(() => getFormattedDate(currentDate), [currentDate]);

  return (
    <>
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      <S.Container>
        <S.DateSection>
          <S.WeekButton onClick={() => changeDate(-7, currentDate, setCurrentDate)}>◀◀</S.WeekButton>
          <S.DayButton onClick={() => changeDate(-1, currentDate, setCurrentDate)}>◀</S.DayButton>
          <S.Date>{formattedDate}</S.Date>
          <S.DayButton onClick={() => changeDate(1, currentDate, setCurrentDate)}>▶</S.DayButton>
          <S.WeekButton onClick={() => changeDate(7, currentDate, setCurrentDate)}>▶▶</S.WeekButton>
        </S.DateSection>
        <TodoInput addTodo={(text) => addTodo(text, todos, currentDate, setTodos)} setCurrentDate={setCurrentDate} />{' '}
        <S.ItemContainer>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo.text}
              isCompleted={todo.isCompleted}
              onRemove={() => removeTodo(index, todos, currentDate, setTodos)}
              onToggleComplete={() => toggleComplete(index, todos, currentDate, setTodos)}
            />
          ))}
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Home;
