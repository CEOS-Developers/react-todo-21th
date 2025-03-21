import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatDate } from "../utils/dateFormatter";
import {
  CalendarWrapper,
  CalendarTile,
  CalendarSection
} from "../styles/CalendarStyles";

function Calender() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = formatDate(selectedDate);
    navigate(`/dailyTodo/${formattedDate}`);
  };

  const tileContent = ({ date, view }) => {
    if (view !== "month") return null; // 월 단위로만 표시

    const formattedDate = formatDate(date);
    const todos = JSON.parse(localStorage.getItem(formattedDate)) || [];

    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;

    return (
      <CalendarTile>
        {totalCount > 0 ? `${completedCount} / ${totalCount}` : "⠀"}
      </CalendarTile>
    );
  };

  return (
    <CalendarWrapper>
      <Header title="Canlendar" />
      <CalendarSection>
        <p>날짜를 클릭해서 할 일을 등록해 보세요</p>
        <Calendar
          onChange={handleDateChange} // 날짜 변경 시 상태 업데이트
          value={null} // 현재 선택된 날짜
          tileContent={tileContent}
        />
      </CalendarSection>
    </CalendarWrapper>
  );
}

export default Calender;
