import styled from "styled-components";
import CalendarDate from "./CalendarDate";
import { loadData, TodoDataInfo } from "../utils/storage";

const Calendar = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
  const currentLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const prevLastDay = prevLastDate.getDay();
  const currentLastDay = currentLastDate.getDay();
  const todoData: TodoDataInfo = loadData();
  const prevDates = Array.from(
    { length: prevLastDay === 6 ? 0 : prevLastDay + 1 },
    (_, i) => prevLastDate.getDate() - prevLastDay + i
  );
  const currentDates = Array.from(
    { length: currentLastDate.getDate() },
    (_, i) => i + 1
  );
  const nextDates = Array.from({ length: 6 - currentLastDay }, (_, i) => i + 1);
  const calendarDates = [...prevDates, ...currentDates, ...nextDates];
  const firstDateIndex = prevDates.length;
  const lastDateIndex = prevDates.length + currentDates.length - 1;

  const notCurrentMonthdate = (index: number) => {
    if (index < firstDateIndex || index > lastDateIndex) {
      return true;
    }
    return false;
  };
  const selectedDate = (calandarDate: number, index: number) => {
    let year = currentYear;
    let month = currentMonth;
    if (index < firstDateIndex) {
      month = date.getMonth() === 0 ? 12 : date.getMonth();
      if (currentMonth === 0) {
        year = currentYear - 1;
      }
    } else if (index > lastDateIndex) {
      month = currentMonth === 11 ? 1 : currentMonth + 1;
      if (currentMonth === 11) {
        year = currentYear + 1;
      }
    }
    return `${year}/${month}/${calandarDate}`;
  };
  const countTodo = (date: string) => {
    const isTodo = todoData[date] && todoData[date].length > 0;
    return isTodo ? todoData[date].length : 0;
  };
  return (
    <>
      <CalendarContainer>
        <Title>
          {date.getFullYear()}년 {date.getMonth() + 1}월
        </Title>
        <CalendarDays>
          {days.map((day) => (
            <DayContainer key={day}>{day}</DayContainer>
          ))}
        </CalendarDays>
        <CalendarDates>
          {calendarDates.map((calendarDate, i) => (
            <DateContainer key={i} condition={notCurrentMonthdate(i)}>
              {calendarDate}
              <TodoCount>{countTodo(selectedDate(calendarDate, i))}</TodoCount>
            </DateContainer>
          ))}
        </CalendarDates>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
const TodoCount = styled.div`
  font-size: 10px;
  color: gray;
  text-align: right;
  margin-top: 5px;
`;

const DateContainer = styled.div<{ condition: boolean }>`
  box-sizing: border-box;
  width: calc(100% / 7);
  height: 50px;
  border: 0.5px solid #000;
  &:nth-child(7n + 1) {
    color: red;
  }
  &:nth-child(7n) {
    color: rgb(68, 0, 255);
  }
  ${(props) => (props.condition ? `color:pink !important;` : ``)}
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 80%;
  margin: 50px;
  margin-top: 0px;
`;
const Title = styled.div`
  margin-bottom: 20px;
`;
const CalendarDays = styled.div`
  display: flex;
`;
const DayContainer = styled.div`
  width: calc(100% / 7);
  &:nth-child(7n + 1) {
    color: red;
  }
  &:nth-child(7n) {
    color: rgb(68, 0, 255);
  }
`;
const CalendarDates = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
