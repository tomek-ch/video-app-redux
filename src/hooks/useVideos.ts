import { useEffect, useState } from "react";
import Video from "../types/video";
import demoVideos from "../utils/demoVideos";
import getVideos from "../utils/vidsFromArray";

function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  // Load local data
  useEffect(() => {
    const localData = localStorage.getItem("videos");
    const parsedData = localData ? JSON.parse(localData) : [];
    getVideos(parsedData).then(setVideos);
  }, []);

  // Save data locally
  useEffect(() => {
    const vids = videos.map(({ id, favorite, timestamp }) => ({
      id,
      favorite,
      timestamp,
    }));
    const data = JSON.stringify(vids);
    localStorage.setItem("videos", data);
  }, [videos]);

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

  const loadDemoData = async () => {
    const videos = await getVideos(demoVideos);
    setVideos(videos);
  };

  const wipeData = () => setVideos([]);

  return {
    videos,
    addVideo,
    removeVideo,
    toggleFavorite,
    loadDemoData,
    wipeData,
  };
}

export default useVideos;
