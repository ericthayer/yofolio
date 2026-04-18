import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    tiny: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    wide: true;
  }
}

export const lightThemePalette = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.common.black,
      secondary: colors.accent.main, // Signal red as secondary highlight occasionally
    },
  },
});

export const darkThemePalette = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.common.black,
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: colors.background.default,
      light: '#ffffff',
      dark: colors.primary.main,
    },
    background: {
      default: colors.common.black,
      paper: '#1a1a1a',
    },
    text: {
      primary: colors.background.default,
      secondary: colors.primary.main,
    },
  },
});

export const breakpointsOverrides = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      tiny: 320,
      sm: 576,
      md: 768,
      lg: 1000, // Modified for horizontal scrolling transition logic
      xl: 1536,
      xxl: 1920,
      wide: 2560,
    },
  },
});

export const lightPalette: ThemeOptions['palette'] = {
  ...lightThemePalette.palette,
};

export const darkPalette: ThemeOptions['palette'] = {
  ...darkThemePalette.palette,
};

export const brandedTypography: ThemeOptions['typography'] = {
  fontFamily: "'Space Grotesk', sans-serif",
  h1: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(3.5rem, calc(2rem + 4vw), 6rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
  },
  h2: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
  h3: {
    fontFamily: "'DM Serif Display', serif",
    fontStyle: 'italic',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: "'DM Serif Display', serif",
    fontStyle: 'italic',
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: "'Space Mono', monospace",
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
        overflowX: 'hidden',
        // Global noise overlay (pseudo-element to not block clicks)
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.05,
          /* SVG Filter for noise can also be applied via a base64 Data URI inline to guarantee it shows */
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        },
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '2rem', // From the instructions: 2rem to 3rem for all containers
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '2rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true, // we want custom GSAP interactions
    },
    styleOverrides: {
      root: {
        borderRadius: '2rem',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontFamily: "'Space Grotesk', sans-serif",
        padding: '0.75rem 2rem',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      },
    },
  },
};

export const customBreakpoints: ThemeOptions['breakpoints'] = {
  ...breakpointsOverrides.breakpoints
};
