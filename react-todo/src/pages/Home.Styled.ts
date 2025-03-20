import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.3s ease;
`;

export const DateSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  gap: 2rem;
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Date = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const WeekButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
`;

export const DayButton = styled(WeekButton)`
  padding: 5px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;
  width: calc(20rem + 11px);
`;
