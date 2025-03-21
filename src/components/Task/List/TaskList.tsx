import { JSX } from 'react/jsx-runtime';

import TaskItem from '../Item/TaskItem';

import * as S from './TaskList.styled';

const TaskList = (): JSX.Element => {
  return (
    <S.TaskListSection>
      <S.TaskListContainer>
        <TaskItem />
      </S.TaskListContainer>
    </S.TaskListSection>
  );
};

export default TaskList;
