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
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodsCategory = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
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

export default getFoods;

