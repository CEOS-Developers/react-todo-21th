import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* 폰트 불러오기 */
  @font-face {
    font-family: "MyFont";
    src: url("/fonts/MyCustomFont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  /* 기본 스타일 설정 */
  * {
    font-family: "MyFont", sans-serif;
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin-botton: 1rem;
  }
`;
