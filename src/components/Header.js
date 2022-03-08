import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ route, hasSearch }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <header>
      <Link to="/profile">
        <img data-testid="profile-top-btn" alt="profile link" src={ profileIcon } />
      </Link>
      <h1 data-testid="page-title">{ route }</h1>
      { hasSearch ? (
        <button
          type="button"
          onClick={ () => setShowSearchBar(!showSearchBar) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="explore"
          />
        </button>) : null}
      <span>
        { showSearchBar ? <SearchBar /> : null }
      </span>
    </header>
  );
}

Header.propTypes = {
  route: PropTypes.string,
  hasSeach: PropTypes.bool,
}.isRequired;
