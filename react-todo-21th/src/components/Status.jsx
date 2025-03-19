import { StatusContainer } from "../styles/StyledStatus";

const Status = ({ todos, filterFunc = () => {} }) => {
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
