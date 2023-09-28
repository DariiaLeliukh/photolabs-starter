import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={props.favorites.length > 0 ? true : false} />
      <PhotoList
        addToFavorites={props.changeFavourites}
        favorites={props.favorites}
        toShowModal={props.toShowModal} />
    </div>
  );
};

export default HomeRoute;
