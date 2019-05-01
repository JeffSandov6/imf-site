import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import MetalRoofing from './pages/MetalRoofing/MetalRoofing';
import MetalBuilding from './pages/MetalBuilding/MetalBuilding';
import AboutUs from './pages/AboutUs/AboutUs';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/metalroofing" component={MetalRoofing} />
    <Route exact path="/metalbuilding" component={MetalBuilding} />
    <Route exact path="/aboutus" component={AboutUs} />
  </Switch>
);
