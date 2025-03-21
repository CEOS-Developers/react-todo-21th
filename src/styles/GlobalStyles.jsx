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
		font-family : 'Pretendard Bold';
		src : url('../src/assets/fonts/Pretendard-Bold.woff2');
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
		font-family: 'Pretendard', sans-serif;
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
`;

export default GlobalStyles;
