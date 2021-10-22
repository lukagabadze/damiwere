import React, { ReactElement } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth(): ReactElement | null {
  return (
    <Switch>
      <Route path="*/login">
        <Login />
      </Route>
      <Route path="*/signup">
        <Signup />
      </Route>
    </Switch>
  );
}
