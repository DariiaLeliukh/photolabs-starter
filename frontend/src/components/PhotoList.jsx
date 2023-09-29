import React, { useEffect, useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photosArray = [];
  for (let i = 0; i < props.photoData.length; i++) {
    photosArray.push(<PhotoListItem key={props.photoData[i].id} photoInfo={props.photoData[i]} addToSelected={props.addToFavorites} favorites={props.favorites} toShowModal={props.toShowModal} />);
  }
  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
