import styled from 'styled-components';
import { WEEKDAY } from '../constants/texts';
import { Day } from '../types/day';
import { SelectDateKey } from '../types/dayActions';
import { TodoStats } from '../types/todo';
import formatDateKey from '../utils/formatDateKey';

interface CalendarBodyProps {
  today: Date;
  selectedDateKey: string;
  daysByWeek: Day[][];
  onSelectDateKey: SelectDateKey;
  dateStats: TodoStats;
}

function CalendarBody({
  today,
  selectedDateKey,
  daysByWeek,
  onSelectDateKey,
  dateStats,
}: CalendarBodyProps) {
  return (
    <Table>
      <Thead>
        <Tr>
          {WEEKDAY.map((dayOfTheWeek) => (
            <Th key={dayOfTheWeek}>{dayOfTheWeek}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {daysByWeek.map((week, rowIndex) => (
          <Tr key={rowIndex}>
            {week.map((day) => (
              <Td key={day.dateKey}>
                <DayButton
                  isToday={day.dateKey === formatDateKey(today)}
                  isSelected={day.dateKey === selectedDateKey}
                  monthOffset={day.monthOffset}
                  onClick={() => onSelectDateKey(day.dateKey)}
                >
                  {day.date}
                  {dateStats[day.dateKey] &&
                    dateStats[day.dateKey].totalCount > 0 && (
                      <StatsText>
                        {dateStats[day.dateKey].doneCount} /
                        {dateStats[day.dateKey].totalCount}
                      </StatsText>
                    )}
                </DayButton>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default CalendarBody;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;

const Th = styled.th`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.85rem;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Td = styled.td`
  width: ${100 / 7}%;
  text-align: center;
  vertical-align: top;
  padding: ${({ theme }) => theme.spacing.xs};
`;

const DayButton = styled.button<{
  isToday: boolean;
  isSelected: boolean;
  monthOffset: number;
}>`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ isSelected, isToday }) =>
    isSelected
      ? ({ theme }) => theme.colors.darkGray
      : isToday
        ? ({ theme }) => theme.colors.secondary
        : 'transparent'};
  color: ${({ isSelected, monthOffset }) =>
    isSelected
      ? 'white'
      : monthOffset === 0
        ? ({ theme }) => theme.colors.primary
        : '#bbb'};
  font-weight: ${({ isToday }) => (isToday ? 'bold' : 'normal')};
  position: relative;
  transition: background-color 0.2s ease;
  border-radius: ${({ theme }) => theme.radius.round};
  border: none;
`;

const StatsText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.65rem;
  font-weight: 500;
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  text-align: center;
`;
