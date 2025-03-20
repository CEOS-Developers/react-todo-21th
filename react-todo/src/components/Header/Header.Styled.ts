import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.kakaoBlue};
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export const HamburgerMenu = styled.button`
  font-size: 2rem;
  position: absolute;
  left: 1rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.kakaoBrown};
  border: none;
`;
