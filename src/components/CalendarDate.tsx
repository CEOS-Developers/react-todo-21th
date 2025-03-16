import styled from "styled-components";
import { loadData, TodoDataInfo } from "../utils/storage";

interface CalendarDateProps {
  index: number;
  date: string;
  condition: boolean;
}

const CalendarDate = ({ date, condition }: CalendarDateProps) => {
  const todoData: TodoDataInfo = loadData();
  const todoDataCount =
    todoData[date].length === 0 ? "" : `할일 (${todoData[date].length})개!`;
  return (
    <DateContainer condition={condition}>
      {date}
      <TodoCount>{todoDataCount}</TodoCount>
    </DateContainer>
  );
};
export default CalendarDate;
const DateContainer = styled.div<{ condition: boolean }>`
  box-sizing: border-box;
  width: calc(100% / 7);
  height: 50px;
  border: 0.5px solid #000;
  &:nth-child(7n + 1) {
    color: red;
  }
  &:nth-child(7n) {
    color: rgb(68, 0, 255);
  }
  ${(props) => (props.condition ? `color:pink !important;` : ``)}
`;
const TodoCount = styled.div`
  font-size: 10px;
  color: gray;
  text-align: right;
  margin-top: 5px;
`;
