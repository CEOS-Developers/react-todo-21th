export const theme = {
  maxWidth: '350px',
  colors: {
    primary: '#00000',
    secondary: '#f0f0f0',
    darkGray: '#333333',
    gray: '#999999',
    lightGray: '#eeeeee',
    danger: '#ff3333',
    background: '#ffffff',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  radius: {
    small: '4px',
    medium: '8px',
    round: '12px',
  },
  fontSize: {
    small: '0.8rem',
    base: '1rem',
    large: '1.1rem',
    xLarge: '1.5rem',
  },
};

export type ThemeType = typeof theme;
