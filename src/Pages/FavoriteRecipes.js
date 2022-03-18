import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/buttons/ShareButton';
import FavoriteButton from '../components/buttons/FavoriteButton';

// const recipesMock = [
//   {
//     id: '52771',
//     type: 'food',
//     nationality: 'Italian',
//     category: 'Vegetarian',
//     alcoholicOrNot: '',
//     name: 'Spicy Arrabiata Penne',
//     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
//   },
//   {
//     id: '178319',
//     type: 'drink',
//     nationality: '',
//     category: 'Cocktail',
//     alcoholicOrNot: 'Alcoholic',
//     name: 'Aquamarine',
//     image:
//       'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
//   },
// ];

function FavoriteRecipes() {
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const recipes = localStorage.getItem('favoriteRecipes');
    console.log(recipes);
    setFavoriteRecipes(JSON.parse(recipes));
    setInitialRecipes(JSON.parse(recipes));
    // setInitialRecipes(recipesMock);
    // setFavoriteRecipes(recipesMock);
  }, []);

  const handleUrl = ({ type, id }) => (type === 'drink' ? `http://localhost:3000/drinks/${id}` : `http://localhost:3000/foods/${id}`);

  const handleRenderDescription = (
    { type, category, nationality, alcoholicOrNot }, index,
  ) => (
    <span>
      {
        type === 'drink' ? (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {alcoholicOrNot}
          </p>
        ) : (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category}`}
          </p>
        )
      }
    </span>
  );

  // const handleRedirect = ({ type, id }) => (
  //   type === 'drink' ? `/drinks/${id}` : `/foods/${id}`
  // );

  const handleRenderCardRecipes = (recipes) => {
    if (recipes) {
      return (
        <section>
          {recipes.map((recipe, index) => (
            <div key={ index }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
              <div>
                {handleRenderDescription(recipe, index)}
                <h1 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h1>
              </div>
              <div>
                <ShareButton
                  dataTest={ `${index}-horizontal-share-btn` }
                  url={ handleUrl(recipe) }
                />
                <FavoriteButton
                  recipe={ recipes }
                  dataTest={ `${index}-horizontal-favorite-btn` }
                />
              </div>
            </div>
          ))}
        </section>
      );
    }
    return null;
  };

  const handleFilter = (recipeType) => {
    let filteredArr = [];
    switch (recipeType) {
    case 'food':
      filteredArr = initialRecipes.filter((item) => item.type === 'food');
      setFavoriteRecipes(filteredArr);
      break;
    case 'drink':
      filteredArr = initialRecipes.filter((item) => item.type === 'drink');
      setFavoriteRecipes(filteredArr);
      break;

    default:
      setFavoriteRecipes(initialRecipes);
      break;
    }
  };

  return (
    <section>
      <Header route="Favorite Recipes" hasSearch={ false } />
      <section>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => { handleFilter(); } }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => { handleFilter('food'); } }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => { handleFilter('drink'); } }
        >
          Drinks
        </button>
      </section>
      {handleRenderCardRecipes(favoriteRecipes)}
    </section>
  );
}

export default FavoriteRecipes;
