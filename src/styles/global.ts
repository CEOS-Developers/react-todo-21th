import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --font-primary: "Inter", sans-serif;
  --font-secondary: "Shadows Into Light", cursive;
}

 * {
    box-sizing: border-box;
 }
 
 html {
    font-size: 62.5%;
 }
 
 body {
    margin: 0;
    width: 100vw;
    height: 100vh;

    font-family: var(--font-primary);
 }

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

input {
  background: none;
  outline: none;
}

input[type='checkbox'] {
  appearance: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  cursor: pointer;
}
`;

export default GlobalStyles;
