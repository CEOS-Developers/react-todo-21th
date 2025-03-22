import styled from 'styled-components';

export const TaskListSection = styled.section`
  flex-grow: 1;

  width: 100%;
  height: fit-content;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskListContainer = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const EmptyTask = styled.p`
  text-align: center;

  ${({ theme }) => theme.fontStyles.Body5}
  color: ${({ theme }) => theme.colors.Grayscale[200]};
`;
