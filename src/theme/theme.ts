import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import {
  lightPalette,
  darkPalette,
  brandedComponents,
  brandedTypography,
  customBreakpoints,
} from './components';

export const baseTheme: ThemeOptions = {
  breakpoints: {
    ...customBreakpoints,
  },
  typography: {
    ...brandedTypography,
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    ...lightPalette,
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...darkPalette,
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
