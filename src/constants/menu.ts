import { DrawerItem } from '../ts';
import { ROUTES } from './routes';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const DRAWER_LIST: DrawerItem[] = [
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.orders,
    literal: 'Orders',
    Icon: ShoppingCartIcon,
  },
  {
    route: ROUTES.customers,
    literal: 'Customers',
    Icon: PeopleIcon,
  },
  {
    route: ROUTES.inventory,
    literal: 'Inventory',
    Icon: AttachMoneyIcon,
  },
];
