import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/home/home.component.js";

import RevenueController from "./revenue.controller.js";
import ImpresionsController from "./impresions.controller.js";
import VisitsController from "./visits.controller.js";

const Main = () => (
  <React.Fragment>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/revenue" component={RevenueController} />
        <Route path="/impresions" component={ImpresionsController} />
        <Route path="/visits" component={VisitsController} />
      </Switch>
    </main>
  </React.Fragment>
);

export default Main;
