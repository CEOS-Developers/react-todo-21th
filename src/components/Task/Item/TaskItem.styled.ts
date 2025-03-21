import styled from 'styled-components';

export const TaskItemContainer = styled.li`
  width: 100%;
  height: fit-content;

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

export const TaskContent = styled.span<{ $isCompleted: boolean }>`
  flex-grow: 1;

  width: 100%;
  height: fit-content;
  margin-left: 1.8rem;

  ${({ theme }) => theme.fontStyles.Body5}
  color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.Grayscale[200] : theme.colors.Grayscale[500]};
`;

export const TaskControls = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const TaskControlButton = styled.button`
  width: fit-content;
  height: fit-content;
`;
