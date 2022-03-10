import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Foods() {
  const {
    meals,
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
      return params.map((food, index) => {
        if (index < MAX_LENGTH) {
          return (
            <Link
              to={ `/foods/${food.idMeal}` }
              key={ food.idMeal }
            >
              <div
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ food.strMealThumb }
                  alt={ food.strMeal }
                  data-testid={ `${index}-card-img` }
                />
                <p
                  data-testid={ `${index}-card-name` }
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
    return (<p>Nada encontrado.</p>);
  }

  if (meals.length === 0) return <span>Loading...</span>;

  return (
    <div>
      <Header route="Foods" hasSearch />
      <Categories route="foods" />
      { renderLengthValidation(meals) }
      <Footer />
    </div>
  );
}

export default Foods;
