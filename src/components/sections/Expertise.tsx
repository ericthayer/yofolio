import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import gsap from 'gsap';
import { useHorizontalScroll } from '../layout/HorizontalScrollContainer';

export const Expertise: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { containerAnimation } = useHorizontalScroll();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30, // Parallax down
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          containerAnimation: containerAnimation || undefined,
          start: 'left right', // when left of expertise hits right of viewport
          end: 'right left',
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [containerAnimation]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: { xs: '100vw', lg: '100vw' }, // Always full width of viewport
        height: '100dvh',
        flexShrink: 0,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'secondary.main', // Dark color
      }}
    >
      {/* Parallax Background */}
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          width: '100%',
          height: '140%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop)', // Concrete texture
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
          filter: 'grayscale(100%)',
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h5" 
          sx={{ color: 'primary.main', mb: 4, maxWidth: '800px', opacity: 0.8 }}
        >
          Standard Frontend Development is: component assembly and ticket clearing.
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ color: 'accent.main', maxWidth: '1000px', textTransform: 'none' }}
        >
          My approach is: orchestrating agentic workflows and building resilient design systems that scale logic across the stack.
        </Typography>
      </Container>
    </Box>
  );
};
