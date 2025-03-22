import { JSX } from 'react/jsx-runtime';
import { useMemo } from 'react';

import Calendar from '@/components/Calendar/Calendar';
import Register from '@/components/ToDoList/Register/Register';
import ToDo from '@/components/ToDoList/ToDo/ToDo';
import Done from '@/components/ToDoList/Done/Done';

import { useDate } from '@/hooks/useDate';
import { useTasks } from '@/hooks/useTasks';

import * as S from './Home.styled';

const Home = (): JSX.Element => {
  const { selectedDate } = useDate();
  const { tasksByDate } = useTasks();

  const selectedDateTask = useMemo(
    () => tasksByDate[selectedDate] ?? [],
    [tasksByDate, selectedDate]
  );

  const toDoList = useMemo(
    () => selectedDateTask.filter((task) => !task.completed),
    [selectedDateTask]
  );
  const doneList = useMemo(
    () => selectedDateTask.filter((task) => task.completed),
    [selectedDateTask]
  );

  return (
    <S.HomeContainer>
      <Calendar />
      <S.ToDoListContainer>
        <Register />
        <ToDo toDoList={toDoList} />
        <Done doneList={doneList} />
      </S.ToDoListContainer>
    </S.HomeContainer>
  );
};

export default Home;
