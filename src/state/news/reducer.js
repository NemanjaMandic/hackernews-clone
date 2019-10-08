import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_ALL_STORY_IDS:
      return {
        ...state,
        storyIds: {
          ...state.storyIds,
          inProgress: true
        }
      };
    case actions.GET_ALL_STORY_IDS_SUCCESS:
      return {
        ...state,
        storyIds: {
          ...state.storyIds,
          inProgress: false,
          data: payload
        }
      };

    case actions.GET_ALL_STORY_IDS_FAIL:
      return {
        ...state,
        storyIds: {
          ...state.storyIds,
          inProgress: false,
          errors: payload
        }
      };

    case actions.GET_STORIES:
      return {
        ...state,
        stories: {
          ...state.stories,
          inProgress: true
        }
      };

    case actions.GET_STORIES_SUCCESS:
      return {
        ...state,
        stories: {
          ...state.stories,
          inProgress: false,
          data: payload,
          page: state.page + 1
        }
      };

    case actions.GET_STORIES_FAIL:
      return {
        ...state,
        stories: {
          ...state.stories,
          inProgress: false,
          errors: payload
        }
      };

    case actions.GET_STORIES_BY_ID:
      return {
        ...state,
        stories: {
          ...state.stories,
          inProgress: true
        }
      };

    case actions.GET_STORIES_BY_ID_SUCCESS: {
      const stories = state.stories.data;
      stories.push(payload);
      return {
        ...state,
        stories: {
          ...state.stories,
          inProgress: false,
          data: [...stories],
          page: state.page + 1
        }
      };
    }

    case actions.GET_STORIES_BY_ID_SUCCESS_FAIL:
      return {
        ...state,
        stories: {
          ...state.stories,
          inProgress: false,
          errors: payload
        }
      };
    default:
      return state;
  }
};
