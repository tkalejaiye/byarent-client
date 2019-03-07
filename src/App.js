import React, { Component } from "react";
import { Login, Signup } from "./pages/auth";
import { Switch, Route } from "react-router-dom";
import { Home, Orders, Checkout } from "./pages";

const routes = [
  { name: "home", exact: true, path: "/", component: Home },
  { name: "login", path: "/login", component: Login },
  { name: "signup", path: "/signup", component: Signup },
  { name: "orders", path: "/orders", component: Orders },
  { name: "checkout", path: "/checkout", component: Checkout }
];

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              name={route.name}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
