import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { getDrinks,
  fetchDrinksCategory,
  getRandomDrink,
  getIngredientsDrink } from '../services/drinkAPI';

import { fetchFoodsCategory,
  getFoods,
  getIngredientsFood,
  getRandomFood } from '../services/foodApi';

const Provider = ({ children }) => {
  const [data, setData] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [route, setRoute] = useState('');
  const [storeFoodCategory, setstoreFoodCategory] = useState([]);
  const [storeDrinkCategory, setstoreDrinkCategory] = useState([]);
  const [ingredientsFood, setIngredientsFood] = useState([]);
  const [ingredientsDrink, setIngredientsDrink] = useState([]);

  async function getAllFoods() {
    const response = await getFoods();
    setMeals(response);
  }

  async function getAllDrinks() {
    const response = await getDrinks();
    setDrinks(response);
  }

  async function getFoodsCategory() {
    const response = await fetchFoodsCategory();
    setstoreFoodCategory(response);
  }

  async function getDrinksCategory() {
    const response = await fetchDrinksCategory();
    setstoreDrinkCategory(response);
    console.log(response);
  }
  async function getFoodRandom() {
    const response = await getRandomFood();
    setMeals(response);
  }

  async function getDrinkRandom() {
    const response = await getRandomDrink();
    setDrinks(response);
  }

  async function getFoodIngredient() {
    const response = await getIngredientsFood();
    setIngredientsFood(response);
  }

  async function getDrinkIngredient() {
    const response = await getIngredientsDrink();
    setIngredientsDrink(response);
  }

  const context = {
    data,
    setData,
    drinks,
    setDrinks,
    meals,
    setMeals,
    route,
    setRoute,
    getAllFoods,
    getAllDrinks,
    storeFoodCategory,
    getFoodsCategory,
    storeDrinkCategory,
    getDrinksCategory,
    getFoodRandom,
    getDrinkRandom,
    getFoodIngredient,
    ingredientsFood,
    ingredientsDrink,
    getDrinkIngredient,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
