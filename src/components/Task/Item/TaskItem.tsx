import { JSX } from 'react/jsx-runtime';

import {
  CheckboxIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from '@/icons/ToDoList';

import * as S from './TaskItem.styled';

type TaskItemProps = {
  content: string;
  isCompleted: boolean;
  toggleTask: () => void;
};

const TaskItem = ({
  content,
  isCompleted,
  toggleTask,
}: TaskItemProps): JSX.Element => {
  return (
    <S.TaskItemContainer>
      <S.CheckboxLabel>
        <S.InvisibleCheckboxInput type="checkbox" onChange={toggleTask} />
        <CheckboxIcon />
        {isCompleted && <CheckIcon />}
      </S.CheckboxLabel>
      <S.TaskContent $isCompleted={isCompleted}>{content}</S.TaskContent>
      <S.TaskControls>
        <S.TaskControlButton>
          <PencilIcon />
        </S.TaskControlButton>
        <S.TaskControlButton>
          <TrashIcon />
        </S.TaskControlButton>
      </S.TaskControls>
    </S.TaskItemContainer>
  );
};

export default TaskItem;
