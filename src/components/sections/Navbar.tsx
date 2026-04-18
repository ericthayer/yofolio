import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // In pinning scroll trigger systems, window.scrollY still tracks distance.
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(232, 228, 221, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        color: scrolled ? 'secondary.main' : 'primary.main', // Adjust text color when hero is dark vs light
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, lg: 8 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: scrolled ? 'secondary.main' : 'primary.main' }}>
          ET.
        </Typography>
        
        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontFamily: "'Space Mono', monospace", '&:hover': { color: 'accent.main' } }} onClick={() => window.scrollTo(0, window.innerHeight)}>Work</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontFamily: "'Space Mono', monospace", '&:hover': { color: 'accent.main' } }} onClick={() => window.scrollTo(0, window.innerHeight * 2)}>Manifesto</Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontFamily: "'Space Mono', monospace", '&:hover': { color: 'accent.main' } }} onClick={() => window.scrollTo(0, window.innerHeight * 3)}>Story</Typography>
        </Stack>

        <Button 
          variant="outlined" 
          href="mailto:ethayer.design@gmail.com"
          sx={{ 
            borderColor: scrolled ? 'secondary.main' : 'primary.main', 
            color: scrolled ? 'secondary.main' : 'primary.main',
            borderRadius: '2rem',
            px: 3,
            '&:hover': {
              borderColor: 'accent.main',
              color: 'accent.main',
              bgcolor: 'transparent'
            }
          }}
        >
          Connect
        </Button>
      </Toolbar>
    </AppBar>
  );
};
