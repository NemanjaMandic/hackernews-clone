// @Flow

import Network from "./network";

const BASE_URL = `https://hacker-news.firebaseio.com/v0`;
const JSON_QUERY = `.json?print=pretty`;

export const getStoriesIdsAPI = () =>
  Network.get(`${BASE_URL}/topstories${JSON_QUERY}`);

export const getStoriesAPI = (id: number) =>
  Network.get(`${BASE_URL}/item/${id}${JSON_QUERY}`);
