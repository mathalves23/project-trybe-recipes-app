import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ route, hasSearch }) {
  return (
    <header>
      <Link to="/profile">
        <img data-testid="profile-top-btn" alt="profile link" src={ profileIcon } />
      </Link>
      <h1 data-testid="page-title">{ route }</h1>
      {
        hasSearch
          ? <img data-testid="search-top-btn" alt="search button" src={ searchIcon } />
          : null
      }
    </header>
  );
}

Header.propTypes = {
  route: PropTypes.string,
  hasSeach: PropTypes.bool,
}.isRequired;
