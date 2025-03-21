import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle/*css */ `
body, html{
    margin: 0;
    height: 100%;
    font-family:  ${({ theme }) => theme.fonts.main};
}
body{
    background-color: ${({ theme }) => theme.colors.lightest};
}
#root {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a{
    text-decoration: none;
    color: inherit;
}
`

export default GlobalStyle
