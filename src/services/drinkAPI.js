const MAMBO = 5;

export default async function getCocktailsByIngredient(ingredient) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
}

export const getCocktailsByName = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getCocktailsByFirstLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getCocktailsByCategory = async (category) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDrinksCategory = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks.slice(0, MAMBO);
  } catch (error) {
    console.log('catch', error);
  }
};

export const getRandomDrink = () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => console.log(error));
};

export const getIngredientsDrink = () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => console.log(error));
};
