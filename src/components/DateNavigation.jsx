import styled from "styled-components";
import { formatDate } from "../utils/formatDate";

const DateNavigation = ({ date, setDate }) => {
  const calculateDate = (dayOffset) => {
    const newDateOffset = date.dayOffset + dayOffset;

    setDate({
      selectedDate: formatDate(newDateOffset),
      dayOffset: newDateOffset,
    });
  };

  return (
    <Navigation>
      <Button onClick={() => calculateDate(-1)}>이전</Button>
      <Date>{date.selectedDate}</Date>
      <Button onClick={() => calculateDate(1)}>다음</Button>
    </Navigation>
  );
};

export default DateNavigation;

const Navigation = styled.nav``;

const Button = styled.button``;

const Date = styled.time``;
