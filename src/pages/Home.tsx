import { JSX } from 'react/jsx-runtime';

import Calendar from '@/components/Calendar/Calendar';
import Register from '@/components/ToDoList/Register/Register';
import ToDo from '@/components/ToDoList/ToDo/ToDo';
import Done from '@/components/ToDoList/Done/Done';

import * as S from './Home.styled';

const Home = (): JSX.Element => {
  return (
    <S.HomeContainer>
      <Calendar />
      <S.ToDoListContainer>
        <Register />
        <ToDo />
        <Done />
      </S.ToDoListContainer>
    </S.HomeContainer>
  );
};

export default Home;
