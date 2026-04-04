import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScrollContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let ctx = gsap.matchMedia();

      ctx.add("(min-width: 900px)", () => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;
        if (!container || !wrapper) return;

        const panels = gsap.utils.toArray(".horizontal-panel") as HTMLElement[];

        let scrollTween = gsap.to(wrapper, {
          x: () => -(wrapper.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1.5, // slightly more weighted scrub
            end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true, // Recalculate on resize
          },
        });

        // Animate child elements inside panels when they enter horizontally
        panels.forEach((panel, index) => {
          gsap.fromTo(
            panel.querySelectorAll(".horizontal-animate"),
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: "power3.out",
              ...(index === 0
                ? { delay: 0.1 }
                : {
                    scrollTrigger: {
                      trigger: panel,
                      containerAnimation: scrollTween,
                      start: "left 80%",
                      toggleActions: "play none none reverse",
                    },
                  }),
            },
          );
        });

        return () => {
          scrollTween.kill();
        };
      });

      ctx.add("(max-width: 899px)", () => {
        const panels = gsap.utils.toArray(".horizontal-panel") as HTMLElement[];
        panels.forEach((panel, index) => {
          gsap.fromTo(
            panel.querySelectorAll(".horizontal-animate"),
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: "power3.out",
              ...(index === 0
                ? { delay: 0.1 }
                : {
                    scrollTrigger: {
                      trigger: panel,
                      start: "top 80%",
                      toggleActions: "play none none reverse",
                    },
                  }),
            },
          );
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <Box ref={containerRef} sx={{ overflowX: "hidden", width: "100vw" }}>
      <Box
        id="horizontal-wrapper"
        ref={wrapperRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "nowrap",
          gap: { xs: 8, md: 16 }, // 3x the standard section padding to blend sections
          width: { xs: "100%", md: "max-content" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
