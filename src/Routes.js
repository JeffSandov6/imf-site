import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import MetalRoofing from './pages/MetalRoofing/MetalRoofing';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/metalroofing" component={MetalRoofing} />
  </Switch>
);
