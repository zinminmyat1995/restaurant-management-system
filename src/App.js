import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const LoginIndex = React.lazy(() => import("./views/login/LoginIndex"));
const Logout = React.lazy(() => import("./views/logout/LogoutIndex"));

const OrderSystem = React.lazy(() => import("./views/order-management/order-system/OrderSystemIndex"));

const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <LoginIndex {...props} />}
            />
             <Route
              exact
              path="/logout"
              name="Logout"
              render={(props) => <Logout {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
             <Route
              exact
              path="/cashier"
              name="Cashier"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/employee-management/employee-register"
              name="Employee Registration"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/employee-management/employee-list"
              name="Employee List"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/shop-management/shop-registration-and-list"
              name="Shop Registration And List"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/shop-management/table-and-seat-register"
              name="Table And Seat Register"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/shop-management/shop-and-menu-tablet-register"
              name="Shop And Menu Tablet Register"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/menu-management/menu-register"
              name="Menu Register"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/menu-management/menu-list"
              name="Menu List"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/material-management/material-register"
              name="Material Register"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/material-management/material-list"
              name="Material List"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/material-management/import-material-register"
              name="Import Material Register"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/material-management/import-material-list"
              name="Import Material List"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/order-system"
              name="Order System"
              render={(props) => <OrderSystem {...props} />}
            />

            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
