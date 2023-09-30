import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const loadCategoryPhotos = () => {
    props.loadPhotosByTopic(props.topicInfo.id);
  };
  return (
    <div className="topic-list__item">
      <span onClick={loadCategoryPhotos}>{props.topicInfo.title}</span>
    </div>
  );
};

export default TopicListItem;
