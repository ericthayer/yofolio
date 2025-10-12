import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { lightThemeWithComponents, darkThemeWithComponents } from './theme/theme.ts';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

type ThemeMode = 'light' | 'dark' | 'system';

function App() {
  const [count, setCount] = useState(0);
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
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

  // Determine the actual theme to use
  const getActualTheme = () => {
    if (themeMode === 'system') {
      return systemPrefersDark ? darkThemeWithComponents : lightThemeWithComponents;
    }
    return themeMode === 'dark' ? darkThemeWithComponents : lightThemeWithComponents;
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
        position='static'
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1 }}
          >
            My App
          </Typography>
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
        </Toolbar>
      </AppBar>
      <Box
        component='main'
        sx={{ py: 8 }}
      >
        <Container maxWidth='lg'>
          <Card sx={{ p: 4 }}>
            <div>
              <a
                href='https://vite.dev'
                target='_blank'
                rel='noopener'
              >
                <img
                  src={viteLogo}
                  className='logo'
                  alt='Vite logo'
                />
              </a>
              <a
                href='https://react.dev'
                target='_blank'
                rel='noopener'
              >
                <img
                  src={reactLogo}
                  className='logo react'
                  alt='React logo'
                />
              </a>
            </div>
            <h1>Vite + React</h1>
            <Button
              color='primary'
              variant='contained'
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <p className='read-the-docs'>
              Click on the Vite and React logos to learn more
            </p>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
