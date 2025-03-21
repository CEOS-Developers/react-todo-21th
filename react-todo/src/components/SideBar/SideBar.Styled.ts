import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 200;
  padding: 0 2rem;
  box-sizing: border-box;
  width: 250px;
  height: 100%;
  background: ${({ theme }) => theme.colors.sidebarBg};
  transition: background 0.3s ease;
  transform: translateX(-100%);
  animation: slideIn 0.3s ease forwards;

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 100%;
  margin: 1.5rem 0;
`;

export const CloseButton = styled.span`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 5px;
`;

export const DayStat = styled.div<{ $isMax: boolean }>`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  color: ${({ $isMax, theme }) => ($isMax ? theme.colors.text : theme.colors.text)};
  background: ${({ $isMax, theme }) => ($isMax ? theme.colors.kakaoBlue : 'transparent')};
  padding: 7px 0;
  border-radius: 10px;
  transition: all 0.3s ease;
  margin: 5px 0;
  transition: background 0.3 ease;
`;

export const WeekText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;
