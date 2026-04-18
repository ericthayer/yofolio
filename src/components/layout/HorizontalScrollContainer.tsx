import React, { createContext, useContext, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery, useTheme } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollContextType {
  containerAnimation: gsap.core.Tween | null;
}

const HorizontalScrollContext = createContext<HorizontalScrollContextType>({
  containerAnimation: null,
});

export const useHorizontalScroll = () => useContext(HorizontalScrollContext);

export const HorizontalScrollContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // >= 1000px
  const [scrollTween, setScrollTween] = useState<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (isDesktop && containerRef.current && wrapperRef.current) {
        // Horizontal pinning magic
        const scrollWidth = wrapperRef.current.scrollWidth;
        const innerWidth = window.innerWidth;
        
        const tween = gsap.to(wrapperRef.current, {
          x: () => -(scrollWidth - innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1, // Add slight smoothing
            end: () => '+=' + scrollWidth,
            invalidateOnRefresh: true,
          },
        });
        
        setScrollTween(tween);
      } else {
        setScrollTween(null);
      }
    });

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <HorizontalScrollContext.Provider value={{ containerAnimation: scrollTween }}>
      <div 
        ref={containerRef} 
        style={{ 
          overflow: isDesktop ? 'hidden' : 'visible', 
          width: '100%',
        }}
      >
        <div 
          ref={wrapperRef} 
          style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column',
            width: isDesktop ? 'max-content' : '100%',
            height: isDesktop ? '100dvh' : 'auto',
          }}
        >
          {children}
        </div>
      </div>
    </HorizontalScrollContext.Provider>
  );
};
