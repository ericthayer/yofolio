import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import colors from './colors';
import { brandedComponents } from './components';

// Re-export for convenience
export { brandedComponents };

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily:
      "'DM Sans Variable', system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: 'clamp(3rem, calc(1.525rem + 3.3vw), 4rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary[600],
      light: colors.primary[400],
      dark: colors.primary[700],
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[50],
      dark: colors.secondary[700],
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.secondary[900],
      secondary: colors.secondary[600],
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary[700],
      light: colors.primary[500],
      dark: colors.primary[900],
    },
    secondary: {
      main: colors.secondary[800],
      light: colors.secondary[600],
      dark: colors.secondary[700],
    },
    background: {
      default: colors.secondary[900],
      paper: colors.secondary[800],
    },
    text: {
      primary: colors.secondary[50],
      secondary: colors.secondary[300],
    },
  },
});

export const brandedTokens: ThemeOptions = {
  ...baseTheme,
  palette: {
    ...lightTheme.palette,
    ...darkTheme.palette,
  },
};

// Create themed versions with components
export const lightThemeWithComponents = createTheme({
  ...lightTheme,
  components: {
    ...brandedComponents,
  },
});

export const darkThemeWithComponents = createTheme({
  ...darkTheme,
  components: {
    ...brandedComponents,
  },
});
