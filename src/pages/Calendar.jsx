import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatDate } from "../utils/dateFormatter";
import { CalendarTile } from "../styles/CalendarStyles";

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
    <div>
      <Header title="Canlendar" />
      <p>날짜를 클릭해서 할 일을 등록해 보세요</p>
      <section className="calendarSection">
        <Calendar
          onChange={handleDateChange} // 날짜 변경 시 상태 업데이트
          value={null} // 현재 선택된 날짜
          tileContent={tileContent}
        />
      </section>
    </div>
  );
}

export default Calender;
