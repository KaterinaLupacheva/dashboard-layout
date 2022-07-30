import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout";
import {
  DashboardPage,
  CustomersPage,
  OrdersPage,
  InventoryPage,
} from "./pages";

function App() {
  return (
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
}

export default App;
