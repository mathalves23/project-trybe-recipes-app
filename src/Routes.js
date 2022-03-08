import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Foods from './Pages/Foods';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
  </Switch>
);

// Source: https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=1

export default Routes;
