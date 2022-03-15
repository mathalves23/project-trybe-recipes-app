import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/buttons/ShareButton';

const mockRecipes = [
  {
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: [
      'Pasta',
      'Curry',
    ],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

function DoneRecipes() {
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const recipes = localStorage.getItem('doneRecipes');
    setDoneRecipes(JSON.parse(recipes));
    setInitialRecipes(JSON.parse(recipes));
    setDoneRecipes(mockRecipes);
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

  const handleRenderTags = (tag, index) => {
    if (tag) {
      return (
        <div>
          {tag.map((item, idx) => (
            <span
              data-testid={ `${index}-${item}-horizontal-tag` }
              key={ idx }
            >
              {item}
            </span>
          ))}
        </div>
      );
    }
    return null;
  };

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
                <ShareButton
                  dataTest={ `${index}-horizontal-share-btn` }
                  url={ handleUrl(recipe) }
                />
              </div>
              <div>
                <h1 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h1>
                <p data-testid={ `${index}-horizontal-done-date` }>
                  {`Done in: ${recipe.doneDate}`}
                </p>
                {handleRenderTags(recipe.tags, index)}
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
      setDoneRecipes(filteredArr);
      break;
    case 'drink':
      filteredArr = initialRecipes.filter((item) => item.type === 'drink');
      setDoneRecipes(filteredArr);
      break;

    default:
      setDoneRecipes(initialRecipes);
      break;
    }
  };

  return (
    <section>
      <Header route="Done Recipes" hasSearch={ false } />
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
      {handleRenderCardRecipes(doneRecipes)}
    </section>
  );
}

export default DoneRecipes;
