import { useContext } from 'react';
import { getMealsByCategory } from '../services/foodApi';
import { getCocktailsByCategory } from '../services/drinkAPI';

export default async function HandleOneCategory(category) {
  const {
    setMeals,
    setDrinks,
    getAllFoods,
    getAllDrinks,
    prevCategory,
    setPrevCategory,
  } = useContext(MyContext);

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
