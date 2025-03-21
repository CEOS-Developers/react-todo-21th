import { JSX } from 'react/jsx-runtime';

import * as S from './TaskCount.styled';

type TaskCountProps = {
  taskCount: number;
  isDone?: boolean;
};

const TaskCount = ({
  taskCount,
  isDone = false,
}: TaskCountProps): JSX.Element => {
  return (
    <S.TaskCountText>
      <S.TaskCountNumber>{taskCount}</S.TaskCountNumber> task(s){' '}
      {isDone ? 'done' : 'to do'}
    </S.TaskCountText>
  );
};

export default TaskCount;
