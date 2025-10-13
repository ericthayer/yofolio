import LinkedInIcon from '../assets/icons/icon-linkedin.svg?react';
import GitHubIcon from '../assets/icons/icon-github.svg?react';
import CodePenIcon from '../assets/icons/icon-codepen.svg?react';
import NotionIcon from '../assets/icons/icon-notion.svg?react';
import type { NavListItem } from '../components/List';

// New NavList format for icon navigation
export const socialNavLinks: NavListItem[] = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/ethayerdesign/',
    title: 'LinkedIn',
    icon: LinkedInIcon,
    variant: 'icon',
  },
  {
    id: 'github',
    href: 'https://github.com/ericthayer/',
    title: 'GitHub',
    icon: GitHubIcon,
    variant: 'icon',
  },
  {
    id: 'codepen',
    href: 'https://codepen.io/ericthayer/',
    title: 'CodePen',
    icon: CodePenIcon,
    variant: 'icon',
  },
  {
    id: 'notion',
    href: 'https://ethayer.notion.site/',
    title: 'Professional Timeline',
    icon: NotionIcon,
    variant: 'icon',
  },
];