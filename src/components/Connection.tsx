import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { ArrowRight } from 'lucide-react';
import { Footer } from './Footer';

export const Connection: React.FC = () => {
  return (
    <Box
      id="contact"
      className="horizontal-panel"
      sx={{
        width: '100vw',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: { xs: 4, md: 8 } }}>
        <Stack className="horizontal-animate" gap={6} sx={{ maxWidth: '800px', margin: { xs: '0 auto', md: '6rem auto 0' }, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 1.1,
              color: 'text.primary'
            }}
          >
            Let's build something <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>exceptional</Box>.
          </Typography>

          <Box>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              href="mailto:ethayer.design@gmail.com"
              sx={{
                py: 2,
                px: { xs: 4, md: 8 },
                fontSize: '1.25rem',
                color: 'background.default',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '&:hover': {
                  transform: 'scale(1.03)',
                  backgroundColor: 'primary.light',
                }
              }}
            >
              Start a Conversation
            </Button>
          </Box>

          <Stack direction="row" gap={4} justifyContent="center" sx={{ mt: 2 }}>
            <Link href="https://www.linkedin.com/in/ethayerdesign/" target="_blank" color="text.secondary" underline="hover">LinkedIn</Link>
            <Link href="https://codepen.io/collection/dbqbZz" target="_blank" color="text.secondary" underline="hover">Codepen</Link>
            <Link href="https://github.com/ericthayer/" target="_blank" color="text.secondary" underline="hover">GitHub</Link>
          </Stack>
        </Stack>
      </Box>

      <Footer />
    </Box>
  );
};
