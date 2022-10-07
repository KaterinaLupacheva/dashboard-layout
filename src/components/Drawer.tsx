import { useMediaQuery, useTheme, Drawer as MuiDrawer, styled } from '@mui/material';

import { useDrawerContext } from '../contexts/drawer-context';
import { MenuItemsList } from './MenuItemsList';

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'isOpened',
})<{ isOpened: boolean }>(({ isOpened, theme }) => ({
  width: isOpened ? 240 : theme.spacing(7),
  height: '100%',
  overflow: 'auto',
  transition: isOpened
    ? theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  '& .MuiDrawer-paper': {
    background: '#D8DCD6',
    position: 'static',
    overflowX: 'hidden'
  },
}));

export const Drawer = () => {
  const { isOpened, toggleIsOpened, menu } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledDrawer
      variant={isLargeScreen ? 'permanent' : 'temporary'}
      open={!isLargeScreen && isOpened ? true : false}
      onClose={() => toggleIsOpened(!isOpened)}
      isOpened={isOpened}
    >
      <MenuItemsList items={menu}/>
    </StyledDrawer>
  );
};
