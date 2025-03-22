import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

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
  deleteTask: () => void;
  updateTask: (newContent: string) => void;
};

const TaskItem = ({
  content,
  isCompleted,
  toggleTask,
  deleteTask,
  updateTask,
}: TaskItemProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(content);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContent(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTask(editedContent);
    setIsEditing(false);
  };

  return (
    <S.TaskItemContainer>
      <S.CheckboxLabel>
        <S.InvisibleCheckboxInput type="checkbox" onChange={toggleTask} />
        <CheckboxIcon />
        {isCompleted && <CheckIcon />}
      </S.CheckboxLabel>

      {isEditing ? (
        <S.TaskEditForm onSubmit={handleSaveClick}>
          <S.TaskEditInput
            type="text"
            value={editedContent}
            onChange={handleContentChange}
            $isEditing={isEditing}
            autoFocus
          />
          <S.TaskControls>
            <S.SaveButton type="submit">Save</S.SaveButton>
            <S.CancelButton onClick={handleCancelClick}>Cancel</S.CancelButton>
          </S.TaskControls>
        </S.TaskEditForm>
      ) : (
        <>
          <S.TaskContent $isCompleted={isCompleted}>{content}</S.TaskContent>
          <S.TaskControls>
            <S.TaskControlButton onClick={handleEditClick}>
              <PencilIcon />
            </S.TaskControlButton>
            <S.TaskControlButton onClick={deleteTask}>
              <TrashIcon />
            </S.TaskControlButton>
          </S.TaskControls>
        </>
      )}
    </S.TaskItemContainer>
  );
};

export default TaskItem;
