import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import { getRecipeById } from '../services/foodApi';
import RecipeInfo from '../components/RecipeInfo';

function RecipeInProgress({
  location: { pathname },
  match: {
    params: { id },
  },
}) {
  const [recipe, setRecipe] = useState({});
  const [boxChecked, setBoxChecked] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { idMeal, idDrink } = recipe;
  const key = pathname.includes('foods') ? 'meals' : 'cocktails';

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({ cocktails: {}, meals: {} }),
      );
    } else {
      const savedProgress = JSON.parse(
        localStorage.getItem('inProgressRecipes'),
      );
      setBoxChecked(savedProgress[key][id] || []);
    }
  }, [id, key]);

  useEffect(() => {
    const getRecipe = async () => {
      const recipeDetails = await getRecipeById(pathname, id);
      setRecipe(recipeDetails[0]);
    };
    getRecipe();
  }, [id, pathname]);

  const handleCheck = ({ target }) => {
    if (target.checked) {
      setBoxChecked((prev) => [...prev, target.id]);
    } else {
      setBoxChecked((prev) => prev.filter((step) => step !== target.id));
    }
  };

  useEffect(() => {
    if (Object.keys(recipe).length > 0) {
      const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      progress[key] = {
        ...progress[key],
        [idMeal || idDrink]: boxChecked,
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(progress));
    }
  }, [boxChecked, idDrink, idMeal, key, recipe]);

  return (
    <main>
      <RecipeInfo
        recipe={ recipe }
        handleCheckbox={ handleCheck }
        boxChecked={ boxChecked }
        url={ window.location.href.replace('/in-progress', '') }
        setButtonDisabled={ setButtonDisabled }
      />
      <button data-testid="finish-recipe-btn" type="button" disabled={ buttonDisabled }>
        Finish Recipe
      </button>
    </main>
  );
}

RecipeInProgress.propTypes = {
  location: PropType.shape({
    pathname: PropType.string,
  }).isRequired,
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string,
    }),
  }).isRequired,
};

export default RecipeInProgress;
