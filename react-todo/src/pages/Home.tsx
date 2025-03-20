import { useState } from 'react';
import Header from '@/components/Header/Header';
import { getFormattedDate } from '@/utils/dateUtils';
import * as S from './Home.Styled';
import TodoInput from '@/components/TodoInput/TodoInput';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.DateSection>
          <S.WeekButton onClick={() => changeDate(-7)}>◀◀</S.WeekButton>
          <S.DayButton onClick={() => changeDate(-1)}>◀</S.DayButton>
          <S.Date>{getFormattedDate(currentDate)}</S.Date>
          <S.DayButton onClick={() => changeDate(1)}>▶</S.DayButton>
          <S.WeekButton onClick={() => changeDate(7)}>▶▶</S.WeekButton>
        </S.DateSection>
        <TodoInput />
      </S.Container>
    </>
  );
};

export default Home;
