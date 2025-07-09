export const theme = {
  colors: {
    primary: '#a528fe',
    secondary: '#6c757d',
    white: '#ffffff',
    border: '#e0e0e0',
    text: '#6c757d'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '15px',
    lg: '20px',
    xl: '400px'
  },
  radius: {
    sm: '8px',
    md: '15px'
  },
  shadows: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  }
};

export type Theme = typeof theme;