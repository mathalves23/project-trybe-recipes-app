import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getFoods, getRecipeById } from '../services/foodApi';
import RecipeDetails from './RecipeDetails';

const TOPOFSLICE = 6;

function DrinkDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [recomendedFoods, setRecomendedFoods] = useState([]);

  useEffect(() => {
    getRecipeById('/drinks', id).then((recipe) => setRecipeDetails(recipe[0]));
    getFoods().then((foods) => {
      setRecomendedFoods(foods.slice(0, TOPOFSLICE));
    });
  }, [id]);

  /*                                                                    ingredient */
  const [recipeEntries, setRecipeEntries] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [RecipesMeasures, setRecipesMeasures] = useState([]);

  useEffect(() => {
    setRecipeEntries(Object.entries(recipeDetails));
  }, [recipeDetails]);

  function mapIgredients() {
    recipeEntries.forEach((entry) => {
      const empySting = entry[1] !== null && entry[1] !== '';
      if (entry[0].includes('Ingredient') && empySting) {
        setRecipeIngredients((prevState) => [...prevState, entry[1]]);
      }
    });
  }

  function mapMeasures() {
    recipeEntries.forEach((entry) => {
      const empySting = entry[1] !== null && entry[1] !== ' ';
      if (entry[0].includes('Measure') && empySting) {
        setRecipesMeasures((prevState) => [...prevState, entry[1]]);
      }
    });
  }

  useEffect(() => {
    mapIgredients();
    mapMeasures();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeEntries]);

  return (
    <div>
      <h1>Drinks</h1>
      <RecipeDetails details={ recipeDetails } />
      <ul>
        {
          recipeIngredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              { ingredient }
              ----------------------
              { RecipesMeasures[index] }
            </li>
          ))
        }
      </ul>
      <div className="recomendation-section">
        <div className="recomendation-card-container">
          {
            recomendedFoods.map((foods, index) => (
              <div
                key={ index }
                className="recomendation-card"
                data-testid={ `${index}-recomendation-card` }
              >
                <h1 data-testid={ `${index}-recomendation-title` }>
                  { foods.strMeal }
                </h1>
                <h2>{ foods.strCategory }</h2>
                <img
                  src={ foods.strMealThumb }
                  alt={ foods.strMeal }
                  className="recomentation-img"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
