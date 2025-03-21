import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/hooks/useTheme';
import GlobalStyles from '@/styles/GlobalStyles';
import Home from '@/pages/Home';

const App = () => {
  const { theme, themeMode, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...theme }}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home themeMode={themeMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
