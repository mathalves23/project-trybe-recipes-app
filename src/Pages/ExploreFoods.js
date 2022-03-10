import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';

function ExploreFoods() {
  const {
    randomFood,
    getFoodRandom,
  } = useContext(MyContext);

  useEffect(() => {
    getFoodRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  return (
    <div>
      <Header route="Explore Foods" hasSearch={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push('/explore/foods/ingredients');
        } }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => {
          history.push('/explore/foods/nationalities');
        } }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          history.push(`/foods/${randomFood[0].idMeal}`);
        } }
      >
        Surprise me!
      </button>
      <br />
      Aqui ficará o conteúdo da página Explore Foods.
      <Footer />
    </div>
  );
}

export default ExploreFoods;
