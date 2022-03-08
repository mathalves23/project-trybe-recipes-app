import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <Link
        to="/foods"
      >
        <img src={ mealIcon } alt="meal icon" data-testid="food-bottom-btn" />
      </Link>
      <Link
        to="/drinks"
      >
        <img src={ drinkIcon } alt="drink icon" data-testid="drinks-bottom-btn" />
      </Link>
      <Link
        to="/explore"
      >
        <img src={ exploreIcon } alt="explore icon" data-testid="explore-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
