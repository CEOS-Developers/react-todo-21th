import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/hooks/useTheme';
import GlobalStyles from '@/styles/GlobalStyles';
import Home from '@/pages/Home';

const App = () => {
  const { theme, themeMode, toggleTheme } = useTheme(); // ✅ 테마 상태 가져오기

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...theme }}>
        {' '}
        {/* ✅ theme 객체를 새로운 객체로 전달하여 즉시 반영 */}
        <GlobalStyles />
        <Routes>
          {/* ✅ themeMode와 toggleTheme을 Home.tsx로 전달 */}
          <Route path="/" element={<Home themeMode={themeMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
