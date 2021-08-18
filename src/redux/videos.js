import getVideos from "../utils/vidsFromArray";
import getVideo from "../utils/getVideo";

export const addVideo = (query, timestamp) => async (dispatch, getState) => {
  const video = await getVideo(query);

  if (!video) {
    dispatch({
      type: "VIDEO_ADD_ERROR",
      payload: "Could not find that video",
    });
    return;
  }

  const { videos } = getState();
  const videoExists = videos.find(({ id }) => id === video.id);

  if (!videoExists) {
    dispatch({
      type: "VIDEO_ADD_SUCCESS",
      payload: {
        ...video,
        timestamp,
        favorite: false,
      },
    });
    return;
  }

  dispatch({
    type: "VIDEO_ADD_ERROR",
    payload: "Video already in library",
  });
};

export const removeVideo = (id) => ({
  type: "REMOVE_VIDEO",
  payload: id,
});

export const toggleFavorite = (id) => ({
  type: "TOGGLE_FAVORITE",
  payload: id,
});

export const wipeData = () => ({
  type: "WIPE_VIDEOS",
});

export const loadVideos = (dataArr) => async (dispatch) => {
  dispatch({
    type: "LOAD_VIDEOS",
    payload: await getVideos(dataArr),
  });
};

const videos = (videos = [], { type, payload }) => {
  switch (type) {
    case "VIDEO_ADD_SUCCESS":
      return [payload, ...videos];

    case "REMOVE_VIDEO":
      return videos.filter(({ id }) => id !== payload);

    case "TOGGLE_FAVORITE":
      return videos.map((vid) =>
        vid.id === payload
          ? {
              ...vid,
              favorite: !vid.favorite,
            }
          : vid
      );

    case "WIPE_VIDEOS":
      return [];

    case "LOAD_VIDEOS":
      return payload;

    default:
      return videos;
  }
};

export default videos;
