import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from '../mocks/topics';

const topicListArray = [];
for (let i = 0; i < topics.length; i++) {
  topicListArray.push(<TopicListItem key={topics[i].id} topicInfo={topics[i]} />);
}

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;
