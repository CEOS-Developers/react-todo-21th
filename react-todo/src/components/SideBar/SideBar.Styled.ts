import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 100;
  padding: 0 2rem;
  box-sizing: border-box;
  width: 250px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const CloseButton = styled.span``;
export const ThemeButton = styled.span``;
