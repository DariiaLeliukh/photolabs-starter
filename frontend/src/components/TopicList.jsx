import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topicListArray = [];
  for (let i = 0; i < props.topicData.length; i++) {
    topicListArray.push(<TopicListItem key={props.topicData[i].id} topicInfo={props.topicData[i]} loadPhotosByTopic={props.loadPhotosByTopic} />);
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;
