import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item" key={props.photoInfo.id}>
      <PhotoFavButton />
      <img src={props.photoInfo.urls.regular} alt="" className="photo-list__image" />
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
