import React, { useContext, useEffect } from 'react';
import MyContext from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  const {
    allDrinks,
    getAllDrinks,
  } = useContext(MyContext);

  const MAX_LENGTH = 12;

  useEffect(() => {
    getAllDrinks();
    // fonte: https://github.com/facebook/create-react-app/issues/6880 da proxima linha
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderLengthValidation(params) {
    if (params !== undefined) {
      return params.map((drink, i) => {
        if (i < MAX_LENGTH) {
          return (
            <div
              key={ drink.idDrink }
              data-testid={ `${i}-recipe-card` }
            >
              <img
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                data-testid={ `${i}-card-img` }
              />
              <p
                data-testid={ `${i}-card-name` }
              >
                { drink.strDrink }
              </p>
            </div>
          );
        }
        return null;
      });
    }
  }

  if (allDrinks.length === 0) return <span>Loading...</span>;

  return (
    <div>
      <Header route="Drinks" hasSearch />
      { renderLengthValidation(allDrinks) }
      <Footer />
    </div>
  );
}

export default Drinks;
