import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './utils/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  )
}

export default App
