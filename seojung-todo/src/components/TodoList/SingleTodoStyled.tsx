import styled from "styled-components";
import { theme } from "../../assets/theme";

export const SingleTodoWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.3);
  margin: 6px 0;
  padding: 10px;
  gap: 4px;
  border-radius: 8px;
  font-size: 1rem;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  div {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
`;
export const UpperBox = styled.div`
  input {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    accent-color: #255a9b;
  }
  span {
    flex: 1;
    color: ${theme.text};
    word-break: break-word; /* 긴 단어가 있으면 줄바꿈 */
    overflow-wrap: break-word; /* 박스 안에서 줄바꿈 */
    white-space: normal;
    line-height: 1.4;
    text-align: left;
    margin-left: 4px;
  }
`;

export const DateBox = styled.div`
  justify-content: end;
  gap: 0.4rem;
  span {
    font-size: 0.8rem;
    color: ${theme.subText};
  }
  .delete-btn {
    cursor: pointer;
  }
`;
