import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';

function ExploreFoodsIngredients() {
  const {
    ingredientsFood,
    getFoodIngredient,
  } = useContext(MyContext);

  const MAX_LENGTH = 12;

  function renderLengthValidation(params) {
    if (params !== undefined) {
      return params.map((ingredient, index) => {
        if (index < MAX_LENGTH) {
          return (
            <div
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                alt={ ingredient.strIngredient }
                data-testid={ `${index}-card-img` }
              />
              <p
                data-testid={ `${index}-card-name` }
              >
                { ingredient.strIngredient }
              </p>
            </div>
          );
        }
        return null;
      });
    }
    return (<p>Nada encontrado.</p>);
  }

  useEffect(() => {
    getFoodIngredient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header route="Explore Ingredients" hasSearch={ false } />
      { renderLengthValidation(ingredientsFood) }
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
