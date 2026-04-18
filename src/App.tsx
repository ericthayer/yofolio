import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { lightThemeWithComponents } from './theme/theme.ts';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { HorizontalScrollContainer } from './components/layout/HorizontalScrollContainer';
import { Work } from './components/sections/Work';
import { Expertise } from './components/sections/Expertise';
import { Story } from './components/sections/Story';
import { Connection } from './components/sections/Connection';

export const App = () => {
  return (
    <ThemeProvider theme={lightThemeWithComponents}>
      <CssBaseline />
      
      <Navbar />

      {/* Global Horizontal Track */}
      <HorizontalScrollContainer>
        <Hero />
        <Work />
        <Expertise />
        <Story />
        <Connection />
      </HorizontalScrollContainer>

    </ThemeProvider>
  );
};

export default App;
