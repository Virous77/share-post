import { parseISO, formatDistanceToNow } from "date-fns";
import "./styles/PostList.css";

import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeago = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeago = `${timePeriod} ago`;
  }

  return (
    <span className="times-ago">
      &nbsp; <i>{timeago}</i>
    </span>
  );
};

export default TimeAgo;
