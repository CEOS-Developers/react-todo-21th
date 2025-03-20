import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 14px;
  width: 20rem;
  padding: 10px;
  gap: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    right: -8.5px;
    width: 0;
    height: 0;
    border-top: 15px solid ${({ theme }) => theme.colors.kakaoYellow};
    border-right: 15px solid transparent;
  }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  background-color: white;

  &:checked {
    background-color: ${({ theme }) => theme.colors.green};

    &::after {
      display: flex;
      content: '✔';
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
    }
  }
`;

export const Text = styled.span`
  flex-grow: 1;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.kakaoBrown};
  color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
`;
