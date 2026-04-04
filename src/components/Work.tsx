import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import gsap from "gsap";

export const Work: React.FC = () => {
  return (
    <Stack id="work" direction={"row"} gap={8}>
      <WorkCard1 />
      <WorkCard2 />
      <WorkCard3 />
    </Stack>
  );
};

const WorkCard1: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();
    ctx.add("(min-width: 1px)", () => {
      const shufflers = gsap.utils.toArray(
        ".shuffler-item",
        containerRef.current,
      );
      if (shufflers.length === 0) return;
      gsap.to(shufflers, {
        yPercent: -100,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box
      className="horizontal-panel"
      sx={{
        width: { xs: "100vw", md: "70vw" },
        height: "100dvh",
        p: { xs: 2, md: 8 },
        pt: { md: 16 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        className="horizontal-animate"
        sx={{
          width: "100%",
          height: "80%",
          p: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" sx={{ color: "text.primary" }}>
          Design Systems
        </Typography>
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            ref={containerRef}
            sx={{
              position: "relative",
              height: "120px",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <Box
              className="shuffler-item"
              sx={{
                position: "absolute",
                width: "100%",
                top: 0,
                "& > *": {
                  background: "#2E4036",
                  p: 2,
                  borderRadius: 4,
                  mb: 2,
                },
              }}
            >
              <Typography>Buttons / Inputs</Typography>
              <Typography>Typography Tokens</Typography>
            </Box>
            <Box
              className="shuffler-item"
              sx={{
                position: "absolute",
                width: "100%",
                top: "100%",
                "& > *": {
                  background: "#C9A84C",
                  color: "#000",
                  p: 2,
                  borderRadius: 4,
                  mb: 2,
                },
              }}
            >
              <Typography>Grid System</Typography>
              <Typography>Color Palette</Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

const WorkCard2: React.FC = () => {
  return (
    <Box
      className="horizontal-panel"
      sx={{
        width: { xs: "100vw", md: "70vw" },
        height: "100dvh",
        p: { xs: 2, md: 8 },
        pt: { md: 16 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        className="horizontal-animate"
        sx={{
          width: "100%",
          height: "80%",
          p: 6,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0A0A",
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, color: "text.primary" }}>
          Agentic Orchestration
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            fontFamily: '"JetBrains Mono", monospace',
            color: "primary.main",
            opacity: 0.8,
            fontSize: "0.85rem",
          }}
        >
          <Typography sx={{ fontFamily: "inherit" }}>
            {">"} npm info agents-config
          </Typography>
          <Typography sx={{ fontFamily: "inherit", mt: 1 }}>
            [System] Initializing Multi-Agent Flow...
          </Typography>
          <Typography sx={{ fontFamily: "inherit", mt: 1 }}>
            [Orchestrator] Task assigned to Worker Agent A
          </Typography>
          <Typography sx={{ fontFamily: "inherit", mt: 1 }}>
            [Worker A] Compiling AST trees...
          </Typography>
          <Typography sx={{ fontFamily: "inherit", mt: 1 }}>
            [Worker B] Validating execution paths...
          </Typography>
          <Typography sx={{ fontFamily: "inherit", mt: 1, color: "#22c55e" }}>
            [System] Success. All agents synced.
          </Typography>
          <Box
            sx={{
              width: 8,
              height: 16,
              bgcolor: "primary.main",
              mt: 2,
              animation: "blink 1s infinite",
            }}
          />
        </Box>
      </Paper>
      <style>{`@keyframes blink { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 1 } }`}</style>
    </Box>
  );
};

const WorkCard3: React.FC = () => {
  const cursorRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();
    ctx.add("(min-width: 1px)", () => {
      gsap.to(cursorRef.current, {
        x: 100,
        y: 50,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box
      className="horizontal-panel"
      sx={{
        width: { xs: "100vw", md: "70vw" },
        height: "100dvh",
        p: { xs: 2, md: 8 },
        pt: { md: 16 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        className="horizontal-animate"
        sx={{
          width: "100%",
          height: "80%",
          p: 6,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, color: "text.primary" }}>
          Frontend Development
        </Typography>
        <Box sx={{ flex: 1, position: "relative" }}>
          <Box
            sx={{
              width: "60%",
              height: "40px",
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              mb: 2,
            }}
          />
          <Box
            sx={{
              width: "80%",
              height: "100px",
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              mb: 2,
            }}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: "30%",
                height: "100px",
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                width: "30%",
                height: "100px",
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
              }}
            />
          </Box>
          <svg
            ref={cursorRef}
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              zIndex: 10,
              filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.5))",
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2L20 11.1111L11.1111 13.8889L8.44444 22L4 2Z"
              fill="#FAF8F5"
              stroke="#0D0D12"
              strokeWidth="1"
            />
          </svg>
        </Box>
      </Paper>
    </Box>
  );
};
