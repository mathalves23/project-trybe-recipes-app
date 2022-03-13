import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { getMealsByCategory } from '../services/foodApi';
import { getCocktailsByCategory } from '../services/drinkAPI';

const MAX_LENGTH = 5;

function ButtonsCategorized({ title }) {
  const {
    storeFoodCategory,
    storeDrinkCategory,
    getFoodsCategory,
    getDrinksCategory,
    setMeals,
    setDrinks,
    getAllFoods,
    getAllDrinks,
    prevCategory,
    setPrevCategory,
  } = useContext(MyContext);

  useEffect(() => {
    getFoodsCategory();
    getDrinksCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleAllCategories = () => {
  //   if (title.includes('rink')) {
  //     getAllDrinks();
  //   } else {
  //     getAllFoods();
  //   }
  // };

  async function handleOneCategory(category) {
    if (title.includes('rink') && category !== prevCategory) {
      setPrevCategory(category);
      setDrinks(await getCocktailsByCategory(category));
    } else if (title.includes('ood') && category !== prevCategory) {
      setPrevCategory(category);
      setMeals(await getMealsByCategory(category));
    } else if (title.includes('rink')) {
      getAllDrinks();
    } else {
      getAllFoods();
    }
  }

  function categoryHandler(allCategories) {
    if (allCategories) {
      return (
        <div>
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ handleOneCategory }
          >
            All
          </button>
          {allCategories.map((category, index) => {
            if (index < MAX_LENGTH) {
              return (
                <button
                  type="button"
                  key={ category.strCategory }
                  index={ index }
                  data-testid={ `${category.strCategory}-category-filter` }
                  onClick={
                    () => { handleOneCategory(category.strCategory); }
                  }
                >
                  { category.strCategory }
                </button>
              );
            }
            return null;
          })}
        </div>
      );
    }
  }

  return (
    <div>
      { title === 'drinks' && storeDrinkCategory.drinks
        ? categoryHandler(storeDrinkCategory.drinks)
        : categoryHandler(storeFoodCategory.meals)}
    </div>
  );
}

ButtonsCategorized.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default ButtonsCategorized;
