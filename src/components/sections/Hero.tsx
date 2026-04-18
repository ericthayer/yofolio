import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-stagger',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100vw',
        height: '100dvh',
        flexShrink: 0,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1598126744033-01c5188f407b?q=80&w=3000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(1.2)', // Add brutalist contrast
          zIndex: 0,
        }}
      />
      {/* Primary-to-Black Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(232, 228, 221, 0.8) 0%, rgba(17, 17, 17, 0.9) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content Bottom-Left Third */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          p: { xs: 4, lg: 8 },
          pb: { xs: 8, lg: 12 },
          width: { xs: '100%', lg: '40%' },
        }}
      >
        <Typography
          className="hero-stagger"
          variant="h1"
          sx={{ color: 'secondary.main', mb: 0 }}
        >
          Eric Thayer
        </Typography>
        <Typography
          className="hero-stagger"
          variant="h3"
          sx={{
            color: 'background.default',
            display: 'block',
            mt: -1,
            ml: 2, 
          }}
        >
          Design Engineer <br />&amp; Systems Lead.
        </Typography>
      </Box>
    </Box>
  );
};
