import { createAction } from "redux-actions";

export const GET_ALL_STORY_IDS = "GET_ALL_STORY_IDS ";
export const getAllStoryIds = createAction(GET_ALL_STORY_IDS);

export const GET_ALL_STORY_IDS_SUCCESS = `${GET_ALL_STORY_IDS}_SUCCESS`;
export const getAllStoryIdsSuccess = createAction(GET_ALL_STORY_IDS_SUCCESS);

export const GET_ALL_STORY_IDS_FAIL = `${GET_ALL_STORY_IDS}_FAIL`;
export const getAllStoryIdsFail = createAction(GET_ALL_STORY_IDS_FAIL);

export const GET_STORIES = "GET_STORIES ";
export const getStories = createAction(GET_STORIES);

export const GET_STORIES_SUCCESS = `${GET_STORIES}_SUCCESS`;
export const getStoriesSuccess = createAction(GET_STORIES_SUCCESS);

export const GET_STORIES_FAIL = `${GET_STORIES}_FAIL`;
export const getStoriesFail = createAction(GET_STORIES_FAIL);

export const GET_STORIES_BY_ID = "GET_STORIES_BY_ID";
export const getStoriesById = createAction(GET_STORIES_BY_ID);

export const GET_STORIES_BY_ID_SUCCESS = `${GET_STORIES_BY_ID}_SUCCESS`;
export const getStoriesByIdSuccess = createAction(GET_STORIES_BY_ID_SUCCESS);

export const GET_STORIES_BY_ID_SUCCESS_FAIL = `${GET_STORIES_BY_ID}_FAIL`;
export const getStoriesByIdFail = createAction(GET_STORIES_BY_ID_SUCCESS);
