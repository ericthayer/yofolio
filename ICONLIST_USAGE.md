# IconList Component Usage

## Import the component and data
```tsx
import { IconList } from './components/List';
import { socialMediaLinks } from './data/socialLinks';
```

## Basic Usage
```tsx
{/* Replace your existing social media IconButtons with this: */}
<IconList items={socialMediaLinks} />
```

## Usage with custom props
```tsx
{/* With custom styling and props */}
<IconList 
  items={socialMediaLinks}
  color="primary"
  sx={{ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: 2 
  }}
/>
```

## Usage in Stack layout (like your current implementation)
```tsx
<Stack
  className='yo-list icons'
  direction='row'
  gap={2}
>
  <IconList 
    items={socialMediaLinks}
    disablePadding
  />
</Stack>
```

## Example replacement in your App.tsx footer:

Replace this:
```tsx
<Stack
  className='yo-list icons'
  direction='row'
  gap={2}
>
  <IconButton
    color='inherit'
    href='https://www.linkedin.com/in/ethayerdesign/'
    target='_blank'
    rel='noopener noreferrer'
    title='LinkedIn'
  >
    <LinkedInIcon />
  </IconButton>
  <IconButton
    color='inherit'
    href='https://github.com/ericthayer/'
    target='_blank'
    rel='noopener noreferrer'
    title='GitHub'
  >
    <GitHubIcon />
  </IconButton>
  {/* ... more IconButtons ... */}
</Stack>
```

With this:
```tsx
<Stack
  className='yo-list icons'
  direction='row'
  gap={2}
>
  <IconList 
    items={socialMediaLinks}
    sx={{ 
      display: 'flex', 
      flexDirection: 'row', 
      gap: 'inherit'
    }}
  />
</Stack>
```