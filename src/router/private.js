import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Layouts
// import Main from "@containers/layouts/Auth";
import PrivateLayout from "@containers/layouts/private.layout";

// Views

import Home from "@containers/views/home";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <Router>
      <PrivateLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </PrivateLayout>
    </Router>
  );
};
