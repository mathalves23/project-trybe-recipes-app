import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoods() {
  return (
    <div>
      <Header route="Explore Foods" hasSearch={ false } />
      Aqui ficará o conteúdo da página Explore Foods.
      <Footer />
    </div>
  );
}

export default ExploreFoods;
