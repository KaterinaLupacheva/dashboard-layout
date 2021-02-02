import { Redirect, Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route path="/" exact render={() => <Redirect to={ROUTES.main} />} />
        <Route exact path={ROUTES.main} component={DashboardPage} />
        <Route exact path={ROUTES.orders} component={OrdersPage} />
        <Route exact path={ROUTES.customers} component={CustomersPage} />
        <Route exact path={ROUTES.inventory} component={InventoryPage} />
      </Switch>
    </Layout>
  );
}

export default App;
