import { useState } from "react";
import Video from "../types/video";
import demoVideos from "../utils/demoVideos";
import getVideos from "../utils/vidsFromArray";
import useCrud from "./useCrud";
import useSort from "./useFilter";
import useLocalSync from "./useLocalSync";
import usePagination from "./usePagination";
import useFilter from "./useSort";
import useToggle from "./useToggle";

function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  // Local sync
  useLocalSync({ videos, setVideos });

  // Sort
  const { filtered, favoritesOnly, toggleFavoritesOnly } = useSort(videos);

  // Filter
  const { sorted, oldestFirst, toggleOldestFirst } = useFilter(filtered);

  // Pagination
  const { pagesCount, currentPage, currentPageVideos, setCurrentPage } =
    usePagination(sorted);

  const toggleFavFilter = () => {
    toggleFavoritesOnly();
    setCurrentPage(0);
  };

  // CRUD
  const handleRemove = () => {
    // Go back a page if it's the last video
    // from the current page being deleted
    if (currentPageVideos.length === 1 && pagesCount > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const { addVideo, removeVideo, toggleFavorite } = useCrud({
    videos,
    setVideos,
    handleRemove,
  });

  // Wipe and load data

  const loadDemoData = async () => {
    const videos = await getVideos(demoVideos);
    setVideos(videos);
  };

  const wipeData = () => setVideos([]);

  // Layout

  const [isGrid, toggleGrid] = useToggle();

  return {
    videos: currentPageVideos,
    addVideo,
    removeVideo,
    toggleFavorite,

    loadDemoData,
    wipeData,

    favoritesOnly,
    toggleFavFilter,
    oldestFirst,
    toggleOldestFirst,

    pagesCount,
    setCurrentPage,
    currentPage,

    isGrid,
    toggleGrid,
  };
}

export default useVideos;
