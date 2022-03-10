import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';

function ExploreDrinksIngredients() {
  const {
    ingredientsDrink,
    getDrinkIngredient,
  } = useContext(MyContext);

  const MAX_LENGTH = 12;

  useEffect(() => {
    getDrinkIngredient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderLengthValidation(params) {
    if (params !== undefined) {
      return params.map((ingredient, index) => {
        if (index < MAX_LENGTH) {
          return (
            <div
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                alt={ ingredient.strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <p
                data-testid={ `${index}-card-name` }
              >
                { ingredient.strIngredient1 }
              </p>
            </div>
          );
        }
        return null;
      });
    }
    return (<p>Nada encontrado.</p>);
  }

  return (
    <div>
      <Header route="Explore Ingredients" hasSearch={ false } />
      { renderLengthValidation(ingredientsDrink) }
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
