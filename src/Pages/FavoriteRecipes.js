import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header route="Favorite Recipes" hasSearch={ false } />
      Aqui ficará o conteúdo da página Favorite Recipes.
      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
