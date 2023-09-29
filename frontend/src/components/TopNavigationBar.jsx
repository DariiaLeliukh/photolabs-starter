import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <a href="/" className="top-nav-bar_homelink"><span className="top-nav-bar__logo">PhotoLabs</span></a>
      <div className="top-nav-bar__menu">
        <TopicList topicData={props.topicData} />
        <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
      </div>

    </div>
  );
};

export default TopNavigation;