import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fonts for Preset C: Brutalist Signal
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/dm-serif-display/400-italic.css';
import '@fontsource/space-mono/400.css';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
