import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import videos from "./videos";
import favFilter from "./favFilter";
import sortByOldest from "./sortByOldest";
import currentPage from "./currentPage";
import isGrid from "./isGrid";
import alert from "./alert";
import query from "./query";

const rootReducer = combineReducers({
  videos,
  favFilter,
  sortByOldest,
  currentPage,
  isGrid,
  alert,
  query,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const { videos } = store.getState();

  const videoData = videos.map(({ id, favorite, timestamp }) => ({
    id,
    favorite,
    timestamp,
  }));

  localStorage.setItem("videos", JSON.stringify(videoData));
});

export default store;
