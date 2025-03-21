import styled from "styled-components";
import { formatDate } from "../utils/formatDate";
import Arrow from "@/assets/images/Arrow.svg?react";
import DoubleArrow from "@/assets/images/DoubleArrow.svg?react";

const DateNavigation = ({ date, setDate }) => {
  const calculateDate = (dayOffset) => {
    const newDateOffset = date.dayOffset + dayOffset;

    setDate({
      selectedDate: formatDate(newDateOffset),
      dayOffset: newDateOffset,
    });
  };

  const getToday = () => {
    setDate({
      selectedDate: formatDate(),
      dayOffset: 0,
    });
  };

  return (
    <Navigation>
      <WeekShiftButton
        style={{ transform: "rotate(180deg)" }}
        onClick={() => calculateDate(-7)}
      />
      <DayShiftButton
        style={{ transform: "rotate(180deg)" }}
        onClick={() => calculateDate(-1)}
      />
      <Date onClick={getToday}>{date.selectedDate}</Date>
      <DayShiftButton onClick={() => calculateDate(1)} />
      <WeekShiftButton onClick={() => calculateDate(-7)} />
    </Navigation>
  );
};

export default DateNavigation;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.subText};
`;

const DayShiftButton = styled(Arrow)`
  width: 1rem;
  cursor: pointer;
`;

const WeekShiftButton = styled(DoubleArrow)`
  width: 1rem;
  cursor: pointer;
`;

const Date = styled.time`
  cursor: pointer;
`;
