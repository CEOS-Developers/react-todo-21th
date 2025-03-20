import { useState, useEffect } from 'react';
import * as S from './Home.Styled';
import { getFormattedDate } from '@/utils/dateUtils';
import Header from '@/components/Header/Header';
import TodoInput from '@/components/TodoInput/TodoInput';
import TodoItem from '@/components/TodoItem/TodoItem';

interface Todo {
  text: string;
  isCompleted: boolean;
}

const Home = ({ themeMode, toggleTheme }: { themeMode: 'light' | 'dark'; toggleTheme: () => void }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem(getFormattedDate(currentDate));
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, [currentDate]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    localStorage.setItem(getFormattedDate(currentDate), JSON.stringify(newTodos));
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem(getFormattedDate(currentDate), JSON.stringify(newTodos));
  };

  const toggleComplete = (index: number) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    setTodos(newTodos);
    localStorage.setItem(getFormattedDate(currentDate), JSON.stringify(newTodos));
  };

  return (
    <>
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      <S.Container>
        <S.DateSection>
          <S.WeekButton onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}>
            ◀◀
          </S.WeekButton>
          <S.DayButton onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)))}>
            ◀
          </S.DayButton>
          <S.Date>{getFormattedDate(currentDate)}</S.Date>
          <S.DayButton onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))}>
            ▶
          </S.DayButton>
          <S.WeekButton onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}>
            ▶▶
          </S.WeekButton>
        </S.DateSection>
        <TodoInput addTodo={addTodo} />
        <S.ItemContainer>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo.text}
              isCompleted={todo.isCompleted}
              onRemove={() => removeTodo(index)}
              onToggleComplete={() => toggleComplete(index)}
            />
          ))}
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Home;
