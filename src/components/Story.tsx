import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import gsap from 'gsap';

export const Story: React.FC = () => {
  return (
    <Stack id="story" direction={{ xs: "column", md: "row" }} gap={{ xs: 8, md: 16 }}>
      <StoryMilestone1 />
      <StoryMilestone2 />
      <StoryMilestone3 />
    </Stack>
  );
};

const StoryMilestone1: React.FC = () => {
  const motifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();
    ctx.add("(min-width: 1px)", () => {
      gsap.to(motifRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box className="horizontal-panel" sx={{ width: '100vw', height: '100dvh', p: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <Box className="horizontal-animate" sx={{ zIndex: 10, maxWidth: '600px' }}>
        <Typography variant="body2" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'primary.main', mb: 2 }}>2018</Typography>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>Denver Museum of Nature & Science</Typography>
        <Typography variant="h2" sx={{ color: 'text.secondary', mb: 4, fontSize: '2rem' }}>Frontend Development</Typography>
        <Stack direction="row" gap={2}>
          <Link href="https://dmns.netlify.app/" target="_blank" color="primary" underline="hover">View Site</Link>
          <Link href="https://dmns.netlify.app/pattern-library" target="_blank" color="primary" underline="hover">Pattern Library</Link>
        </Stack>
      </Box>
      <Box ref={motifRef} sx={{ position: 'absolute', right: '-10%', top: '10%', opacity: 0.1, pointerEvents: 'none' }}>
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#FAF8F5" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M50 0L50 100M0 50L100 50M15 15L85 85M15 85L85 15" stroke="#FAF8F5" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="#FAF8F5" strokeWidth="0.5" />
        </svg>
      </Box>
    </Box>
  );
};

const StoryMilestone2: React.FC = () => {
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();
    ctx.add("(min-width: 1px)", () => {
      gsap.to(laserRef.current, {
        yPercent: 1000,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'power1.inOut'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box className="horizontal-panel" sx={{ width: '100vw', height: '100dvh', p: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <Box className="horizontal-animate" sx={{ zIndex: 10, maxWidth: '600px' }}>
        <Typography variant="body2" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'primary.main', mb: 2 }}>2023</Typography>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>Health Scholars</Typography>
        <Typography variant="h2" sx={{ color: 'text.secondary', mb: 4, fontSize: '2rem' }}>Workbench</Typography>
        <Link href="https://ethayer.notion.site/2022-8f060b7375a34abdb9f23fce904f4522#ce520d46564348b99a37f794769649be" target="_blank" color="primary" underline="hover">Read Case Study</Link>
      </Box>
      <Box sx={{ position: 'absolute', right: '10%', top: '20%', bottom: '20%', width: '300px', border: '1px solid rgba(250,248,245,0.1)', borderRadius: 2, overflow: 'hidden', display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 40%, rgba(201,168,76,0.1) 50%, transparent 60%)', backgroundSize: '100% 200%' }} />
        <Box ref={laserRef} sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', bgcolor: 'primary.main', boxShadow: '0 0 10px #C9A84C' }} />
      </Box>
    </Box>
  );
};

const StoryMilestone3: React.FC = () => {
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();
    ctx.add("(min-width: 1px)", () => {
      gsap.to(pulseRef.current, {
        scale: 1.5,
        opacity: 0,
        repeat: -1,
        duration: 1.5,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box className="horizontal-panel" sx={{ width: '100vw', height: '100dvh', p: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <Box className="horizontal-animate" sx={{ zIndex: 10, maxWidth: '600px' }}>
        <Typography variant="body2" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'primary.main', mb: 2 }}>2025</Typography>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>NPM Package</Typography>
        <Typography variant="h2" sx={{ color: 'text.secondary', mb: 4, fontSize: '2rem' }}>AI Agent Config</Typography>
        <Link href="https://www.npmjs.com/package/agents-config" target="_blank" color="primary" underline="hover">View on NPM</Link>
      </Box>
      <Box sx={{ position: 'absolute', right: '20%', top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ position: 'relative', width: 40, height: 40 }}>
          <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'primary.main', borderRadius: '50%' }} />
          <Box ref={pulseRef} sx={{ position: 'absolute', inset: 0, bgcolor: 'primary.main', borderRadius: '50%' }} />
        </Box>
      </Box>
    </Box>
  );
};
