import React, { Fragment, useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const itemIsSelected = props.favorites.includes(props.photoInfo.id) ? true : false;
  const photosArray = [];
  for (let photo in props.photoInfo.similar_photos) {
    photosArray.push(
      <PhotoListItem
        key={props.photoInfo.similar_photos[photo].id}
        photoInfo={props.photoInfo.similar_photos[photo]}
        addToSelected={props.changeFavourites}
        favorites={props.favorites}
        toShowModal={props.toShowModal} />
    );
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__item" key={props.photoInfo.id}>
        <PhotoFavButton addToSelected={props.changeFavourites} photoId={props.photoInfo.id} selected={itemIsSelected} />
        <img src={props.photoInfo.urls.full} alt="" className="photo-details-modal__image" />
        <div className="photo-details-modal__header">
          <img src={props.photoInfo.user.profile} alt={`${props.photoInfo.username} image`} className="photo-list__user-profile" />
          <div className=".photo-details-modal__photographer-details ">
            <p className="photo-list__user-info">{props.photoInfo.user.name}</p>
            <p className="photo-list__user-location">{props.photoInfo.location.city}, {props.photoInfo.location.country}</p>
          </div>
        </div>
      </div>
      {photosArray && <p className="photo-details-modal__related">Related Photos</p>}
      <div className="photo-details-modal__images">
        {photosArray}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
