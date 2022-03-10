import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import getFoods, { getRandomFood } from '../services/foodApi';
import { getDrinks, getRandomDrink } from '../services/drinkAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState('');
  const [drinks, setDrinks] = useState({});
  const [meals, setMeals] = useState({});
  const [route, setRoute] = useState('');
  const [allFoods, setAllFoods] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);
  const [randomFood, setRandomFood] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);

  async function getAllFoods() {
    const response = await getFoods();
    setAllFoods(response);
  }

  async function getAllDrinks() {
    const response = await getDrinks();
    setAllDrinks(response);
  }

  async function getFoodRandom() {
    const response = await getRandomFood();
    setRandomFood(response);
  }

  async function getDrinkRandom() {
    const response = await getRandomDrink();
    setRandomDrink(response);
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
    allFoods,
    getAllFoods,
    allDrinks,
    getAllDrinks,
    randomFood,
    getFoodRandom,
    randomDrink,
    getDrinkRandom,
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
