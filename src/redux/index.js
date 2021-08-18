import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import videos from "./videos";
import favFilter from "./favFilter";
import sortByOldest from "./sortByOldest";
import currentPage from "./currentPage";
import isGrid from "./isGrid";
import alert from "./alert";

const rootReducer = combineReducers({
  videos,
  favFilter,
  sortByOldest,
  currentPage,
  isGrid,
  alert,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const vids = store.getState().videos.map(({ id, favorite, timestamp }) => ({
    id,
    favorite,
    timestamp,
  }));

  const data = JSON.stringify(vids);
  localStorage.setItem("videos", data);
});

export default store;
