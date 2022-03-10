import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';

function ExploreDrinks() {
  const {
    randomDrink,
    getDrinkRandom,
  } = useContext(MyContext);

  const history = useHistory();

  useEffect(() => {
    getDrinkRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header route="Explore Drinks" hasSearch={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push('/explore/drinks/ingredients');
        } }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          history.push(`/drinks/${randomDrink[0].idDrink}`);
        } }
      >
        Surprise me!
      </button>
      <br />
      Aqui ficará o conteúdo da página Explore Drinks.
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
