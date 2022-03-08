function requestFoodApi() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.log(error));
}

export const getMealsByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    return await (await fetch(URL)).json();
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    return await (await fetch(URL)).json();
  } catch (error) {
    console.log(error);
  }
};

export const getMealsByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  try {
    return await (await fetch(URL)).json();
  } catch (error) {
    console.log(error);
  }
};

export default requestFoodApi;
