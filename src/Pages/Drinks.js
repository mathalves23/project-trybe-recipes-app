import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Drinks() {
  const {
    drinks,
    getAllDrinks,
  } = useContext(MyContext);

  const MAX_LENGTH = 12;

  useEffect(() => {
    getAllDrinks();
    // fonte: https://github.com/facebook/create-react-app/issues/6880 da proxima linha
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderLengthValidation(params) {
    console.log(params);
    if (params) {
      return params.map((drink, index) => {
        if (index < MAX_LENGTH) {
          return (
            <Link
              to={ `/drinks/${drink.idDrink}` }
              key={ drink.idDrink }
            >
              <div
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  { drink.strDrink }
                </p>
              </div>
            </Link>
          );
        }
        return null;
      });
    } global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  if (drinks && drinks.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Header route="Drinks" hasSearch />
      <Categories route="drinks" />
      { renderLengthValidation(drinks) }
      <Footer />
    </div>
  );
}

export default Drinks;
