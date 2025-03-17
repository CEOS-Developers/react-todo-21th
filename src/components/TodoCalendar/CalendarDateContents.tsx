import { loadData, TodoDataInfo } from "../../utils/storage.tsx";
import stamp from "/completeStamp.svg";
import {
  CalendarDate,
  CompleteStamp,
  CountMessage,
  DateContainer,
  HighlightDate,
  MessageContainer,
  Today,
  TodoCount,
} from "./CalendarStyle.ts";
interface CalendarDateContentsProps {
  i: number;
  calendarDate: number;
  setIsModalOpen: (value: boolean) => void;
  setSelectedDate: (value: string) => void;
}
const CalendarDateContents = ({
  i,
  calendarDate,
  setIsModalOpen,
  setSelectedDate,
}: CalendarDateContentsProps) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
  const currentLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const prevLastDay = prevLastDate.getDay();
  const todoData: TodoDataInfo = loadData();
  const prevDates = Array.from(
    { length: prevLastDay === 6 ? 0 : prevLastDay + 1 },
    (_, i) => prevLastDate.getDate() - prevLastDay + i
  );
  const currentDates = Array.from(
    { length: currentLastDate.getDate() },
    (_, i) => i + 1
  );
  const firstDateIndex = prevDates.length;
  const lastDateIndex = prevDates.length + currentDates.length - 1;
  const count = countTodo(calendarDate, i);

  const isOtherMonthDate = (index: number) => {
    if (index < firstDateIndex || index > lastDateIndex) {
      return true;
    }
    return false;
  };
  function transDate(calandarDate: number, index: number) {
    let year = currentYear;
    let month = currentMonth;
    if (index < firstDateIndex) {
      month = date.getMonth() === 0 ? 12 : date.getMonth();
      if (currentMonth === 0) {
        year = currentYear - 1;
      }
    } else if (index > lastDateIndex) {
      month = currentMonth === 11 ? 1 : currentMonth + 1;
      if (currentMonth === 11) {
        year = currentYear + 1;
      }
    }
    return `${year}/${month}/${calandarDate}`;
  }
  function countTodo(calendarDate: number, index: number) {
    const date = transDate(calendarDate, index);
    const isTodo = todoData[date] && todoData[date].length > 0;
    if (isTodo) {
      let isDoneCount = 0;
      let isNotDoneCount = 0;
      todoData[date].map((todo) => {
        if (todo.isDone) {
          isDoneCount++;
        } else {
          isNotDoneCount++;
        }
      });
      if (isNotDoneCount === 0) return { completeMessage: `할 일 다함!` };
      return {
        incompleteMessage: `할 일 남음!`,
        done: `완료${isDoneCount}개`,
        notDone: `미완료${isNotDoneCount}개`,
      };
    }

    return;
  }
  const isToday = (date: number) => {
    return (
      date === new Date().getDate() &&
      currentMonth === new Date().getMonth() + 1
    );
  };
  return (
    <>
      <DateContainer
        key={i}
        condition={isOtherMonthDate(i)}
        onClick={() => {
          setIsModalOpen(true), setSelectedDate(transDate(calendarDate, i));
        }}
      >
        {isToday(calendarDate) ? (
          <Today>오늘</Today>
        ) : (
          <CalendarDate>
            <HighlightDate
              haveTodo={todoData[transDate(calendarDate, i)]?.length > 0}
            >
              {calendarDate}일
            </HighlightDate>
          </CalendarDate>
        )}
        <TodoCount>
          {count?.completeMessage ? (
            <CompleteStamp src={stamp} alt="stamp" />
          ) : (
            <>
              <MessageContainer>{count?.incompleteMessage}</MessageContainer>
              <CountMessage>{count?.done}</CountMessage>
              <CountMessage>{count?.notDone}</CountMessage>
            </>
          )}
        </TodoCount>
      </DateContainer>
    </>
  );
};
export default CalendarDateContents;
