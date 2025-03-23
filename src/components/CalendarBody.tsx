import styled from 'styled-components';
import { WEEKDAY } from '../constants/texts';
import { Day } from '../types/day';
import { SelectDateKey } from '../types/dayActions';
import formatDateKey from '../utils/formatDateKey';

interface CalendarBodyProps {
  today: Date;
  selectedDateKey: string;
  daysByWeek: Day[][];
  onSelectDateKey: SelectDateKey;
}

function CalendarBody({
  today,
  selectedDateKey,
  daysByWeek,
  onSelectDateKey,
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

const Table = styled.table``;
const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const DayButton = styled.button<{
  isToday: boolean;
  isSelected: boolean;
  monthOffset: number;
}>``;
