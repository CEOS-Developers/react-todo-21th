import * as s from "./SingleTodoStyled";
import { Todo } from "../../interface";

interface SingleTodoProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

// 날짜 차이 계산 (오늘 기준 D-day)
const calculateDateDiff = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return { targetDate, diffDays };
};

// 날짜 포맷 함수
const formatDate = (date: Date) =>
  date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\s/g, ""); // 공백 제거

// D-Day 텍스트 및 포맷 날짜 계산
const getDdayInfo = (date: Date) => {
  const { targetDate, diffDays } = calculateDateDiff(date);

  let dDayText = "";
  if (diffDays > 0) {
    dDayText = `D-${diffDays}`;
  } else if (diffDays === 0) {
    dDayText = "D-Day";
  } else {
    dDayText = `D+${Math.abs(diffDays)}`;
  }

  const formattedDate = formatDate(targetDate);
  return { dDayText, formattedDate };
};

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  onDelete,
  onToggle,
}) => {
  let dDayText: string | null = null;
  let formattedDate: string | null = null;

  if (todo.date) {
    ({ dDayText, formattedDate } = getDdayInfo(todo.date));
  }

  return (
    <s.SingleTodoWrapper>
      <s.UpperBox>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.content}</span>
      </s.UpperBox>
      <s.DateBox>
        <span>{dDayText}</span>
        <span>{formattedDate}</span>
        <span className="delete-btn" onClick={() => onDelete(todo.id)}>
          삭제
        </span>
      </s.DateBox>
    </s.SingleTodoWrapper>
  );
};

export default SingleTodo;
