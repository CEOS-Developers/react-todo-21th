import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle/*css */ `
body, html{
    height: 100%;
    overflow: hidden;
}
body{
    background-color: ${(props) => props.theme.colors.lightest};
}
a{
    text-decoration: none;
    color: inherit;
}
`

export default GlobalStyle
