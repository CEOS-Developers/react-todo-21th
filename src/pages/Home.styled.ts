import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 8.4rem;

  display: flex;
  justify-content: center;
  gap: 6.4rem;

  @media (max-width: 1440px) {
    align-items: center;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 6rem 3.2rem;
  }
`;

export const ToDoListContainer = styled.div`
  flex: 1;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;
