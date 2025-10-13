import React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import type { ListProps } from '@mui/material/List';
import type { ListItemButtonProps } from '@mui/material';
import type { IconButtonProps } from '@mui/material/IconButton';

export interface NavListItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ComponentType;
  variant?: 'button' | 'icon';
  listItemButtonProps?: Partial<ListItemButtonProps>;
  iconButtonProps?: Partial<IconButtonProps>;
}

export interface NavListProps extends Omit<ListProps, 'children'> {
  items: NavListItem[];
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  target?: string;
  rel?: string;
  direction?: 'row' | 'column';
  variant?: 'button' | 'icon';
  sx?: SxProps<Theme>;
}

/**
 * NavList component that renders a mapped list of navigation items
 * Supports both text navigation (ListItemButton) and icon navigation (IconButton)
 * Follows the MUI List pattern with flexible item rendering
 */
export const NavList: React.FC<NavListProps> = ({
  items,
  color = 'inherit',
  target,
  rel,
  disablePadding = true,
  direction = 'row',
  variant = 'button',
  sx,
  ...listProps
}) => {
  return (
    <List
      disablePadding={disablePadding}
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap: 1,
        ...sx,
      }}
      {...listProps}
    >
      {items.map((item) => {
        const itemVariant = item.variant || variant;
        const IconComponent = item.icon;

        return (
          <ListItem
            key={item.id}
            disablePadding
          >
            {itemVariant === 'icon' && IconComponent ? (
              <IconButton
                component='a'
                color={color}
                href={item.href}
                target={target}
                rel={rel}
                title={item.title}
                {...item.iconButtonProps}
              >
                <IconComponent />
              </IconButton>
            ) : (
              <ListItemButton
                component='a'
                color={color}
                href={item.href}
                target={target}
                rel={rel}
                {...item.listItemButtonProps}
              >
                <ListItemText
                  primary={item.title}
                  sx={{ '> .MuiTypography-root': { fontSize: 'inherit' } }}
                />
              </ListItemButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavList;
