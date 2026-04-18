import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import { useHorizontalScroll } from '../layout/HorizontalScrollContainer';
import { Cpu, Scan, Waves } from 'lucide-react';

const milestones = [
  {
    year: '2018',
    title: 'Denver Museum of Nature & Science',
    desc: 'Frontend Development. Building interactive educational interfaces.',
    Icon: Cpu,
  },
  {
    year: '2023',
    title: 'Health Scholars Workbench',
    desc: 'Engineering comprehensive VR simulation management systems.',
    Icon: Scan,
  },
  {
    year: '2025',
    title: 'AI Agent Config',
    desc: 'NPM Package. Orchestrating stateful agents for complex dev tasks.',
    Icon: Waves,
  },
];

export const Story: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { containerAnimation } = useHorizontalScroll();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Rotating technical motif
      gsap.to('.motif-0', {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: 'linear',
      });

      // 2. Scanning laser
      gsap.to('.motif-1', {
        y: 100,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'power1.inOut',
      });

      // 3. Pulsing waveform
      gsap.to('.motif-2', {
        scale: 1.5,
        opacity: 0,
        repeat: -1,
        duration: 2,
        ease: 'power3.out',
      });

      const cards = gsap.utils.toArray('.story-card');
      
      // Animate stacking
      cards.forEach((card: any, index) => {
        if (index === 0) return; // First card is already visible
        
        const previousCard = cards[index - 1] as HTMLElement;

        // Timeline for each card entrance
        gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            containerAnimation: containerAnimation || undefined,
            start: `${(index - 1) * 100}vw center`,
            end: `${index * 100}vw center`,
            scrub: true,
          }
        })
        .fromTo(card,
          { xPercent: 100 },
          { xPercent: 0, ease: 'none' }
        )
        // Blur and scale previous
        .to(previousCard, {
          scale: 0.9,
          filter: 'blur(10px)',
          opacity: 0.5,
          ease: 'none',
        }, 0);
      });

    }, sectionRef);
    return () => ctx.revert();
  }, [containerAnimation]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: { xs: '100vw', lg: '300vw' },
        height: '100dvh',
        flexShrink: 0,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        bgcolor: 'background.paper',
        position: 'relative',
      }}
    >
      {/* On mobile, normally stack. On desktop, sticky wrapper */}
      <Box
        ref={triggerRef}
        sx={{
          position: { xs: 'relative', lg: 'sticky' },
          left: 0,
          width: '100vw',
          height: '100dvh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' }, // Stack vertically on mobile
        }}
      >
        {milestones.map((ms, i) => (
          <Box
            key={ms.year}
            className="story-card"
            sx={{
              position: { xs: 'relative', lg: 'absolute' },
              top: 0,
              left: 0,
              width: '100vw',
              height: '100dvh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.paper',
              p: { xs: 4, lg: 8 },
              zIndex: i,
              borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
            }}
          >
            <Box sx={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>
              {/* Motif Graphic */}
              <Box 
                className={`motif-${i}`}
                sx={{ 
                  width: '200px', 
                  height: '200px', 
                  bgcolor: 'secondary.main', 
                  color: 'primary.main',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%',
                }}
              >
                <ms.Icon size={64} />
              </Box>

              {/* Text Content */}
              <Box>
                <Typography variant="body2" sx={{ color: 'accent.main', fontSize: '1.5rem', mb: 2 }}>{ms.year}</Typography>
                <Typography variant="h2" sx={{ color: 'secondary.main', mb: 2 }}>{ms.title}</Typography>
                <Typography variant="h4" sx={{ color: 'secondary.main', opacity: 0.8 }}>{ms.desc}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
