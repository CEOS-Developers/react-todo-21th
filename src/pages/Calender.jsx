import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatDate } from '../utils/dateFormatter';

function Calender(){
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = formatDate(selectedDate);
    navigate(`/dailyTodo/${formattedDate}`);
  };
  
  return (
    <div>
      <Header title="Canlender" />
      <p>날짜를 클릭해서 할 일을 등록해 보세요</p>
      <section className="calendarSection">
        <Calendar
          onChange={handleDateChange} // 날짜 변경 시 상태 업데이트
          value={date} // 현재 선택된 날짜
        />
      </section>
    </div>
  );
};

export default Calender;
