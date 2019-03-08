import React, { Component } from "react";

// Routes
import { Login, Signup } from "./pages/auth";
import { Switch, Route } from "react-router-dom";
import { Home, Orders, Checkout } from "./pages";

// Components
import Navbar from "./components/Navbar";

const isAuthenticated = () =>
  localStorage.getItem("byarent-token") ? true : false;

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
        <Navbar isAuthenticated={isAuthenticated} />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              name={route.name}
              path={route.path}
              render={({ history }) => (
                <route.component
                  history={history}
                  isAuthenticated={isAuthenticated}
                />
              )}
              exact={route.exact}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
