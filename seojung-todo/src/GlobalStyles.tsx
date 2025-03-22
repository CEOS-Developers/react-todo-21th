// src/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background: linear-gradient(135deg, #f3f4f6 0%, #e3e7eb 100%);
  }

  #root {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
