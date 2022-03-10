import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  const {
    allFoods,
    getAllFoods,
  } = useContext(MyContext);
  const MAX_LENGTH = 12;

  useEffect(() => {
    getAllFoods();
    // fonte: https://github.com/facebook/create-react-app/issues/6880 da proxima linha
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderLengthValidation(params) {
    if (params !== undefined) {
      return params.map((food, i) => {
        if (i < MAX_LENGTH) {
          return (
            <Link to={ `/foods/${food.idMeal}` }>
              <div
                key={ food.idMeal }
                data-testid={ `${i}-recipe-card` }
              >
                <img
                  src={ food.strMealThumb }
                  alt={ food.strMeal }
                  data-testid={ `${i}-card-img` }
                />
                <p
                  data-testid={ `${i}-card-name` }
                >
                  { food.strMeal }
                </p>
              </div>
            </Link>
          );
        }
        return null;
      });
    }
  }

  if (allFoods.length === 0) return <span>Loading...</span>;

  return (
    <div>
      <Header route="Foods" hasSearch />
      { renderLengthValidation(allFoods) }
      <Footer />
    </div>
  );
}

export default Foods;
