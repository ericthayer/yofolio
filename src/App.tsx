import { useState, useEffect } from 'react';

import { ThemeProvider, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { DefaultHero } from './components/Hero';
import { NavList } from './components/List';
import { socialNavLinks } from './data/socialLinks';
import { mainNavLinks, footerNavLinks } from './data/navigationLinks';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/Contrast';

import YofolioLogo from './assets/images/logo-light-ethayer-no-mark.svg';

import {
  lightThemeWithComponents,
  darkThemeWithComponents,
} from './theme/theme.ts';
type ThemeMode = 'light' | 'dark' | 'system';

export interface AppProps {
  appLogo?: string;
  appTitle?: string;
}

const themeSwitcherIcons = (themeMode: ThemeMode) => {
  return (
    <>
      {themeMode === 'light' && <LightModeIcon />}
      {themeMode === 'dark' && <DarkModeIcon />}
      {themeMode === 'system' && <SettingsBrightnessIcon />}
    </>
  );
};

export const App = ({
  appLogo = YofolioLogo,
  appTitle = 'Yofolio',
}: AppProps) => {
  const theme = useTheme();

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
  }, [systemPrefersDark]);

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
      {/* AppBar - Navigation */}
      {/* TODO: Create <MainNavigation /> component w/ top & sidebar drawer variants */}
      <AppBar
        className='app-navbar'
        position='sticky'
        elevation={0}
        sx={{
          containerType: 'inline-size',
        }}
      >
        <Toolbar
          className='app-toolbar'
          sx={{
            flexDirection: { xs: 'column', '@md': 'row' },
            justifyContent: { xs: 'center', '@md': 'space-between' },
            flexWrap: 'wrap',
            pt: { xs: 1.75, '@md': 0 },
            pr: { xs: 1.5 },
          }}
        >
          {/* AppBar Left */}
          <Stack className='appbar-left'>
            <Stack
              direction='row'
              alignItems='center'
              gap={1}
            >
              {/* Logo */}
              <Stack className='app-logo'>
                <Link
                  href='/'
                  color='inherit'
                  title='Home'
                  sx={{
                    display: 'flex',
                  }}
                >
                  {appLogo ? (
                    <img
                      src={appLogo}
                      alt='Yofolio Logo'
                      height='15.2'
                      width='176'
                      style={{
                        filter:
                          getActualTheme() === lightThemeWithComponents
                            ? 'invert(0.8)'
                            : 'none',
                      }}
                    />
                  ) : (
                    appTitle
                  )}
                </Link>
              </Stack>
            </Stack>
          </Stack>
          {/* AppBar Right */}
          <Stack
            className='appbar-right'
            flexDirection='row'
            flexWrap='wrap'
            gap={1}
          >
            {/* Main Navigation */}
            <Box
              component='nav'
              aria-label='main navigation'
            >
              <NavList
                items={mainNavLinks}
                target='_self'
              />
            </Box>

            {/* Mode Switcher */}
            <Stack
              flexDirection='row'
              alignItems='center'
            >
              <IconButton
                color='inherit'
                onClick={handleMenuOpen}
                aria-label='theme options'
                size='small'
                sx={{
                  alignSelf: 'center',
                  '.MuiSvgIcon-root': { fontSize: '1.25rem' },
                }}
              >
                {themeSwitcherIcons(themeMode)}
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
                  <LightModeIcon
                    fontSize='small'
                    sx={{ mr: 1 }}
                  />
                  Light
                </MenuItem>
                <MenuItem
                  onClick={() => handleThemeChange('dark')}
                  selected={themeMode === 'dark'}
                >
                  <DarkModeIcon
                    fontSize='small'
                    sx={{ mr: 1 }}
                  />
                  Dark
                </MenuItem>
                <MenuItem
                  onClick={() => handleThemeChange('system')}
                  selected={themeMode === 'system'}
                >
                  <SettingsBrightnessIcon
                    fontSize='small'
                    sx={{ mr: 1 }}
                  />
                  System
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Main Content */}
      <Stack
        component='main'
        gap={0}
      >
        {/* Hero Section */}
        {/* TODO: Create <HeroSection /> component */}
        <DefaultHero
          id='heroSection'
          variant='fullscreen'
        />
        <DefaultHero
          id='about'
          variant='fullscreen'
        />
        <DefaultHero
          id='contact'
          variant='fullscreen'
        />
      </Stack>
      {/* App Footer */}
      <AppBar
        component='footer'
        position='sticky'
        elevation={0}
        sx={{ bottom: 0 }}
      >
        <Toolbar
          variant='dense'
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            fontSize: theme.typography.body2.fontSize,
            py: { xs: 1.75, sm: 0.25 },
            px: { sm: 2.25 },
            gap: { xs: 0, sm: 1},
          }}
        >
          {/* Copyright + Footer Nav */}
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
            sx={{ mr: { xs: 0, sm: 'auto' } }}
          >
            {/* Copyright */}
            <Typography
              variant='body2'
              color='inherit'
            >
              © {new Date().getFullYear()} {appTitle}.
            </Typography>

            {/* Footer Navigation */}
            <Box
              component='nav'
              aria-label='footer navigation'
            >
              <NavList
                items={footerNavLinks}
                sx={{
                  '.MuiListItemButton-root': {
                    py: 0.125,
                    px: 0.75,
                    textDecoration: 'underline',
                    textDecorationSkipInk: 'auto',
                  },
                }}
              />
            </Box>
          </Stack>

          {/* Social Links */}
          <NavList
            items={socialNavLinks}
            variant='icon'
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default App;
