import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';

const MAX_LENGTH = 5;

function ButtonsCategorized({ route }) {
  const {
    storeFoodCategory,
    storeDrinkCategory,
    getFoodsCategory,
    getDrinksCategory,
  } = useContext(MyContext);

  useEffect(() => {
    getFoodsCategory();
    getDrinksCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(category) {
    if (route.includes('drink')) {
      getDrinksByCategory(category);
    } else getFoodsByCategory(category);
  }

  function categoryHandler(allCategories) {
    if (allCategories !== undefined) {
      return (
        allCategories.map((category, index) => {
          if (index < MAX_LENGTH) {
            return (
              <button
                type="button"
                key={ category.strCategory }
                index={ index }
                data-testid={ `${category.strCategory}-category-filter` }
                onClick={ () => handleClick(category.strCategory) }
              >
                { category.strCategory }
              </button>
            );
          }
          return null;
        })
      );
    }
  }

  return (
    <div>
      { route === 'drinks' && storeDrinkCategory.drinks
        ? categoryHandler(storeDrinkCategory.drinks)
        : categoryHandler(storeFoodCategory.meals)}
    </div>
  );
}

ButtonsCategorized.propTypes = {
  route: PropTypes.string,
}.isRequired;

export default ButtonsCategorized;
