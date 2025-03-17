import { useState } from "react";
import TodoModal from "../Modal/TodoModal.tsx";
import {
  CalendarContainer,
  CalendarDates,
  CalendarDays,
  DayContainer,
  Title,
} from "./CalendarStyle.ts";
import CalendarDateContents from "./CalendarDateContents.tsx";

const Calendar = () => {
  const date = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
  const currentLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const prevLastDay = prevLastDate.getDay();
  const prevMonthDates = Array.from(
    { length: prevLastDay === 6 ? 0 : prevLastDay + 1 },
    (_, i) => prevLastDate.getDate() - prevLastDay + i
  );
  const currentMonthDates = Array.from(
    { length: currentLastDate.getDate() },
    (_, i) => i + 1
  );
  const nextMonthDates = Array.from(
    { length: 6 - currentLastDate.getDay() },
    (_, i) => i + 1
  );
  const calendarDates = [
    ...prevMonthDates,
    ...currentMonthDates,
    ...nextMonthDates,
  ];
  const firstDateIndex = prevMonthDates.length;
  const lastDateIndex = prevMonthDates.length + currentMonthDates.length - 1;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
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
            <CalendarDateContents
              key={i}
              i={i}
              date={date}
              calendarDate={calendarDate}
              setIsModalOpen={setIsModalOpen}
              setSelectedDate={setSelectedDate}
              firstDateIndex={firstDateIndex}
              lastDateIndex={lastDateIndex}
            />
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
