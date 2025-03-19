import styled from "styled-components";
import { theme } from "../../assets/theme";

export const TodoListWrapper = styled.section<{ $bg: string }>`
  min-width: 300px;
  min-height: 60vh;
  padding: 8px 16px 0;
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
  h2 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    text-align: left;
    color: ${theme.text};
    font-weight: 500;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
