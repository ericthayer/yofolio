import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    if (window.innerWidth < 900) {
      // Normal vertical smooth scroll
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      // Because we use horizontal GSAP pin mapping 1px to 1px
      // target.offsetLeft precisely equals the vertical scroll needed
      gsap.to(window, {
        scrollTo: { y: target.offsetLeft, autoKill: false },
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        px: 3,
        py: 1.5,
        borderRadius: 32,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        backgroundColor: scrolled ? "rgba(13, 13, 18, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        border: scrolled
          ? "1px solid rgba(250, 248, 245, 0.1)"
          : "1px solid transparent",
        display: "flex",
        alignItems: "center",
        gap: { xs: 2, md: 6 },
        width: { xs: "90%", md: "90%" },
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        component="a"
        href="#hero"
        onClick={(e) => handleNavClick(e, "hero")}
        sx={{
          color: "text.primary",
          textDecoration: "none",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          cursor: "pointer"
        }}
      >
        Eric Thayer
      </Typography>

      <Stack
        direction="row"
        gap={{ xs: 4, md: 10 }}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {["Work", "Expertise", "Story"].map((item) => (
          <Typography
            key={item}
            variant="body2"
            component="a"
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, item.toLowerCase())}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "translateY(-1px)",
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Button
        variant="contained"
        color="primary"
        onClick={(e) => handleNavClick(e, "contact")}
        sx={{
          borderRadius: 32,
          px: 3,
          py: 1,
          color: "background.default",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "&:hover": {
            transform: "scale(1.03)",
            backgroundColor: "primary.light",
          },
        }}
      >
        Contact
      </Button>
    </Box>
  );
};
