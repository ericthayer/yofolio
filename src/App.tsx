import { useState, useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

import {
  lightThemeWithComponents,
  darkThemeWithComponents,
} from './theme/theme.ts';
type ThemeMode = 'light' | 'dark' | 'system';

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    // Initialize from localStorage or default to 'system'
    const saved = localStorage.getItem('themeMode');
    return saved === 'light' || saved === 'dark' || saved === 'system'
      ? (saved as ThemeMode)
      : 'system';
  });
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemPrefersDark(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Persist theme mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  // Determine the actual theme to use
  const getActualTheme = () => {
    if (themeMode === 'system') {
      return systemPrefersDark
        ? darkThemeWithComponents
        : lightThemeWithComponents;
    }
    return themeMode === 'dark'
      ? darkThemeWithComponents
      : lightThemeWithComponents;
  };

  // Menu handlers
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    handleMenuClose();
  };

  return (
    <ThemeProvider theme={getActualTheme()}>
      <CssBaseline />
      <AppBar
        className='app-navbar'
        position='static'
        elevation={0}
      >
        <Toolbar
          className='app-toolbar'
          sx={{ justifyContent: 'space-between' }}
        >
          <Stack className='app-logo'>Yofolio</Stack>
          <Stack flexDirection='row'>
            <IconButton
              color='inherit'
              onClick={handleMenuOpen}
              aria-label='theme options'
            >
              {themeMode === 'light' && <LightModeIcon />}
              {themeMode === 'dark' && <DarkModeIcon />}
              {themeMode === 'system' && <SettingsBrightnessIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem
                onClick={() => handleThemeChange('light')}
                selected={themeMode === 'light'}
              >
                <LightModeIcon sx={{ mr: 1 }} />
                Light
              </MenuItem>
              <MenuItem
                onClick={() => handleThemeChange('dark')}
                selected={themeMode === 'dark'}
              >
                <DarkModeIcon sx={{ mr: 1 }} />
                Dark
              </MenuItem>
              <MenuItem
                onClick={() => handleThemeChange('system')}
                selected={themeMode === 'system'}
              >
                <SettingsBrightnessIcon sx={{ mr: 1 }} />
                System
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack
        component='main'
        gap={0}
      >
        {/* Hero Section */}
        <Stack
          className='billboard'
          gap={0}
          sx={{ justifyContent: 'center', flex: 1 }}
        >
          <Container
            className='billboard-container'
            maxWidth='lg'
            sx={{
              containerType: 'inline-size',
              py: 'clamp(4rem, 4vw, 7rem)',
              px: { xs: 4, md: 6 },
            }}
          >
            <Stack gap={4}>
              {/* Hero Text */}
              <Stack gap={1}>
                <Typography
                  className='billboard-headline'
                  variant='h1'
                >
                  UX Engineer <small>&amp;</small>{' '}
                  <Box
                    component='br'
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                  />
                  Systems Lead
                </Typography>
                <Typography
                  className='billboard-description'
                  variant='h5'
                  component='p'
                >
                  I'm a skilled&mdash;Creative Strategist, Product Designer, and
                  Front-end Developer.{' '}
                  <Box
                    component='br'
                    sx={{ display: { xs: 'none', md: 'block' } }}
                  />
                  Please let me know how I can help your team or project
                  succeed.
                </Typography>
              </Stack>
              {/* Actions */}
              <Stack
                className='billboard-actions'
                gap={2}
                sx={{ flexDirection: { xs: 'column', '@sm': 'row' } }}
              >
                <Button
                  color='primary'
                  variant='contained'
                  size='large'
                >
                  Work Experience
                </Button>
                <Button
                  color='secondary'
                  variant='contained'
                  size='large'
                >
                  View Resume
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
