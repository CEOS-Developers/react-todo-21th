import styled from 'styled-components';

export const ToDoHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
`;

export const ToDoTitleSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

export const ToDoTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header3};
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;
