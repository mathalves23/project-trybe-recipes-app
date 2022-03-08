import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Drinks from './Pages/Drinks';
import Explore from './Pages/Explore';
import ExploreDrinks from './Pages/ExploreDrinks';
import ExploreDrinksIngredients from './Pages/ExploreDrinksIngredients';
import ExploreFoods from './Pages/ExploreFoods';
import ExploreFoodsIngredients from './Pages/ExploreFoodsIngredients';
import ExploreFoodsNationalities from './Pages/ExploreFoodsNationalities';
import Foods from './Pages/Foods';
import Profile from './Pages/Profile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
    <Route exact path="/drinks" component={ Drinks } />
    <Route exact path="/explore" component={ Explore } />
    <Route exact path="/explore/drinks" component={ ExploreDrinks } />
    <Route exact path="/explore/foods" component={ ExploreFoods } />
    <Route
      exact
      path="/explore/foods/nationalities"
      component={ ExploreFoodsNationalities }
    />
    <Route
      exact
      path="/explore/foods/ingredients"
      component={ ExploreFoodsIngredients }
    />
    <Route
      exact
      path="/explore/drinks/ingredients"
      component={ ExploreDrinksIngredients }
    />
    <Route exact path="/profile" component={ Profile } />
  </Switch>
);

// Source: https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=1

export default Routes;
