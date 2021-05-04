import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Layouts

// Views
import Login from "@containers/views/auth/login";
import Forgot from "@containers/views/auth/forgot";

// COMPONENTS
import SwitchLanguage from "@components/commons/language";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <Router>
      {/* <SwitchLanguage /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forgot" exact component={Forgot} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
