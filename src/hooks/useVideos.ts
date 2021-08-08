import { useEffect, useState } from "react";
import Video from "../types/video";
import demoVideos from "../utils/demoVideos";
import getVideos from "../utils/vidsFromArray";

function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  // *** Local sync ***

  useEffect(() => {
    const localData = localStorage.getItem("videos");
    const parsedData = localData ? JSON.parse(localData) : [];
    getVideos(parsedData).then(setVideos);
  }, []);

  useEffect(() => {
    const vids = videos.map(({ id, favorite, timestamp }) => ({
      id,
      favorite,
      timestamp,
    }));
    const data = JSON.stringify(vids);
    localStorage.setItem("videos", data);
  }, [videos]);

  // *** CRUD ***

  const addVideo = (newVid: Video) => {
    const videoExists = videos.find(({ id }) => id === newVid.id);
    if (videoExists) {
      return false;
    }

    setVideos((prev) => [newVid, ...prev]);
    return true;
  };

  const removeVideo = (deleteId: string) => {
    setVideos((prev) => prev.filter(({ id }) => id !== deleteId));
  };

  const toggleFavorite = (favId: string) => {
    setVideos((prev) =>
      prev.map((vid) =>
        vid.id === favId
          ? {
              ...vid,
              favorite: !vid.favorite,
            }
          : vid
      )
    );
  };

  // *** Wipe and load data ***

  const loadDemoData = async () => {
    const videos = await getVideos(demoVideos);
    setVideos(videos);
  };

  const wipeData = () => setVideos([]);

  // *** Filter and sort ***

  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [oldestFirst, setOldestFirst] = useState(false);

  const listToDisplay = favoritesOnly
    ? videos.filter(({ favorite }) => favorite)
    : // Spread to prevent mutation of state by sort()
      [...videos];

  if (oldestFirst) {
    listToDisplay.sort((a, b) => a.timestamp - b.timestamp);
  }

  const toggleFavFilter = () => setFavoritesOnly((prev) => !prev);

  return {
    videos: listToDisplay,
    addVideo,
    removeVideo,
    toggleFavorite,
    loadDemoData,
    wipeData,
    favoritesOnly,
    toggleFavFilter,
    setOldestFirst,
  };
}

export default useVideos;
