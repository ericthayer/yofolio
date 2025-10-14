import { createContext, useContext } from 'react';
import type { ContainerProps } from '@mui/material/Container';

// Hero Context for sharing configuration across nested components
export interface HeroContextValue {
  id?: string;
  variant?: 'default' | 'centered' | 'fullscreen';
  spacing?: number;
  maxWidth?: ContainerProps['maxWidth'];
  className?: string;
}

export const HeroContext = createContext<HeroContextValue>({});

export const useHeroContext = () => useContext(HeroContext);
