import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender(){
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식
    navigate(`/dailyTodo/${formattedDate}`); // 페이지 이동
  };
  
  return (
    <div>
      <Header title="MonthlyTodoList" />
      <p>날짜를 클릭해서 할 일을 등록해 보세요</p>
      <section className="calendarSection">
        <Calendar
          onChange={handleDateChange} // 날짜 변경 시 상태 업데이트
          value={date} // 현재 선택된 날짜
        />
        <p>선택한 날짜: {date.toLocaleDateString()}</p>
      </section>
    </div>
  );
};

export default Calender;
