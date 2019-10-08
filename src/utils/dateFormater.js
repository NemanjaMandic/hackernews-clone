//@Flow

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export const formatDate = (time: number) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  const formatedDate = timeAgo.format(time * 1000);

  return formatedDate;
};
