import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from '../mocks/photos';

const PhotoList = (props) => {
  const photosArray = [];
  for (let i = 0; i < photos.length; i++) {
    photosArray.push(<PhotoListItem key={photos[i].id} photoInfo={photos[i]} addToSelected={props.addToFavorites} favorites={props.favorites} toShowModal={props.toShowModal} passPhotoInfo={props.passPhotoInfo} />);
  }
  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
