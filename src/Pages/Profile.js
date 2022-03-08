import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <div>
      <Header route="Profile" hasSearch={ false } />
      Aqui ficará o conteúdo da página Profile.
      <Footer />
    </div>
  );
}

export default Profile;
