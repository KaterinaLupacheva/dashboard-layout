import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import {
  DashboardPage,
  CustomersPage,
  OrdersPage,
  InventoryPage,
} from './pages';

import { ROUTES } from './constants';

export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.main} />} />
      <Route path={ROUTES.main} element={<DashboardPage />} />
      <Route path={ROUTES.orders} element={<OrdersPage />} />
      <Route path={ROUTES.customers} element={<CustomersPage />} />
      <Route path={ROUTES.inventory} element={<InventoryPage />} />
    </Routes>
  </Layout>
);
