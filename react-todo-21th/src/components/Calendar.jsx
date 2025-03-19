import React, { useState, useEffect, useMemo } from "react";
import Status from "./Status";
import {
  CalendarContainer,
  CalendarHeader,
  CalendarButton,
  CalendarDays,
  CalendarGrid,
  CalendarCell,
  DateNumber,
  TodoPreview,
  TodoUncompleted,
  TodoCompleted,
} from "../styles/StyledCalendar";

const Calendar = ({ openModal, setSelectedDate, todos, selectedDate }) => {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarButton onClick={prevMonth}>{"<"}</CalendarButton>
        <h1>
          {currentYear}년 {currentMonth + 1}월
        </h1>
        <CalendarButton onClick={nextMonth}>{">"}</CalendarButton>
      </CalendarHeader>
      <Status todos={todos} filterFunc={() => filterByMonth} />
      <CalendarDays>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </CalendarDays>
      <CalendarGrid>
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          {
            /* 모달 전달용 dateString 생성 */
          }
          const dateString = `${currentYear}-${
            currentMonth + 1 > 9 ? currentMonth + 1 : "0" + (currentMonth + 1)
          }-${index + 1 > 9 ? index + 1 : "0" + (index + 1)}`;

          const dayTodos = todos[dateString] || [];
          const completedTodos = dayTodos.filter((todo) => todo.completed);
          const uncompletedTodos = dayTodos.filter((todo) => !todo.completed);

          return (
            <CalendarCell
              key={index + 1}
              onClick={() => openModal(dateString)}
              isToday={dateString === formattedToday}
            >
              <DateNumber isToday={dateString === formattedToday}>
                {index + 1}
              </DateNumber>
              <TodoPreview>
                {uncompletedTodos.slice(0, 2).map((todo, i) => (
                  <TodoUncompleted key={i}>{todo.text}</TodoUncompleted>
                ))}
                {completedTodos.slice(0, 2).map((todo, i) => (
                  <TodoCompleted key={i}>{todo.text}</TodoCompleted>
                ))}
              </TodoPreview>
            </CalendarCell>
          );
        })}
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;
