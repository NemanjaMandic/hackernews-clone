import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { getStoriesIdsAPI, getStoriesAPI } from "../../services/api";
import * as actions from "./actions";

export function* getTopStoriesIds$() {
  try {
    const response = yield getStoriesIdsAPI();

    yield put(actions.getAllStoryIdsSuccess(response.data));
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

export function* getStories$({ payload }) {
  try {
    const { data } = yield getStoriesIdsAPI();

    yield all(data.slice(0, 25).map(id => put(actions.getStoriesById(id))));
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

export function* getStoriesById$({ payload }) {
  try {
    const response = yield getStoriesAPI(payload);
    yield put(actions.getStoriesByIdSuccess(response.data));
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

export default function*() {
  yield all([
    takeLatest(actions.getAllStoryIds, getTopStoriesIds$),
    takeLatest(actions.getStories, getStories$),
    takeEvery(actions.getStoriesById, getStoriesById$)
  ]);
}
