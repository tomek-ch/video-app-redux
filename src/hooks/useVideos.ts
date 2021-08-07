import { useState } from "react";
import Video from "../types/video";

function useVideos() {
  const localData = localStorage.getItem("videos");
  const parsedData = localData ? JSON.parse(localData) : [];
  const [videos, setVideos] = useState<Video[]>(parsedData);

  const addVideo = (newVid: Video) => {
    const videoExists = videos.find(({ id }) => id === newVid.id);
    if (!videoExists) {
      setVideos((prev) => [newVid, ...prev]);
    }
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

  return {
    videos,
    addVideo,
    removeVideo,
    toggleFavorite,
  };
}

export default useVideos;
