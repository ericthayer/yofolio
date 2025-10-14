import type { NavListItem } from '../components/List';

export const mainNavLinks: NavListItem[] = [
  {
    id: 'about',
    href: '#about',
    title: 'About',
    variant: 'button',
  },
  {
    id: 'experience',
    href: '#experience',
    title: 'Experience',
    variant: 'button',
  },
  {
    id: 'writing',
    href: '#writing',
    title: 'Writing',
    variant: 'button',
  },
  {
    id: 'contact',
    href: '#contact',
    title: 'Contact',
    variant: 'button',
  },
];

export const footerNavLinks: NavListItem[] = [
  {
    id: 'styleguide',
    href: '#styleguide',
    title: 'Styleguide',
    variant: 'button',
    onClick: () => { window.alert('Styleguide is under construction!') }
  },
];