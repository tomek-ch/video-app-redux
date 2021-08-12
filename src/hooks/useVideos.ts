import demoVideos from "../utils/demoVideos";
import getVideos from "../utils/vidsFromArray";
import useCrud from "./useCrud";
import useSort from "./useFilter";
import useLocalSync from "./useLocalSync";
import usePagination from "./usePagination";
import useFilter from "./useSort";
import useToggle from "./useToggle";

function useVideos() {
  // CRUD
  const { videos, setVideos, addVideo, removeVideo, toggleFavorite } =
    useCrud();

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
