import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  const history = useHistory();
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
          history.push('/explore/drinks/${}');
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
