import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';

function FinishButton({ recipe, setShouldRedirect, type, boxChecked, ingredients }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const {
    idMeal,
    idDrink,
    strArea,
    strTags,
    strMeal,
    strDrink,
    strAlcoholic,
    strCategory,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  const doneRecipe = {
    id: idMeal || idDrink,
    type,
    nationality: strArea || '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strMealThumb || strDrinkThumb,
    doneDate: new Date().toLocaleString(),
    tags: strTags ? strTags.split(',') : strTags,
  };

  const handleClick = () => {
    if (localStorage.getItem('doneRecipes')) {
      localStorage.setItem(
        'doneRecipes',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('doneRecipes')),
          doneRecipe,
        ]),
      );
      console.log(doneRecipe);
    } else {
      localStorage.setItem('doneRecipes', JSON.stringify([doneRecipe]));
    }
    setShouldRedirect(true);
  };

  useEffect(() => {
    setButtonDisabled(boxChecked.length !== ingredients.length);
  }, [boxChecked.length, ingredients.length]);

  return (
    <button
      data-testid="finish-recipe-btn"
      type="button"
      onClick={ handleClick }
      disabled={ buttonDisabled }
    >
      Finish Recipe
    </button>
  );
}

FinishButton.propTypes = {
  recipe: PropType.shape({
    idMeal: PropType.string,
    idDrink: PropType.string,
    strArea: PropType.string,
    strTags: PropType.string,
    strMeal: PropType.string,
    strDrink: PropType.string,
    strAlcoholic: PropType.string,
    strCategory: PropType.string,
    strInstructions: PropType.string,
    strMealThumb: PropType.string,
    strDrinkThumb: PropType.string,
  }).isRequired,
  setShouldRedirect: PropType.func.isRequired,
  type: PropType.string.isRequired,
  boxChecked: PropType.arrayOf(PropType.string).isRequired,
  ingredients: PropType.arrayOf(PropType.object).isRequired,
};

export default FinishButton;
