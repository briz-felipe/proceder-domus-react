export const theme = {
  colors: {
    primary: '#8a2be2', // Roxo mais tech (antigo #a528fe)
    primaryDark: '#5c0d8b',
    primaryLight: '#b57bfe',
    secondary: '#3a3a4a', // Fundo escuro tech (não preto)
    secondaryDark: '#2a2a36',
    secondaryLight: '#4a4a5e',
    white: '#ffffff',
    text: '#e0e0e0',
    textMuted: '#a0a0a0',
    border: '#4a4a5e',
    success: '#28a745',
    error: '#dc3545'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem'
  },
  shadows: {
    card: '0 4px 20px rgba(138, 43, 226, 0.15)',
    button: '0 4px 15px rgba(138, 43, 226, 0.3)',
    inputFocus: '0 0 0 0.25rem rgba(138, 43, 226, 0.25)'
  },
  transitions: {
    default: 'all 0.3s ease-in-out'
  }
};

export type Theme = typeof theme;