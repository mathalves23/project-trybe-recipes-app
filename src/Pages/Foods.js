import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  return (
    <div>
      <Header route="Foods" hasSearch />
      Aqui ficará o conteúdo da página Foods.
      <Footer />
    </div>
    // Editado para ver se passa nos testes do github
  );
}

export default Foods;
