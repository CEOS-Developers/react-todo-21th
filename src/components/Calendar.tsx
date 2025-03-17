import styled from "styled-components";
import CalendarDate from "./CalendarDate";
import { loadData, TodoDataInfo } from "../utils/storage";
import { useState } from "react";
import TodoModal from "./TodoModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const notCurrentMonthdate = (index: number) => {
    if (index < firstDateIndex || index > lastDateIndex) {
      return true;
    }
    return false;
  };
  const transDate = (calandarDate: number, index: number) => {
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
    if (isTodo) {
      let isDoneCount = 0;
      let isNotDoneCount = 0;
      todoData[date].map((todo) => {
        if (todo.isDone) {
          isDoneCount++;
        } else {
          isNotDoneCount++;
        }
      });
      if (isNotDoneCount === 0) return `할 일 다함!`;
      return `완료${isDoneCount}개 미완료${isNotDoneCount}개`;
    }

    return;
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
            <DateContainer
              key={i}
              condition={notCurrentMonthdate(i)}
              onClick={() => {
                setIsModalOpen(true),
                  setSelectedDate(transDate(calendarDate, i));
              }}
            >
              {calendarDate}
              <TodoCount>{countTodo(transDate(calendarDate, i))}</TodoCount>
            </DateContainer>
          ))}
        </CalendarDates>
      </CalendarContainer>
      {isModalOpen && (
        <TodoModal isClose={() => setIsModalOpen(false)} date={selectedDate} />
      )}
    </>
  );
};

export default Calendar;
const TodoCount = styled.div`
  font-size: 15px;
  color: gray;
  text-align: right;
  margin-top: 5px;
`;

const DateContainer = styled.div<{ condition: boolean }>`
  box-sizing: border-box;
  width: calc(100% / 7);
  height: 50%;
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
  max-width: 800px;
  width: 80%;
  height: 80%;
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
