import styled from "styled-components";
import { theme } from "../../assets/theme";

export const TodoListWrapper = styled.section<{ $bg: string }>`
  min-width: 300px;
  min-height: 60vh;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  flex-shrink: 0;
  box-sizing: border-box;
  flex: 1;
  background-color: ${(props) => props.$bg};
  &:hover {
    transform: translateY(-3px);
  }
  > div {
    display: flex;
    justify-content: space-between;
    background: none;
    margin-bottom: 1rem;
  }
  > div > button {
    font-size: 0.7rem;
    color: ${theme.subText};
    margin: 0 10px;
    background: none;
  }
  h2 {
    font-size: 1.1rem;
    text-align: left;
    color: ${theme.text};
    font-weight: 500;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
