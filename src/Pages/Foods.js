import React, { useContext } from 'react';
import MyContext from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  const { data } = useContext(MyContext);
  console.log(data);

  return (
    <div>
      <Header route="Foods" hasSearch />
      <Footer />
    </div>
  );
}

export default Foods;
