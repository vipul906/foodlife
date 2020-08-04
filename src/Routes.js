import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";

const Routes = () => (
  <Switch>
    <Route exact path="/" name="Dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;

