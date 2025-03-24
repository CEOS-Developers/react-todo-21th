import { StatusContainer } from "../styles/StyledStatus";

const Status = ({ todos, filterFunc = () => {} }) => {
  // 완료된 할 일 개수 계산
  const getCompletedNum = (todos) => {
    return todos.filter((todo) => todo.completed).length;
  };

  // 미완료된 할 일 개수 계산
  const getUncompletedNum = (todos) => {
    return todos.filter((todo) => !todo.completed).length;
  };

  // 필터링된 데이터 가져오기 (예: 날짜별 또는 월별)
  const filteredTodos = filterFunc(todos);

  return (
    <StatusContainer>
      <p>
        ❎: {getUncompletedNum(filteredTodos)} ✅:{" "}
        {getCompletedNum(filteredTodos)}
      </p>
    </StatusContainer>
  );
};

export default Status;
