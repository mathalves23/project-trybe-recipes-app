import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <div>
      <Header route="Done Recipes" hasSearch={ false } />
      Aqui ficará o conteúdo da página Explore.
      <Footer />
    </div>
  );
}

export default DoneRecipes;
