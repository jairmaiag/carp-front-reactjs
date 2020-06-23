import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Orcamento from "./components/Orcamento";
import Ordem from "./components/Ordem";
import Usuario from "./components/Usuario";
import Cliente from "./components/Cliente";
import Pessoa from "./components/Pessoa";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/orcamento" component={Orcamento} />
      <Route path="/ordem" component={Ordem} />
      <Route path="/usuario" component={Usuario} />
      <Route path="/cliente" component={Cliente} />
      <Route path="/pessoa" component={Pessoa} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
