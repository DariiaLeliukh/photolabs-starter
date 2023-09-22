import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from '../mocks/photos';

const photosArray = [];
for (let i = 0; i < photos.length; i++) {
  photosArray.push(<PhotoListItem key={photos[i].id} photoInfo={photos[i]} />);
}

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
