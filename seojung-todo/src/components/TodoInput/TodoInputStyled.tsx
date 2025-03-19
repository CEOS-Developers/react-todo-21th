import styled from "styled-components";
import { theme } from "../../assets/theme";

//flex>grid로 바꿈
export const InputSection = styled.section`
  display: grid;
  gap: 12px 8px;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 15%;
  /* box-sizing: border-box; */
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(4, auto);

  //바로 직계자식 선택자 >, 자식 여러개 :로 범위로 지정
  > div {
    display: flex;
  }
  > div:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    gap: 8px;
  }

  > div:last-child {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    display: flex;
    font-size: 0.8rem;
    gap: 4px;
    width: 100%;
    justify-content: flex-end;
  }

  input {
    font-size: 0.9rem;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    transition: 0.2s;
    color: ${theme.text};
    &::placeholder {
      color: ${theme.subText};
    }
  }

  input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 5px rgba(76, 154, 207, 0.3);
  }
`;

export const TodoInput = styled.input`
  flex: 1;
  padding: 14px;
  border-radius: 10px;
`;

export const TodoBtn = styled.button`
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.3rem;
  background: #b5d6eb;
  cursor: pointer;
  border-radius: 50%;
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;

  transform: rotate(0deg);

  &:hover {
    transform: rotate(90deg);
    background: #4c9acf;
    color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
export const DateInput = styled.input`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 12px;
  border-radius: 10px;
`;
export const AddTag = styled.select`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding: 12px;
  border-radius: 10px;
  padding: 12px;
  font-size: 0.9rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  transition: 0.2s;
`;

export const NewTagInput = styled.input`
  width: 15%;
  min-width: 100px;
  height: 1.2rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  transition: 0.2s;
  padding: 0 0.5rem;
  font-size: 10px;
`;

export const NewTagBtn = styled.button`
  border: none;
  height: 1.2rem;
  width: 1.2rem;
  background: #d0d7f1;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 5px;
`;
