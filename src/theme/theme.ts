import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const obsidian = '#0D0D12';
const champagne = '#C9A84C';
const ivory = '#FAF8F5';
const slate = '#2A2A35';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: champagne,
    },
    background: {
      default: obsidian,
      paper: slate,
    },
    text: {
      primary: ivory,
      secondary: '#A1A1AA', // A muted gray for secondary text if needed
    },
    divider: slate,
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 500,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
    },
    monospace: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  } as any, // extending typography to allow monospace
  shape: {
    borderRadius: 32, // 'rounded-[2rem]' requirement
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: obsidian,
          color: ivory,
          overflowX: 'hidden',
          // adding global noise via pseudo element since SVG filter might be applied elsewhere, or we can use svg inside body
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"DM Sans", sans-serif',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: slate,
          backgroundImage: 'none', // Remove default MUI elevation overlays
          borderRadius: 32,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
