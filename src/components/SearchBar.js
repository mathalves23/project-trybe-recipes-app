import React, { useContext, useState } from 'react';
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
  const { route } = useContext(MyContext);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleClickRadio = ({ target }) => {
    setSearchType(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (route === 'Foods') {
      switch (searchType) {
      case 'ingredientSearch':
        await getMealsByIngredient(searchInput);
        break;

      case 'nameSearch':
        await getMealsByName(searchInput);
        break;

      case 'firstLetterSearch':
        if (searchInput.length > 1) {
          global.alert('Your search must have only 1 (one) character');
          break;
        }
        await getMealsByFirstLetter(searchInput);
        break;

      default:
        break;
      }
    } else {
      switch (searchType) {
      case 'ingredientSearch':
        await getCocktailsByIngredient(searchInput);
        break;

      case 'nameSearch':
        await getCocktailsByName(searchInput);
        break;

      case 'firstLetterSearch':
        if (searchInput.length > 1) {
          global.alert('Your search must have only 1 (one) character');
          break;
        }
        await getCocktailsByFirstLetter(searchInput);
        break;

      default:
        break;
      }
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
