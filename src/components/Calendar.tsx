import styled from 'styled-components';
import { Day } from '../types/day';
import { ChangeMonth, GoToToday, SelectDateKey } from '../types/dayActions';
import { TodoStats } from '../types/todo';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

interface CalendarProps {
  today: Date;
  selectedDateKey: string;
  thisYear: number;
  thisMonth: number;
  daysByWeek: Day[][];
  dateStats: TodoStats;
  onChangeMonth: ChangeMonth;
  onGoToToday: GoToToday;
  onSelectDateKey: SelectDateKey;
}

function Calendar({
  today,
  selectedDateKey,
  thisYear,
  thisMonth,
  daysByWeek,
  dateStats,
  onChangeMonth,
  onGoToToday,
  onSelectDateKey,
}: CalendarProps) {
  return (
    <CalendarContainer>
      <CalendarHeader
        thisYear={thisYear}
        thisMonth={thisMonth}
        onChangeMonth={onChangeMonth}
        onGoToToday={onGoToToday}
      />
      <CalendarBody
        today={today}
        selectedDateKey={selectedDateKey}
        daysByWeek={daysByWeek}
        onSelectDateKey={onSelectDateKey}
        dateStats={dateStats}
      />
    </CalendarContainer>
  );
}

export default Calendar;

const CalendarContainer = styled.div``;
