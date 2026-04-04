import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      className="horizontal-panel"
      sx={{
        width: "100vw",
        height: "100dvh",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top right, rgba(13, 13, 18, 1) 0%, rgba(13, 13, 18, 0.4) 50%, rgba(13, 13, 18, 0.1) 100%)",
        }}
      />
      <Stack
        className="horizontal-animate"
        sx={{
          position: "relative",
          zIndex: 10,
          p: { xs: 4, md: 8, lg: 12 },
          maxWidth: "40vw",
          minWidth: { xs: "100%", md: "800px" },
        }}
      >
        <Typography
          variant="h1"
          className="horizontal-animate"
          sx={{
            color: "text.primary",
            whiteSpace: "nowrap",
          }}
        >
          Eric Thayer
        </Typography>
        <Typography
          variant="h1"
          className="horizontal-animate"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(2rem, 8vw, 6rem)",
            color: "primary.main",
            mt: -2,
          }}
        >
          Design Engineer & <br />
          Systems Lead.
        </Typography>
      </Stack>
    </Box>
  );
};
