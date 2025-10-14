# Hero Component Usage Guide

## Multi-Level Nested Hero Component with Context Pattern

The Hero component uses a compound component pattern with React Context to share configuration across nested components.

## Basic Usage

### Method 1: Compound Component Pattern
```tsx
import { Hero } from './components/Hero';

// In your component
<Hero variant="default" spacing={4}>
  <Hero.Container>
    <Hero.Content>
      <Hero.Text>
        <Hero.Headline>
          Your Main Headline
        </Hero.Headline>
        <Hero.Description>
          Your description text here
        </Hero.Description>
      </Hero.Text>
      <Hero.Actions>
        <Hero.Action color="primary">
          Primary Action
        </Hero.Action>
        <Hero.Action color="secondary">
          Secondary Action
        </Hero.Action>
      </Hero.Actions>
    </Hero.Content>
  </Hero.Container>
</Hero>
```

### Method 2: Individual Components
```tsx
import { 
  Hero, 
  HeroContainer, 
  HeroContent, 
  HeroText,
  HeroHeadline,
  HeroDescription,
  HeroActions,
  HeroAction 
} from './components/Hero';

// In your component
<Hero variant="fullscreen">
  <HeroContainer maxWidth="md">
    <HeroContent spacing={6}>
      <HeroText>
        <HeroHeadline variant="h2">
          Custom Headline
        </HeroHeadline>
        <HeroDescription component="div">
          <p>Custom description with HTML</p>
        </HeroDescription>
      </HeroText>
      <HeroActions gap={3}>
        <HeroAction 
          variant="outlined" 
          size="medium"
          onClick={() => console.log('clicked')}
        >
          Custom Action
        </HeroAction>
      </HeroActions>
    </HeroContent>
  </HeroContainer>
</Hero>
```

### Method 3: Use Default Implementation
```tsx
import { DefaultHero } from './components/Hero';

// In your component
<DefaultHero />
```

## Hero Component Props

### Hero (Root Provider)
- `variant?: 'default' | 'centered' | 'fullscreen'` - Layout variant
- `spacing?: number` - Default spacing for nested components
- `maxWidth?: ContainerProps['maxWidth']` - Default container max width
- `className?: string` - CSS class name
- All `StackProps` except `children` and `maxWidth`

### HeroContainer
- All `ContainerProps` - Inherits maxWidth from context if not provided

### HeroContent
- All `StackProps` - Inherits spacing from context if gap not provided

### HeroText
- All `StackProps` with `gap` defaulting to 1

### HeroHeadline
- All `TypographyProps` with `variant` defaulting to 'h1'

### HeroDescription
- All `TypographyProps` with `variant` defaulting to 'h5' and `component` to 'p'

### HeroActions
- All `StackProps` with responsive flex direction and gap defaulting to 2

### HeroAction
- All `ButtonProps` with `variant` defaulting to 'contained' and `size` to 'large'

## Context Usage

```tsx
import { useHeroContext } from './components/Hero';

const CustomHeroComponent = () => {
  const { variant, spacing, maxWidth, className } = useHeroContext();
  
  // Use context values in your custom component
  return <div>Current variant: {variant}</div>;
};
```

## Replacement Example in App.tsx

Replace your current hero section:

```tsx
// Before
<Stack className='billboard' gap={0} sx={{ justifyContent: 'center', flex: 1 }}>
  <Container className='billboard-container' maxWidth={false}>
    {/* ... hero content ... */}
  </Container>
</Stack>

// After
<Hero>
  <Hero.Container>
    <Hero.Content>
      <Hero.Text>
        <Hero.Headline>
          UX Engineer <Box component='small'>&amp;</Box>{' '}
          <Box component='br' sx={{ display: { xs: 'block', sm: 'none' } }} />
          Systems Lead
        </Hero.Headline>
        <Hero.Description>
          I'm a skilled&mdash;Creative Strategist, Product Designer, and
          Front-end Developer.{' '}
          <Box component='br' sx={{ display: { xs: 'none', md: 'block' } }} />
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
```

## Advanced Customization

```tsx
<Hero 
  variant="fullscreen" 
  spacing={6}
  maxWidth="lg"
  sx={{ 
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white'
  }}
>
  <Hero.Container 
    sx={{ 
      py: 'clamp(6rem, 8vw, 10rem)' 
    }}
  >
    <Hero.Content gap={8}>
      <Hero.Text gap={2}>
        <Hero.Headline 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' },
            textAlign: 'center'
          }}
        >
          Custom Styled Hero
        </Hero.Headline>
      </Hero.Text>
    </Hero.Content>
  </Hero.Container>
</Hero>
```