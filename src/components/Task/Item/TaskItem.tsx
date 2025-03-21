import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import {
  CheckboxIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from '@/icons/ToDoList';

import * as S from './TaskItem.styled';

const TaskItem = (): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <S.TaskItemContainer>
      <S.CheckboxLabel>
        <S.InvisibleCheckboxInput
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isCompleted}
        />
        <CheckboxIcon />
        {isCompleted && <CheckIcon />}
      </S.CheckboxLabel>
      <S.TaskContent $isCompleted={isCompleted}>Test</S.TaskContent>
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
