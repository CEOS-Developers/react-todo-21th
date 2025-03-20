import { DefaultTheme } from 'styled-components';
import { commonColors } from './colors';

const lightTheme: DefaultTheme = {
  colors: {
    background: '#9bbbd4',
    text: '#3a1d1d',
    sidebarBg: '#ffffff',
    todoItemBg: '#f7e600',
    toggleBg: '#ccc',
    ...commonColors,
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    background: '#222',
    text: '#ffffff',
    sidebarBg: '#444',
    todoItemBg: '#444',
    toggleBg: '#666',
    ...commonColors,
  },
};

export { lightTheme, darkTheme };
