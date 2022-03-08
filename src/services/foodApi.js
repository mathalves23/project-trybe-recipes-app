function requestFoodApi() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.log(error));
}

export default requestFoodApi;
