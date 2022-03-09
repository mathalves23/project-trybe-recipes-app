import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import getFoods from '../services/foodApi';
import { getDrinks } from '../services/drinkAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState('');
  const [drinks, setDrinks] = useState({});
  const [meals, setMeals] = useState({});
  const [route, setRoute] = useState('');
  const [allFoods, setAllFoods] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);

  async function getAllFoods() {
    const response = await getFoods();
    setAllFoods(response);
  }

  async function getAllDrinks() {
    const response = await getDrinks();
    setAllDrinks(response);
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
