import { useCallback } from 'react';
import { ChangeMonth, GoToToday, SelectDateKey } from '../../types/dayActions';
import { UseCalendarStateReturn } from './useCalendarState';
import formatDateKey from '../../utils/formatDateKey';

export interface UseCalendarActionsReturn {
  changeMonth: ChangeMonth;
  goToToday: GoToToday;
  selectDateKey: SelectDateKey;
}

function useCalendarActions(
  state: UseCalendarStateReturn,
): UseCalendarActionsReturn {
  const {
    calendarDate: _,
    setCalendarDate,
    selectedDateKey: __,
    setSelectedDateKey,
    today,
    daysByWeek: ___,
  } = state;

  const changeMonth: ChangeMonth = useCallback(
    (offset: number) => {
      setCalendarDate((prevDate) => {
        const newYear = prevDate.getFullYear();
        const newMonth = prevDate.getMonth() + offset;
        const newDate = new Date(newYear, newMonth, 1);
        setSelectedDateKey(formatDateKey(newDate));
        return newDate;
      });
    },
    [setCalendarDate, setSelectedDateKey],
  );

  const goToToday: GoToToday = useCallback(() => {
    setCalendarDate(today);
    setSelectedDateKey(formatDateKey(today));
  }, [today, setCalendarDate, setSelectedDateKey]);

  const selectDateKey: SelectDateKey = useCallback(
    (dateKey: string) => {
      setSelectedDateKey(dateKey);
    },
    [setSelectedDateKey],
  );

  return { changeMonth, goToToday, selectDateKey };
}

export { useCalendarActions };
