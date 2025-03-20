import styled from 'styled-components';

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
