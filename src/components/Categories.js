import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { getMealsByCategory } from '../services/foodApi';
import { getCocktailsByCategory } from '../services/drinkAPI';

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

  const handleAllCategories = () => {
    if (title.includes('rink')) {
      return getAllDrinks();
    } getAllFoods();
  };

  async function handleOneCategory(category) {
    if (title.includes('rink') && category !== prevCategory) {
      setPrevCategory(category);
      setDrinks(await getCocktailsByCategory(category));
    } else if (title.includes('ood') && category !== prevCategory) {
      setPrevCategory(category);
      setMeals(await getMealsByCategory(category));
    } else handleAllCategories();
  }

  function categoryHandler(allCategories) {
    if (allCategories) {
      return (
        <div>
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ handleAllCategories }
          >
            All
          </button>
          {allCategories.map((category, index) => (
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
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      { title === 'drinks' && storeDrinkCategory
        ? categoryHandler(storeDrinkCategory)
        : categoryHandler(storeFoodCategory)}
    </div>
  );
}

ButtonsCategorized.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default ButtonsCategorized;
