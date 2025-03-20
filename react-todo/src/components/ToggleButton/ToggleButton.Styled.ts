import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleLabel = styled.label`
  position: relative;
  width: 50px;
  height: 26px;
  display: inline-block;
  background: ${({ theme }) => theme.colors.toggleBg};
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 3px;
  left: 4px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease;

  ${ToggleInput}:checked + & {
    transform: translateX(24px);
    background: ${({ theme }) => theme.colors.sidebarBg};
  }
`;
