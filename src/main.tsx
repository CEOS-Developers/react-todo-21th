import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { DateProvider } from './context/DateProvider.tsx';
import { TaskProvider } from './context/TaskProvider.tsx';

import App from './App.tsx';
import theme from './styles/theme.ts';
import GlobalStyles from './styles/global.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <DateProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </DateProvider>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
