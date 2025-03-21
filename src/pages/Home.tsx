import { JSX } from 'react/jsx-runtime';

import Calendar from '@/components/Calendar/Calendar';
import Register from '@/components/ToDoList/Register/Register';

import * as S from './Home.styled';

const Home = (): JSX.Element => {
  return (
    <S.HomeContainer>
      <Calendar />
      <Register />
    </S.HomeContainer>
  );
};

export default Home;
