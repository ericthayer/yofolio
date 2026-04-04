import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const Expertise: React.FC = () => {
  return (
    <Box
      id="expertise"
      className="horizontal-panel"
      sx={{
        width: "100vw",
        height: "100dvh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          mixBlendMode: "screen",
          "&::before, &::after": {
            content: `''`,
            background:
              "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%)",
            position: "absolute",
            height: "100%",
            width: "20rem",
          },
          "&::before": {
            left: 0,
          },
          "&::after": {
            transform: "rotate(180deg)",
            right: 0,
          },
        }}
      />
      <Stack
        className="horizontal-animate"
        sx={{
          position: "relative",
          zIndex: 5,
          p: { xs: 4, md: 8 },
          px: { md: 24 },
          maxWidth: "1200px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 2, fontSize: "1.25rem" }}
        >
          Standard engineering is: building to spec.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.1,
          }}
        >
          My approach is: architecting intelligent systems that scale and
          endure.
        </Typography>
      </Stack>
    </Box>
  );
};
