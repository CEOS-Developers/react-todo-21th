import React, { useState, useMemo } from 'react';
import { Day } from '../../types/day';
import { WEEKDAY } from '../../constants/texts';
import chunk from '../../utils/chunk';
import formatDateKey from '../../utils/formatDateKey';

export interface UseCalendarStateReturn {
  calendarDate: Date;
  setCalendarDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDateKey: string;
  setSelectedDateKey: React.Dispatch<React.SetStateAction<string>>;
  today: Date;
  daysByWeek: Day[][];
}

function useCalendarState(): UseCalendarStateReturn {
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth();
  const todayDate = new Date().getDate();
  const today = new Date(todayYear, todayMonth, todayDate);

  const [calendarDate, setCalendarDate] = useState<Date>(today);

  const [selectedDateKey, setSelectedDateKey] = useState<string>(
    formatDateKey(new Date(todayYear, todayMonth, todayDate)),
  );

  const thisYear = calendarDate.getFullYear();
  const thisMonth = calendarDate.getMonth();

  const firstDay = new Date(thisYear, thisMonth, 1).getDay();
  const lastDate = new Date(thisYear, thisMonth + 1, 0).getDate();

  const prevLastDate = new Date(thisYear, thisMonth, 0).getDate();
  const nextDays =
    (WEEKDAY.length - ((firstDay + lastDate) % WEEKDAY.length)) %
    WEEKDAY.length;

  const days = useMemo<Day[]>(() => {
    // Previous Month
    const prevMonthDays = Array.from({ length: firstDay }, (_, i) => {
      const date = prevLastDate - firstDay + i + 1;
      return {
        dateKey: formatDateKey(new Date(thisYear, thisMonth - 1, date)),
        date: date,
        monthOffset: -1,
      };
    });

    // This Month
    const curMonthDays = Array.from({ length: lastDate }, (_, i) => {
      const date = i + 1;
      return {
        dateKey: formatDateKey(new Date(thisYear, thisMonth, date)),
        date: date,
        monthOffset: 0,
      };
    });

    // Next Month
    const nextMonthDays = Array.from({ length: nextDays }, (_, i) => {
      const date = i + 1;
      return {
        dateKey: formatDateKey(new Date(thisYear, thisMonth + 1, date)),
        date: date,
        monthOffset: 1,
      };
    });

    return [...prevMonthDays, ...curMonthDays, ...nextMonthDays];
  }, [thisYear, thisMonth, firstDay, lastDate, prevLastDate, nextDays]);

  const daysByWeek = useMemo<Day[][]>(() => {
    return chunk(days, WEEKDAY.length);
  }, [days]);

  return {
    calendarDate,
    setCalendarDate,
    selectedDateKey,
    setSelectedDateKey,
    today,
    daysByWeek,
  };
}

export { useCalendarState };
