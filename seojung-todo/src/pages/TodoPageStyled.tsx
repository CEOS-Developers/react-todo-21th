import styled from "styled-components";
import { theme } from "../assets/theme";
export const TodoPage = styled.main`
  width: 100%;
`;

export const TodoHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 60px;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: #d1dceb;
  z-index: 1;
  h1 {
    font-size: 21px;
    color: #255a9b;
    font-weight: 600;
  }
  > div {
    display: flex;
    position: fixed;
    right: 10px;
    justify-content: right;
    align-items: center;
  }
  > div > span {
    font-size: 0.9rem;
    color: ${theme.subText};
    margin: 0 10px;
  }
`;

export const TodoBody = styled.section`
  width: 100%;
  padding: 80px 0 24px;
  box-sizing: border-box;
  text-align: center;
`;

export const TodoListMain = styled.main`
  display: flex;
  justify-content: center;
`;
export const TodoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 16px;
  padding: 20px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: #bbb transparent;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  font-size: 0.8rem;
  color: ${theme.subText};
  p {
    text-align: center;
  }
`;
