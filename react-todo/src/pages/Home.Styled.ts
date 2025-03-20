import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.kakaoBlue};
`;

export const DateSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  gap: 2rem;
`;

export const Date = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export const WeekButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.kakaoBrown};
  padding: 5px 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DayButton = styled(WeekButton)`
  padding: 5px;
`;
