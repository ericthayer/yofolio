import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import gsap from 'gsap';
import { useHorizontalScroll } from '../layout/HorizontalScrollContainer';
import { MousePointer2 } from 'lucide-react';

const CardBase: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <Box
    className={className}
    sx={{
      width: { xs: '100%', md: '400px', lg: '450px' },
      height: '600px',
      bgcolor: 'background.paper',
      borderRadius: '2rem',
      border: '1px solid',
      borderColor: 'rgba(0,0,0,0.05)',
      boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Box>
);

const ProjectShuffler: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Simulate cycling logic
      gsap.to('.shuffler-item', {
        yPercent: -100,
        ease: 'back.inOut(1.7)',
        stagger: 2,
        repeat: -1,
        repeatDelay: 2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <CardBase className="work-card">
      <Box sx={{ p: 4, bgcolor: 'secondary.main', color: 'background.default' }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Design Systems</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>Artifact 01 — Token Engine</Typography>
      </Box>
      <Box ref={containerRef} sx={{ position: 'relative', flex: 1, overflow: 'hidden', bgcolor: '#F5F5F5' }}>
        {['Tokens', 'Components', 'Patterns'].map((item, i) => (
          <Box
            key={item}
            className="shuffler-item"
            sx={{
              position: 'absolute',
              top: i * 100 + '%',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 700,
              fontFamily: "'Space Grotesk'",
              color: 'secondary.main',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </CardBase>
  );
};

const LogStreamer: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const baseLogs = [
    '> initializing agents-config',
    '> fetching orchestrator context...',
    '[OK] context parsed (32ms)',
    '> registering sub-agents:',
    '  - DeveloperAgent [ready]',
    '  - ReviewerAgent [ready]',
    '> dispatching task batch #9042',
    '[OK] stream active.',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, baseLogs[index]];
        if (next.length > 6) next.shift(); // keep it clean
        return next;
      });
      index = (index + 1) % baseLogs.length;
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <CardBase className="work-card">
      <Box sx={{ p: 4, bgcolor: 'accent.main', color: 'background.default' }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Agentic Orchestration</Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>Artifact 02 — Log Streamer</Typography>
      </Box>
      <Box sx={{ p: 4, flex: 1, bgcolor: 'secondary.main', color: 'primary.main', fontFamily: "'Space Mono', monospace" }}>
        {logs.map((log, i) => (
          <Typography key={i} variant="body2" sx={{ mb: 1, opacity: i === logs.length - 1 ? 1 : 0.6 }}>
            {log}
          </Typography>
        ))}
        <Typography variant="body2" className="blinking-cursor" sx={{ 
          display: 'inline-block',
          animation: 'blink 1s step-end infinite', 
          '@keyframes blink': { '50%': { opacity: 0 } }
        }}>_</Typography>
      </Box>
    </CardBase>
  );
};

const InteractiveUI: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to('.sim-cursor', {
        x: 120,
        y: 80,
        duration: 1.5,
        ease: 'power2.inOut',
      })
      .to('.sim-button', {
        scale: 0.95,
        duration: 0.2,
      })
      .to('.sim-button', {
        scale: 1,
        duration: 0.2,
      })
      .to('.sim-cursor', {
        x: -50,
        y: 150,
        duration: 2,
        ease: 'power3.inOut',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <CardBase className="work-card">
      <Box sx={{ p: 4, bgcolor: 'secondary.main', color: 'background.default' }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Frontend Development</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>Artifact 03 — Prototyping UI</Typography>
      </Box>
      <Box ref={containerRef} sx={{ position: 'relative', flex: 1, p: 4, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '80%', height: '24px', bgcolor: 'rgba(0,0,0,0.1)', borderRadius: 2 }} />
        <Box sx={{ width: '60%', height: '24px', bgcolor: 'rgba(0,0,0,0.1)', borderRadius: 2 }} />
        <Box className="sim-button" sx={{ mt: 2, px: 4, py: 1.5, bgcolor: 'accent.main', color: 'white', borderRadius: 4, fontWeight: 'bold' }}>
          Simulate Click
        </Box>
        <Box className="sim-cursor" sx={{ position: 'absolute', top: '20%', left: '30%', zIndex: 10 }}>
          <MousePointer2 size={32} fill="black" stroke="white" />
        </Box>
      </Box>
    </CardBase>
  );
}

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { containerAnimation } = useHorizontalScroll();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.work-card', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            containerAnimation: containerAnimation || undefined,
            start: 'left center',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [containerAnimation]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: { xs: '100vw', lg: 'max-content' },
        minHeight: '100dvh',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        pl: { xs: 4, lg: 16 },
        pr: { xs: 4, lg: 16 },
        py: { xs: 12, lg: 0 },
        bgcolor: 'background.default',
      }}
    >
      <Stack 
        direction={{ xs: 'column', lg: 'row' }} 
        spacing={8}
        alignItems="center"
      >
        {/* Intro text */}
        <Box sx={{ width: { xs: '100%', lg: '300px' }, mb: { xs: 4, lg: 0 } }}>
          <Typography variant="h2" sx={{ color: 'secondary.main', mb: 2 }}>Work.</Typography>
          <Typography variant="body1">
            Functional artifacts built with brutalist efficiency. No distractions. Pure logic.
          </Typography>
        </Box>
        
        <ProjectShuffler />
        <LogStreamer />
        <InteractiveUI />
      </Stack>
    </Box>
  );
};
