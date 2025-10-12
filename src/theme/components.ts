import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme();

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
        fontWeight: theme.typography.fontWeightBold,
      },
      '.billboard-description.billboard-description': {
        fontSize: 'clamp(1rem, calc(0.875rem + 1.5vw), 1.25rem)',
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        '--AppBar-background': colors.secondary[100],
        '--AppBar-color': 'text.primary',
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
        fontWeight: theme.typography.fontWeightBold,
        borderRadius: 6,
      },
    },
  },
};
