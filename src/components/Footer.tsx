import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#050508', // Deep dark
        borderTopLeftRadius: { xs: 32 },
        borderTopRightRadius: { xs: 32 },
        p: { xs: 4 },
        mt: 'auto',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &copy; {new Date().getFullYear()} Eric Thayer. All rights reserved.
        </Typography>

        <Stack direction="row" alignItems="center" gap={1.5}>
          <Box sx={{ position: 'relative', width: 8, height: 8 }}>
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#22c55e', borderRadius: '50%' }} />
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#22c55e', borderRadius: '50%', animation: 'ripple 2s infinite' }} />
          </Box>
          <Typography variant="body2" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary', fontSize: '0.75rem' }}>
            SYSTEM ACTIVE — LAST UPDATED {new Date().toISOString().split('T')[0]}
          </Typography>
        </Stack>
      </Stack>
      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </Box>
  );
};
