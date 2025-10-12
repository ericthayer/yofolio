import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import colors from './colors';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily:
      "'DM Sans Variable', system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: '3.5rem',
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
      light: colors.secondary[300],
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
      light: colors.primary[600],
      dark: colors.secondary[600],
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

export const brandedComponents: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      ':root': {
        colorScheme: 'light dark',
        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      p: {
        textWrap: 'pretty',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: colors.primary[800],
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: false,
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        minWidth: 'unset',
        textTransform: 'capitalize',
        fontWeight: 600,
        borderRadius: 6,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {},
    },
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

// const brandedTheme = createTheme({
//   ...brandedTokens,
//   palette: {
//     ...(window.matchMedia('(prefers-color-scheme: dark)').matches
//       ? darkTheme.palette
//       : localStorage.getItem('theme') === 'dark'
//       ? darkTheme.palette
//       : lightTheme.palette),
//   },
//   components: {
//     ...brandedComponents,
//   },
// });

// export default brandedTheme;
