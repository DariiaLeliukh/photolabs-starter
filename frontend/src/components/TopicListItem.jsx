import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <a href={props.topicInfo.slug}>{props.topicInfo.title}</a>
    </div>
  );
};

export default TopicListItem;
