import { useState } from "react";
import Video from "../types/video";
import demoVideos from "../utils/demoVideos";

function useVideos() {
  const localData = localStorage.getItem("videos");
  const parsedData = localData ? JSON.parse(localData) : [];
  const [videos, setVideos] = useState<Video[]>(parsedData);

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

  const loadDemoData = () => setVideos(demoVideos);

  return {
    videos,
    addVideo,
    removeVideo,
    toggleFavorite,
    loadDemoData,
  };
}

export default useVideos;
