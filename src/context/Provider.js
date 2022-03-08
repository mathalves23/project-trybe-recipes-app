import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

const Provider = ({ children }) => {
  const [data, setData] = useState('');

  const context = {
    data,
    setData,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
