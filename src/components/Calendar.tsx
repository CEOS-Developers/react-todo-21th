import styled from "styled-components";

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
  console.log(calendarDates);

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
            <DateContainer key={i}>{calendarDate}</DateContainer>
          ))}
        </CalendarDates>
      </CalendarContainer>
    </>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const Title = styled.div`
  margin-bottom: 20px;
`;
const CalendarDays = styled.div`
  display: flex;
`;
const DayContainer = styled.div`
  width: calc(100% / 7);
`;
const CalendarDates = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const DateContainer = styled.div`
  width: calc(100% / 7);
`;
