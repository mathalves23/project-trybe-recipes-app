import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';

function Foods() {
  return (
    <div>
      <Header route="Foods" hasSearch />
      <Categories title="foods" />
      <Recipes />
      <Footer />
    </div>
  );
}

export default Foods;
