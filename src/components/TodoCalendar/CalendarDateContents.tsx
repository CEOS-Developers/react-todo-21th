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
  date: Date;
  calendarDate: number;
  setIsModalOpen: (value: boolean) => void;
  setSelectedDate: (value: string) => void;
  firstDateIndex: number;
  lastDateIndex: number;
}

const CalendarDateContents = ({
  i,
  date,
  calendarDate,
  setIsModalOpen,
  setSelectedDate,
  firstDateIndex,
  lastDateIndex,
}: CalendarDateContentsProps) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const todoData: TodoDataInfo = loadData();

  const count = countTodo(calendarDate, i); //todoData[date]에 할 일이 있는지 확인하고 있으면 할 일 개수 반환

  //다른 달의 날짜인지 확인
  const isOtherMonthDate = (index: number) => {
    if (index < firstDateIndex || index > lastDateIndex) {
      return true;
    }
    return false;
  };

  //날짜 변환 함수(미리 선언)
  function transDate(calandarDate: number, index: number) {
    let year = currentYear;
    let month = currentMonth;
    if (index < firstDateIndex) {
      date.getMonth() === 0 ? 12 : date.getMonth();
      if (currentMonth === 0) {
        year = currentYear - 1;
      }
    } else if (index > lastDateIndex) {
      currentMonth === 11 ? 1 : currentMonth + 1;
      if (currentMonth === 11) {
        year = currentYear + 1;
      }
    }
    return `${year}/${month}/${calandarDate}`;
  }

  //할 일 개수 세기 함수(미리 선언)
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

  //오늘 날짜인지 확인
  const isToday = () => {
    return (
      calendarDate === date.getDate() &&
      i >= firstDateIndex &&
      i <= lastDateIndex
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
        {isToday() ? (
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
          {/*count에 따라 보이는 다른 메시지*/}
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
