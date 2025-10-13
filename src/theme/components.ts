import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

export const lightThemePalette = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary[600],
      light: colors.primary[400],
      dark: colors.primary[700],
    },
    secondary: {
      main: colors.secondary[300],
      light: colors.secondary[50],
      dark: colors.secondary[500],
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

export const darkThemePalette = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary[700],
      light: colors.primary[500],
      dark: colors.primary[800],
    },
    secondary: {
      main: colors.secondary[800],
      light: colors.secondary[700],
      dark: colors.secondary[900],
    },
    background: {
      default: colors.secondary[1000],
      paper: colors.secondary[800],
    },
    text: {
      primary: colors.secondary[50],
      secondary: colors.secondary[300],
    },
  },
});

// We should define palette options as separate light/dark objects
// rather than trying to merge the themes
export const lightPalette: ThemeOptions['palette'] = {
  ...lightThemePalette.palette,
};

export const darkPalette: ThemeOptions['palette'] = {
  ...darkThemePalette.palette,
};

export const brandedTypography: ThemeOptions['typography'] = {
  fontFamily:
    "'DM Sans Variable', system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 550,
  fontWeightBold: 650,
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
      body: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      p: {
        textWrap: 'pretty',
      },
      '#root': {
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        flex: 1,
      },
      '.app-logo': {
        maxWidth: '100%',
        height: 'auto',
        fontWeight: brandedTypography.fontWeightBold,
      },
      '.billboard-headline.billboard-headline': {
        letterSpacing: '-0.025em',
      },
      '.billboard-description.billboard-description': {
        fontSize: 'clamp(1rem, calc(0.875rem + 1.5vw), 1.25rem)',
        fontWeight: brandedTypography.fontWeightRegular,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        '--AppBar-background': colors.secondary[200],
        '--AppBar-color': lightThemePalette.palette.text.primary,
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
        minHeight: 44,
        minWidth: 'unset',
        textTransform: 'capitalize',
        fontWeight: brandedTypography.fontWeightMedium,
        borderRadius: 6,
      },
    },
  },
};
