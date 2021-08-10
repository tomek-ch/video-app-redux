import { useEffect } from "react";
import Video from "../types/video";
import getVideos from "../utils/vidsFromArray";

interface Args {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
}

function useLocalSync({ videos, setVideos }: Args) {
  useEffect(() => {
    const localData = localStorage.getItem("videos");
    const parsedData = localData ? JSON.parse(localData) : [];
    getVideos(parsedData).then(setVideos);
  }, [setVideos]);

  useEffect(() => {
    const vids = videos.map(({ id, favorite, timestamp }) => ({
      id,
      favorite,
      timestamp,
    }));
    const data = JSON.stringify(vids);
    localStorage.setItem("videos", data);
  }, [videos]);
}

export default useLocalSync;
