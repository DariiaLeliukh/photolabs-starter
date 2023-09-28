import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const itemIsSelected = props.favorites.includes(props.photoInfo.id) ? true : false;

  const testFn = () => {
    props.toShowModal(props.photoInfo);
    // props.passPhotoInfo(props.photoInfo);
  };

  return (
    <div className="photo-list__item" key={props.photoInfo.id}>
      <PhotoFavButton addToSelected={props.addToSelected} photoId={props.photoInfo.id} selected={itemIsSelected} />
      <img src={props.photoInfo.urls.regular} alt="" className="photo-list__image" onClick={testFn} />
      <div className="photo-list__user-details">
        <img src={props.photoInfo.user.profile} alt={`${props.photoInfo.username} image`} className="photo-list__user-profile" />
        <div className="photo-list__user-subdetails">
          <p className="photo-list__user-info">{props.photoInfo.user.name}</p>
          <p className="photo-list__user-location">{props.photoInfo.location.city}, {props.photoInfo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
