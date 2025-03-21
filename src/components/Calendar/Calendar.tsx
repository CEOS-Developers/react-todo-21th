import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { CalendarIcon } from '@/icons/Calendar';
import { LeftArrowIcon, RightArrowIcon } from '@/icons/Arrow';

import { DAY_LIST, MONTH_NAMES } from '@/constants/calendar';

import { generateCalendar } from '@/utils/generateCalender';

import * as S from './Calendar.styled';

const Calendar = (): JSX.Element => {
  const [currentDate, setCurrentDate] = useState({
    year: 2025,
    month: 3,
    day: 20,
  });

  const currentMonthName = MONTH_NAMES[currentDate.month - 1];

  const calendarDays = generateCalendar(currentDate.year, currentDate.month);

  const handlePrevMonth = () => {
    if (currentDate.month === 1) {
      return setCurrentDate({
        ...currentDate,
        year: currentDate.year - 1,
        month: 12,
        day: 1,
      });
    }

    setCurrentDate({
      ...currentDate,
      month: currentDate.month - 1,
      day: 1,
    });
  };

  const handleNextMonth = () => {
    if (currentDate.month === 12) {
      return setCurrentDate({
        ...currentDate,
        year: currentDate.year + 1,
        month: 1,
        day: 1,
      });
    }

    setCurrentDate({
      ...currentDate,
      month: currentDate.month + 1,
      day: 1,
    });
  };

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
        <S.PreviousMonthButton onClick={handlePrevMonth}>
          <LeftArrowIcon />
        </S.PreviousMonthButton>
        <S.CurrentMonthYear>
          {currentMonthName}, {currentDate.year}
        </S.CurrentMonthYear>
        <S.NextMonthButton onClick={handleNextMonth}>
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
            {calendarDays.map((day, index) => (
              <S.CalendarGridItem key={index}>
                <S.CalendarGridItemLink
                  onClick={() => handleDaySelect(day.date)}
                >
                  <S.DayTextBox
                    $isCurrentMonthDay={day.monthType === 'current'}
                    $isSelected={
                      day.monthType === 'current' &&
                      currentDate.day === day.date
                    }
                  >
                    {day.date}
                  </S.DayTextBox>
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
