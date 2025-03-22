// Calender.tsx
import React, { useState } from "react";
import * as s from "./CalenderStyled";
import { Todos, Todo } from "../../interface";

interface CalenderProps {
  todos: Todos[];
  onClose: () => void;
}

const Calender: React.FC<CalenderProps> = ({ todos, onClose }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const changeMonth = (offset: number) => {
    let newMonth = currentMonth + offset;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDate(null); // 달 바뀌면 선택 해제
  };

  const getTodoCountForDate = (day: number) => {
    const target = new Date(currentYear, currentMonth, day);
    const targetDateStr = target.toISOString().split("T")[0];

    let count = 0;
    todos.forEach((group) => {
      group.todos.forEach((todo) => {
        if (
          todo.date &&
          new Date(todo.date).toISOString().split("T")[0] === targetDateStr
        ) {
          count++;
        }
      });
    });
    return count;
  };

  const getTodosForDate = (date: Date): Todo[] => {
    const dateStr = date.toISOString().split("T")[0];

    let result: Todo[] = [];
    //

    todos.forEach((group) => {
      group.todos.forEach((todo) => {
        if (
          todo.date &&
          new Date(todo.date).toISOString().split("T")[0] === dateStr
        ) {
          result.push(todo);
        }
      });
    });

    return result;
  };

  const isToday = (year: number, month: number, day: number) => {
    const today = new Date();
    return (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    );
  };

  const handleDayClick = (day: number) => {
    const clicked = new Date(currentYear, currentMonth, day);
    setSelectedDate(clicked);
  };

  const renderDays = () => {
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
      days.push(<s.DayBox key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const count = getTodoCountForDate(day);
      const todayClass = isToday(currentYear, currentMonth, day) ? "today" : "";
      days.push(
        <s.DayBox
          key={day}
          className={todayClass}
          onClick={() => handleDayClick(day)}
        >
          <span className="day-number">{day}</span>
          {count > 0 && <span className="todo-count">{count}개</span>}
        </s.DayBox>
      );
    }
    return days;
  };

  const renderWeekDays = () => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    return week.map((day) => <s.WeekDay key={day}>{day}</s.WeekDay>);
  };

  const renderTodoList = () => {
    if (!selectedDate) return null;
    const todosForDate = getTodosForDate(selectedDate);
    if (todosForDate.length === 0)
      return (
        <s.TodoListForDate>
          <p>할 일이 없습니다.</p>
        </s.TodoListForDate>
      );

    return (
      <s.TodoListForDate>
        {todosForDate.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isComplete} readOnly />
            <s.TodoText isComplete={todo.isComplete}>{todo.content}</s.TodoText>
          </li>
        ))}
      </s.TodoListForDate>
    );
  };

  return (
    <s.ModalOverlay>
      <s.CalenderModal>
        <s.CalenderHeader>
          <div className="month-nav">
            <button onClick={() => changeMonth(-1)}>&lt;</button>
            <h2>
              {currentYear}년 {currentMonth + 1}월
            </h2>
            <button onClick={() => changeMonth(1)}>&gt;</button>
          </div>
          <button onClick={onClose}>닫기</button>
        </s.CalenderHeader>
        <s.WeekRow>{renderWeekDays()}</s.WeekRow>
        <s.CalenderGrid>{renderDays()}</s.CalenderGrid>
        {renderTodoList()}
      </s.CalenderModal>
    </s.ModalOverlay>
  );
};

export default Calender;
