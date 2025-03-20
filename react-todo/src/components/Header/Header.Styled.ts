import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  height: 4rem;
  width: 100%;
  padding: 10px 0;
  top: 0;
  left: 0;
  transition: background 0.3s ease;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

export const HamburgerMenu = styled.button`
  font-size: 2rem;
  position: absolute;
  left: 1rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  border: none;
`;
