import styled from 'styled-components';
import { NAVS } from '../constants/emojis';
import { ChangeMonth, GoToToday } from '../types/dayActions';

interface CalendarHeaderProps {
  thisYear: number;
  thisMonth: number;
  onChangeMonth: ChangeMonth;
  onGoToToday: GoToToday;
}

function CalendarHeader({
  thisYear,
  thisMonth,
  onChangeMonth,
  onGoToToday,
}: CalendarHeaderProps) {
  return (
    <HeaderContainer>
      <MonthText>
        {thisYear}. {thisMonth + 1}
      </MonthText>
      <NavButton onClick={() => onChangeMonth(-1)}>{NAVS.previous}</NavButton>
      <NavButton onClick={() => onGoToToday()}>{NAVS.current}</NavButton>
      <NavButton onClick={() => onChangeMonth(1)}>{NAVS.next}</NavButton>
    </HeaderContainer>
  );
}

export default CalendarHeader;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  min-height: 48px;
`;

const MonthText = styled.h2`
  flex: 1;
  font-weight: bold;
`;

const NavButton = styled.button`
  background: none;
  font-size: 1.2rem;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;
