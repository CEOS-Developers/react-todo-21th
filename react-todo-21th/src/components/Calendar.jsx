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

const Calendar = React.memo(
  ({ openModal, setSelectedDate, todos, selectedDate }) => {
    // 오늘 날짜 정보로 초기 세팅하기
    const today = new Date();
    // 오늘인지 확인할 String 생성
    const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());

    // 이전 달 이동하기
    const prevMonth = () => {
      setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
      if (currentMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
    };

    // 다음 달 이동하기
    const nextMonth = () => {
      setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
      if (currentMonth === 11) setCurrentYear((prevYear) => prevYear + 1);
    };

    // 날짜 정보 바뀔 때마다 selectedDate 업데이트하기
    useEffect(() => {
      const month = String(currentMonth + 1).padStart(2, "0");
      setSelectedDate(`${currentYear}-${month}-01`);
    }, [currentYear, currentMonth, setSelectedDate]);

    // 캘린더 생성용 (각 달 첫날, 마지막날)
    const getDaysInMonth = (year, month) =>
      new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    // 월별 필터링 함수 (Status 전달용)
    const filterByMonth = useMemo(() => {
      const month = selectedDate.slice(0, 7);
      return Object.keys(todos)
        .filter((date) => date.startsWith(month))
        .flatMap((date) => todos[date]);
    }, [todos, selectedDate]);

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
  }
);

export default Calendar;
