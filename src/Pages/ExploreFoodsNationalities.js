import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import MyContext from '../context/Context';
import { getMealsByArea } from '../services/foodApi';

function ExploreFoodsNationalities() {
  const {
    nationality,
    getNationalityFood,
    setMeals,
    getAllFoods,
  } = useContext(MyContext);

  useEffect(() => {
    getNationalityFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleClick(area) {
    if (area === 'All') {
      return getAllFoods();
    }
    setMeals(await getMealsByArea(area));
  }

  return (
    <div>
      <Header route="Explore Nationalities" hasSearch />
      <select
        data-testid="explore-by-nationality-dropdown"
        onClick={ (event) => {
          handleClick(event.target.value);
        } }
      >
        <option data-testid="All-option">All</option>
        {nationality.map((nation, i) => (
          <option
            key={ i }
            data-testid={ `${nation.strArea}-option` }
            value={ nation.strArea }
          >
            { nation.strArea }
          </option>
        ))}
      </select>
      <Recipes />
      <Footer />
    </div>
  );
}

export default ExploreFoodsNationalities;
