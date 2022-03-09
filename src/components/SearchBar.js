import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';
import getCocktailsByIngredient,
{ getCocktailsByFirstLetter,
  getCocktailsByName,
} from '../services/drinkAPI';
import {
  getMealsByFirstLetter,
  getMealsByIngredient,
  getMealsByName,
} from '../services/foodApi';

function SearchBar() {
  const history = useHistory();
  const { route, setDrinks, setMeals } = useContext(MyContext);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleClickRadio = ({ target }) => {
    setSearchType(target.value);
  };

  const handleRedirectMeals = ({ meals }) => {
    if (meals.length === 1) {
      history.push(`/foods/${meals[0].idMeal}`);
    }
  };

  const handleRedirectDrinks = ({ drinks }) => {
    if (drinks.length === 1) {
      history.push(`/drinks/${drinks[0].idDrink}`);
    }
  };

  const handleSetMeals = async () => {
    let data;
    switch (searchType) {
    case 'ingredientSearch':
      data = await getMealsByIngredient(searchInput);
      setMeals(data);
      handleRedirectMeals(data);
      break;

    case 'nameSearch':
      data = await getMealsByName(searchInput);
      setMeals(data);
      handleRedirectMeals(data);
      break;

    case 'firstLetterSearch':
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        break;
      } else {
        data = await getMealsByFirstLetter(searchInput);
        setMeals(data);
        handleRedirectMeals(data);
      }
      break;

    default:
      break;
    }
  };

  const handleSetDrinks = async () => {
    let data;
    switch (searchType) {
    case 'ingredientSearch':
      data = await getCocktailsByIngredient(searchInput);
      setDrinks(data);
      handleRedirectDrinks(data);
      break;

    case 'nameSearch':
      data = await getCocktailsByName(searchInput);
      setDrinks(data);
      handleRedirectDrinks(data);
      break;

    case 'firstLetterSearch':
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        break;
      } else {
        data = await getCocktailsByFirstLetter(searchInput);
        setDrinks(data);
        handleRedirectDrinks(data);
      }
      break;

    default:
      break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (route) {
    case 'Foods':
      handleSetMeals();
      break;
    case 'Drinks':
      handleSetDrinks();
      break;
    default:
      break;
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        data-testid="search-input"
        name="search-input"
        value={ searchInput }
        onChange={ ({ target }) => setSearchInput(target.value) }
        placeholder="Search Recipe"
      />

      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
          value="ingredientSearch"
          onClick={ handleClickRadio }
        />
        Ingredient
      </label>

      <label htmlFor="name-search-radio">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          name="search-radio"
          value="nameSearch"
          onClick={ handleClickRadio }
        />
        Name
      </label>

      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="search-radio"
          value="firstLetterSearch"
          onClick={ handleClickRadio }
        />
        First Letter
      </label>

      <button
        type="submit"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
