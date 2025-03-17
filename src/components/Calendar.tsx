import styled from "styled-components";
import { loadData, TodoDataInfo } from "../utils/storage";
import { useState } from "react";
import TodoModal from "./TodoModal";
import stamp from "/completeStamp.svg";

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
      if (isNotDoneCount === 0) return { completeMessage: `할 일 다함!` };
      return {
        incompleteMessage: `할 일 남음!`,
        done: `완료${isDoneCount}개`,
        notDone: `미완료${isNotDoneCount}개`,
      };
    }

    return;
  };
  const isToday = (date: number) => {
    return (
      date === new Date().getDate() &&
      currentMonth === new Date().getMonth() + 1
    );
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
              {isToday(calendarDate) ? (
                <Today>오늘</Today>
              ) : (
                `${calendarDate}일`
              )}
              <TodoCount>
                {countTodo(transDate(calendarDate, i))?.completeMessage ? (
                  <CompleteStamp src={stamp} alt="stamp" />
                ) : (
                  <>
                    <MessageContainer>
                      {countTodo(transDate(calendarDate, i))?.incompleteMessage}
                    </MessageContainer>
                    <CountMessage>
                      {countTodo(transDate(calendarDate, i))?.done}
                    </CountMessage>
                    <CountMessage>
                      {countTodo(transDate(calendarDate, i))?.notDone}
                    </CountMessage>
                  </>
                )}
              </TodoCount>
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
const CountMessage = styled.div`
  font-size: 0.8rem;
  margin-top: 2px;
  white-space: nowrap;
`;
const CompleteStamp = styled.img`
  width: 60%;
  margin: 5px;
`;
const MessageContainer = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  color: #505050;
  text-align: right;
  box-shadow: inset 0 -8px 0 hsla(52, 100%, 50%, 0.5);
  margin-top: 3px;
`;
const TodoCount = styled.div`
  font-size: 15px;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DateContainer = styled.div<{ condition: boolean }>`
  box-sizing: border-box;
  width: calc(100% / 7);
  padding: 7px;
  text-align: right;
  height: 90px;
  border: 0.5px solid #000;
  &:nth-child(7n + 1) {
    color: red;
  }
  &:nth-child(7n) {
    color: rgb(68, 0, 255);
  }
  ${(props) => (props.condition ? `color:rgb(222, 222, 222) !important;` : ``)}
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 70%;
  margin: 50px;
  margin-top: 0px;
`;
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;
const Today = styled.span`
  background: rgb(255, 41, 41);
  white-space: nowrap;
  color: white;
  padding: 3px 5px;
  font-size: 0.9rem;
  border-radius: 80%;
  cursor: pointer;
`;
const CalendarDays = styled.div`
  display: flex;
`;
const DayContainer = styled.div`
  width: calc(100% / 7);
  font-size: 1.1rem;
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
