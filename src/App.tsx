import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import theme from './theme/theme.ts';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Expertise } from './components/Expertise';
import { Story } from './components/Story';
import { Connection } from './components/Connection';
import { HorizontalScrollContainer } from './components/HorizontalScrollContainer';

export const App = () => {

  // Implement global noise overlay dynamically to avoid SVG noise repetition inside React
  useEffect(() => {
    const svgNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
    document.body.style.setProperty('--noise-bg', svgNoise);
    document.body.style.position = 'relative';

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.backgroundImage = svgNoise;
    overlay.style.opacity = '0.05';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    return () => {
      document.body.removeChild(overlay);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      
      <Box component="main">
        <HorizontalScrollContainer>
          <Hero />
          <Work />
          <Expertise />
          <Story />
          <Connection />
        </HorizontalScrollContainer>
      </Box>
    </ThemeProvider>
  );
};

export default App;
