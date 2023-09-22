import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);

  const changeSelected = () => {
    setSelected(selected === true ? false : true);
  };

  return (
    <div className="photo-list__fav-icon" onClick={changeSelected}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;