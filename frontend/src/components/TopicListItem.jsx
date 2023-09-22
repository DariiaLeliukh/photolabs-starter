import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <a href={props.topicInfo.slug}>{props.topicInfo.title}</a>
    </div>
  );
};

export default TopicListItem;
