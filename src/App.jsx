import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './utils/theme'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header>
          <h1>Todo</h1>
        </header>
      </ThemeProvider>
    </>
  )
}

export default App
