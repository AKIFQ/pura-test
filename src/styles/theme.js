export const theme = {
  colors: {
    primary: '#5B3A73',
    primaryDark: '#4A2C5E',
    dark: '#000000',
    white: '#FFFFFF',
    gray: {
      100: '#F5F5F5',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#9E9E9E',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
      light: '#FFFFFF'
    },
    background: '#FFFFFF'
  },
  typography: {
    h1: {
      fontSize: '64px',
      lineHeight: '72px',
      fontWeight: 800,
      fontFamily: "'Zodiak', Georgia, serif",
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '48px',
      lineHeight: '56px',
      fontWeight: 700,
      fontFamily: "'Zodiak', Georgia, serif",
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
      fontFamily: "'Zodiak', Georgia, serif",
      textTransform: 'uppercase',
    },
    body: {
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: 400,
      fontFamily: "'Zodiak', Georgia, serif",
    },
    nav: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 700,
      fontFamily: "'Zodiak', Georgia, serif",
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    button: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 700,
      fontFamily: "'Zodiak', Georgia, serif",
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
    }
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '45px'
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.15)'
  }
}