import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '@/styles/theme';
import { DefaultTheme } from 'styled-components';

export type ThemeMode = 'light' | 'dark';

export const useTheme = () => {
  const getInitialTheme = (): ThemeMode => {
    const storedTheme = localStorage.getItem('theme') as ThemeMode | null;
    return storedTheme || 'light';
  };

  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme: DefaultTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return { theme, themeMode, toggleTheme };
};
