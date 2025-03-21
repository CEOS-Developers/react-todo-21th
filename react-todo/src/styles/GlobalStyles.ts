import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    :root  {
        --vh: 100%;
    }

    *{
        box-sizing: border-box;
        font-family: 'Pretendard';
    }

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }

    html {
        font-size: 16px;
    }

    body{
        display: flex; 
        flex-direction: column;
        justify-content: center;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        &::-webkit-scrollbar {
            display: none; /* 웹 브라우저에서 스크롤 바 숨기기 */
        }
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;

        &:disabled {
            pointer-events: none;
        }
    }
`;

export default GlobalStyles;
