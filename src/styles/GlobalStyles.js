import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
	   v2.0 | 20110126
	   License: none (public domain)
	*/

	@font-face {
		font-family : 'Pretendard';
		src : url('../src/assets/fonts/Pretendard-Regular.woff2');
		font-style: normal;
	}

	@font-face {
		font-family : 'Pretendard ExtraBold';
		src : url('../src/assets/fonts/Pretendard-ExtraBold.woff2');
    	font-style: normal;
	}

	* {
		font-family: 'Pretendard', sans-serif;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* 키보드로 인풋에 포커스 시 */
	input:focus-visible {
		outline: 1px solid ${(props) => props.theme.mainText};
	}
`;

export default GlobalStyles;
