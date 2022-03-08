import React, { useContext } from 'react';
import MyContext from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  const { data } = useContext(MyContext);
  console.log(data);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Foods;
