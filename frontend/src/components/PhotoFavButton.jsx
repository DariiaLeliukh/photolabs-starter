import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const changeSelected = () => {
    props.addToSelected(props.photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={changeSelected}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;