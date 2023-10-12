import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import AddPhoto from './AddPhoto';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__menu">
        <TopicList topicData={props.topicData} loadPhotosByTopic={props.loadPhotosByTopic} />
        <AddPhoto onClick={props.createPhoto} />
        <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
      </div>

    </div>
  );
};

export default TopNavigation;