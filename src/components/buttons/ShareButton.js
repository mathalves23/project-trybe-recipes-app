import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

function ShareButton({ url }) {
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
      <button
        type="button"
        data-testid="share-btn"
        onClick={ shareRecipe }
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      {copyUrl && <p>Link copied!</p>}
    </>
  );
}

export default ShareButton;

ShareButton.propTypes = {
  url: PropTypes.string.isRequired,
};
