import { useLocation } from 'react-router-dom';
import { List, Grid } from '@mui/material';

import { MenuItem } from './MenuItem';
import { IMenuItem } from '../types';

export const MenuItemsList = ({ items = [] }: { items?: IMenuItem[] }) => {
  const { pathname } = useLocation();

  if (!items.length) return null;

  return (
    <Grid>
      <List sx={{ p: 0 }}>
        {items.map(({ literal, route, Icon }) => (
          <MenuItem
            Icon={Icon}
            literal={literal}
            route={route}
            key={route}
            selected={pathname === route}
          />
        ))}
      </List>
    </Grid>
  );
};
