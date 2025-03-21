import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  border-radius: 14px;
  width: calc(20rem + 11px);
  height: 2.5rem;
  padding: 10px;
  margin: 2rem 0 1rem 0;
  background: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TextInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  text-align: left;
`;

export const EnterButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.kakaoYellow};
  color: ${({ theme }) => theme.colors.kakaoBrown};
  font-weight: 600;
  font-size: 14px;
`;

export const CalendarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;

  input[type='date'] {
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    opacity: 0;
    cursor: pointer;
  }
`;

export const CalendarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
