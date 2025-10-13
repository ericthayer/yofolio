import { useState, useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

import YofolioLogo from './assets/images/logo-light-ethayer-no-mark.svg';

import LinkedInIcon from './assets/icons/icon-linkedin.svg?react';
import GitHubIcon from './assets/icons/icon-github.svg?react';
import CodePenIcon from './assets/icons/icon-codepen.svg?react';
import NotionIcon from './assets/icons/icon-notion.svg?react';

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
      {/* TODO: Create mobile navigation UX */}
      {/* TODO: Create <MainNavigation /> component w/ top & sidebar drawer variants */}
      <AppBar
        className='app-navbar'
        position='static'
        elevation={0}
      >
        <Toolbar
          className='app-toolbar'
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
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
                            ? 'invert(1) brightness(1.5)'
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
            gap={1}
          >
            {/* Main Navigation */}
            <nav aria-label='main navigation'>
              {/* TODO: Implement smooth scrolling & create map of navigationItems[NavItem] */}
              <List
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, p: 0 }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    component='a'
                    href='#about'
                  >
                    <ListItemText primary='About' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component='a'
                    href='#experience'
                  >
                    <ListItemText primary='Experience' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component='a'
                    href='#contact'
                  >
                    <ListItemText primary='Contact' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleMenuOpen}>
                    <ListItemText primary='Theme' />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>

            {/* Mode Switcher */}
            <Stack
              flexDirection='row'
              alignItems='center'
              display='none'
            >
              <IconButton
                color='inherit'
                onClick={handleMenuOpen}
                aria-label='theme options'
                sx={{ alignSelf: 'center' }}
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
        <Stack
          className='billboard'
          gap={0}
          sx={{ justifyContent: 'center', flex: 1 }}
        >
          <Container
            className='billboard-container'
            maxWidth={false}
            sx={{
              containerType: 'inline-size',
              py: 'clamp(4rem, 4vw, 7rem)',
              px: { xs: 4, md: 6 },
            }}
          >
            <Stack gap={4}>
              {/* Hero Text: <slot/> */}
              <Stack gap={1}>
                {/* Hero Text */}
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
              {/* Actions: <slot/> */}
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
              {/* Social Links */}
              {/* TODO: Create <SocialLinks /> component & move data into socialLinks[] */}
              <Stack
                className='billboard-social'
                direction='row'
                gap={2}
              >
                <IconButton
                  color='inherit'
                  size='large'
                  edge='start'
                  href='https://www.linkedin.com/in/ethayerdesign/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='LinkedIn'
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  color='inherit'
                  size='large'
                  href='https://github.com/ericthayer/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='GitHub'
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color='inherit'
                  size='large'
                  href='https://codepen.io/ericthayer/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='CodePen'
                >
                  <CodePenIcon />
                </IconButton>
                <IconButton
                  color='inherit'
                  size='large'
                  href='https://ethayer.notion.site/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Professional Timeline'
                >
                  <NotionIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
