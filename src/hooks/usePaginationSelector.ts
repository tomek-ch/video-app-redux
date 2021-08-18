import { useSelector } from "react-redux";
import Store from "../types/store";
import Video from "../types/video";

function usePaginationSelector() {
  return useSelector<
    Store,
    {
      currentPageVideos: Video[];
      pageCount: number;
      currentPage: number;
    }
  >(({ videos, favFilter, sortByOldest, currentPage }) => {
    const filtered = favFilter
      ? videos.filter(({ favorite }) => favorite)
      : videos;

    const filteredAndSorted = sortByOldest
      ? [...filtered].sort((a, b) => a.timestamp - b.timestamp)
      : filtered;

    const VIDS_PER_PAGE = 6;
    const pageCount = Math.ceil(filteredAndSorted.length / VIDS_PER_PAGE);

    const currentPageVideos = filteredAndSorted.slice(
      currentPage * VIDS_PER_PAGE,
      currentPage * VIDS_PER_PAGE + VIDS_PER_PAGE
    );

    return { currentPage, currentPageVideos, pageCount };
  });
}

export default usePaginationSelector;
