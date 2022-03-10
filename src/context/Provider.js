import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { getDrinks, fetchDrinksCategory } from '../services/drinkAPI';
import { fetchFoodsCategory, getFoods } from '../services/foodApi';

const Provider = ({ children }) => {
  const [data, setData] = useState('');
  const [drinks, setDrinks] = useState({});
  const [meals, setMeals] = useState({});
  const [route, setRoute] = useState('');
  const [allFoods, setAllFoods] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);
  const [storeFoodCategory, setstoreFoodCategory] = useState([]);
  const [storeDrinkCategory, setstoreDrinkCategory] = useState([]);

  async function getAllFoods() {
    const response = await getFoods();
    setAllFoods(response);
  }

  async function getAllDrinks() {
    const response = await getDrinks();
    setAllDrinks(response);
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
    storeFoodCategory,
    getFoodsCategory,
    storeDrinkCategory,
    getDrinksCategory,
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
