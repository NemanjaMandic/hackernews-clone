const ROOT_URL = "https://news.ycombinator.com";
export const ITEM = `${ROOT_URL}/item?id=`;
export const USER = `${ROOT_URL}/user?id=`;

const getArticleLink = ({ url, id }) => {
  const commentUrl = `${ITEM}${id}`;
  const link = !!url ? url : commentUrl;

  return link;
};

export default getArticleLink;
