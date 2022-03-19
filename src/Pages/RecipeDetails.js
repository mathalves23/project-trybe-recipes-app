import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetails({ details }) {
  console.log(details);
  return (
    <div>
      <img
        data-testid="recipe-photo"
        alt="img"
        src={ details.strMealThumb || details.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">{ details.strMeal || details.strDrink }</h1>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favortite</button>
      <h2
        data-testid="recipe-category"
      >
        { details.strAlcoholic || details.strCategory }
      </h2>
      <p data-testid="instructions">{ details.strInstructions }</p>
      <video data-testid="video" width="200" height="150" controls>
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
        <source src="vid.mp4" type="video/mp4" />
        <source src="vid.ogg" type="video/ogg" />
        No video support.
      </video>
      <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
    </div>
  );
}

export default RecipeDetails;

RecipeDetails.propTypes = {
  details: PropTypes.objectOf(PropTypes.string),
}.isRequired;
