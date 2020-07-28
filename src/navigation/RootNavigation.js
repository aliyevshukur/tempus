import React from "react";
import { Route, Switch } from "react-router-dom";

import { Calendar } from "../components/Calendar/Calendar";

export const RootNavigation = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Calendar} />
      </Switch>
    </>
  );
};
