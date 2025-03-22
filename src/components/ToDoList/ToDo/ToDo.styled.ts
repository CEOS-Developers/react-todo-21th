import styled from 'styled-components';

export const ToDoHeaderSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
`;

export const ToDoTitleContainer = styled.div`
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
