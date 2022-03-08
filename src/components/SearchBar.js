import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [ingredientSearch, setIngredientSearch] = useState();
  const [nameSearch, setNameSearch] = useState();
  const [firstLetterSearch, setFirstLetterSearch] = useState();

  return (
    <nav>
      <input
        type="text"
        data-testid="search-input"
        name="search-input"
        value={ searchInput }
        onChange={ () => setSearchInput(target.value) }
        placeholder="Search Recipe"
      />

      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="ingredient-search-radio"
          value={ ingredientSearch }
          onClick={ setIngredientSearch }
        />
      </label>

      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          name="name-search-radio"
          value={ nameSearch }
          onClick={ setNameSearch }
        />
      </label>

      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="first-letter-search-radio"
          value={ firstLetterSearch }
          onClick={ setFirstLetterSearch }
        />
      </label>

      <button type="button" data-testid="exec-search-btn">
        Search
      </button>
    </nav>
  );
}

export default SearchBar;
