import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function FavoriteButton({ recipe, pathname, dataTest }) {
  const {
    strMeal,
    strDrink,
    idMeal,
    idDrink,
    strArea,
    strCategory,
    strAlcoholic,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  const nameRecipe = strMeal || strDrink;
  const idRecipe = idMeal || idDrink;

  const [isFavorite, setIsFavorite] = useState(false);

  const isRecipeFavorite = () => {
    const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(nameRecipe, idRecipe);
    if (!favoritesRecipes) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    setIsFavorite(
      favoritesRecipes.some(({ name, id }) => name === nameRecipe && id === idRecipe),
    );
  };

  useEffect(() => {
    isRecipeFavorite();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isRecipeFavorite();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, idRecipe]);

  const addFavoriteRecipe = (favoritesRecipes) => {
    const recipesAtt = [...favoritesRecipes, {
      id: idRecipe,
      type: pathname.includes('foods') ? 'food' : 'drink',
      nationality: strArea || '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic || '',
      name: nameRecipe,
      image: strMealThumb || strDrinkThumb,
    }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipesAtt));
  };

  const removeFavoriteRecipe = (favoritesRecipes) => {
    const recipesAtt = favoritesRecipes.filter(
      ({ name, id }) => name !== nameRecipe && id !== idRecipe,
    );
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipesAtt));
  };

  const handleFavoriteRecipe = () => {
    const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (isFavorite) {
      removeFavoriteRecipe(favoritesRecipes);
      return isRecipeFavorite();
    }
    addFavoriteRecipe(favoritesRecipes);
    isRecipeFavorite();
  };

  return (
    <input
      type="image"
      alt="favorite Image"
      data-testid={ dataTest }
      onClick={ handleFavoriteRecipe }
      src={
        isFavorite ? blackHeartIcon : whiteHeartIcon
      }
    />

  );
}
export default FavoriteButton;

FavoriteButton.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strArea: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  pathname: PropTypes.string,
}.isRequired;
