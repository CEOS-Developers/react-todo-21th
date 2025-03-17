import { useEffect, useState } from "react";
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
  const currentLastDay = currentLastDate.getDay();
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
              calendarDate={calendarDate}
              setIsModalOpen={setIsModalOpen}
              setSelectedDate={setSelectedDate}
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
