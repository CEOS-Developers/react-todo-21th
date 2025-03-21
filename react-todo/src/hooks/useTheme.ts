import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '@/styles/theme';
import { DefaultTheme } from 'styled-components';

export type ThemeMode = 'light' | 'dark';

/** 테마 상태 관리 훅 */
export const useTheme = () => {
  /* 로컬스토리지에서 테마 불러오기 */
  const getInitialTheme = (): ThemeMode => {
    return (localStorage.getItem('theme') as ThemeMode) || 'light';
  };

  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  /* 테마 변경 시 로컬스토리지 업데이트 */
  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  /* 테마 토글 */
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme: DefaultTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return { theme, themeMode, toggleTheme };
};
