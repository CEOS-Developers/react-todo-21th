import styled from 'styled-components';

export const TaskItemContainer = styled.li`
  width: 100%;
  min-height: 5.6rem;

  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;

  cursor: pointer;
`;

export const InvisibleCheckboxInput = styled.input`
  display: none;
`;

export const TaskEditForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const TaskContent = styled.span<{
  $isCompleted: boolean;
}>`
  width: 100%;
  height: fit-content;
  padding: 0.8rem;
  margin-left: 1.8rem;

  ${({ theme }) => theme.fontStyles.Body5}
  color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.Grayscale[200] : theme.colors.Grayscale[500]};
`;

export const TaskEditInput = styled.input<{ $isEditing: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 0.8rem;
  margin-left: 1.8rem;

  border-bottom: 1.5px solid ${({ theme }) => theme.colors.Grayscale[300]};

  ${({ theme }) => theme.fontStyles.Body5}
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;

export const SaveCancelButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem 0;

  ${({ theme }) => theme.fontStyles.Body3};
  font-size: 2.2rem;
`;

export const SaveButton = styled(SaveCancelButton)`
  color: ${({ theme }) => theme.colors.Grayscale[200]};
`;

export const CancelButton = styled(SaveCancelButton)`
  color: ${({ theme }) => theme.colors.Signature.Red_500};
`;

export const TaskControls = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 1.8rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const TaskControlButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem;

  display: flex;
`;
