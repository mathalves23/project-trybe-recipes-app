export default async function getCocktailsByIngredient(ingredient) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    return await (await fetch(URL)).json();
  } catch (error) {
    console.log(error);
  }
}

export const getCocktailsByName = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    return await (await fetch(URL)).json();
  } catch (error) {
    console.log(error);
  }
};

export const getCocktailsByFirstLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  try {
    return await (await fetch(URL)).json();
  } catch (error) {
    console.log(error);
  }
};
