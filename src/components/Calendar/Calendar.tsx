import { useState } from 'react';

import { CalendarIcon } from '@/icons/Calendar';
import { LeftArrowIcon, RightArrowIcon } from '@/icons/Arrow';

import { CALENDAR_DAY_LIST, DAY_LIST } from '@/constants/calendar';

import * as S from './Calendar.styled';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState({
    year: 2025,
    month: 'March',
    day: 20,
  });

  const handleDaySelect = (day: number) => {
    setCurrentDate({
      ...currentDate,
      day,
    });
  };

  return (
    <S.CalendarWrapper>
      {/* Calendar Title */}
      <S.CalendarTitleSection>
        <S.CalendarTitle>Calendar</S.CalendarTitle>
        <CalendarIcon />
      </S.CalendarTitleSection>

      {/* Date Picker */}
      <S.DatePickerSection>
        <S.PreviousMonthButton>
          <LeftArrowIcon />
        </S.PreviousMonthButton>
        <S.CurrentMonthYear>
          {currentDate.month}, {currentDate.year}
        </S.CurrentMonthYear>
        <S.NextMonthButton>
          <RightArrowIcon />
        </S.NextMonthButton>
      </S.DatePickerSection>

      {/* DayList */}
      <S.CalendarDayListContainer>
        <S.DayListSection>
          <S.DayList>
            {DAY_LIST.map((day, index) => (
              <S.DayListItem key={index}>{day}</S.DayListItem>
            ))}
          </S.DayList>
        </S.DayListSection>

        {/* Calendar Grid */}
        <S.CalendarGridSection>
          <S.CalendarGrid>
            {CALENDAR_DAY_LIST.map((day, index) => (
              <S.CalendarGridItem key={index}>
                <S.CalendarGridItemLink onClick={() => handleDaySelect(day)}>
                  <S.DayText $isSelected={currentDate.day === day}>
                    {day}
                  </S.DayText>
                  <S.UnLoggedCircle />
                </S.CalendarGridItemLink>
              </S.CalendarGridItem>
            ))}
          </S.CalendarGrid>
        </S.CalendarGridSection>
      </S.CalendarDayListContainer>
    </S.CalendarWrapper>
  );
};

export default Calendar;
