import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography, Stack, IconButton, Button } from '@mui/material';
import gsap from 'gsap';
import { Email, LinkedIn, GitHub, Code } from '@mui/icons-material';

export const Connection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Magnetic hover effect
      const btn = document.querySelector('.magnetic-btn');
      if (btn) {
        btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.03, duration: 0.3, ease: 'back.out(1.7)' }));
        btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' }));
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: { xs: '100vw', lg: '100vw' }, // standard full width
        height: '100dvh',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: '1000px', width: '100%' }}>
        <Typography variant="h2" sx={{ color: 'secondary.main', mb: 6, textTransform: 'none' }}>
          Let's build something <Box component="span" sx={{ color: 'accent.main', fontStyle: 'italic', fontFamily: "'DM Serif Display', serif" }}>signal</Box>.
        </Typography>

        <Button
          className="magnetic-btn"
          variant="contained"
          sx={{
            bgcolor: 'secondary.main',
            color: 'primary.main',
            fontSize: '1.5rem',
            py: 2,
            px: 6,
            borderRadius: '4rem',
            mb: 8,
            '&:hover': { bgcolor: 'secondary.light' } // Let GSAP handle scale
          }}
          href="mailto:ethayer.design@gmail.com"
        >
          Initiate Contact
        </Button>

        {/* Social Links */}
        <Stack direction="row" spacing={4} justifyContent="center">
          <IconButton href="mailto:ethayer.design@gmail.com" target="_blank"  sx={{ color: 'secondary.main', '&:hover': { color: 'accent.main', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}>
            <Email sx={{ fontSize: 32 }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/ethayerdesign/" target="_blank" sx={{ color: 'secondary.main', '&:hover': { color: 'accent.main', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}>
            <LinkedIn sx={{ fontSize: 32 }} />
          </IconButton>
          <IconButton href="https://codepen.io/collection/dbqbZz" target="_blank" sx={{ color: 'secondary.main', '&:hover': { color: 'accent.main', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}>
            <Code sx={{ fontSize: 32 }} />
          </IconButton>
          <IconButton href="https://github.com/ericthayer/" target="_blank" sx={{ color: 'secondary.main', '&:hover': { color: 'accent.main', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}>
            <GitHub sx={{ fontSize: 32 }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Footer pre-cursor element stitched to bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          bgcolor: 'secondary.main',
          color: 'primary.main',
          borderTopLeftRadius: '4rem',
          borderTopRightRadius: '4rem',
          py: 4,
          px: 8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: "'Space Mono', monospace" }}>
          © {new Date().getFullYear()} Eric Thayer.
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          <Typography variant="body2" sx={{ fontFamily: "'Space Mono', monospace" }}>
            System Active
          </Typography>
        </Stack>
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </Box>
    </Box>
  );
};
