const MAMBO = 5;

export function getFoods() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.log(error));
}

export const getMealsByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByCategory = async (category) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodsCategory = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals.slice(0, MAMBO);
  } catch (error) {
    console.log(error);
  }
};

export const getRandomFood = () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.log(error));
};

export const getIngredientsFood = () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.log(error));
};

// Requisi????o feita de forma din??mica porque a p??gina RecipeInProgress apresenta tanto Foods quanto Drinks.
// Essa requisi????o vai interferir no requisito 34.
export const getRecipeById = async (pathname, id) => {
  const source = pathname.includes('/foods') ? 'themealdb' : 'thecocktaildb';
  const URL = `https://www.${source}.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals || data.drinks);
};

export const getNationality = () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.log(error));
};

export const getMealsByArea = async (area) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export default getFoods;
