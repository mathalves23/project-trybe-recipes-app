import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

function ShareButton({ url, dataTest }) {
  const [copyUrl, setCopyUrl] = useState(false);

  const shareRecipe = () => {
    navigator.clipboard.writeText(url);
    setCopyUrl(true);
  };

  useEffect(() => {
    const TIME = 2000;
    if (copyUrl) {
      setTimeout(() => {
        setCopyUrl(false);
      }, TIME);
    }
  }, [copyUrl]);

  return (
    <>
      <input
        type="image"
        data-testid={ dataTest }
        onClick={ shareRecipe }
        src={ shareIcon }
        alt="Share button"
      />
      {copyUrl && <p>Link copied!</p>}
    </>
  );
}

export default ShareButton;

ShareButton.propTypes = {
  url: PropTypes.string,
  dataTest: PropTypes.string,
}.isRequired;
