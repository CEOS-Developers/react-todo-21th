import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import Calendar from '@/components/Calendar/Calendar';
import Register from '@/components/ToDoList/Register/Register';
import ToDo from '@/components/ToDoList/ToDo/ToDo';
import Done from '@/components/ToDoList/Done/Done';

import { Task } from '@/types/task';
import { useDate } from '@/hooks/useDate';
import { useTasks } from '@/hooks/useTasks';

import * as S from './Home.styled';

const Home = (): JSX.Element => {
  const { selectedDate } = useDate();
  const { tasksByDate } = useTasks();

  const [toDoList, setToDoList] = useState<Task[]>([]);
  const [doneList, setDoneList] = useState<Task[]>([]);

  useEffect(() => {
    const selectedDateTask = tasksByDate[selectedDate] ?? [];
    const toDoList = selectedDateTask.filter((task) => !task.completed);
    const doneTask = selectedDateTask.filter((task) => task.completed);

    setToDoList(toDoList);
    setDoneList(doneTask);
  }, [selectedDate, tasksByDate]);

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
