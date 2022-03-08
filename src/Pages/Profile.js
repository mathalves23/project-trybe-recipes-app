import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const user = localStorage.getItem('user');
  const history = useHistory();

  return (
    <div>
      <Header route="Profile" hasSearch={ false } />
      <p
        data-testid="profile-email"
      >
        {user}
      </p>
      <Link
        to="/done-recipes"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </Link>
      <Link
        to="/favorite-recipes"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
