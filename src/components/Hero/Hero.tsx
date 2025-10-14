import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { StackProps } from '@mui/material/Stack';
import type { ContainerProps } from '@mui/material/Container';
import type { TypographyProps } from '@mui/material/Typography';
import type { ButtonProps } from '@mui/material/Button';
import {
  HeroContext,
  useHeroContext,
  type HeroContextValue,
} from './HeroContext';

// Hero Provider Component
export interface HeroProps extends Omit<StackProps, 'children' | 'maxWidth'> {
  id?: string;
  children: React.ReactNode;
  variant?: 'default' | 'centered' | 'fullscreen';
  spacing?: number;
  maxWidth?: ContainerProps['maxWidth'];
  className?: string;
}

const HeroComponent: React.FC<HeroProps> = ({
  id,
  children,
  variant = 'default',
  spacing = 4,
  maxWidth = false,
  className = 'billboard',
  sx,
  ...stackProps
}) => {
  const contextValue: HeroContextValue = {
    id,
    variant,
    spacing,
    maxWidth,
    className,
  };

  return (
    <HeroContext.Provider value={contextValue}>
      <Stack
        id={id}
        component='section'
        className={className}
        gap={0}
        sx={{
          justifyContent: 'center',
          flex: 1,
          minHeight: variant === 'fullscreen' ? 'calc(100vh - 64px)' : 'auto',
          ...sx,
        }}
        {...stackProps}
      >
        {children}
      </Stack>
    </HeroContext.Provider>
  );
};

// Define compound component interface
interface HeroCompoundComponent extends React.FC<HeroProps> {
  Container: typeof HeroContainer;
  Content: typeof HeroContent;
  Text: typeof HeroText;
  Headline: typeof HeroHeadline;
  Description: typeof HeroDescription;
  Actions: typeof HeroActions;
  Action: typeof HeroAction;
}

export const Hero = HeroComponent as HeroCompoundComponent;

// Hero Container Component
export interface HeroContainerProps extends Omit<ContainerProps, 'children'> {
  children: React.ReactNode;
}

export const HeroContainer: React.FC<HeroContainerProps> = ({
  children,
  maxWidth,
  className,
  sx,
  ...containerProps
}) => {
  const { maxWidth: contextMaxWidth, className: contextClassName } =
    useHeroContext();

  return (
    <Container
      className={className || `${contextClassName}-container`}
      maxWidth={maxWidth || contextMaxWidth}
      sx={{
        containerType: 'inline-size',
        py: 'clamp(4rem, 4vw, 7rem)',
        px: { xs: 4, md: 6 },
        ...sx,
      }}
      {...containerProps}
    >
      {children}
    </Container>
  );
};

// Hero Content Component
export interface HeroContentProps extends Omit<StackProps, 'children'> {
  children: React.ReactNode;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  children,
  gap,
  sx,
  ...stackProps
}) => {
  const { spacing } = useHeroContext();

  return (
    <Stack
      gap={gap || spacing}
      sx={sx}
      {...stackProps}
    >
      {children}
    </Stack>
  );
};

// Hero Text Section Component
export interface HeroTextProps extends Omit<StackProps, 'children'> {
  children: React.ReactNode;
}

export const HeroText: React.FC<HeroTextProps> = ({
  children,
  gap = 1,
  sx,
  ...stackProps
}) => {
  return (
    <Stack
      gap={gap}
      sx={sx}
      {...stackProps}
    >
      {children}
    </Stack>
  );
};

// Hero Headline Component
export interface HeroHeadlineProps extends Omit<TypographyProps, 'children'> {
  children: React.ReactNode;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  children,
  variant = 'h1',
  className = 'billboard-headline',
  ...typographyProps
}) => {
  return (
    <Typography
      className={className}
      variant={variant}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};

// Hero Description Component
export interface HeroDescriptionProps
  extends Omit<TypographyProps, 'children'> {
  children: React.ReactNode;
}

export const HeroDescription: React.FC<HeroDescriptionProps> = ({
  children,
  variant = 'h5',
  component = 'p',
  className = 'billboard-description',
  ...typographyProps
}) => {
  return (
    <Typography
      className={className}
      variant={variant}
      component={component}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};

// Hero Actions Component
export interface HeroActionsProps extends Omit<StackProps, 'children'> {
  children: React.ReactNode;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  children,
  gap = 2,
  className = 'billboard-actions',
  sx,
  ...stackProps
}) => {
  return (
    <Stack
      className={className}
      gap={gap}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        ...sx,
      }}
      {...stackProps}
    >
      {children}
    </Stack>
  );
};

// Hero Action Button Component
export interface HeroActionProps extends ButtonProps {
  children: React.ReactNode;
}

export const HeroAction: React.FC<HeroActionProps> = ({
  children,
  variant = 'contained',
  size = 'large',
  ...buttonProps
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

// Compound Component Export
Hero.Container = HeroContainer;
Hero.Content = HeroContent;
Hero.Text = HeroText;
Hero.Headline = HeroHeadline;
Hero.Description = HeroDescription;
Hero.Actions = HeroActions;
Hero.Action = HeroAction;

// Default Hero Implementation (matches your current structure)
export const DefaultHero: React.FC<{
  id: string;
  variant?: 'default' | 'centered' | 'fullscreen';
}> = ({ id, variant }) => {
  return (
    <Hero
      id={id}
      variant={variant}
      sx={{
        minHeight:
          variant === 'fullscreen' ? 'calc(100vh - (64px + 48px))' : 'auto',
      }}
    >
      <Hero.Container>
        <Hero.Content>
          <Hero.Text>
            <Hero.Headline>
              UX Engineer <Box component='small'>&amp;</Box>{' '}
              <Box
                component='br'
                sx={{ display: { xs: 'block', sm: 'none' } }}
              />
              Systems Lead
            </Hero.Headline>
            <Hero.Description>
              I'm a skilled&mdash;Creative Strategist, Product Designer, and
              Front-end Developer.{' '}
              <Box
                component='br'
                sx={{ display: { xs: 'none', md: 'block' } }}
              />
              Please let me know how I can help your team or project succeed.
            </Hero.Description>
          </Hero.Text>
          <Hero.Actions>
            <Hero.Action color='primary'>Work Experience</Hero.Action>
            <Hero.Action color='secondary'>View Resume</Hero.Action>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Container>
    </Hero>
  );
};

export default Hero;
