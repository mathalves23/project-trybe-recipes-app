import React, { useEffect } from 'react';
import PropType from 'prop-types';
import FavoriteButton from './buttons/FavoriteButton';
import ShareButton from './buttons/ShareButton';

function RecipeInfo({
  recipe,
  setBoxChecked,
  boxChecked,
  url,
  pathname,
  ingredients: { ingredients, setIngredients },
}) {
  const {
    strMeal,
    strDrink,
    strAlcoholic,
    strCategory,
    strInstructions,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  useEffect(() => {
    if (Object.keys(recipe).length > 0) {
      const ingredientsLength = Array.from({ length: 20 }, (_, i) => i + 1);
      ingredientsLength.forEach((number) => {
        const text = `${recipe[`strMeasure${number}`] || ''} ${
          recipe[`strIngredient${number}`] || ''
        }`.trim();
        if (text !== '') {
          setIngredients((prev) => [...prev, { number, text }]);
        }
      });
    }
  }, [recipe, setIngredients]);

  const handleCheck = ({ target }) => {
    if (target.checked) {
      setBoxChecked((prev) => [...prev, target.id]);
    } else {
      setBoxChecked((prev) => prev.filter((step) => step !== target.id));
    }
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ strMealThumb || strDrinkThumb }
        alt={ strMeal || strDrink }
        width="360px"
      />
      <h1 data-testid="recipe-title">{strMeal || strDrink}</h1>
      <FavoriteButton
        pathname={ pathname }
        recipe={ recipe }
      />
      <ShareButton url={ url } />
      <h2 data-testid="recipe-category">{strCategory}</h2>
      {strAlcoholic && <h3>{strAlcoholic}</h3>}
      <ul>
        {ingredients.map(({ number, text }, index) => (
          <li key={ `${number}${text}` } data-testid={ `${index}-ingredient-step` }>
            <label htmlFor={ number }>
              <input
                id={ number }
                type="checkbox"
                onChange={ handleCheck }
                checked={ boxChecked.includes(number.toString()) }
              />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <p data-testid="instructions">{strInstructions}</p>
    </div>
  );
}

RecipeInfo.propTypes = {
  recipe: PropType.shape({
    strMeal: PropType.string,
    strDrink: PropType.string,
    strAlcoholic: PropType.string,
    strCategory: PropType.string,
    strInstructions: PropType.string,
    strMealThumb: PropType.string,
    strDrinkThumb: PropType.string,
  }).isRequired,
  setBoxChecked: PropType.func.isRequired,
  boxChecked: PropType.arrayOf(PropType.string),
  url: PropType.string.isRequired,
  ingredients: PropType.shape({
    ingredients: PropType.arrayOf(PropType.object),
    setIngredients: PropType.func,
  }).isRequired,
  pathname: PropType.string.isRequired,
};

RecipeInfo.defaultProps = {
  boxChecked: [],
};

export default RecipeInfo;
