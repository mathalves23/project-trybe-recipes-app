import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getRecipeById } from '../services/foodApi';
import RecipeInfo from '../components/RecipeInfo';
import FinishButton from '../components/buttons/FinishButton';

function RecipeInProgress({
  location: { pathname },
  match: {
    params: { id },
  },
}) {
  const [recipe, setRecipe] = useState({});
  const [boxChecked, setBoxChecked] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const key = pathname.includes('foods') ? 'meals' : 'cocktails';
  const { idMeal, idDrink } = recipe;

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

  useEffect(() => {
    if (Object.keys(recipe).length > 0) {
      const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      console.log(progress);
      progress[key] = {
        ...progress[key],
        [idMeal || idDrink]: boxChecked,
      };
      if (boxChecked.length === 0) {
        delete progress[key][idMeal || idDrink];
      }
      localStorage.setItem('inProgressRecipes', JSON.stringify(progress));
    }
  }, [boxChecked, idDrink, idMeal, key, recipe]);

  return (
    <main>
      {shouldRedirect && <Redirect to="/done-recipes" />}
      <RecipeInfo
        recipe={ recipe }
        setBoxChecked={ setBoxChecked }
        boxChecked={ boxChecked }
        type={ key }
        url={ window.location.href.replace('/in-progress', '') }
        ingredients={ { ingredients, setIngredients } }
        pathname={ pathname }
      />
      <FinishButton
        recipe={ recipe }
        setShouldRedirect={ setShouldRedirect }
        type={ key }
        boxChecked={ boxChecked }
        ingredients={ ingredients }
      />
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
