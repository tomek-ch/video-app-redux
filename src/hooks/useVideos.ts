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

  return {
    videos,
    addVideo,
    removeVideo,
  };
}

export default useVideos;
