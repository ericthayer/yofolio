import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import appTheme from './theme/theme.ts';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const theme = {
//   appTheme,
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppBar position='static' elevation={0}>
        <Toolbar>
          <Typography variant='h6'>My App</Typography>
        </Toolbar>
      </AppBar>
      <Box component='main' sx={{ py: 8 }}>
        <Container maxWidth='lg'>
          <Card sx={{ p: 4 }}>
            <div>
              <a
                href='https://vite.dev'
                target='_blank'
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
