import { loadData, TodoDataInfo } from "../../utils/storage";
import { useState } from "react";
import TodoModal from "../Modal/TodoModal";
import stamp from "/completeStamp.svg";
import {
  CalendarContainer,
  CalendarDate,
  CalendarDates,
  CalendarDays,
  CompleteStamp,
  CountMessage,
  DateContainer,
  DayContainer,
  HighlightDate,
  MessageContainer,
  Title,
  Today,
  TodoCount,
} from "./CalendarStyle";

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
  const countTodo = (calendarDate: number, index: number) => {
    const date = transDate(calendarDate, index);
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
                <CalendarDate>
                  <HighlightDate
                    haveTodo={todoData[transDate(calendarDate, i)]?.length > 0}
                  >
                    {calendarDate}일
                  </HighlightDate>
                </CalendarDate>
              )}
              <TodoCount>
                {countTodo(calendarDate, i)?.completeMessage ? (
                  <CompleteStamp src={stamp} alt="stamp" />
                ) : (
                  <>
                    <MessageContainer>
                      {countTodo(calendarDate, i)?.incompleteMessage}
                    </MessageContainer>
                    <CountMessage>
                      {countTodo(calendarDate, i)?.done}
                    </CountMessage>
                    <CountMessage>
                      {countTodo(calendarDate, i)?.notDone}
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
