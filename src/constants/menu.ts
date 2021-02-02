import { DrawerItem } from '../ts';
import { ROUTES } from './routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
